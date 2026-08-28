/**
 * Particles System — Spawns 3D micro-voxel debris and combat hit particles.
 */

import * as THREE from 'three';
import { BlockType } from '../world/blockTypes.js';

const BLOCK_COLORS = {
  [BlockType.GRASS]:         0x5a9e37,
  [BlockType.DIRT]:          0x8B6914,
  [BlockType.STONE]:         0x888888,
  [BlockType.SAND]:          0xe8d68a,
  [BlockType.SNOW]:          0xf0f0f0,
  [BlockType.WOOD_LOG]:      0x6b4226,
  [BlockType.LEAVES]:        0x3a7a20,
  [BlockType.COAL_ORE]:      0x444444,
  [BlockType.IRON_ORE]:      0xb8956a,
  [BlockType.WATER]:         0x3880d0,
  [BlockType.CACTUS]:        0x16a34a,
  [BlockType.WOOD_PLANKS]:   0xb45309,
  [BlockType.COBBLESTONE]:   0x64748b,
  [BlockType.FLOWER_RED]:    0xdc2626,
  [BlockType.FLOWER_YELLOW]: 0xeab308,
};

let scene = null;
const activeParticles = [];
const particleGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
const sparkGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);

export function initParticles(s) {
  scene = s;
}

export function spawnBlockBreakParticles(x, y, z, blockType) {
  if (!scene) return;

  const color = BLOCK_COLORS[blockType] || 0xaaaaaa;
  const count = 12;

  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(particleGeo, mat);

    mesh.position.set(
      x + 0.2 + Math.random() * 0.6,
      y + 0.2 + Math.random() * 0.6,
      z + 0.2 + Math.random() * 0.6
    );

    const vx = (Math.random() - 0.5) * 4.5;
    const vy = Math.random() * 4.0 + 1.5;
    const vz = (Math.random() - 0.5) * 4.5;

    const rx = (Math.random() - 0.5) * 10;
    const ry = (Math.random() - 0.5) * 10;

    scene.add(mesh);

    activeParticles.push({
      mesh,
      vx,
      vy,
      vz,
      rx,
      ry,
      life: 0.6 + Math.random() * 0.3,
      age: 0,
    });
  }
}

/**
 * Spawn combat hit sparks / blood particles.
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} color
 */
export function spawnHitParticles(x, y, z, color = 0xef4444) {
  if (!scene) return;

  const count = 8;
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(sparkGeo, mat);

    mesh.position.set(x, y, z);

    const vx = (Math.random() - 0.5) * 5.0;
    const vy = Math.random() * 3.5 + 1.0;
    const vz = (Math.random() - 0.5) * 5.0;

    scene.add(mesh);

    activeParticles.push({
      mesh,
      vx,
      vy,
      vz,
      rx: Math.random() * 10,
      ry: Math.random() * 10,
      life: 0.35 + Math.random() * 0.2,
      age: 0,
    });
  }
}

export function updateParticles(dt) {
  if (!scene) return;

  for (let i = activeParticles.length - 1; i >= 0; i--) {
    const p = activeParticles[i];
    p.age += dt;

    if (p.age >= p.life) {
      scene.remove(p.mesh);
      p.mesh.material.dispose();
      activeParticles.splice(i, 1);
      continue;
    }

    p.vy -= 18 * dt;

    p.mesh.position.x += p.vx * dt;
    p.mesh.position.y += p.vy * dt;
    p.mesh.position.z += p.vz * dt;

    p.mesh.rotation.x += p.rx * dt;
    p.mesh.rotation.y += p.ry * dt;

    const scale = Math.max(0.01, 1 - p.age / p.life);
    p.mesh.scale.set(scale, scale, scale);
  }
}
