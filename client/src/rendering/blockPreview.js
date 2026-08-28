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
function createSwordMesh(color = 0xdbeafe) {
  const group = new THREE.Group();

  // Blade
  const bladeMat = new THREE.MeshLambertMaterial({ color, depthTest: true });
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.48, 0.025), bladeMat);
  blade.position.set(0, 0.24, 0);
  group.add(blade);

  // Crossguard
  const guardMat = new THREE.MeshLambertMaterial({ color: 0x475569, depthTest: true });
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.035, 0.045), guardMat);
  guard.position.set(0, 0.02, 0);
  group.add(guard);

  // Handle
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x854d0e, depthTest: true });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.12, 0.038), handleMat);
  handle.position.set(0, -0.06, 0);
  group.add(handle);

  return group;
}

function createPickaxeMesh(headColor = 0x94a3b8) {
  const group = new THREE.Group();

  // Handle
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x854d0e, depthTest: true });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.50, 0.04), handleMat);
  handle.position.set(0, 0.10, 0);
  group.add(handle);

  // Head
  const headMat = new THREE.MeshLambertMaterial({ color: headColor, depthTest: true });
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.06, 0.05), headMat);
  head.position.set(0, 0.32, 0);
  group.add(head);

  return group;
}

function createHoeMesh(headColor = 0x94a3b8) {
  const group = new THREE.Group();

  // Handle
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x854d0e, depthTest: true });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.48, 0.04), handleMat);
  handle.position.set(0, 0.10, 0);
  group.add(handle);

  // Hoe head
  const headMat = new THREE.MeshLambertMaterial({ color: headColor, depthTest: true });
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.05), headMat);
  head.position.set(0.06, 0.32, 0);
  group.add(head);

  return group;
}

function createBowMesh() {
  const group = new THREE.Group();
  const woodMat = new THREE.MeshLambertMaterial({ color: 0x78350f, depthTest: true });
  const stringMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc, depthTest: true });

  const upperLim = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.26, 0.035), woodMat);
  upperLim.position.set(0.06, 0.14, 0);
  upperLim.rotation.z = -0.35;
  group.add(upperLim);

  const lowerLim = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.26, 0.035), woodMat);
  lowerLim.position.set(0.06, -0.14, 0);
  lowerLim.rotation.z = 0.35;
  group.add(lowerLim);

  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.10, 0.045), woodMat);
  grip.position.set(0.11, 0, 0);
  group.add(grip);

  const string = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.48, 0.012), stringMat);
  string.position.set(0, 0, 0);
  group.add(string);

  return group;
}

/**
 * Get a 3D preview mesh for any item or block.
 * @param {number} itemType
 * @param {number} size
 * @returns {THREE.Object3D|null}
 */
export function getBlockPreviewMesh(itemType, size = 0.22) {
  if (itemType === BlockType.IRON_SWORD) return createSwordMesh(0xdbeafe);
  if (itemType === BlockType.STONE_SWORD) return createSwordMesh(0x94a3b8);
  if (itemType === BlockType.WOODEN_SWORD) return createSwordMesh(0xb45309);

  if (itemType === BlockType.IRON_PICKAXE) return createPickaxeMesh(0xdbeafe);
  if (itemType === BlockType.STONE_PICKAXE) return createPickaxeMesh(0x64748b);
  if (itemType === BlockType.WOODEN_PICKAXE) return createPickaxeMesh(0xb45309);

  if (itemType === BlockType.IRON_HOE) return createHoeMesh(0xdbeafe);
  if (itemType === BlockType.STONE_HOE) return createHoeMesh(0x64748b);
  if (itemType === BlockType.WOODEN_HOE) return createHoeMesh(0xb45309);

  if (itemType === BlockType.BOW) return createBowMesh();

  if (itemType === BlockType.BREAD) {
    const mat = new THREE.MeshLambertMaterial({ color: 0xb45309, depthTest: true });
    return new THREE.Mesh(new THREE.BoxGeometry(size * 0.9, size * 0.45, size * 0.6), mat);
  }

  if (itemType === BlockType.WHEAT) {
    const mat = new THREE.MeshLambertMaterial({ color: 0xeab308, depthTest: true });
    return new THREE.Mesh(new THREE.BoxGeometry(size * 0.35, size * 0.9, size * 0.35), mat);
  }

  if (itemType === BlockType.PORKCHOP) {
    const mat = new THREE.MeshLambertMaterial({ color: 0xf472b6, depthTest: true });
    return new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.4, size * 0.8), mat);
  }

  if (itemType === BlockType.COOKED_PORKCHOP) {
    const mat = new THREE.MeshLambertMaterial({ color: 0x9a3412, depthTest: true });
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
