/**
 * Furnace System — Minecraft-style smelting mechanism and interactive 3D block GUI.
 * Smelts raw iron ore into iron ingots and cooks raw meat into roasted food using coal or wood fuel.
 */

import { BlockType, ITEM_NAMES } from '../world/blockTypes.js';
import { createBlockIconCanvas } from './blockIcon.js';
import { playCraftSound, playInventorySound } from '../engine/soundFx.js';
import { addItemToInventory, getHotbarSlots } from './inventory.js';
import { openWindow, closeWindow, UIWindow, isWindowOpen } from './uiManager.js';

// Recipes: Input BlockType -> Output BlockType
const SMELT_RECIPES = {
  [BlockType.IRON_ORE]:    { output: BlockType.IRON_INGOT,      time: 3.5 },
  [BlockType.PORKCHOP]:    { output: BlockType.COOKED_PORKCHOP, time: 2.5 },
  [BlockType.COBBLESTONE]: { output: BlockType.STONE,           time: 3.0 },
};

// Fuels: Item Type -> Burn Duration in seconds
const FUEL_DURATIONS = {
  [BlockType.COAL_ORE]:    16.0,
  [BlockType.WOOD_LOG]:     6.0,
  [BlockType.WOOD_PLANKS]:  3.0,
  [BlockType.STICK]:        1.5,
};

// World Furnaces State: key 'x,y,z' -> state object
const worldFurnaces = new Map();

let activeFurnaceKey = null;
let furnaceModal = null;

function getOrCreateFurnaceState(x, y, z) {
  const key = `${x},${y},${z}`;
  if (!worldFurnaces.has(key)) {
    worldFurnaces.set(key, {
      x, y, z,
      inputItem: 0,
      inputCount: 0,
      fuelItem: 0,
      fuelCount: 0,
      outputItem: 0,
      outputCount: 0,
      burnTimeRemaining: 0,
      maxBurnTime: 0,
      cookProgress: 0,
    });
  }
  return worldFurnaces.get(key);
}

export function openFurnace(x, y, z) {
  activeFurnaceKey = `${x},${y},${z}`;
  getOrCreateFurnaceState(x, y, z);

  if (!furnaceModal) {
    initFurnaceUI();
  }

  furnaceModal.style.display = 'block';
  openWindow(UIWindow.FURNACE);
  playInventorySound(true);
  renderFurnaceSlots();
}

export function closeFurnace() {
  if (!furnaceModal) return;
  furnaceModal.style.display = 'none';
  activeFurnaceKey = null;
  closeWindow(UIWindow.FURNACE);
  playInventorySound(false);
}

export function isFurnaceOpen() {
  return isWindowOpen(UIWindow.FURNACE);
}

export function updateFurnaces(dt) {
  for (const [key, f] of worldFurnaces.entries()) {
    const hasInput = f.inputItem > 0 && SMELT_RECIPES[f.inputItem];
    const recipe = hasInput ? SMELT_RECIPES[f.inputItem] : null;

    // Burn fuel countdown
    if (f.burnTimeRemaining > 0) {
      f.burnTimeRemaining = Math.max(0, f.burnTimeRemaining - dt);
    }

    // If we have valid input and can output, ignite fuel if not burning
    if (recipe && (f.outputItem === 0 || f.outputItem === recipe.output)) {
      if (f.burnTimeRemaining <= 0 && f.fuelCount > 0 && FUEL_DURATIONS[f.fuelItem]) {
        f.maxBurnTime = FUEL_DURATIONS[f.fuelItem];
        f.burnTimeRemaining = f.maxBurnTime;
        f.fuelCount--;
        if (f.fuelCount <= 0) f.fuelItem = 0;
      }

      // Cook item while burning
      if (f.burnTimeRemaining > 0) {
        f.cookProgress += dt;
        if (f.cookProgress >= recipe.time) {
          // Finish cooking item!
          f.cookProgress = 0;
          f.inputCount--;
          if (f.inputCount <= 0) f.inputItem = 0;

          f.outputItem = recipe.output;
          f.outputCount = (f.outputCount || 0) + 1;
        }
      } else {
        // Cooldown if fire went out
        f.cookProgress = Math.max(0, f.cookProgress - dt * 0.5);
      }
    } else {
      f.cookProgress = 0;
    }
  }

  if (isFurnaceOpen()) {
    renderFurnaceSlots();
  }
}

function initFurnaceUI() {
  furnaceModal = document.createElement('div');
  furnaceModal.id = 'furnace-modal';
  Object.assign(furnaceModal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '460px',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(15, 23, 42, 0.96)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(249, 115, 22, 0.15)',
    zIndex: '150',
    display: 'none',
    color: '#f8fafc',
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
    backdropFilter: 'blur(16px)',
  });

  furnaceModal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🔥</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#f97316;">FORNALHA & FUNDIÇÃO</h2>
      </div>
      <button id="close-furnace-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <!-- Smelting Chamber -->
    <div style="display:flex; align-items:center; justify-content:center; gap:24px; margin-bottom:20px; background:rgba(30,41,59,0.6); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
      <!-- Left Column: Input + Fire + Fuel -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div id="furnace-input-slot" style="width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.85); border:2px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Coloque Minério de Ferro ou Carne Crua"></div>
        
        <div id="furnace-flame" style="font-size:20px; opacity:0.3; transition:opacity 0.2s;">🔥</div>
        
        <div id="furnace-fuel-slot" style="width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.85); border:2px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;" title="Coloque Carvão ou Madeira como combustível"></div>
      </div>

      <!-- Center: Progress Arrow -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
        <div style="font-size:12px; font-weight:700; color:#cbd5e1; letter-spacing:1px;">FUNDIÇÃO</div>
        <div style="width:80px; height:10px; background:rgba(15,23,42,0.9); border-radius:5px; overflow:hidden; border:1px solid rgba(255,255,255,0.15);">
          <div id="furnace-progress-bar" style="width:0%; height:100%; background:linear-gradient(90deg, #f97316, #eab308); transition:width 0.1s;"></div>
        </div>
        <div style="font-size:22px; color:#f97316;">➜</div>
      </div>

      <!-- Right Column: Output Product -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <div id="furnace-output-slot" style="width:58px; height:58px; border-radius:10px; background:rgba(15,23,42,0.9); border:2.5px solid #f97316; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative; box-shadow:0 0 16px rgba(249,115,22,0.3);" title="Clique para coletar o item fundido"></div>
        <span style="font-size:11px; color:#cbd5e1; font-weight:700;">PRODUTO</span>
      </div>
    </div>

    <!-- Quick Player Hotbar Transfer -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">SEU INVENTÁRIO (Clique para transferir)</div>
    <div id="furnace-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `;

  document.body.appendChild(furnaceModal);

  document.getElementById('close-furnace-btn').addEventListener('click', closeFurnace);

  document.getElementById('furnace-output-slot').addEventListener('click', () => {
    if (!activeFurnaceKey) return;
    const f = worldFurnaces.get(activeFurnaceKey);
    if (!f || f.outputItem === 0) return;

    if (addItemToInventory(f.outputItem)) {
      playCraftSound();
      f.outputCount--;
      if (f.outputCount <= 0) {
        f.outputItem = 0;
      }
      renderFurnaceSlots();
    }
  });

  // Clicking input/fuel transfers selected items
  document.getElementById('furnace-input-slot').addEventListener('click', () => {
    if (!activeFurnaceKey) return;
    const f = worldFurnaces.get(activeFurnaceKey);
    if (!f) return;
    if (f.inputItem > 0) {
      if (addItemToInventory(f.inputItem)) {
        f.inputCount--;
        if (f.inputCount <= 0) f.inputItem = 0;
        renderFurnaceSlots();
      }
    }
  });

  document.getElementById('furnace-fuel-slot').addEventListener('click', () => {
    if (!activeFurnaceKey) return;
    const f = worldFurnaces.get(activeFurnaceKey);
    if (!f) return;
    if (f.fuelItem > 0) {
      if (addItemToInventory(f.fuelItem)) {
        f.fuelCount--;
        if (f.fuelCount <= 0) f.fuelItem = 0;
        renderFurnaceSlots();
      }
    }
  });
}

function renderFurnaceSlots() {
  if (!activeFurnaceKey) return;
  const f = worldFurnaces.get(activeFurnaceKey);
  if (!f) return;

  const inputEl = document.getElementById('furnace-input-slot');
  const fuelEl = document.getElementById('furnace-fuel-slot');
  const outputEl = document.getElementById('furnace-output-slot');
  const flameEl = document.getElementById('furnace-flame');
  const barEl = document.getElementById('furnace-progress-bar');
  const hotbarEl = document.getElementById('furnace-hotbar-grid');

  if (!inputEl || !fuelEl || !outputEl || !flameEl || !barEl || !hotbarEl) return;

  // Render Input Slot
  inputEl.innerHTML = '';
  if (f.inputItem > 0) {
    const icon = createBlockIconCanvas(f.inputItem, 36);
    inputEl.appendChild(icon);
    if (f.inputCount > 1) {
      const badge = document.createElement('span');
      badge.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;';
      badge.textContent = f.inputCount;
      inputEl.appendChild(badge);
    }
  }

  // Render Fuel Slot
  fuelEl.innerHTML = '';
  if (f.fuelItem > 0) {
    const icon = createBlockIconCanvas(f.fuelItem, 36);
    fuelEl.appendChild(icon);
    if (f.fuelCount > 1) {
      const badge = document.createElement('span');
      badge.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;';
      badge.textContent = f.fuelCount;
      fuelEl.appendChild(badge);
    }
  }

  // Render Flame & Progress
  flameEl.style.opacity = f.burnTimeRemaining > 0 ? '1' : '0.25';
  const recipe = f.inputItem > 0 ? SMELT_RECIPES[f.inputItem] : null;
  const pct = recipe ? Math.min(100, Math.round((f.cookProgress / recipe.time) * 100)) : 0;
  barEl.style.width = `${pct}%`;

  // Render Output Slot
  outputEl.innerHTML = '';
  if (f.outputItem > 0) {
    const icon = createBlockIconCanvas(f.outputItem, 44);
    outputEl.appendChild(icon);
    if (f.outputCount > 1) {
      const badge = document.createElement('span');
      badge.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:13px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;';
      badge.textContent = f.outputCount;
      outputEl.appendChild(badge);
    }
  }

  // Render Quick Hotbar
  hotbarEl.innerHTML = '';
  const hotbar = getHotbarSlots();
  hotbar.forEach((type, idx) => {
    const slot = document.createElement('div');
    slot.style.cssText = 'width:40px; height:40px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer;';
    if (type > 0) {
      const icon = createBlockIconCanvas(type, 30);
      slot.appendChild(icon);
      slot.title = `${ITEM_NAMES[type] || 'Item'} (Clique para colocar na Fornalha)`;
      slot.addEventListener('click', () => {
        // If it is smeltable ore/meat -> transfer to input
        if (SMELT_RECIPES[type]) {
          if (f.inputItem === 0 || f.inputItem === type) {
            f.inputItem = type;
            f.inputCount = (f.inputCount || 0) + 1;
            hotbar[idx] = 0;
            renderFurnaceSlots();
          }
        } else if (FUEL_DURATIONS[type]) {
          // If fuel -> transfer to fuel slot
          if (f.fuelItem === 0 || f.fuelItem === type) {
            f.fuelItem = type;
            f.fuelCount = (f.fuelCount || 0) + 1;
            hotbar[idx] = 0;
            renderFurnaceSlots();
          }
        }
      });
    }
    hotbarEl.appendChild(slot);
  });
}
