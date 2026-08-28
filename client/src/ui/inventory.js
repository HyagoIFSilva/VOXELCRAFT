/**
 * Inventory System — Minecraft-style inventory GUI with 36 slots (27 storage + 9 hotbar),
 * 4 Equipment/Armor slots, and integrated 2×2 Survival Crafting.
 */

import { BlockType, ITEM_NAMES, isArmor, getArmorDefense } from '../world/blockTypes.js';
import { setSelectedBlockType } from '../engine/interaction.js';
import { createBlockIconCanvas } from './blockIcon.js';
import { playInventorySound, playCraftSound } from '../engine/soundFx.js';
import { evaluateCrafting, inv2x2Slots, openRecipeBook } from './crafting.js';
import { openWindow, closeWindow, UIWindow, isWindowOpen } from './uiManager.js';

// Default initial items for player
const INITIAL_HOTBAR = [
  BlockType.WOODEN_SWORD,
  BlockType.WOODEN_PICKAXE,
  BlockType.GRASS,
  BlockType.DIRT,
  BlockType.WOOD_LOG,
  BlockType.COBBLESTONE,
  BlockType.TORCH,
  BlockType.WATER,
  0,
];

// Slots 0..8 = Hotbar, Slots 9..35 = Main 27 Storage
const slots = new Array(36).fill(0);
for (let i = 0; i < INITIAL_HOTBAR.length; i++) {
  slots[i] = INITIAL_HOTBAR[i];
}

// 4 Equipment Armor slots: 0: Helmet, 1: Chestplate, 2: Leggings, 3: Boots
export const armorSlots = [0, 0, 0, 0];

let selectedHotbarIndex = 0;
let draggedItem = null;
let current2x2Output = null;

let inventoryModal = null;

export function initInventory() {
  if (inventoryModal) return;

  inventoryModal = document.createElement('div');
  inventoryModal.id = 'inventory-modal';
  Object.assign(inventoryModal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(15, 23, 42, 0.96)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(34, 197, 94, 0.15)',
    zIndex: '150',
    display: 'none',
    color: '#f8fafc',
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
    backdropFilter: 'blur(16px)',
  });

  inventoryModal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🎒</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#4ade80;">INVENTÁRIO & ARMADURA</h2>
      </div>
      <button id="close-inventory-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Upper Section: Armor Slots + 2×2 Survival Crafting -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; background:rgba(30,41,59,0.5); padding:10px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);">
      <!-- Armor Slots -->
      <div style="display:flex; flex-direction:column; gap:4px;">
        <div style="font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">Armadura</div>
        <div id="inv-armor-grid" style="display:flex; gap:6px;"></div>
      </div>

      <!-- 2×2 Crafting Matrix -->
      <div style="display:flex; align-items:center; gap:10px; background:rgba(15,23,42,0.7); padding:6px 10px; border-radius:10px; border:1px solid rgba(255,255,255,0.08);">
        <button id="open-recipe-book-inv" title="Ver catálogo de receitas" style="background:linear-gradient(135deg, #3b82f6, #1d4ed8); border:1px solid #60a5fa; color:#fff; font-size:11px; font-weight:700; padding:5px 9px; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(59,130,246,0.4);">
          <span>❓</span> Receitas
        </button>
        <div id="inv-craft-2x2-grid" style="display:grid; grid-template-columns:repeat(2, 38px); gap:4px;"></div>
        <span style="font-size:18px; color:#4ade80;">➜</span>
        <div id="inv-craft-2x2-output" style="width:44px; height:44px; border-radius:6px; background:rgba(30,41,59,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Produto Forjado"></div>
      </div>
    </div>

    <!-- Main 27 Storage Slots -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:6px; text-transform:uppercase; letter-spacing:1px;">Armazenamento Geral (27 slots)</div>
    <div id="inv-storage-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px; margin-bottom:16px;"></div>

    <!-- Bottom 9 Hotbar Slots -->
    <div style="font-size:12px; font-weight:700; color:#4ade80; margin-bottom:6px; text-transform:uppercase; letter-spacing:1px;">Barra Rápida (1..9)</div>
    <div id="inv-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `;

  document.body.appendChild(inventoryModal);

  document.getElementById('close-inventory-btn').addEventListener('click', closeInventory);
  document.getElementById('open-recipe-book-inv').addEventListener('click', openRecipeBook);

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyE') {
      toggleInventory();
    }
  });

  renderInventorySlots();
}

export function toggleInventory() {
  if (isInventoryOpen()) {
    closeInventory();
  } else {
    openInventory();
  }
}

export function openInventory() {
  if (!inventoryModal) initInventory();
  inventoryModal.style.display = 'block';
  openWindow(UIWindow.INVENTORY);
  playInventorySound(true);
  renderInventorySlots();
}

export function closeInventory() {
  if (!inventoryModal) return;
  inventoryModal.style.display = 'none';
  closeWindow(UIWindow.INVENTORY);
  playInventorySound(false);

  // Return any items in the 2x2 grid to player storage
  for (let i = 0; i < 4; i++) {
    if (inv2x2Slots[i] > 0) {
      addItemToInventory(inv2x2Slots[i]);
      inv2x2Slots[i] = 0;
    }
  }

  syncSelectedHotbar();
}

export function isInventoryOpen() {
  return isWindowOpen(UIWindow.INVENTORY);
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

export function getEquippedArmorDefense() {
  let def = 0;
  for (let i = 0; i < 4; i++) {
    if (armorSlots[i] > 0) {
      def += getArmorDefense(armorSlots[i]);
    }
  }
  return def;
}

export function addItemToInventory(itemType) {
  if (!itemType || itemType === 0) return false;

  // First try hotbar
  for (let i = 0; i < 9; i++) {
    if (slots[i] === 0) {
      slots[i] = itemType;
      renderInventorySlots();
      syncSelectedHotbar();
      return true;
    }
  }

  // Then main storage
  for (let i = 9; i < 36; i++) {
    if (slots[i] === 0) {
      slots[i] = itemType;
      renderInventorySlots();
      return true;
    }
  }

  return false;
}

export function removeItemFromHotbar(index) {
  if (index >= 0 && index < 9) {
    slots[index] = 0;
    renderInventorySlots();
    syncSelectedHotbar();
  }
}

function syncSelectedHotbar() {
  const current = slots[selectedHotbarIndex] || 0;
  setSelectedBlockType(current);

  for (let i = 0; i < 9; i++) {
    const slotEl = document.getElementById(`hotbar-slot-${i}`);
    if (slotEl) {
      slotEl.innerHTML = '';
      if (slots[i] > 0) {
        const icon = createBlockIconCanvas(slots[i], 38);
        slotEl.appendChild(icon);
      }
    }
  }
}

export function renderInventorySlots() {
  const armorGrid = document.getElementById('inv-armor-grid');
  const craft2x2Grid = document.getElementById('inv-craft-2x2-grid');
  const craft2x2Output = document.getElementById('inv-craft-2x2-output');
  const storageGrid = document.getElementById('inv-storage-grid');
  const hotbarGrid = document.getElementById('inv-hotbar-grid');

  if (!armorGrid || !craft2x2Grid || !craft2x2Output || !storageGrid || !hotbarGrid) return;

  // 1. Render Armor Slots
  armorGrid.innerHTML = '';
  const armorLabels = ['Capacete', 'Peitoral', 'Calças', 'Botas'];
  for (let i = 0; i < 4; i++) {
    const slot = document.createElement('div');
    slot.style.cssText = 'width:38px; height:38px; border-radius:6px; background:rgba(15,23,42,0.85); border:1.5px solid #38bdf8; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;';
    slot.title = `Slot de ${armorLabels[i]}`;

    if (armorSlots[i] > 0) {
      const icon = createBlockIconCanvas(armorSlots[i], 30);
      slot.appendChild(icon);
    } else {
      const ph = document.createElement('span');
      ph.style.cssText = 'font-size:14px; opacity:0.35; color:#38bdf8;';
      ph.textContent = ['🛡️', '🦺', '👖', '👢'][i];
      slot.appendChild(ph);
    }

    slot.addEventListener('click', () => {
      if (armorSlots[i] > 0) {
        if (addItemToInventory(armorSlots[i])) {
          armorSlots[i] = 0;
          renderInventorySlots();
        }
      }
    });

    armorGrid.appendChild(slot);
  }

  // 2. Render 2×2 Crafting Grid
  craft2x2Grid.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const slot = document.createElement('div');
    slot.style.cssText = 'width:38px; height:38px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;';

    if (inv2x2Slots[i] > 0) {
      const icon = createBlockIconCanvas(inv2x2Slots[i], 28);
      slot.appendChild(icon);
    }

    slot.addEventListener('click', () => {
      if (inv2x2Slots[i] > 0) {
        addItemToInventory(inv2x2Slots[i]);
        inv2x2Slots[i] = 0;
        update2x2CraftingOutput();
        renderInventorySlots();
      }
    });

    craft2x2Grid.appendChild(slot);
  }

  // 3. Render 2×2 Output Slot
  craft2x2Output.innerHTML = '';
  if (current2x2Output && current2x2Output.result > 0) {
    const icon = createBlockIconCanvas(current2x2Output.result, 34);
    craft2x2Output.appendChild(icon);

    if (current2x2Output.count > 1) {
      const badge = document.createElement('span');
      badge.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;';
      badge.textContent = current2x2Output.count;
      craft2x2Output.appendChild(badge);
    }
  }

  craft2x2Output.onclick = () => {
    if (current2x2Output && current2x2Output.result > 0) {
      for (let c = 0; c < current2x2Output.count; c++) {
        addItemToInventory(current2x2Output.result);
      }
      playCraftSound();
      for (let i = 0; i < 4; i++) {
        inv2x2Slots[i] = 0;
      }
      update2x2CraftingOutput();
      renderInventorySlots();
    }
  };

  // 4. Render Storage (9..35)
  storageGrid.innerHTML = '';
  for (let i = 9; i < 36; i++) {
    createSlotElement(i, storageGrid);
  }

  // 5. Render Hotbar (0..8)
  hotbarGrid.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    createSlotElement(i, hotbarGrid, true);
  }
}

function createSlotElement(index, parentEl, isHotbar = false) {
  const slot = document.createElement('div');
  slot.style.cssText = `
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: ${isHotbar ? 'rgba(30, 41, 59, 0.9)' : 'rgba(15, 23, 42, 0.8)'};
    border: ${isHotbar ? '1.5px solid rgba(74, 222, 128, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  `;

  const itemType = slots[index];
  if (itemType > 0) {
    const icon = createBlockIconCanvas(itemType, 34);
    slot.appendChild(icon);
    slot.title = ITEM_NAMES[itemType] || 'Item';
  }

  slot.addEventListener('click', () => {
    // If holding armor item, equip into corresponding armor slot
    if (itemType > 0 && isArmor(itemType)) {
      let targetArmorSlot = -1;
      if (itemType === BlockType.IRON_HELMET) targetArmorSlot = 0;
      if (itemType === BlockType.IRON_CHESTPLATE) targetArmorSlot = 1;
      if (itemType === BlockType.IRON_LEGGINGS) targetArmorSlot = 2;
      if (itemType === BlockType.IRON_BOOTS) targetArmorSlot = 3;

      if (targetArmorSlot !== -1 && armorSlots[targetArmorSlot] === 0) {
        armorSlots[targetArmorSlot] = itemType;
        slots[index] = 0;
        playCraftSound();
        renderInventorySlots();
        syncSelectedHotbar();
        return;
      }
    }

    // Otherwise transfer to 2x2 crafting if space available
    if (itemType > 0) {
      const firstEmptyCraft = inv2x2Slots.findIndex(v => v === 0);
      if (firstEmptyCraft !== -1) {
        inv2x2Slots[firstEmptyCraft] = itemType;
        slots[index] = 0;
        update2x2CraftingOutput();
        renderInventorySlots();
        syncSelectedHotbar();
      }
    }
  });

  parentEl.appendChild(slot);
}

export function update2x2CraftingOutput() {
  current2x2Output = evaluateCrafting(inv2x2Slots, 2, 2);
}
