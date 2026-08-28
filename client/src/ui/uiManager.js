/**
 * UI Manager — Central state authority for all modals, menus, and pointer lock coordination.
 * Eliminates all circular dependencies and guarantees smooth cursor transitions.
 */

export const GameState = {
  TITLE_SCREEN: 'title_screen',
  PLAYING:      'playing',
  PAUSED:       'paused',
};

export const UIWindow = {
  NONE:           'none',
  INVENTORY:      'inventory',
  CRAFTING_TABLE: 'crafting_table',
  FURNACE:        'furnace',
  RECIPE_BOOK:    'recipe_book',
  CONTROLS:       'controls',
  SETTINGS:       'settings',
  PAUSE_MENU:     'pause_menu',
};

let currentGameState = GameState.TITLE_SCREEN;
let activeWindow = UIWindow.NONE;
let canvasElement = null;

export function initUIManager(canvas) {
  canvasElement = canvas;
}

export function getGameState() {
  return currentGameState;
}

export function setGameState(state) {
  currentGameState = state;
}

export function isTitleScreenActive() {
  return currentGameState === GameState.TITLE_SCREEN;
}

export function isGamePaused() {
  return currentGameState === GameState.PAUSED;
}

export function isPlaying() {
  return currentGameState === GameState.PLAYING;
}

export function getActiveWindow() {
  return activeWindow;
}

export function isWindowOpen(windowType) {
  return activeWindow === windowType;
}

export function isAnyWindowOpen() {
  return activeWindow !== UIWindow.NONE;
}

export function openWindow(windowType) {
  activeWindow = windowType;
  // Free mouse cursor for GUI interaction
  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
}

export function closeWindow(windowType = null) {
  if (windowType && activeWindow !== windowType) return;
  activeWindow = UIWindow.NONE;

  // If in active gameplay, re-lock mouse automatically
  if (currentGameState === GameState.PLAYING && canvasElement) {
    canvasElement.requestPointerLock();
  }
}

export function closeAllWindows() {
  activeWindow = UIWindow.NONE;
  if (currentGameState === GameState.PLAYING && canvasElement) {
    canvasElement.requestPointerLock();
  }
}

export function requestGamePointerLock() {
  if (currentGameState === GameState.PLAYING && activeWindow === UIWindow.NONE && canvasElement) {
    if (!document.pointerLockElement) {
      canvasElement.requestPointerLock();
    }
  }
}
