/**
 * VoxelCraft — Main Entry Point
 *
 * Initializes all subsystems: texture atlas → renderer → scene → camera → world → mobs → inventory → game loop.
 */

import { init as initInput } from './engine/input.js';
import { createCamera, initPointerLock, getCamera } from './engine/camera.js';
import { start as startLoop } from './engine/loop.js';
import { createRenderer, createScene, render, getCanvas, setupCameraResize } from './rendering/sceneSetup.js';
import { buildAtlas } from './rendering/textures/textureAtlas.js';
import { generateWorld, updateWorld, getSpawnPosition } from './world/worldManager.js';
import { update as updateHud } from './ui/hud.js';
import { initHotbar, updateHotbar } from './ui/hotbar.js';
import { initInventory } from './ui/inventory.js';
import { initInteraction, updateInteraction } from './engine/interaction.js';
import { initPlayer, updatePlayer } from './entities/player.js';
import { initMobManager, updateMobs, spawnMob, MobType } from './entities/mobManager.js';
import { initHealthHud, updateHealthHud } from './ui/health.js';
import { initHand, updateHand } from './entities/hand.js';
import { initParticles, updateParticles } from './rendering/particles.js';

// ── Bootstrap ──────────────────────────────────────────────

// 1. Input
initInput(document);

// 2. Build texture atlas BEFORE creating any chunks
console.log('[VoxelCraft] Building texture atlas...');
buildAtlas();

// 3. Renderer + Scene
const renderer = createRenderer();
const scene = createScene();

// 4. Particles
initParticles(scene);

// 5. World (generates chunks that need the atlas)
console.log('[VoxelCraft] Generating world biomes...');
generateWorld(scene);

// 6. Camera — spawn above terrain center
const spawn = getSpawnPosition();
const camera = createCamera(window.innerWidth / window.innerHeight, spawn);
scene.add(camera);
setupCameraResize(camera);
initPointerLock(getCanvas());

// 7. Mobs (Pacíficos e Hostis)
initMobManager(scene);
spawnMob(MobType.PIG, spawn.x + 3, spawn.y, spawn.z + 4);
spawnMob(MobType.PIG, spawn.x - 4, spawn.y, spawn.z + 5);
spawnMob(MobType.ZOMBIE, spawn.x + 12, spawn.y, spawn.z + 10);

// 8. Block interaction & Combat
initInteraction(scene);

// 9. Inventory & Hotbar UI
initInventory();
initHotbar();

// 10. Player physics + health
initPlayer();
initHealthHud();

// 11. First-person hand & weapons (attached to camera)
initHand();

console.log(`[VoxelCraft] Ready! Spawn at (${spawn.x}, ${spawn.y}, ${spawn.z})`);

// ── Game Loop ──────────────────────────────────────────────

function update(dt, time) {
  updatePlayer(dt);
  updateWorld(camera.position, scene);
  updateMobs(dt);
  updateParticles(dt);
  updateInteraction();
  updateHotbar();
  updateHealthHud();
  updateHand(dt, time);
  updateHud(dt, { position: camera.position });
}

function renderFrame() {
  render(camera);
}

startLoop(update, renderFrame);
