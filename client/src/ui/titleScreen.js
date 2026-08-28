/**
 * Title Screen & Menus — Main Menu, Pause Menu, Controls Guide, and Settings.
 */

import { isPointerLocked, getCamera } from '../engine/camera.js';
import { getSpawnPosition } from '../world/worldManager.js';
import { playJumpSound } from '../engine/soundFx.js';

export const AppState = {
  TITLE_SCREEN: 'title_screen',
  PLAYING:      'playing',
  PAUSED:       'paused',
};

let currentState = AppState.TITLE_SCREEN;
let titleScreenEl = null;
let pauseMenuEl = null;
let controlsModalEl = null;
let settingsModalEl = null;
let splashTextEl = null;
let canvasRef = null;

let orbitAngle = 0;

const SPLASH_TEXTS = [
  'Mundo infinito com Biomas!',
  'IA realista com Visão e Audição!',
  'Cuidado com a noite e os Zumbis!',
  '100% no navegador com WebGL!',
  'Zumbis queimam na luz do Sol!',
  'Construa, explore e sobreviva!',
  '60 FPS lisos com Voxel Engine!',
];

// User Settings
export const Settings = {
  fov: 75,
  sensitivity: 1.0,
  volume: 1.0,
  renderRadius: 5,
};

export function initTitleScreen(canvas) {
  canvasRef = canvas;

  titleScreenEl = document.getElementById('title-screen');
  pauseMenuEl = document.getElementById('pause-menu');
  controlsModalEl = document.getElementById('controls-modal');
  settingsModalEl = document.getElementById('settings-modal');
  splashTextEl = document.getElementById('splash-text');

  // Random splash text
  if (splashTextEl) {
    const randomSplash = SPLASH_TEXTS[Math.floor(Math.random() * SPLASH_TEXTS.length)];
    splashTextEl.textContent = randomSplash;
  }

  // ── Main Menu Buttons ────────────────────────────────────
  const playBtn = document.getElementById('btn-play');
  const controlsBtn = document.getElementById('btn-controls');
  const settingsBtn = document.getElementById('btn-settings');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playJumpSound();
      startGame();
    });
  }

  if (controlsBtn) {
    controlsBtn.addEventListener('click', () => {
      openModal(controlsModalEl);
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      openModal(settingsModalEl);
    });
  }

  // ── Pause Menu Buttons ───────────────────────────────────
  const resumeBtn = document.getElementById('btn-resume');
  const pauseControlsBtn = document.getElementById('btn-pause-controls');
  const pauseSettingsBtn = document.getElementById('btn-pause-settings');
  const quitBtn = document.getElementById('btn-quit-menu');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      resumeGame();
    });
  }

  if (pauseControlsBtn) {
    pauseControlsBtn.addEventListener('click', () => {
      openModal(controlsModalEl);
    });
  }

  if (pauseSettingsBtn) {
    pauseSettingsBtn.addEventListener('click', () => {
      openModal(settingsModalEl);
    });
  }

  if (quitBtn) {
    quitBtn.addEventListener('click', () => {
      returnToMainMenu();
    });
  }

  // ── Modal Close Buttons ──────────────────────────────────
  document.querySelectorAll('.modal-close-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-container');
      if (modal) modal.style.display = 'none';
    });
  });

  // ── Settings Sliders Bindings ────────────────────────────
  const fovInput = document.getElementById('setting-fov');
  const fovValue = document.getElementById('fov-val');
  if (fovInput && fovValue) {
    fovInput.addEventListener('input', (e) => {
      Settings.fov = parseInt(e.target.value, 10);
      fovValue.textContent = `${Settings.fov}°`;
      const cam = getCamera();
      if (cam) {
        cam.fov = Settings.fov;
        cam.updateProjectionMatrix();
      }
    });
  }

  const sensInput = document.getElementById('setting-sens');
  const sensValue = document.getElementById('sens-val');
  if (sensInput && sensValue) {
    sensInput.addEventListener('input', (e) => {
      Settings.sensitivity = parseFloat(e.target.value);
      sensValue.textContent = `${Settings.sensitivity.toFixed(1)}x`;
    });
  }

  // Pointer lock state changes
  document.addEventListener('pointerlockchange', () => {
    const isLocked = document.pointerLockElement === canvasRef;
    if (currentState === AppState.PLAYING && !isLocked) {
      // User pressed ESC during game -> open Pause menu
      pauseGame();
    }
  });

  // Press ESC to open/close pause or modals
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      if (controlsModalEl && controlsModalEl.style.display === 'flex') {
        controlsModalEl.style.display = 'none';
        return;
      }
      if (settingsModalEl && settingsModalEl.style.display === 'flex') {
        settingsModalEl.style.display = 'none';
        return;
      }

      if (currentState === AppState.PLAYING) {
        document.exitPointerLock();
        pauseGame();
      } else if (currentState === AppState.PAUSED) {
        resumeGame();
      }
    }
  });
}

function openModal(modalEl) {
  if (modalEl) {
    modalEl.style.display = 'flex';
  }
}

export function startGame() {
  currentState = AppState.PLAYING;
  if (titleScreenEl) titleScreenEl.style.display = 'none';
  if (pauseMenuEl) pauseMenuEl.style.display = 'none';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'block';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'block';

  if (canvasRef) {
    canvasRef.requestPointerLock();
  }
}

export function pauseGame() {
  if (currentState === AppState.TITLE_SCREEN) return;
  currentState = AppState.PAUSED;
  if (pauseMenuEl) pauseMenuEl.style.display = 'flex';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';
}

export function resumeGame() {
  currentState = AppState.PLAYING;
  if (pauseMenuEl) pauseMenuEl.style.display = 'none';
  if (controlsModalEl) controlsModalEl.style.display = 'none';
  if (settingsModalEl) settingsModalEl.style.display = 'none';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'block';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'block';

  if (canvasRef) {
    canvasRef.requestPointerLock();
  }
}

export function returnToMainMenu() {
  currentState = AppState.TITLE_SCREEN;
  if (pauseMenuEl) pauseMenuEl.style.display = 'none';
  if (controlsModalEl) controlsModalEl.style.display = 'none';
  if (settingsModalEl) settingsModalEl.style.display = 'none';
  if (titleScreenEl) titleScreenEl.style.display = 'flex';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';

  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
}

export function getAppState() {
  return currentState;
}

export function isTitleScreenActive() {
  return currentState === AppState.TITLE_SCREEN;
}

export function isGamePaused() {
  return currentState === AppState.PAUSED;
}

/**
 * Camera cinematic orbit panorama when on title screen.
 */
export function updateTitleCamera(dt, camera) {
  if (currentState !== AppState.TITLE_SCREEN || !camera) return;

  orbitAngle += dt * 0.12;
  const radius = 38;
  const spawn = getSpawnPosition();

  const camX = spawn.x + Math.cos(orbitAngle) * radius;
  const camZ = spawn.z + Math.sin(orbitAngle) * radius;
  const camY = spawn.y + 14 + Math.sin(orbitAngle * 0.5) * 3;

  camera.position.set(camX, camY, camZ);
  camera.lookAt(spawn.x, spawn.y + 4, spawn.z);
}
