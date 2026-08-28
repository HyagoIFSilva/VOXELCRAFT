/**
 * Title Screen & Main Menu Manager — Controls startup menu, options, pause overlay, and pointers.
 */

import { playJumpSound } from '../engine/soundFx.js';
import {
  GameState,
  UIWindow,
  setGameState,
  getGameState,
  openWindow,
  closeWindow,
  closeAllWindows,
  isAnyWindowOpen,
  initUIManager,
} from './uiManager.js';

let titleScreenEl = null;
let pauseMenuEl = null;
let controlsModalEl = null;
let settingsModalEl = null;
let canvasRef = null;
let wasPointerLocked = false;

// Settings state
export const Settings = {
  renderDistance: 5,
  fov: 75,
  mouseSensitivity: 1.0,
  musicVolume: 80,
};

let currentSettings = Settings;

export function initTitleScreen(canvas) {
  canvasRef = canvas || document.querySelector('canvas');
  initUIManager(canvasRef);

  titleScreenEl = document.getElementById('title-screen');
  pauseMenuEl = document.getElementById('pause-menu');
  controlsModalEl = document.getElementById('modal-controls');
  settingsModalEl = document.getElementById('modal-settings');

  // Expose on window for direct HTML onclick fallback
  window.startGame = startGame;
  window.resumeGame = resumeGame;
  window.returnToMainMenu = returnToMainMenu;
  window.openControls = () => openModal(controlsModalEl);
  window.openSettings = () => openModal(settingsModalEl);

  // Splash texts
  const splashes = [
    'Cavernas 3D & Entradas Naturais!',
    'Fornalha e Fundição de Ferro!',
    'Armaduras, Esqueletos e Aranhas!',
    'Mundo infinito com Biomas!',
    'Construa e explore em 60 FPS!',
    'Receitas reais de sobrevivência!',
  ];
  const splashEl = document.getElementById('splash-text');
  if (splashEl) {
    splashEl.textContent = splashes[Math.floor(Math.random() * splashes.length)];
  }

  // ── Button Listeners ─────────────────────────────────────

  const playBtn = document.getElementById('btn-play');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      try { playJumpSound(); } catch (err) {}
      startGame();
    });
  }

  const controlsBtn = document.getElementById('btn-controls');
  if (controlsBtn) {
    controlsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(controlsModalEl);
    });
  }

  const settingsBtn = document.getElementById('btn-settings');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(settingsModalEl);
    });
  }

  // Close modals
  const closeControlsBtn = document.getElementById('btn-close-controls');
  if (closeControlsBtn) {
    closeControlsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (controlsModalEl) controlsModalEl.style.display = 'none';
      closeWindow(UIWindow.CONTROLS);
    });
  }

  const closeSettingsBtn = document.getElementById('btn-close-settings');
  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (settingsModalEl) settingsModalEl.style.display = 'none';
      closeWindow(UIWindow.SETTINGS);
    });
  }

  // Pause menu buttons
  const resumeBtn = document.getElementById('btn-resume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resumeGame();
    });
  }

  const pauseControlsBtn = document.getElementById('btn-pause-controls');
  if (pauseControlsBtn) {
    pauseControlsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(controlsModalEl);
    });
  }

  const pauseSettingsBtn = document.getElementById('btn-pause-settings') || document.getElementById('btn-pause-options');
  if (pauseSettingsBtn) {
    pauseSettingsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(settingsModalEl);
    });
  }

  const quitMenuBtn = document.getElementById('btn-quit-menu') || document.getElementById('btn-exit-main');
  if (quitMenuBtn) {
    quitMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      returnToMainMenu();
    });
  }

  // Sliders
  const fovSlider = document.getElementById('setting-fov');
  const fovVal = document.getElementById('fov-val');
  if (fovSlider && fovVal) {
    fovSlider.addEventListener('input', (e) => {
      Settings.fov = parseInt(e.target.value, 10);
      fovVal.textContent = `${Settings.fov}°`;
    });
  }

  const distSlider = document.getElementById('setting-distance');
  const distVal = document.getElementById('distance-val');
  if (distSlider && distVal) {
    distSlider.addEventListener('input', (e) => {
      Settings.renderDistance = parseInt(e.target.value, 10);
      distVal.textContent = `${Settings.renderDistance} Chunks`;
    });
  }

  const sensSlider = document.getElementById('setting-sens');
  const sensVal = document.getElementById('sens-val');
  if (sensSlider && sensVal) {
    sensSlider.addEventListener('input', (e) => {
      Settings.mouseSensitivity = parseFloat(e.target.value);
      sensVal.textContent = `${Settings.mouseSensitivity.toFixed(1)}x`;
    });
  }

  // Pointer Lock Change Listener
  document.addEventListener('pointerlockchange', () => {
    const isLocked = document.pointerLockElement === (canvasRef || document.querySelector('canvas'));
    if (wasPointerLocked && !isLocked) {
      if (getGameState() === GameState.PLAYING && !isAnyWindowOpen()) {
        pauseGame();
      }
    }
    wasPointerLocked = isLocked;
  });

  // ESC Key Listener
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      if (controlsModalEl && controlsModalEl.style.display === 'flex') {
        controlsModalEl.style.display = 'none';
        closeWindow(UIWindow.CONTROLS);
        return;
      }
      if (settingsModalEl && settingsModalEl.style.display === 'flex') {
        settingsModalEl.style.display = 'none';
        closeWindow(UIWindow.SETTINGS);
        return;
      }
      if (isAnyWindowOpen()) {
        closeAllWindows();
        return;
      }

      if (getGameState() === GameState.PLAYING) {
        document.exitPointerLock();
        pauseGame();
      } else if (getGameState() === GameState.PAUSED) {
        resumeGame();
      }
    }
  });

  // Canvas click listener to re-lock cursor if clicking game screen
  const canvasTarget = canvasRef || document.querySelector('canvas');
  if (canvasTarget) {
    canvasTarget.addEventListener('click', () => {
      if (getGameState() === GameState.PLAYING && !isAnyWindowOpen()) {
        if (!document.pointerLockElement) {
          try { canvasTarget.requestPointerLock(); } catch (err) {}
        }
      }
    });
  }
}

function openModal(modalEl) {
  if (modalEl) {
    modalEl.style.display = 'flex';
    openWindow(modalEl === controlsModalEl ? UIWindow.CONTROLS : UIWindow.SETTINGS);
  }
}

export function startGame() {
  setGameState(GameState.PLAYING);

  const titleEl = document.getElementById('title-screen');
  if (titleEl) {
    titleEl.style.display = 'none';
    titleEl.style.pointerEvents = 'none';
    titleEl.style.visibility = 'hidden';
    titleEl.style.opacity = '0';
  }

  const pauseEl = document.getElementById('pause-menu');
  if (pauseEl) {
    pauseEl.style.display = 'none';
  }

  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'block';

  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'block';

  const canvas = canvasRef || document.querySelector('canvas');
  if (canvas && typeof canvas.requestPointerLock === 'function') {
    try {
      const p = canvas.requestPointerLock();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    } catch (err) {}
  }
}

export function pauseGame() {
  if (getGameState() === GameState.TITLE_SCREEN) return;
  setGameState(GameState.PAUSED);

  const pauseEl = document.getElementById('pause-menu');
  if (pauseEl) pauseEl.style.display = 'flex';

  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';

  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';
}

export function resumeGame() {
  setGameState(GameState.PLAYING);

  const pauseEl = document.getElementById('pause-menu');
  if (pauseEl) pauseEl.style.display = 'none';

  if (controlsModalEl) controlsModalEl.style.display = 'none';
  if (settingsModalEl) settingsModalEl.style.display = 'none';

  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'block';

  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'block';

  const canvas = canvasRef || document.querySelector('canvas');
  if (canvas && typeof canvas.requestPointerLock === 'function') {
    try {
      const p = canvas.requestPointerLock();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    } catch (err) {}
  }
}

export function returnToMainMenu() {
  setGameState(GameState.TITLE_SCREEN);
  wasPointerLocked = false;

  const pauseEl = document.getElementById('pause-menu');
  if (pauseEl) pauseEl.style.display = 'none';

  if (controlsModalEl) controlsModalEl.style.display = 'none';
  if (settingsModalEl) settingsModalEl.style.display = 'none';

  const titleEl = document.getElementById('title-screen');
  if (titleEl) {
    titleEl.style.display = 'flex';
    titleEl.style.pointerEvents = 'auto';
    titleEl.style.visibility = 'visible';
    titleEl.style.opacity = '1';
  }

  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';

  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';
}

export function getSettings() {
  return currentSettings;
}
