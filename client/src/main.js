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
import { initPlayer, updatePlayer, getPlayerPosition } from './entities/player.js';
import { initMobManager, updateMobs, spawnMob, MobType } from './entities/mobManager.js';
import { initHealthHud, updateHealthHud } from './ui/health.js';
import { initHand, updateHand } from './entities/hand.js';
import { initParticles, updateParticles } from './rendering/particles.js';
import { initDayNightCycle, updateDayNightCycle } from './world/dayNightCycle.js';
import { initTitleScreen } from './ui/titleScreen.js';
import { isTitleScreenActive, isGamePaused } from './ui/uiManager.js';
import { initDropManager, updateDrops } from './entities/dropManager.js';
import { initCraftingTable } from './ui/crafting.js';
import { updateFurnaces } from './ui/furnace.js';
import { initWeather, updateWeather } from './world/weather.js';
import { saveWorld, loadWorld } from './engine/saveManager.js';

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

// 5. Weather & Rain
initWeather(scene);

// 6. Particles & Drops
initParticles(scene);
initDropManager(scene);

// 7. World (generates initial biomes and 3D caves)
console.log('[VoxelCraft] Generating world biomes & 3D caves...');
generateWorld(scene);

// 8. Camera — spawn above terrain center
const spawn = getSpawnPosition();
const camera = createCamera(window.innerWidth / window.innerHeight, spawn);
scene.add(camera);
setupCameraResize(camera);
initPointerLock(getCanvas());

// 9. Title Screen & Central UI Manager
initTitleScreen(getCanvas());

// 10. Mobs (Pacíficos e Hostis: Porco, Zumbi, Esqueleto, Aranha e Creeper)
initMobManager(scene);
spawnMob(MobType.PIG, spawn.x + 4, spawn.y, spawn.z + 4);
spawnMob(MobType.ZOMBIE, spawn.x + 14, spawn.y, spawn.z + 12);
spawnMob(MobType.SKELETON, spawn.x - 12, spawn.y, spawn.z + 10);
spawnMob(MobType.SPIDER, spawn.x + 8, spawn.y, spawn.z - 14);
spawnMob(MobType.CREEPER, spawn.x - 8, spawn.y, spawn.z - 12);

// 11. Block interaction & Combat
initInteraction(scene);

// 12. Inventory, Crafting Table & Hotbar UI
initInventory();
initCraftingTable();
initHotbar();

// 13. Player physics + health
initPlayer();
initHealthHud();

// 14. First-person hand & weapons (attached to camera)
initHand();

// Load saved data if available
loadWorld();

console.log(`[VoxelCraft v0.4.0] Ready! Spawn at (${spawn.x}, ${spawn.y}, ${spawn.z})`);

// ── Game Loop ──────────────────────────────────────────────

let autoSaveTimer = 0;

function update(dt, time) {
  if (isTitleScreenActive()) {
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
  updateWeather(dt, getPlayerPosition());
  updateFurnaces(dt);
  updateMobs(dt);
  updateDrops(dt, time);
  updateParticles(dt);
  updateInteraction(dt);
  updateHotbar();
  updateHealthHud();
  updateHand(dt, time);
  updateHud(dt, { position: camera.position });

  // Auto-save every 30s
  autoSaveTimer += dt;
  if (autoSaveTimer >= 30.0) {
    autoSaveTimer = 0;
    saveWorld();
  }
}

function renderFrame() {
  render(camera);
}

startLoop(update, renderFrame);
