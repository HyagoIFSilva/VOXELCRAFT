/**
 * Chest System — Interactive 27-slot Container Storage GUI.
 * Persists chest contents across the world by coordinate key (x,y,z).
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

  chestModal.style.display = 'block';
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
  Object.assign(chestModal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(15, 23, 42, 0.96)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(234, 179, 8, 0.2)',
    zIndex: '150',
    display: 'none',
    color: '#f8fafc',
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
    backdropFilter: 'blur(16px)',
  });

  chestModal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">📦</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#eab308;">BAÚ DE ARMAZENAMENTO (27 SLOTS)</h2>
      </div>
      <button id="close-chest-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Chest 27 Storage Slots -->
    <div style="font-size:11px; font-weight:800; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Conteúdo do Baú (Clique para retirar)</div>
    <div id="chest-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px; margin-bottom:18px; background:rgba(30,41,59,0.5); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);"></div>

    <!-- Quick Player Hotbar Transfer -->
    <div style="font-size:11px; font-weight:800; color:#4ade80; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Seu Inventário Rápido (Clique para guardar no baú)</div>
    <div id="chest-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
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
    slot.style.cssText = `
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.85);
      border: 1.5px solid ${itemType > 0 ? 'rgba(234, 179, 8, 0.6)' : 'rgba(255, 255, 255, 0.1)'};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    `;

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
    slot.style.cssText = `
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: rgba(30, 41, 59, 0.85);
      border: 1.5px solid ${itemType > 0 ? 'rgba(74, 222, 128, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    `;

    if (itemType > 0) {
      const icon = createBlockIconCanvas(itemType, 32);
      slot.appendChild(icon);
      slot.title = `${ITEM_NAMES[itemType] || 'Item'} (Clique para guardar no baú)`;
      slot.addEventListener('click', () => {
        // Find first empty chest slot
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
