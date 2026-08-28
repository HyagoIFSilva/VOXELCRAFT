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

// Settings state
export const Settings = {
  renderDistance: 5,
  fov: 75,
  mouseSensitivity: 1.0,
  musicVolume: 80,
};

let currentSettings = Settings;

export function initTitleScreen(canvas) {
  canvasRef = canvas;
  initUIManager(canvas);

  titleScreenEl = document.getElementById('title-screen');
  pauseMenuEl = document.getElementById('pause-menu');
  controlsModalEl = document.getElementById('modal-controls');
  settingsModalEl = document.getElementById('modal-settings');

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
    playBtn.addEventListener('click', () => {
      playJumpSound();
      startGame();
    });
  }

  const controlsBtn = document.getElementById('btn-controls');
  if (controlsBtn) {
    controlsBtn.addEventListener('click', () => {
      openModal(controlsModalEl);
    });
  }

  const settingsBtn = document.getElementById('btn-settings');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      openModal(settingsModalEl);
    });
  }

  // Close modals
  const closeControlsBtn = document.getElementById('btn-close-controls');
  if (closeControlsBtn) {
    closeControlsBtn.addEventListener('click', () => {
      if (controlsModalEl) controlsModalEl.style.display = 'none';
      closeWindow(UIWindow.CONTROLS);
    });
  }

  const closeSettingsBtn = document.getElementById('btn-close-settings');
  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => {
      if (settingsModalEl) settingsModalEl.style.display = 'none';
      closeWindow(UIWindow.SETTINGS);
    });
  }

  // Pause menu buttons
  const resumeBtn = document.getElementById('btn-resume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      resumeGame();
    });
  }

  const pauseOptionsBtn = document.getElementById('btn-pause-options');
  if (pauseOptionsBtn) {
    pauseOptionsBtn.addEventListener('click', () => {
      openModal(settingsModalEl);
    });
  }

  const exitMainMenuBtn = document.getElementById('btn-exit-main');
  if (exitMainMenuBtn) {
    exitMainMenuBtn.addEventListener('click', () => {
      returnToMainMenu();
    });
  }

  // Pointer Lock Change Listener
  document.addEventListener('pointerlockchange', () => {
    const isLocked = document.pointerLockElement === canvasRef;
    if (getGameState() === GameState.PLAYING && !isLocked) {
      // If no GUI window is open and user pressed ESC or browser lost lock, open pause menu
      if (!isAnyWindowOpen()) {
        pauseGame();
      }
    }
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
  if (canvasRef) {
    canvasRef.addEventListener('click', () => {
      if (getGameState() === GameState.PLAYING && !isAnyWindowOpen()) {
        if (!document.pointerLockElement) {
          canvasRef.requestPointerLock();
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
  if (getGameState() === GameState.TITLE_SCREEN) return;
  setGameState(GameState.PAUSED);
  if (pauseMenuEl) pauseMenuEl.style.display = 'flex';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';
}

export function resumeGame() {
  setGameState(GameState.PLAYING);
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
  setGameState(GameState.TITLE_SCREEN);
  if (pauseMenuEl) pauseMenuEl.style.display = 'none';
  if (controlsModalEl) controlsModalEl.style.display = 'none';
  if (settingsModalEl) settingsModalEl.style.display = 'none';
  if (titleScreenEl) titleScreenEl.style.display = 'flex';
  const crosshair = document.getElementById('crosshair');
  if (crosshair) crosshair.style.display = 'none';
  const controlsHint = document.getElementById('controls-hint');
  if (controlsHint) controlsHint.style.display = 'none';
}

export function getSettings() {
  return currentSettings;
}
