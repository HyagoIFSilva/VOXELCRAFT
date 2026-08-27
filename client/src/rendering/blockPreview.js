/**
 * Block & Item Preview — builds 3D models for held blocks and weapons.
 */

import * as THREE from 'three';
import { BlockType, BlockTextures } from '../world/blockTypes.js';
import { getUVsForTexture, getAtlasTexture } from '../rendering/textures/textureAtlas.js';

const meshCache = new Map();

/**
 * Create a 3D Iron Sword mesh.
 */
function createSwordMesh() {
  const group = new THREE.Group();

  // Blade (shiny steel with center ridge)
  const bladeMat = new THREE.MeshLambertMaterial({ color: 0xdbeafe, depthTest: true });
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.48, 0.025), bladeMat);
  blade.position.set(0, 0.24, 0);
  group.add(blade);

  // Crossguard (metal guard)
  const guardMat = new THREE.MeshLambertMaterial({ color: 0x475569, depthTest: true });
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.035, 0.045), guardMat);
  guard.position.set(0, 0.02, 0);
  group.add(guard);

  // Handle (leather/wood grip)
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x854d0e, depthTest: true });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.12, 0.038), handleMat);
  handle.position.set(0, -0.06, 0);
  group.add(handle);

  // Pommel (metal bottom)
  const pommel = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.03, 0.045), guardMat);
  pommel.position.set(0, -0.13, 0);
  group.add(pommel);

  return group;
}

/**
 * Create a 3D Pickaxe mesh.
 */
function createPickaxeMesh() {
  const group = new THREE.Group();

  // Handle
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x854d0e, depthTest: true });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.50, 0.04), handleMat);
  handle.position.set(0, 0.10, 0);
  group.add(handle);

  // Head (curved pick)
  const headMat = new THREE.MeshLambertMaterial({ color: 0x94a3b8, depthTest: true });
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.06, 0.05), headMat);
  head.position.set(0, 0.32, 0);
  group.add(head);

  return group;
}

/**
 * Get a 3D preview mesh for any item or block.
 * @param {number} itemType
 * @param {number} size
 * @returns {THREE.Object3D|null}
 */
export function getBlockPreviewMesh(itemType, size = 0.22) {
  if (itemType === BlockType.IRON_SWORD) {
    return createSwordMesh();
  }

  if (itemType === BlockType.IRON_PICKAXE) {
    return createPickaxeMesh();
  }

  if (itemType === BlockType.PORKCHOP) {
    const mat = new THREE.MeshLambertMaterial({ color: 0xf472b6, depthTest: true });
    return new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.4, size * 0.8), mat);
  }

  if (itemType === BlockType.ROTTEN_FLESH) {
    const mat = new THREE.MeshLambertMaterial({ color: 0x84cc16, depthTest: true });
    return new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.4, size * 0.8), mat);
  }

  const key = `${itemType}:${size}`;
  if (meshCache.has(key)) return meshCache.get(key);

  const textures = BlockTextures[itemType];
  if (!textures) return null;

  const geometry = new THREE.BoxGeometry(size, size, size);
  const uv = geometry.attributes.uv.array;

  const texPerFace = [
    textures.side,
    textures.side,
    textures.top,
    textures.bottom,
    textures.side,
    textures.side,
  ];

  for (let f = 0; f < 6; f++) {
    const auv = getUVsForTexture(texPerFace[f]);
    const o = f * 8;
    uv[o]     = auv.uMin; uv[o + 1] = auv.vMax;
    uv[o + 2] = auv.uMax; uv[o + 3] = auv.vMax;
    uv[o + 4] = auv.uMin; uv[o + 5] = auv.vMin;
    uv[o + 6] = auv.uMax; uv[o + 7] = auv.vMin;
  }
  geometry.attributes.uv.needsUpdate = true;
  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    map: getAtlasTexture(),
    depthTest: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  meshCache.set(key, mesh);
  return mesh;
}
