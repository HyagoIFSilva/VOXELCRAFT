/**
 * HUD — heads-up display overlay with debug stats, biome name, and flying indicator.
 */

import { isPlayerFlying } from '../entities/player.js';
import { getBiomeAt, Biome } from '../world/worldManager.js';

const debugEl = document.getElementById('debug-info');
let flyBadge = null;

let frameCount = 0;
let fpsTimer = 0;
let currentFps = 60;

const BIOME_NAMES = {
  [Biome.PLAINS]: 'Planície / Floresta',
  [Biome.DESERT]: 'Deserto',
  [Biome.SNOWY_MOUNTAINS]: 'Montanhas Nevadas',
  [Biome.OCEAN]: 'Praia / Oceano',
};

function ensureFlyBadge() {
  if (!flyBadge) {
    flyBadge = document.createElement('div');
    flyBadge.id = 'fly-badge';
    Object.assign(flyBadge.style, {
      position: 'absolute',
      top: '58px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '4px 14px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(37,99,235,0.85), rgba(147,51,234,0.85))',
      border: '1px solid rgba(255,255,255,0.4)',
      boxShadow: '0 0 15px rgba(59,130,246,0.6)',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      pointerEvents: 'none',
      zIndex: '25',
      display: 'none',
      backdropFilter: 'blur(4px)',
      animation: 'pulse 1.8s infinite',
    });
    flyBadge.innerHTML = '⚡ MODO VOO ATIVO &nbsp;<span style="opacity:0.75; font-size:10px;">(Espaço: subir | Shift: descer)</span>';
    const hud = document.getElementById('hud');
    if (hud) hud.appendChild(flyBadge);
  }
}

/**
 * Update HUD elements.
 * @param {number} dt - Delta time in seconds.
 * @param {object} data - HUD data { position: THREE.Vector3 }
 */
export function update(dt, data) {
  ensureFlyBadge();

  // FPS counter
  frameCount++;
  fpsTimer += dt;
  if (fpsTimer >= 0.5) {
    currentFps = Math.round(frameCount / fpsTimer);
    frameCount = 0;
    fpsTimer = 0;
  }

  // Debug display with Biome info
  if (debugEl && data.position) {
    const p = data.position;
    const biome = getBiomeAt(Math.floor(p.x), Math.floor(p.z));
    const biomeName = BIOME_NAMES[biome] || 'Desconhecido';

    debugEl.innerHTML =
      `<b>FPS:</b> ${currentFps}<br>` +
      `<b>XYZ:</b> ${p.x.toFixed(1)} / ${p.y.toFixed(1)} / ${p.z.toFixed(1)}<br>` +
      `<b>Bioma:</b> <span style="color:#4ade80;">${biomeName}</span>`;
  }

  // Fly badge visibility
  if (flyBadge) {
    flyBadge.style.display = isPlayerFlying() ? 'block' : 'none';
  }
}
