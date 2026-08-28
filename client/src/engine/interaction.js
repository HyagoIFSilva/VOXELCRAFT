/**
 * Block Interaction & Combat — Progressive block breaking with durability & cracking stages,
 * block placing, weapon combat, floating drops, Crafting Table 3x3 activation, Furnace GUI, and Food eating.
 */

import * as THREE from 'three';
import { raycastVoxel } from './raycast.js';
import { setBlockAtWorld, getBlockAtWorld } from '../world/worldManager.js';
import { isPointerLocked, getCamera } from './camera.js';
import {
  playBlockBreakSound,
  playBlockPlaceSound,
  playSwordSwingSound,
  playBlockHitTickSound,
  playCraftSound,
} from './soundFx.js';
import { spawnBlockBreakParticles } from '../rendering/particles.js';
import { raycastMob, hitMob } from '../entities/mobManager.js';
import {
  BlockType,
  isPlaceableBlock,
  getBlockHardness,
  getMiningSpeed,
  getBlockDrop,
  isFood,
  getFoodNutrition,
} from '../world/blockTypes.js';
import { spawnDrop } from '../entities/dropManager.js';
import { openCraftingTable } from '../ui/crafting.js';
import { openFurnace } from '../ui/furnace.js';
import { isAnyWindowOpen } from '../ui/uiManager.js';
import { healPlayer } from '../entities/player.js';
import { removeItemFromHotbar } from '../ui/inventory.js';

let scene = null;
let highlightMesh = null;
let crackMesh = null;
let currentTarget = null;
let selectedBlockType = BlockType.WOODEN_SWORD;

// Progressive Breaking State
let isLeftMouseDown = false;
let isBreakingBlock = false;
let breakProgress = 0.0; // 0.0 to 1.0
let breakingBlockPos = { x: NaN, y: NaN, z: NaN };
let hitTickTimer = 0.0;

// Highlight selection box
const highlightGeo = new THREE.BoxGeometry(1.002, 1.002, 1.002);
const highlightEdges = new THREE.EdgesGeometry(highlightGeo);
const highlightMat = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2,
  transparent: true,
  opacity: 0.6,
});

// Cracking overlay box
const crackGeo = new THREE.BoxGeometry(1.006, 1.006, 1.006);
const crackMat = new THREE.MeshBasicMaterial({
  color: 0x1e1b4b,
  wireframe: true,
  transparent: true,
  opacity: 0.0,
});

export function initInteraction(s) {
  scene = s;

  highlightMesh = new THREE.LineSegments(highlightEdges, highlightMat);
  highlightMesh.visible = false;
  scene.add(highlightMesh);

  crackMesh = new THREE.Mesh(crackGeo, crackMat);
  crackMesh.visible = false;
  scene.add(crackMesh);

  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('blur', () => {
    isLeftMouseDown = false;
    isBreakingBlock = false;
    breakProgress = 0.0;
    if (crackMesh) crackMesh.visible = false;
  });
}

export function updateInteraction(dt = 0.016) {
  if (!isPointerLocked() || isAnyWindowOpen()) {
    highlightMesh.visible = false;
    crackMesh.visible = false;
    currentTarget = null;
    isBreakingBlock = false;
    isLeftMouseDown = false;
    breakProgress = 0.0;
    return;
  }

  const cam = getCamera();
  if (!cam) return;

  const dir = new THREE.Vector3(0, 0, -1);
  dir.applyQuaternion(cam.quaternion);

  const result = raycastVoxel(cam.position, dir);
  if (result) {
    currentTarget = result;
    highlightMesh.position.set(result.hit.x + 0.5, result.hit.y + 0.5, result.hit.z + 0.5);
    highlightMesh.visible = true;

    // Check if target changed during holding click
    if (
      result.hit.x !== breakingBlockPos.x ||
      result.hit.y !== breakingBlockPos.y ||
      result.hit.z !== breakingBlockPos.z
    ) {
      breakingBlockPos = { x: result.hit.x, y: result.hit.y, z: result.hit.z };
      breakProgress = 0.0;
    }

    // ── Progressive Mining Process ─────────────────────────
    if (isLeftMouseDown && isBreakingBlock) {
      const blockType = getBlockAtWorld(result.hit.x, result.hit.y, result.hit.z);

      if (blockType !== BlockType.AIR && blockType !== BlockType.WATER) {
        const hardness = getBlockHardness(blockType);
        const speed = getMiningSpeed(blockType, selectedBlockType);

        breakProgress += (dt * speed) / hardness;

        // Mining impact ticks & dust particles
        hitTickTimer += dt;
        if (hitTickTimer >= 0.22) {
          hitTickTimer = 0;
          playBlockHitTickSound(blockType);
          spawnBlockBreakParticles(result.hit.x, result.hit.y, result.hit.z, blockType);
        }

        // Cracking overlay visual
        crackMesh.position.set(result.hit.x + 0.5, result.hit.y + 0.5, result.hit.z + 0.5);
        crackMesh.visible = true;
        crackMat.opacity = THREE.MathUtils.clamp(breakProgress * 0.85, 0.15, 0.9);

        // Block Break Completed!
        if (breakProgress >= 1.0) {
          playBlockBreakSound(blockType);
          spawnBlockBreakParticles(result.hit.x, result.hit.y, result.hit.z, blockType);

          const dropItem = getBlockDrop(blockType);
          if (dropItem > 0) {
            spawnDrop(
              result.hit.x + 0.5,
              result.hit.y + 0.5,
              result.hit.z + 0.5,
              dropItem
            );
          }

          setBlockAtWorld(scene, result.hit.x, result.hit.y, result.hit.z, BlockType.AIR);

          breakProgress = 0.0;
          isBreakingBlock = false;
          crackMesh.visible = false;
        }
      }
    } else {
      crackMesh.visible = false;
      breakProgress = 0.0;
    }
  } else {
    currentTarget = null;
    highlightMesh.visible = false;
    crackMesh.visible = false;
    breakProgress = 0.0;
    isBreakingBlock = false;
  }
}

export function getCurrentTarget() {
  return currentTarget;
}

function onMouseDown(e) {
  if (!isPointerLocked() || isAnyWindowOpen()) return;

  const cam = getCamera();
  if (!cam) return;

  const dir = new THREE.Vector3(0, 0, -1);
  dir.applyQuaternion(cam.quaternion);

  if (e.button === 0) {
    isLeftMouseDown = true;

    // ── Attack Mob with Priority ───────────────────────────
    const targetMob = raycastMob(cam.position, dir, 3.8);
    if (targetMob) {
      const isIronSword = selectedBlockType === BlockType.IRON_SWORD;
      const isStoneSword = selectedBlockType === BlockType.STONE_SWORD;
      const isWoodSword = selectedBlockType === BlockType.WOODEN_SWORD;
      const isPick =
        selectedBlockType === BlockType.IRON_PICKAXE ||
        selectedBlockType === BlockType.STONE_PICKAXE ||
        selectedBlockType === BlockType.WOODEN_PICKAXE;

      const damageAmount = isIronSword ? 7 : isStoneSword ? 5 : isWoodSword ? 4 : isPick ? 3 : 2;

      playSwordSwingSound();
      hitMob(targetMob, damageAmount, dir);
      return;
    }

    // Start Mining Block
    if (currentTarget) {
      isBreakingBlock = true;
      breakingBlockPos = { x: currentTarget.hit.x, y: currentTarget.hit.y, z: currentTarget.hit.z };
    }
  } else if (e.button === 2) {
    // ── Right Click: Food / Crafting Table / Furnace / Place Block ───
    e.preventDefault();

    // 1. Eat food if holding food
    if (isFood(selectedBlockType)) {
      const nutrition = getFoodNutrition(selectedBlockType);
      if (nutrition > 0) {
        healPlayer(nutrition);
        playCraftSound();
        // Remove eaten food from hotbar
        removeItemFromHotbar(0); // sync with selected
        return;
      }
    }

    if (currentTarget) {
      const hitBlock = getBlockAtWorld(currentTarget.hit.x, currentTarget.hit.y, currentTarget.hit.z);

      // 2. Open Crafting Table 3×3 GUI
      if (hitBlock === BlockType.CRAFTING_TABLE) {
        openCraftingTable();
        return;
      }

      // 3. Open Furnace GUI
      if (hitBlock === BlockType.FURNACE || hitBlock === BlockType.FURNACE_LIT) {
        openFurnace(currentTarget.hit.x, currentTarget.hit.y, currentTarget.hit.z);
        return;
      }

      // 4. Place Block
      if (isPlaceableBlock(selectedBlockType)) {
        const { prev } = currentTarget;
        if (prev.y >= 0 && prev.y < 64) {
          const existing = getBlockAtWorld(prev.x, prev.y, prev.z);
          if (existing === BlockType.AIR) {
            playBlockPlaceSound();
            setBlockAtWorld(scene, prev.x, prev.y, prev.z, selectedBlockType);
          }
        }
      }
    }
  }
}

function onMouseUp(e) {
  if (e.button === 0) {
    isLeftMouseDown = false;
    isBreakingBlock = false;
    breakProgress = 0.0;
    if (crackMesh) crackMesh.visible = false;
  }
}

export function setSelectedBlockType(type) {
  selectedBlockType = type;
}

export function getSelectedBlockType() {
  return selectedBlockType;
}
