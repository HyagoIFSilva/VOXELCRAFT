/**
 * Health & Armor HUD — heart bar, armor shields bar, damage vignette, and death overlay.
 */

import { getHealth, getMaxHealth, getDamageFlash } from '../entities/player.js';
import { getEquippedArmorDefense } from './inventory.js';

let hearts = [];
let shields = [];
let vignette = null;
let deathOverlay = null;
let armorContainer = null;

export function initHealthHud() {
  const hud = document.getElementById('hud');

  // Damage vignette (red flash)
  vignette = document.createElement('div');
  vignette.id = 'damage-vignette';
  vignette.style.opacity = '0';
  hud.appendChild(vignette);

  // Status Wrapper for Armor + Hearts
  const statusWrapper = document.createElement('div');
  statusWrapper.style.cssText = 'position:fixed; bottom:82px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; gap:4px; align-items:flex-start; pointer-events:none; z-index:20;';

  // Armor Bar Container
  armorContainer = document.createElement('div');
  armorContainer.id = 'armor-bar';
  armorContainer.style.cssText = 'display:flex; gap:3px; font-size:16px; color:#38bdf8; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8));';

  for (let i = 0; i < 10; i++) {
    const shield = document.createElement('span');
    shield.textContent = '🛡️';
    shield.style.cssText = 'font-size:14px; opacity:0; transition:opacity 0.2s;';
    shields.push(shield);
    armorContainer.appendChild(shield);
  }
  statusWrapper.appendChild(armorContainer);

  // Hearts container
  const container = document.createElement('div');
  container.id = 'health-bar';
  container.style.cssText = 'display:flex; gap:3px;';
  const total = getMaxHealth() / 2; // each heart = 2 HP
  for (let i = 0; i < total; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '♥';
    hearts.push(heart);
    container.appendChild(heart);
  }
  statusWrapper.appendChild(container);

  hud.appendChild(statusWrapper);

  // Death overlay
  deathOverlay = document.createElement('div');
  deathOverlay.id = 'death-overlay';
  deathOverlay.innerHTML =
    '<div class="death-title">☠ VOCÊ MORREU</div>' +
    '<div class="death-hint">Pressione ESPAÇO para renascer</div>';
  deathOverlay.style.display = 'none';
  hud.appendChild(deathOverlay);
}

export function updateHealthHud() {
  const hp = getHealth();

  for (let i = 0; i < hearts.length; i++) {
    const val = hp - i * 2;
    hearts[i].className = 'heart ' + (val >= 2 ? 'full' : val === 1 ? 'half' : 'empty');
  }

  // Update Armor Shields
  const def = getEquippedArmorDefense();
  const fullShields = Math.floor(def / 2);
  for (let i = 0; i < shields.length; i++) {
    if (i < fullShields) {
      shields[i].style.opacity = '1';
    } else {
      shields[i].style.opacity = '0';
    }
  }

  if (vignette) vignette.style.opacity = getDamageFlash() * 0.75;
  if (deathOverlay) deathOverlay.style.display = hp <= 0 ? 'flex' : 'none';
}
