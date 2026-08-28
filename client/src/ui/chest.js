/**
 * Chest System — Interactive 27-slot Container Storage GUI.
 * Persists chest contents across the world by coordinate key (x,y,z).
 * Styled with Tailwind dark-green/amber glassmorphism, Space Grotesk, and JetBrains Mono.
 */

import { ITEM_NAMES } from '../world/blockTypes.js';
import { createBlockIconCanvas } from './blockIcon.js';
import { playInventorySound, playCraftSound } from '../engine/soundFx.js';
import { addItemToInventory, getHotbarSlots } from './inventory.js';
import { openWindow, closeWindow, UIWindow, isWindowOpen } from './uiManager.js';

// World Chests State: key 'x,y,z' -> array of 27 slot item IDs
const worldChests = new Map();

let activeChestKey = null;
let chestModal = null;

export function getOrCreateChestSlots(x, y, z) {
  const key = `${x},${y},${z}`;
  if (!worldChests.has(key)) {
    worldChests.set(key, new Array(27).fill(0));
  }
  return worldChests.get(key);
}

export function getChestItems(x, y, z) {
  const key = `${x},${y},${z}`;
  if (!worldChests.has(key)) return [];
  const slots = worldChests.get(key);
  return slots.filter(item => item > 0);
}

export function clearChest(x, y, z) {
  const key = `${x},${y},${z}`;
  if (worldChests.has(key)) {
    worldChests.delete(key);
  }
}

export function openChest(x, y, z) {
  activeChestKey = `${x},${y},${z}`;
  getOrCreateChestSlots(x, y, z);

  if (!chestModal) {
    initChestUI();
  }

  chestModal.style.display = 'flex';
  openWindow(UIWindow.CHEST);
  playInventorySound(true);
  renderChestSlots();
}

export function closeChest() {
  if (!chestModal) return;
  chestModal.style.display = 'none';
  activeChestKey = null;
  closeWindow(UIWindow.CHEST);
  playInventorySound(false);
}

export function isChestOpen() {
  return isWindowOpen(UIWindow.CHEST);
}

function initChestUI() {
  chestModal = document.createElement('div');
  chestModal.id = 'chest-modal';
  chestModal.className = 'fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none';

  chestModal.innerHTML = `
    <div class="glass-panel w-full max-w-xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-tertiary text-2xl" style="font-variation-settings: 'FILL' 1;">inventory_2</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">Baú de Armazenamento (27 slots)</h2>
        </div>
        <button id="close-chest-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Chest 27 Storage Slots -->
      <div class="mb-6 bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
        <span class="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">Conteúdo do Baú (Clique para retirar)</span>
        <div id="chest-grid" class="grid grid-cols-9 gap-2"></div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="pt-4 border-t border-outline-variant/60">
        <span class="font-label-caps text-xs text-primary uppercase font-semibold block mb-2">Seu Inventário Rápido (Clique para guardar no baú)</span>
        <div id="chest-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `;

  document.body.appendChild(chestModal);

  document.getElementById('close-chest-btn').addEventListener('click', closeChest);
}

function renderChestSlots() {
  if (!activeChestKey) return;
  const chestSlots = worldChests.get(activeChestKey);
  if (!chestSlots) return;

  const chestGrid = document.getElementById('chest-grid');
  const hotbarGrid = document.getElementById('chest-hotbar-grid');
  if (!chestGrid || !hotbarGrid) return;

  // 1. Render 27 Chest Slots
  chestGrid.innerHTML = '';
  chestSlots.forEach((itemType, idx) => {
    const slot = document.createElement('div');
    slot.className = `slot w-full h-11 rounded-lg bg-surface-container-lowest border ${
      itemType > 0 ? 'border-tertiary/70 shadow-[0_0_8px_rgba(255,180,169,0.2)]' : 'border-outline-variant'
    } hover:border-primary flex items-center justify-center cursor-pointer transition-all`;

    if (itemType > 0) {
      const icon = createBlockIconCanvas(itemType, 32);
      slot.appendChild(icon);
      slot.title = `${ITEM_NAMES[itemType] || 'Item'} (Clique para retirar)`;
    }

    slot.addEventListener('click', () => {
      if (itemType > 0) {
        if (addItemToInventory(itemType)) {
          chestSlots[idx] = 0;
          playCraftSound();
          renderChestSlots();
        }
      }
    });

    chestGrid.appendChild(slot);
  });

  // 2. Render Player Hotbar Quick Transfer
  hotbarGrid.innerHTML = '';
  const hotbar = getHotbarSlots();
  hotbar.forEach((itemType, idx) => {
    const slot = document.createElement('div');
    slot.className = `slot w-full h-11 rounded-lg bg-surface-container-lowest border ${
      itemType > 0 ? 'border-primary/60' : 'border-outline-variant'
    } hover:border-primary flex items-center justify-center cursor-pointer transition-all`;

    if (itemType > 0) {
      const icon = createBlockIconCanvas(itemType, 32);
      slot.appendChild(icon);
      slot.title = `${ITEM_NAMES[itemType] || 'Item'} (Clique para guardar no baú)`;
      slot.addEventListener('click', () => {
        const emptyIdx = chestSlots.findIndex(v => v === 0);
        if (emptyIdx !== -1) {
          chestSlots[emptyIdx] = itemType;
          hotbar[idx] = 0;
          playCraftSound();
          renderChestSlots();
        }
      });
    }

    hotbarGrid.appendChild(slot);
  });
}
