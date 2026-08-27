/**
 * Game Loop — requestAnimationFrame-based update/render cycle.
 *
 * Provides a stable deltaTime and calls registered update/render callbacks
 * every frame.
 */

let running = false;
let lastTime = 0;
let updateFn = null;
let renderFn = null;
let rafId = null;

/**
 * Internal frame tick.
 * @param {number} timestamp - High-resolution timestamp from rAF.
 */
function tick(timestamp) {
  if (!running) return;

  // deltaTime in seconds, clamped to avoid spiral-of-death on tab switch
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
  lastTime = timestamp;

  if (updateFn) updateFn(dt, timestamp / 1000);
  if (renderFn) renderFn(dt);

  rafId = requestAnimationFrame(tick);
}

/**
 * Start the game loop.
 * @param {Function} onUpdate - Called every frame with deltaTime (seconds).
 * @param {Function} onRender - Called every frame after update.
 */
export function start(onUpdate, onRender) {
  updateFn = onUpdate;
  renderFn = onRender;
  running = true;
  lastTime = performance.now();
  rafId = requestAnimationFrame(tick);
}

/**
 * Stop the game loop.
 */
export function stop() {
  running = false;
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}
