/**
 * World Manager — Infinite procedural world generation with distinct biomes.
 *
 * Biomes:
 *  - Plains / Forest: Rolling green hills, lush grass, oak trees.
 *  - Desert: Smooth golden sand dunes, deep sand layers, sandstone.
 *  - Snowy Mountains: High jagged rocky peaks, snow caps, pine trees.
 *  - Beach & Ocean: Sand shores along sea level, deep water basins.
 *
 * Features continuous chunk loading/unloading centered on the player.
 */

import * as THREE from 'three';
import { Chunk, CHUNK_WIDTH, CHUNK_HEIGHT } from './chunk.js';
import { BlockType, isSolid as isSolidBlock } from './blockTypes.js';

const chunks = new Map();
const chunkMeshes = new Map();
const chunkWaterMeshes = new Map();

export const SEA_LEVEL = 18;
const RENDER_RADIUS = 5;  // Active chunk radius (11×11 chunks)
const UNLOAD_RADIUS = 7;  // Distance threshold to unload far chunks

let currentScene = null;
let lastPlayerChunkX = NaN;
let lastPlayerChunkZ = NaN;
const pendingBuildQueue = [];

// ── Deterministic Noise Functions ─────────────────────────

function hash2D(x, z) {
  let h = (x * 374761393 + z * 668265263 + 1234567) | 0;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return (h & 0x7fffffff) / 0x7fffffff;
}

function smoothNoise(x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;

  const wx = fx * fx * (3 - 2 * fx);
  const wz = fz * fz * (3 - 2 * fz);

  const h00 = hash2D(ix, iz);
  const h10 = hash2D(ix + 1, iz);
  const h01 = hash2D(ix, iz + 1);
  const h11 = hash2D(ix + 1, iz + 1);

  const top = h00 * (1 - wx) + h10 * wx;
  const bot = h01 * (1 - wx) + h11 * wx;
  return top * (1 - wz) + bot * wz;
}

function fractalNoise(x, z, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
  let total = 0;
  let frequency = 1;
  let amplitude = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    total += smoothNoise(x * frequency, z * frequency) * amplitude;
    maxValue += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }

  return total / maxValue;
}

// ── Biome Definitions & Evaluation ────────────────────────

export const Biome = {
  OCEAN: 'ocean',
  PLAINS: 'plains',
  FOREST: 'forest',
  DESERT: 'desert',
  SNOWY_MOUNTAINS: 'snowy_mountains',
};

/**
 * Evaluate climate and biome at world coordinate (wx, wz).
 */
export function getBiomeAt(wx, wz) {
  // Continentalness: Low = Ocean/Beach, High = Land/Mountains
  const continent = fractalNoise(wx * 0.0025, wz * 0.0025, 3);

  if (continent < 0.32) {
    return Biome.OCEAN;
  }

  // Temperature & Moisture evaluation
  const temp = fractalNoise(wx * 0.0035 + 150, wz * 0.0035 + 150, 3);
  const moisture = fractalNoise(wx * 0.004 + 300, wz * 0.004 + 300, 3);

  if (continent > 0.58 && temp < 0.38) {
    return Biome.SNOWY_MOUNTAINS;
  }

  if (temp > 0.62 && moisture < 0.48) {
    return Biome.DESERT;
  }

  if (moisture > 0.52) {
    return Biome.FOREST;
  }

  return Biome.PLAINS;
}

/**
 * Compute procedural terrain height at world coordinate (wx, wz).
 */
export function getHeight(wx, wz) {
  const biome = getBiomeAt(wx, wz);
  const detail = fractalNoise(wx * 0.025, wz * 0.025, 3);

  switch (biome) {
    case Biome.OCEAN: {
      // Shore gently sloping down below sea level
      const depth = fractalNoise(wx * 0.01, wz * 0.01, 2);
      const h = SEA_LEVEL - 2 - depth * 10 + detail * 3;
      return Math.max(3, Math.min(CHUNK_HEIGHT - 6, Math.floor(h)));
    }
    case Biome.DESERT: {
      // Rolling sand dunes
      const dune = Math.sin(wx * 0.03 + wz * 0.015) * 4 + Math.cos(wz * 0.03) * 3;
      const h = 21 + dune + detail * 2.5;
      return Math.max(SEA_LEVEL + 1, Math.min(CHUNK_HEIGHT - 6, Math.floor(h)));
    }
    case Biome.SNOWY_MOUNTAINS: {
      // High dramatic peaks
      const mountain = fractalNoise(wx * 0.015, wz * 0.015, 4);
      const h = 28 + Math.pow(mountain, 1.8) * 32 + detail * 4;
      return Math.max(24, Math.min(CHUNK_HEIGHT - 4, Math.floor(h)));
    }
    case Biome.FOREST: {
      // Rich rolling forest ridges
      const hill = Math.sin(wx * 0.022) * 5 + Math.cos(wz * 0.028) * 4 + Math.sin((wx - wz) * 0.035) * 2.5;
      const h = 23 + hill + detail * 3.0;
      return Math.max(SEA_LEVEL + 1, Math.min(CHUNK_HEIGHT - 6, Math.floor(h)));
    }
    case Biome.PLAINS:
    default: {
      // Gentle rolling green hills
      const hill = Math.sin(wx * 0.02) * 4 + Math.cos(wz * 0.025) * 4 + Math.sin((wx + wz) * 0.04) * 2;
      const h = 22 + hill + detail * 2.5;
      return Math.max(SEA_LEVEL + 1, Math.min(CHUNK_HEIGHT - 6, Math.floor(h)));
    }
  }
}

// ── Trees & Flora Generation ──────────────────────────────

function tryPlaceOakTree(chunk, lx, lz, trunkBase, trunkH) {
  // Trunk
  for (let y = trunkBase; y < trunkBase + trunkH; y++) {
    if (y < CHUNK_HEIGHT) chunk.setBlock(lx, y, lz, BlockType.WOOD_LOG);
  }

  // Canopy
  const leafBase = trunkBase + trunkH - 1;
  for (let dy = 0; dy < 3; dy++) {
    const r = dy < 2 ? 2 : 1;
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        if (Math.abs(dx) === r && Math.abs(dz) === r && dy < 2) continue;
        const px = lx + dx, py = leafBase + dy, pz = lz + dz;
        if (px >= 0 && px < CHUNK_WIDTH && py >= 0 && py < CHUNK_HEIGHT && pz >= 0 && pz < CHUNK_WIDTH) {
          if (chunk.getBlock(px, py, pz) === BlockType.AIR) {
            chunk.setBlock(px, py, pz, BlockType.LEAVES);
          }
        }
      }
    }
  }
}

function tryPlacePineTree(chunk, lx, lz, trunkBase, trunkH) {
  // Tall pine trunk
  for (let y = trunkBase; y < trunkBase + trunkH; y++) {
    if (y < CHUNK_HEIGHT) chunk.setBlock(lx, y, lz, BlockType.WOOD_LOG);
  }

  // Conical pine canopy
  const top = trunkBase + trunkH;
  for (let y = trunkBase + 2; y <= top + 1; y++) {
    const distFromTop = top + 1 - y;
    const r = distFromTop % 2 === 0 ? 2 : 1;
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        if (Math.abs(dx) === r && Math.abs(dz) === r && r > 1) continue;
        const px = lx + dx, py = y, pz = lz + dz;
        if (px >= 0 && px < CHUNK_WIDTH && py >= 0 && py < CHUNK_HEIGHT && pz >= 0 && pz < CHUNK_WIDTH) {
          if (chunk.getBlock(px, py, pz) === BlockType.AIR) {
            chunk.setBlock(px, py, pz, BlockType.LEAVES);
          }
        }
      }
    }
  }
}

function tryPlaceCactus(chunk, lx, lz, baseH, cactusH) {
  for (let y = baseH; y < baseH + cactusH; y++) {
    if (y < CHUNK_HEIGHT && chunk.getBlock(lx, y, lz) === BlockType.AIR) {
      chunk.setBlock(lx, y, lz, BlockType.CACTUS);
    }
  }
}

function tryPlaceFlower(chunk, lx, y, lz, flowerType) {
  if (lx >= 0 && lx < CHUNK_WIDTH && lz >= 0 && lz < CHUNK_WIDTH && y < CHUNK_HEIGHT) {
    if (chunk.getBlock(lx, y, lz) === BlockType.AIR) {
      chunk.setBlock(lx, y, lz, flowerType);
    }
  }
}

// ── Procedural Chunk Generation ───────────────────────────

function generateChunk(cx, cz) {
  const chunk = new Chunk(cx, 0, cz);
  const offX = cx * CHUNK_WIDTH;
  const offZ = cz * CHUNK_WIDTH;

  // 1. Terrain pass
  for (let z = 0; z < CHUNK_WIDTH; z++) {
    for (let x = 0; x < CHUNK_WIDTH; x++) {
      const wx = offX + x;
      const wz = offZ + z;
      const height = getHeight(wx, wz);
      const biome = getBiomeAt(wx, wz);

      for (let y = 0; y <= height; y++) {
        let block;

        if (y === 0) {
          block = BlockType.STONE; // Bedrock level
        } else if (y < height - 4) {
          block = BlockType.STONE;
        } else if (y < height) {
          // Sub-surface
          if (biome === Biome.DESERT || (biome === Biome.OCEAN && height <= SEA_LEVEL + 1)) {
            block = BlockType.SAND;
          } else {
            block = BlockType.DIRT;
          }
        } else {
          // Top Surface Block
          if (biome === Biome.DESERT) {
            block = BlockType.SAND;
          } else if (biome === Biome.SNOWY_MOUNTAINS) {
            block = height >= 36 ? BlockType.SNOW : BlockType.GRASS;
          } else if (biome === Biome.OCEAN || height <= SEA_LEVEL + 1) {
            block = BlockType.SAND;
          } else {
            block = BlockType.GRASS;
          }
        }
        chunk.setBlock(x, y, z, block);
      }

      // Water body filling up to sea level
      for (let y = height + 1; y <= SEA_LEVEL; y++) {
        if (chunk.getBlock(x, y, z) === BlockType.AIR) {
          chunk.setBlock(x, y, z, BlockType.WATER);
        }
      }
    }
  }

  // 2. Flora, Trees & Desert Cacti pass
  for (let z = 1; z < CHUNK_WIDTH - 1; z++) {
    for (let x = 1; x < CHUNK_WIDTH - 1; x++) {
      const wx = offX + x;
      const wz = offZ + z;
      const height = getHeight(wx, wz);
      const biome = getBiomeAt(wx, wz);
      const topBlock = chunk.getBlock(x, height, z);
      const noiseVal = hash2D(wx, wz);

      if (height > SEA_LEVEL) {
        if (biome === Biome.PLAINS && topBlock === BlockType.GRASS) {
          // Sparse oak trees
          if (noiseVal < 0.025 && x >= 2 && x < CHUNK_WIDTH - 2 && z >= 2 && z < CHUNK_WIDTH - 2) {
            const th = 4 + Math.floor(hash2D(wx + 555, wz + 777) * 3);
            if (height + th + 4 < CHUNK_HEIGHT) tryPlaceOakTree(chunk, x, z, height + 1, th);
          } else if (noiseVal > 0.94 && noiseVal < 0.97) {
            tryPlaceFlower(chunk, x, height + 1, z, BlockType.FLOWER_RED);
          } else if (noiseVal >= 0.97) {
            tryPlaceFlower(chunk, x, height + 1, z, BlockType.FLOWER_YELLOW);
          }
        } else if (biome === Biome.FOREST && topBlock === BlockType.GRASS) {
          // Dense forest trees
          if (noiseVal < 0.085 && x >= 2 && x < CHUNK_WIDTH - 2 && z >= 2 && z < CHUNK_WIDTH - 2) {
            const th = 4 + Math.floor(hash2D(wx + 444, wz + 666) * 4);
            if (height + th + 4 < CHUNK_HEIGHT) tryPlaceOakTree(chunk, x, z, height + 1, th);
          } else if (noiseVal > 0.96) {
            tryPlaceFlower(chunk, x, height + 1, z, BlockType.FLOWER_RED);
          }
        } else if (biome === Biome.DESERT && topBlock === BlockType.SAND) {
          // Cacti in desert
          if (noiseVal < 0.028) {
            const ch = 2 + (noiseVal > 0.015 ? 1 : 0);
            tryPlaceCactus(chunk, x, z, height + 1, ch);
          }
        } else if (biome === Biome.SNOWY_MOUNTAINS && (topBlock === BlockType.GRASS || topBlock === BlockType.SNOW)) {
          // Pine trees in snowy mountains
          if (noiseVal < 0.035 && x >= 2 && x < CHUNK_WIDTH - 2 && z >= 2 && z < CHUNK_WIDTH - 2) {
            const th = 5 + Math.floor(hash2D(wx + 333, wz + 888) * 4);
            if (height + th + 4 < CHUNK_HEIGHT) tryPlacePineTree(chunk, x, z, height + 1, th);
          }
        }
      }
    }
  }

  // 3. Subterranean Ore pass
  for (let z = 0; z < CHUNK_WIDTH; z++) {
    for (let x = 0; x < CHUNK_WIDTH; x++) {
      const wx = offX + x;
      const wz = offZ + z;
      const height = getHeight(wx, wz);

      for (let y = 1; y < height - 3; y++) {
        if (chunk.getBlock(x, y, z) === BlockType.STONE) {
          const r = hash2D(wx * 31 + y * 97, wz * 53 + y * 13);
          if (r < 0.018) {
            chunk.setBlock(x, y, z, BlockType.COAL_ORE);
          } else if (r > 0.982) {
            chunk.setBlock(x, y, z, BlockType.IRON_ORE);
          }
        }
      }
    }
  }

  return chunk;
}

// ── World API & Dynamic Loading ────────────────────────────

export function getBlockAtWorld(wx, wy, wz) {
  if (wy < 0 || wy >= CHUNK_HEIGHT) return BlockType.AIR;

  const cx = Math.floor(wx / CHUNK_WIDTH);
  const cz = Math.floor(wz / CHUNK_WIDTH);
  const key = `${cx},0,${cz}`;
  const chunk = chunks.get(key);

  if (chunk) {
    const lx = ((wx % CHUNK_WIDTH) + CHUNK_WIDTH) % CHUNK_WIDTH;
    const lz = ((wz % CHUNK_WIDTH) + CHUNK_WIDTH) % CHUNK_WIDTH;
    return chunk.getBlock(lx, wy, lz);
  }

  // If chunk not yet loaded, evaluate procedurally on-the-fly
  const height = getHeight(wx, wz);
  if (wy > height) {
    return wy <= SEA_LEVEL ? BlockType.WATER : BlockType.AIR;
  }
  if (wy === height) {
    const biome = getBiomeAt(wx, wz);
    if (biome === Biome.DESERT || height <= SEA_LEVEL + 1) return BlockType.SAND;
    if (biome === Biome.SNOWY_MOUNTAINS && height >= 36) return BlockType.SNOW;
    return BlockType.GRASS;
  }
  if (wy >= height - 4) {
    const biome = getBiomeAt(wx, wz);
    return biome === Biome.DESERT ? BlockType.SAND : BlockType.DIRT;
  }
  return BlockType.STONE;
}

export function isWorldBlockSolid(wx, wy, wz) {
  return isSolidBlock(getBlockAtWorld(wx, wy, wz));
}

function buildChunkMesh(chunk, scene) {
  const key = `${chunk.cx},0,${chunk.cz}`;

  // Dispose old mesh if present
  const oldSolid = chunkMeshes.get(key);
  const oldWater = chunkWaterMeshes.get(key);
  if (oldSolid) { scene.remove(oldSolid); oldSolid.geometry.dispose(); }
  if (oldWater) { scene.remove(oldWater); oldWater.geometry.dispose(); }

  const { solidMesh, waterMesh } = chunk.buildMesh(getBlockAtWorld);
  chunkMeshes.set(key, solidMesh);
  scene.add(solidMesh);

  if (waterMesh) {
    chunkWaterMeshes.set(key, waterMesh);
    scene.add(waterMesh);
  }
}

/**
 * Initial world generation around spawn.
 * @param {THREE.Scene} scene
 */
export function generateWorld(scene) {
  currentScene = scene;
  console.log(`[World] Generating starting biomes and chunks...`);

  for (let cz = -RENDER_RADIUS; cz <= RENDER_RADIUS; cz++) {
    for (let cx = -RENDER_RADIUS; cx <= RENDER_RADIUS; cx++) {
      const chunk = generateChunk(cx, cz);
      chunks.set(`${cx},0,${cz}`, chunk);
    }
  }

  for (const chunk of chunks.values()) {
    buildChunkMesh(chunk, scene);
  }

  console.log(`[World] Ready! ${chunks.size} chunks generated.`);
}

/**
 * Continuous infinite world update: loads and unloads chunks based on player movement.
 * @param {THREE.Vector3} playerPos
 * @param {THREE.Scene} scene
 */
export function updateWorld(playerPos, scene) {
  if (!scene) return;
  currentScene = scene;

  const pcx = Math.floor(playerPos.x / CHUNK_WIDTH);
  const pcz = Math.floor(playerPos.z / CHUNK_WIDTH);

  // Check if player entered a new chunk or queue is running
  if (pcx !== lastPlayerChunkX || pcz !== lastPlayerChunkZ) {
    lastPlayerChunkX = pcx;
    lastPlayerChunkZ = pcz;

    // 1. Unload far chunks beyond UNLOAD_RADIUS
    for (const [key, chunk] of chunks.entries()) {
      const dist = Math.max(Math.abs(chunk.cx - pcx), Math.abs(chunk.cz - pcz));
      if (dist > UNLOAD_RADIUS) {
        const solidMesh = chunkMeshes.get(key);
        const waterMesh = chunkWaterMeshes.get(key);
        if (solidMesh) { scene.remove(solidMesh); solidMesh.geometry.dispose(); chunkMeshes.delete(key); }
        if (waterMesh) { scene.remove(waterMesh); waterMesh.geometry.dispose(); chunkWaterMeshes.delete(key); }
        chunk.dispose();
        chunks.delete(key);
      }
    }

    // 2. Identify missing chunks to generate within RENDER_RADIUS
    for (let dz = -RENDER_RADIUS; dz <= RENDER_RADIUS; dz++) {
      for (let dx = -RENDER_RADIUS; dx <= RENDER_RADIUS; dx++) {
        const cx = pcx + dx;
        const cz = pcz + dz;
        const key = `${cx},0,${cz}`;

        if (!chunks.has(key)) {
          const chunk = generateChunk(cx, cz);
          chunks.set(key, chunk);
          pendingBuildQueue.push(chunk);
        }
      }
    }
  }

  // 3. Incrementally mesh up to 2 pending chunks per frame to keep 60 FPS buttery smooth
  const batchCount = Math.min(2, pendingBuildQueue.length);
  for (let i = 0; i < batchCount; i++) {
    const chunk = pendingBuildQueue.shift();
    if (chunks.has(`${chunk.cx},0,${chunk.cz}`)) {
      buildChunkMesh(chunk, scene);
    }
  }
}

/**
 * Get initial spawn position in plains.
 */
export function getSpawnPosition() {
  const height = getHeight(0, 0);
  return { x: 0.5, y: height + 2, z: 0.5 };
}

export function setBlockAtWorld(scene, wx, wy, wz, type) {
  if (wy < 0 || wy >= CHUNK_HEIGHT) return;

  const cx = Math.floor(wx / CHUNK_WIDTH);
  const cz = Math.floor(wz / CHUNK_WIDTH);
  const key = `${cx},0,${cz}`;
  const chunk = chunks.get(key);
  if (!chunk) return;

  const lx = ((wx % CHUNK_WIDTH) + CHUNK_WIDTH) % CHUNK_WIDTH;
  const lz = ((wz % CHUNK_WIDTH) + CHUNK_WIDTH) % CHUNK_WIDTH;
  chunk.setBlock(lx, wy, lz, type);

  buildChunkMesh(chunk, scene);

  // Border neighbor chunk updates
  if (lx === 0)                  updateNeighborChunk(scene, cx - 1, cz);
  if (lx === CHUNK_WIDTH - 1)    updateNeighborChunk(scene, cx + 1, cz);
  if (lz === 0)                  updateNeighborChunk(scene, cx, cz - 1);
  if (lz === CHUNK_WIDTH - 1)    updateNeighborChunk(scene, cx, cz + 1);
}

function updateNeighborChunk(scene, cx, cz) {
  const chunk = chunks.get(`${cx},0,${cz}`);
  if (chunk) buildChunkMesh(chunk, scene);
}
