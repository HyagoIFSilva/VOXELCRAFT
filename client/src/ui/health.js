/**
 * Health HUD — heart bar, damage vignette, and death overlay.
 */

import { getHealth, getMaxHealth, getDamageFlash } from '../entities/player.js';

let hearts = [];
let vignette = null;
let deathOverlay = null;
let armorText = null;

/**
 * Create the health HUD DOM elements.
 */
export function initHealthHud() {
  const hud = document.getElementById('hud');

  // Damage vignette (red flash).
  vignette = document.createElement('div');
  vignette.id = 'damage-vignette';
  vignette.style.opacity = 0;
  hud.appendChild(vignette);

  // Hearts container.
  const container = document.createElement('div');
  container.id = 'health-bar';
  const total = getMaxHealth() / 2; // each heart = 2 HP
  for (let i = 0; i < total; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '♥';
    hearts.push(heart);
    container.appendChild(heart);
  }
  hud.appendChild(container);

  // Armor / status pill (placeholder for future effects).
  armorText = document.createElement('div');
  armorText.id = 'status-text';
  armorText.textContent = '';
  hud.appendChild(armorText);

  // Death overlay.
  deathOverlay = document.createElement('div');
  deathOverlay.id = 'death-overlay';
  deathOverlay.innerHTML =
    '<div class="death-title">☠ VOCÊ MORREU</div>' +
    '<div class="death-hint">Pressione ESPAÇO para renascer</div>';
  deathOverlay.style.display = 'none';
  hud.appendChild(deathOverlay);
}

/**
 * Update the health HUD each frame.
 */
export function updateHealthHud() {
  const hp = getHealth();

  for (let i = 0; i < hearts.length; i++) {
    const val = hp - i * 2;
    hearts[i].className = 'heart ' + (val >= 2 ? 'full' : val === 1 ? 'half' : 'empty');
  }

  if (vignette) vignette.style.opacity = getDamageFlash() * 0.75;

  if (deathOverlay) deathOverlay.style.display = hp <= 0 ? 'flex' : 'none';
}
