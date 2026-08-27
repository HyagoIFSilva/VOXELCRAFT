/**
 * Inventory System — Minecraft-style full inventory GUI with 36 slots (27 storage + 9 hotbar).
 * Toggle with E key.
 */

import { BlockType, ITEM_NAMES } from '../world/blockTypes.js';
import { setSelectedBlockType } from '../engine/interaction.js';
import { createBlockIconCanvas } from './blockIcon.js';
import { playInventorySound } from '../engine/soundFx.js';

// Default initial items
const INITIAL_HOTBAR = [
  BlockType.IRON_SWORD,
  BlockType.IRON_PICKAXE,
  BlockType.GRASS,
  BlockType.DIRT,
  BlockType.STONE,
  BlockType.WOOD_LOG,
  BlockType.LEAVES,
  BlockType.SAND,
  BlockType.WATER,
];

const INITIAL_STORAGE = [
  BlockType.COAL_ORE,
  BlockType.IRON_ORE,
  BlockType.SNOW,
  BlockType.PORKCHOP,
  BlockType.ROTTEN_FLESH,
  0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
];

// Slots: 0..8 = Hotbar, 9..35 = Main Inventory
const slots = [...INITIAL_HOTBAR, ...INITIAL_STORAGE];
let selectedHotbarIndex = 0;
let heldItemInCursor = null; // Dragged/clicked item

let inventoryModal = null;
let isOpen = false;

export function initInventory() {
  const hud = document.getElementById('hud');

  inventoryModal = document.createElement('div');
  inventoryModal.id = 'inventory-modal';
  Object.assign(inventoryModal.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '480px',
    padding: '20px',
    borderRadius: '16px',
    background: 'rgba(15, 23, 42, 0.92)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)',
    backdropFilter: 'blur(16px)',
    zIndex: '50',
    display: 'none',
    pointerEvents: 'auto',
    fontFamily: "'Outfit', sans-serif",
    color: '#fff',
    userSelect: 'none',
  });

  // Header
  const header = document.createElement('div');
  Object.assign(header.style, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '8px',
  });
  header.innerHTML = `
    <span style="font-size:18px; font-weight:700; letter-spacing:1px;">📦 INVENTÁRIO</span>
    <span style="font-size:12px; color:#94a3b8;">Pressione [E] ou [ESC] para fechar</span>
  `;
  inventoryModal.appendChild(header);

  // Storage Section (3x9 grid)
  const storageTitle = document.createElement('div');
  storageTitle.textContent = 'Mochila / Armazenamento';
  storageTitle.style.cssText = 'font-size:12px; color:#94a3b8; margin-bottom:8px; font-weight:600;';
  inventoryModal.appendChild(storageTitle);

  const storageGrid = document.createElement('div');
  storageGrid.id = 'inv-storage-grid';
  Object.assign(storageGrid.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gap: '6px',
    marginBottom: '18px',
  });
  inventoryModal.appendChild(storageGrid);

  // Hotbar Section (1x9 grid)
  const hotbarTitle = document.createElement('div');
  hotbarTitle.textContent = 'Barra Rápida (Hotbar 1-9)';
  hotbarTitle.style.cssText = 'font-size:12px; color:#4ade80; margin-bottom:8px; font-weight:600;';
  inventoryModal.appendChild(hotbarTitle);

  const hotbarGrid = document.createElement('div');
  hotbarGrid.id = 'inv-hotbar-grid';
  Object.assign(hotbarGrid.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gap: '6px',
  });
  inventoryModal.appendChild(hotbarGrid);

  hud.appendChild(inventoryModal);

  // Keyboard listener for E key
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyE') {
      toggleInventory();
    } else if (e.code === 'Escape' && isOpen) {
      closeInventory();
    }
  });

  renderInventorySlots();
  syncSelectedHotbar();
}

export function toggleInventory() {
  if (isOpen) {
    closeInventory();
  } else {
    openInventory();
  }
}

export function openInventory() {
  if (!inventoryModal) return;
  isOpen = true;
  inventoryModal.style.display = 'block';
  document.exitPointerLock();
  playInventorySound(true);
  renderInventorySlots();
}

export function closeInventory() {
  if (!inventoryModal) return;
  isOpen = false;
  inventoryModal.style.display = 'none';
  playInventorySound(false);
  syncSelectedHotbar();
}

export function isInventoryOpen() {
  return isOpen;
}

export function getHotbarSlots() {
  return slots.slice(0, 9);
}

export function getSelectedSlotItem() {
  return slots[selectedHotbarIndex] || 0;
}

export function setHotbarSelectedIndex(idx) {
  selectedHotbarIndex = idx;
  syncSelectedHotbar();
}

function syncSelectedHotbar() {
  const item = slots[selectedHotbarIndex] || 0;
  setSelectedBlockType(item);
}

function renderInventorySlots() {
  const storageGrid = document.getElementById('inv-storage-grid');
  const hotbarGrid = document.getElementById('inv-hotbar-grid');
  if (!storageGrid || !hotbarGrid) return;

  storageGrid.innerHTML = '';
  hotbarGrid.innerHTML = '';

  // Render Storage (slots 9..35)
  for (let i = 9; i < 36; i++) {
    storageGrid.appendChild(createSlotElement(i));
  }

  // Render Hotbar (slots 0..8)
  for (let i = 0; i < 9; i++) {
    hotbarGrid.appendChild(createSlotElement(i));
  }
}

function createSlotElement(index) {
  const slot = document.createElement('div');
  slot.className = 'inv-slot';
  slot.dataset.index = index;

  const itemType = slots[index];
  const name = ITEM_NAMES[itemType] || '';
  slot.title = name;

  Object.assign(slot.style, {
    width: '42px',
    height: '42px',
    borderRadius: '6px',
    background: 'rgba(30, 41, 59, 0.85)',
    border: '2px solid rgba(255, 255, 255, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'border-color 0.15s, transform 0.15s',
  });

  if (itemType > 0) {
    const icon = createBlockIconCanvas(itemType, 36);
    if (icon) {
      slot.style.backgroundImage = `url(${icon.toDataURL()})`;
      slot.style.backgroundPosition = 'center';
      slot.style.backgroundRepeat = 'no-repeat';
      slot.style.backgroundSize = '80% 80%';
    }
  }

  slot.addEventListener('mouseenter', () => {
    slot.style.borderColor = 'rgba(74, 222, 128, 0.8)';
    slot.style.transform = 'scale(1.08)';
  });

  slot.addEventListener('mouseleave', () => {
    slot.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    slot.style.transform = 'scale(1)';
  });

  slot.addEventListener('click', () => {
    onSlotClick(index);
  });

  return slot;
}

function onSlotClick(index) {
  if (heldItemInCursor === null) {
    if (slots[index] > 0) {
      heldItemInCursor = slots[index];
      slots[index] = 0;
    }
  } else {
    const temp = slots[index];
    slots[index] = heldItemInCursor;
    heldItemInCursor = temp === 0 ? null : temp;
  }
  renderInventorySlots();
  syncSelectedHotbar();
}
