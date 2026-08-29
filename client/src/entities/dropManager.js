/**
 * Drop Manager — Floating 3D item drops with bobbing, rotation, gravity, and magnetic pickup.
 * Includes hard cap (MAX_DROPS = 30) and memory cleanup to maintain 60 FPS on all CPUs.
 */

import * as THREE from 'three';
import { getPlayerPosition } from './player.js';
import { getHeight } from '../world/worldManager.js';
import { BlockType, BlockTextures } from '../world/blockTypes.js';
import { getUVsForTexture, getAtlasTexture } from '../rendering/textures/textureAtlas.js';
import { playPickupSound } from '../engine/soundFx.js';
import { addItemToInventory } from '../ui/inventory.js';

let scene = null;
const drops = [];
const itemGeometry = new THREE.BoxGeometry(0.26, 0.26, 0.26);
const MAX_DROPS = 30;

export function initDropManager(s) {
  scene = s;
}

export function spawnDrop(arg1, arg2, arg3, arg4) {
  if (!scene) return;

  let itemType, x, y, z;
  if (typeof arg1 === 'number' && typeof arg4 === 'number') {
    // Called as (x, y, z, itemType)
    x = arg1; y = arg2; z = arg3; itemType = arg4;
  } else {
    // Called as (itemType, x, y, z)
    itemType = arg1; x = arg2; y = arg3; z = arg4;
  }

  if (!itemType || itemType === BlockType.AIR) return;

  // Cap global drops to prevent frame drops
  if (drops.length >= MAX_DROPS) {
    const oldest = drops.shift();
    if (oldest && oldest.mesh) {
      scene.remove(oldest.mesh);
    }
  }

  const textures = BlockTextures[itemType] || { top: 0, side: 1, bottom: 2 };
  const uv = getUVsForTexture(textures.side || 0);

  const mat = new THREE.MeshLambertMaterial({
    map: getAtlasTexture(),
  });

  const mesh = new THREE.Mesh(itemGeometry, mat);
  mesh.position.set(x + (Math.random() - 0.5) * 0.2, y + 0.3, z + (Math.random() - 0.5) * 0.2);
  scene.add(mesh);

  drops.push({
    itemType,
    mesh,
    pos: mesh.position.clone(),
    vel: new THREE.Vector3(
      (Math.random() - 0.5) * 1.8,
      3.0,
      (Math.random() - 0.5) * 1.8
    ),
    age: 0,
    bobOffset: Math.random() * Math.PI * 2,
    collected: false,
  });
}

export function updateDrops(dt, time) {
  if (!scene) return;

  const playerPos = getPlayerPosition();
  const playerCenter = playerPos.clone().add(new THREE.Vector3(0, 0.9, 0));

  for (let i = drops.length - 1; i >= 0; i--) {
    const drop = drops[i];
    drop.age += dt;

    // Despawn if older than 120 seconds (2 mins)
    if (drop.age > 120) {
      scene.remove(drop.mesh);
      drops.splice(i, 1);
      continue;
    }

    const distToPlayer = drop.pos.distanceTo(playerCenter);

    if (distToPlayer < 2.5 && drop.age > 0.3) {
      // Magnetic pull towards player
      const pullSpeed = Math.min(14.0, 1.0 / (distToPlayer * 0.15 + 0.05));
      drop.pos.lerp(playerCenter, dt * pullSpeed);

      if (distToPlayer < 0.65) {
        // Collect into inventory!
        const added = addItemToInventory(drop.itemType);
        if (added) {
          playPickupSound();
          scene.remove(drop.mesh);
          drops.splice(i, 1);
          continue;
        }
      }
    } else {
      // Gravity & Ground collision
      drop.vel.y -= 18 * dt;
      drop.pos.x += drop.vel.x * dt;
      drop.pos.z += drop.vel.z * dt;
      drop.pos.y += drop.vel.y * dt;

      // Friction
      drop.vel.x *= Math.exp(-6 * dt);
      drop.vel.z *= Math.exp(-6 * dt);

      const groundY = getHeight(Math.floor(drop.pos.x), Math.floor(drop.pos.z)) + 1.15;
      if (drop.pos.y <= groundY) {
        drop.pos.y = groundY;
        drop.vel.set(0, 0, 0);
      }
    }

    // Visual Bobbing & Gentle Rotation
    drop.mesh.position.copy(drop.pos);
    drop.mesh.position.y += Math.sin(time * 3.5 + drop.bobOffset) * 0.06;
    drop.mesh.rotation.y += dt * 2.2;
    drop.mesh.rotation.x = Math.sin(time * 2.0 + drop.bobOffset) * 0.15;
  }
}
