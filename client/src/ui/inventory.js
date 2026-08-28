/**
 * Inventory System — Minecraft-style inventory GUI with 36 slots (27 storage + 9 hotbar),
 * 4 Equipment/Armor slots, Player Silhouette, and integrated 2×2 Survival Crafting.
 * Styled with Tailwind dark-green glassmorphism, Space Grotesk, and JetBrains Mono.
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
let current2x2Output = null;
let inventoryModal = null;

export function initInventory() {
  if (inventoryModal) return;

  inventoryModal = document.createElement('div');
  inventoryModal.id = 'inventory-modal';
  inventoryModal.className = 'fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none';

  inventoryModal.innerHTML = `
    <div class="glass-panel w-full max-w-[840px] flex flex-col rounded-xl overflow-hidden shadow-2xl bg-surface/90 border border-outline-variant text-on-surface">
      <!-- Header -->
      <div class="px-6 py-3.5 border-b border-outline-variant bg-surface-container-high/80 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">backpack</span>
          <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase font-bold">INVENTORY &amp; CRAFTING</h1>
        </div>
        <div class="flex items-center gap-3">
          <button id="open-recipe-book-inv" class="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-3 py-1.5 rounded-lg text-xs font-label-caps flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(120,220,119,0.2)] cursor-pointer">
            <span class="material-symbols-outlined text-sm">menu_book</span>
            <span>Receitas</span>
          </button>
          <button id="close-inventory-btn" class="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-6 flex flex-col gap-6">
        <!-- Top Section: Crafting & Character -->
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <!-- 2x2 Crafting Matrix -->
          <div class="flex-1 flex flex-col items-center justify-center bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
            <span class="font-label-caps text-label-caps text-secondary mb-3 self-start font-semibold">Survival Crafting (2×2)</span>
            <div class="flex items-center gap-5">
              <!-- 2x2 Grid -->
              <div id="inv-craft-2x2-grid" class="grid grid-cols-2 gap-2"></div>
              <!-- Arrow -->
              <div class="flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-primary">east</span>
              </div>
              <!-- Output Slot -->
              <div id="inv-craft-2x2-output" class="slot w-16 h-16 rounded-xl active cursor-pointer relative bg-surface-container-lowest border-2 border-primary shadow-[0_0_12px_rgba(120,220,119,0.4)]" title="Clique para coletar o item"></div>
            </div>
          </div>

          <!-- Character & Armor -->
          <div class="flex-1 flex items-center justify-center gap-5 bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
            <!-- Armor Slots -->
            <div class="flex flex-col gap-2">
              <span class="font-label-caps text-[11px] text-secondary font-semibold uppercase">Armadura</span>
              <div id="inv-armor-grid" class="flex flex-col gap-2"></div>
            </div>
            <!-- Player Preview (Silhouette) -->
            <div class="w-32 h-48 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner">
              <span class="material-symbols-outlined text-6xl text-primary/40">person</span>
              <div class="absolute bottom-2 right-2 slot w-8 h-8 rounded-lg border-dashed border-outline-variant bg-surface-container-low flex items-center justify-center">
                <span class="material-symbols-outlined text-on-surface-variant text-sm">shield</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-outline-variant w-full"></div>

        <!-- Main 27 Inventory Slots -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <span class="font-label-caps text-label-caps text-secondary font-semibold">Mochila / Armazenamento Geral (27 slots)</span>
            <span class="font-label-caps text-[11px] text-on-surface-variant">Clique para equipar / transferir</span>
          </div>
          <div id="inv-storage-grid" class="grid grid-cols-9 gap-2"></div>
        </div>

        <!-- Hotbar -->
        <div class="flex flex-col gap-2 pt-1 border-t border-outline-variant/60">
          <span class="font-label-caps text-label-caps text-primary font-semibold">Barra Rápida (1 a 9)</span>
          <div id="inv-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
        </div>
      </div>
    </div>
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
  inventoryModal.style.display = 'flex';
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

export function hasItemInInventory(itemType) {
  return slots.some(item => item === itemType);
}

export function consumeItemFromInventory(itemType) {
  const idx = slots.findIndex(item => item === itemType);
  if (idx !== -1) {
    slots[idx] = 0;
    renderInventorySlots();
    syncSelectedHotbar();
    return true;
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
  const armorIcons = ['security', 'checkroom', 'accessibility', 'directions_run'];
  const armorLabels = ['Capacete', 'Peitoral', 'Calças', 'Botas'];
  for (let i = 0; i < 4; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all';
    slot.title = `Slot de ${armorLabels[i]}`;

    if (armorSlots[i] > 0) {
      const icon = createBlockIconCanvas(armorSlots[i], 30);
      slot.appendChild(icon);
    } else {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'material-symbols-outlined text-on-surface-variant text-base opacity-60';
      iconSpan.textContent = armorIcons[i];
      slot.appendChild(iconSpan);
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
    slot.className = 'slot w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer relative transition-all';

    if (inv2x2Slots[i] > 0) {
      const icon = createBlockIconCanvas(inv2x2Slots[i], 32);
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
    const icon = createBlockIconCanvas(current2x2Output.result, 40);
    craft2x2Output.appendChild(icon);

    if (current2x2Output.count > 1) {
      const badge = document.createElement('span');
      badge.className = 'slot-count font-label-caps text-xs font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded shadow';
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
    createSlotElement(i, hotbarGrid, true, i === selectedHotbarIndex);
  }
}

function createSlotElement(index, parentEl, isHotbar = false, isSelected = false) {
  const slot = document.createElement('div');
  slot.className = `slot w-full h-11 md:h-12 rounded-lg bg-surface-container-lowest border ${
    isSelected ? 'border-primary shadow-[0_0_10px_rgba(120,220,119,0.5)] active' : 'border-outline-variant hover:border-primary/80'
  } flex items-center justify-center cursor-pointer relative transition-all`;

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
