/**
 * Input Manager — tracks keyboard state via keydown/keyup events.
 *
 * Uses a Set of currently-pressed key codes for O(1) lookup.
 */

const keysDown = new Set();

/**
 * Initialize input listeners on the given element (usually document).
 * @param {EventTarget} target
 */
export function init(target = document) {
  target.addEventListener('keydown', (e) => {
    keysDown.add(e.code);
  });

  target.addEventListener('keyup', (e) => {
    keysDown.delete(e.code);
  });

  // Disable right-click context menu in game
  target.addEventListener('contextmenu', (e) => {
    if (document.pointerLockElement) e.preventDefault();
  });

  // Clear all keys when window loses focus to avoid stuck keys
  window.addEventListener('blur', () => {
    keysDown.clear();
  });
}

/**
 * Check whether a key is currently pressed.
 * @param {string} code - KeyboardEvent.code (e.g. 'KeyW', 'Space')
 * @returns {boolean}
 */
export function isKeyDown(code) {
  return keysDown.has(code);
}
