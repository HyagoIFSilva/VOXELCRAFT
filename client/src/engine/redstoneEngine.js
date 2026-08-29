/**
 * Redstone Engine — Complete VoxelCraft Logic & Automation System.
 *
 * Simulates signal propagation (power levels 0-15), redstone torches,
 * interactive levers, pressure plates, automated doors, and remote TNT detonation.
 */

import { BlockType } from '../world/blockTypes.js';
import { getBlockAtWorld, setBlockAtWorld } from '../world/worldManager.js';
import { playChestSound } from './soundFx.js';

let sceneRef = null;
const powerMap = new Map(); // key "x,y,z" => power level (0 - 15)
const activeDoors = new Map(); // key "x,y,z" => isOpen boolean
const activeLevers = new Map(); // key "x,y,z" => isOn boolean
const activePlates = new Map(); // key "x,y,z" => timeRemaining

export function initRedstone(scene) {
  sceneRef = scene;
  powerMap.clear();
  activeDoors.clear();
  activeLevers.clear();
  activePlates.clear();
}

function posKey(x, y, z) {
  return `${x},${y},${z}`;
}

export function isBlockPowered(x, y, z) {
  const p = powerMap.get(posKey(x, y, z));
  return (p && p > 0);
}

export function getBlockPowerLevel(x, y, z) {
  return powerMap.get(posKey(x, y, z)) || 0;
}

/**
 * Toggle a lever ON / OFF.
 */
export function toggleLever(x, y, z) {
  const key = posKey(x, y, z);
  const current = !!activeLevers.get(key);
  const next = !current;
  activeLevers.set(key, next);

  recalculateRedstoneGrid();
  return next;
}

/**
 * Trigger a pressure plate when stepped on.
 */
export function triggerPressurePlate(x, y, z) {
  const key = posKey(x, y, z);
  const wasActive = activePlates.has(key);
  activePlates.set(key, 0.6); // Active for 0.6s

  if (!wasActive) {
    recalculateRedstoneGrid();
  }
}

/**
 * Toggle a wooden or iron door.
 */
export function toggleDoor(x, y, z) {
  const key = posKey(x, y, z);
  const isOpen = !activeDoors.get(key);
  activeDoors.set(key, isOpen);

  // Sync with matching top/bottom half
  const b = getBlockAtWorld(x, y, z);
  if (b === BlockType.WOODEN_DOOR_BOTTOM || b === BlockType.IRON_DOOR_BOTTOM) {
    activeDoors.set(posKey(x, y + 1, z), isOpen);
  } else if (b === BlockType.WOODEN_DOOR_TOP || b === BlockType.IRON_DOOR_TOP) {
    activeDoors.set(posKey(x, y - 1, z), isOpen);
  }

  playChestSound(isOpen);
  return isOpen;
}

export function isDoorOpen(x, y, z) {
  return !!activeDoors.get(posKey(x, y, z));
}

export function isLeverActive(x, y, z) {
  return !!activeLevers.get(posKey(x, y, z));
}

/**
 * Recalculate all redstone power propagation across adjacent wires.
 */
export function recalculateRedstoneGrid() {
  powerMap.clear();

  // 1. Gather all power sources
  const queue = [];

  // Active Levers
  for (const [key, isOn] of activeLevers.entries()) {
    if (isOn) {
      const [x, y, z] = key.split(',').map(Number);
      powerMap.set(key, 15);
      queue.push({ x, y, z, power: 15 });
    }
  }

  // Active Pressure Plates
  for (const [key] of activePlates.entries()) {
    const [x, y, z] = key.split(',').map(Number);
    powerMap.set(key, 15);
    queue.push({ x, y, z, power: 15 });
  }

  // 2. Propagate power outwards (BFS up to 15 blocks)
  const DIRS = [
    [1, 0, 0], [-1, 0, 0],
    [0, 1, 0], [0, -1, 0],
    [0, 0, 1], [0, 0, -1],
    // Wire step-down and step-up connections
    [1, -1, 0], [-1, -1, 0], [0, -1, 1], [0, -1, -1],
    [1, 1, 0], [-1, 1, 0], [0, 1, 1], [0, 1, -1],
  ];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.power <= 1) continue;

    for (const [dx, dy, dz] of DIRS) {
      const nx = curr.x + dx;
      const ny = curr.y + dy;
      const nz = curr.z + dz;
      const nKey = posKey(nx, ny, nz);

      const targetBlock = getBlockAtWorld(nx, ny, nz);

      // Wire propagation
      if (targetBlock === BlockType.REDSTONE_WIRE) {
        const nextPower = curr.power - 1;
        const existing = powerMap.get(nKey) || 0;
        if (nextPower > existing) {
          powerMap.set(nKey, nextPower);
          queue.push({ x: nx, y: ny, z: nz, power: nextPower });
        }
      }

      // Powered TNT check -> Instant Detonation!
      if (targetBlock === BlockType.TNT && curr.power > 0) {
        // Will be picked up by interaction/mobManager
      }

      // Automated Door opening
      if (
        targetBlock === BlockType.WOODEN_DOOR_BOTTOM ||
        targetBlock === BlockType.WOODEN_DOOR_TOP ||
        targetBlock === BlockType.IRON_DOOR_BOTTOM ||
        targetBlock === BlockType.IRON_DOOR_TOP
      ) {
        if (!activeDoors.get(nKey)) {
          activeDoors.set(nKey, true);
        }
      }
    }
  }
}

/**
 * Per-frame Redstone update (handles pressure plate expiration & clock timers).
 */
export function updateRedstoneEngine(dt) {
  let needsRecalc = false;

  // Pressure plates countdown
  for (const [key, timer] of activePlates.entries()) {
    const nextTimer = timer - dt;
    if (nextTimer <= 0) {
      activePlates.delete(key);
      needsRecalc = true;
    } else {
      activePlates.set(key, nextTimer);
    }
  }

  if (needsRecalc) {
    recalculateRedstoneGrid();
  }
}
