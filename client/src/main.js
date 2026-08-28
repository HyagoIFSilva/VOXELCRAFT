/**
 * VoxelCraft — Main Entry Point
 *
 * Initializes all subsystems: texture atlas → renderer → scene → camera → world → mobs → inventory → game loop.
 */

import { init as initInput } from './engine/input.js';
import { createCamera, initPointerLock, getCamera } from './engine/camera.js';
import { start as startLoop } from './engine/loop.js';
import { createRenderer, createScene, render, getCanvas, setupCameraResize, getLights } from './rendering/sceneSetup.js';
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
import { initDayNightCycle, updateDayNightCycle } from './world/dayNightCycle.js';
import { initTitleScreen, isTitleScreenActive, isGamePaused, updateTitleCamera } from './ui/titleScreen.js';

// ── Bootstrap ──────────────────────────────────────────────

// 1. Input
initInput(document);

// 2. Build texture atlas BEFORE creating any chunks
console.log('[VoxelCraft] Building texture atlas...');
buildAtlas();

// 3. Renderer + Scene
const renderer = createRenderer();
const scene = createScene();

// 4. Day & Night Celestial Cycle & Atmosphere
initDayNightCycle(scene, getLights());

// 5. Particles
initParticles(scene);

// 6. World (generates initial biomes)
console.log('[VoxelCraft] Generating world biomes...');
generateWorld(scene);

// 7. Camera — spawn above terrain center
const spawn = getSpawnPosition();
const camera = createCamera(window.innerWidth / window.innerHeight, spawn);
scene.add(camera);
setupCameraResize(camera);
initPointerLock(getCanvas());

// 8. Title Screen & Menus
initTitleScreen(getCanvas());

// 9. Mobs (Pacíficos e Hostis)
initMobManager(scene);
spawnMob(MobType.PIG, spawn.x + 4, spawn.y, spawn.z + 4);
spawnMob(MobType.PIG, spawn.x - 4, spawn.y, spawn.z + 5);
spawnMob(MobType.ZOMBIE, spawn.x + 14, spawn.y, spawn.z + 12);

// 10. Block interaction & Combat
initInteraction(scene);

// 11. Inventory & Hotbar UI
initInventory();
initHotbar();

// 12. Player physics + health
initPlayer();
initHealthHud();

// 13. First-person hand & weapons (attached to camera)
initHand();

console.log(`[VoxelCraft] Ready! Spawn at (${spawn.x}, ${spawn.y}, ${spawn.z})`);

// ── Game Loop ──────────────────────────────────────────────

function update(dt, time) {
  if (isTitleScreenActive()) {
    updateTitleCamera(dt, camera);
    updateWorld(camera.position, scene);
    updateDayNightCycle(dt, scene, camera, renderer);
    return;
  }

  if (isGamePaused()) {
    return;
  }

  // Active Gameplay Update
  updatePlayer(dt);
  updateWorld(camera.position, scene);
  updateDayNightCycle(dt, scene, camera, renderer);
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

