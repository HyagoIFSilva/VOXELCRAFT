/**
 * Furnace System — Industrial Furnace Interface & Smelting Mechanism.
 * Smelts raw iron ore into iron ingots and cooks raw meat into roasted food using coal or wood fuel.
 * Styled with Tailwind dark-green glassmorphism, Space Grotesk, JetBrains Mono, and animated heat glow.
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
  [BlockType.MUTTON]:      { output: BlockType.COOKED_MUTTON,   time: 2.5 },
  [BlockType.COBBLESTONE]: { output: BlockType.STONE,           time: 3.0 },
};

// Fuels: Item Type -> Burn Duration in seconds
const FUEL_DURATIONS = {
  [BlockType.LAVA]:        60.0,
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

  furnaceModal.style.display = 'flex';
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
  furnaceModal.className = 'fixed inset-0 z-[150] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-md select-none';

  furnaceModal.innerHTML = `
    <div class="glass-panel w-full max-w-3xl bg-surface/90 backdrop-blur-xl border border-outline-variant rounded-xl shadow-[0_0_30px_rgba(15,21,14,0.9)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <header class="flex justify-between items-center border-b border-outline-variant pb-3 mb-6">
        <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase flex items-center gap-2 font-bold">
          <span class="material-symbols-outlined text-tertiary-container" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
          <span>Industrial Furnace</span>
        </h1>
        <button id="close-furnace-btn" aria-label="Close" class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </header>

      <!-- Furnace Interface Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <!-- Left Side: Input & Fuel -->
        <div class="md:col-span-5 flex flex-col items-center gap-4 bg-surface-container/50 p-6 rounded-xl border border-outline-variant">
          <!-- Input Slot -->
          <div id="furnace-input-slot" class="w-24 h-24 bg-surface-container-lowest border border-outline-variant hover:border-primary rounded-xl transition-all cursor-pointer flex items-center justify-center relative group shadow-inner" title="Clique para colocar Minério ou Carne">
            <span class="absolute bottom-1.5 font-label-caps text-[10px] text-on-surface-variant uppercase">INPUT</span>
          </div>

          <!-- Fire Progress (Fuel Consumption) -->
          <div class="flex flex-col items-center gap-1">
            <div class="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <span id="furnace-flame-bg" class="material-symbols-outlined text-outline-variant text-4xl opacity-30 leading-none">local_fire_department</span>
              <div id="furnace-flame-active" class="absolute bottom-0 w-full overflow-hidden transition-all duration-300 ease-linear flex items-end justify-center" style="height: 0%;">
                <span class="material-symbols-outlined text-tertiary-container text-4xl leading-none" style="font-variation-settings: 'FILL' 1; text-shadow: 0 0 12px #ff6c5c;">local_fire_department</span>
              </div>
            </div>
          </div>

          <!-- Fuel Slot -->
          <div id="furnace-fuel-slot" class="w-24 h-24 bg-surface-container-lowest border border-outline-variant hover:border-primary rounded-xl transition-all cursor-pointer flex items-center justify-center relative group shadow-inner" title="Clique para colocar Carvão ou Madeira">
            <span class="absolute bottom-1.5 font-label-caps text-[10px] text-on-surface-variant uppercase">FUEL</span>
          </div>
        </div>

        <!-- Middle: Smelting Progress Arrow -->
        <div class="md:col-span-2 flex justify-center items-center py-4 md:py-0">
          <div class="relative flex items-center w-full max-w-[120px]">
            <div class="w-full h-7 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant relative">
              <!-- Active Progress Fill -->
              <div id="furnace-progress-bar" class="absolute top-[2px] bottom-[2px] left-[2px] bg-primary rounded-full transition-all duration-200 ease-linear shadow-[0_0_8px_rgba(120,220,119,0.5)]" style="width: 0%;"></div>
            </div>
            <!-- Arrow Head Icon over progress -->
            <span class="material-symbols-outlined text-primary absolute left-1/2 -translate-x-1/2 text-3xl drop-shadow-[0_0_6px_rgba(120,220,119,0.8)]" style="font-variation-settings: 'FILL' 1;">arrow_right_alt</span>
          </div>
        </div>

        <!-- Right Side: Output -->
        <div class="md:col-span-5 flex flex-col items-center gap-5 bg-surface-container/40 p-6 rounded-xl border border-outline-variant h-full justify-center">
          <span class="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">Output Forjado</span>
          <!-- Output Slot -->
          <div id="furnace-output-slot" class="w-36 h-36 bg-surface-container-lowest border-2 border-primary rounded-2xl shadow-[0_0_20px_rgba(120,220,119,0.3)] transition-all cursor-pointer flex items-center justify-center relative group bg-gradient-to-b from-surface-container-lowest to-surface-variant/20" title="Clique para coletar o item">
            <span class="absolute bottom-2 font-label-caps text-[11px] text-primary/70 uppercase">PRODUTO</span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 w-full mt-2">
            <button id="btn-furnace-stop" class="flex-1 bg-surface-container-high border border-outline-variant hover:border-error text-on-surface hover:text-error font-body-md py-2.5 px-3 rounded-lg transition-all flex justify-center items-center gap-1.5 cursor-pointer text-sm font-semibold">
              <span class="material-symbols-outlined text-lg">stop_circle</span>
              <span>Parar</span>
            </button>
            <button id="btn-furnace-collect" class="flex-1 bg-primary text-on-primary border border-primary-fixed hover:bg-primary-fixed font-body-md py-2.5 px-3 rounded-lg transition-all flex justify-center items-center gap-1.5 shadow-[0_0_15px_rgba(120,220,119,0.4)] cursor-pointer text-sm font-bold">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">download</span>
              <span>Coletar</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Player Hotbar Transfer -->
      <div class="mt-6 pt-4 border-t border-outline-variant/60">
        <div class="flex justify-between items-center mb-2">
          <span class="font-label-caps text-xs text-secondary uppercase font-semibold">Seu Inventário Rápido (Clique para carregar na Fornalha)</span>
        </div>
        <div id="furnace-hotbar-grid" class="grid grid-cols-9 gap-2"></div>
      </div>
    </div>
  `;

  document.body.appendChild(furnaceModal);

  document.getElementById('close-furnace-btn').addEventListener('click', closeFurnace);

  document.getElementById('btn-furnace-collect').addEventListener('click', collectFurnaceOutput);
  document.getElementById('furnace-output-slot').addEventListener('click', collectFurnaceOutput);

  document.getElementById('btn-furnace-stop').addEventListener('click', () => {
    if (!activeFurnaceKey) return;
    const f = worldFurnaces.get(activeFurnaceKey);
    if (!f) return;
    if (f.inputItem > 0) {
      addItemToInventory(f.inputItem);
      f.inputCount--;
      if (f.inputCount <= 0) f.inputItem = 0;
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

function collectFurnaceOutput() {
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
}

function renderFurnaceSlots() {
  if (!activeFurnaceKey) return;
  const f = worldFurnaces.get(activeFurnaceKey);
  if (!f) return;

  const inputEl = document.getElementById('furnace-input-slot');
  const fuelEl = document.getElementById('furnace-fuel-slot');
  const outputEl = document.getElementById('furnace-output-slot');
  const flameActiveEl = document.getElementById('furnace-flame-active');
  const barEl = document.getElementById('furnace-progress-bar');
  const hotbarEl = document.getElementById('furnace-hotbar-grid');

  if (!inputEl || !fuelEl || !outputEl || !flameActiveEl || !barEl || !hotbarEl) return;

  // Render Input Slot
  inputEl.innerHTML = '';
  if (f.inputItem > 0) {
    const icon = createBlockIconCanvas(f.inputItem, 48);
    inputEl.appendChild(icon);
    if (f.inputCount > 1) {
      const badge = document.createElement('span');
      badge.className = 'absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold';
      badge.textContent = f.inputCount;
      inputEl.appendChild(badge);
    }
  } else {
    const label = document.createElement('span');
    label.className = 'font-label-caps text-[10px] text-on-surface-variant uppercase';
    label.textContent = 'INPUT';
    inputEl.appendChild(label);
  }

  // Render Fuel Slot
  fuelEl.innerHTML = '';
  if (f.fuelItem > 0) {
    const icon = createBlockIconCanvas(f.fuelItem, 48);
    fuelEl.appendChild(icon);
    if (f.fuelCount > 1) {
      const badge = document.createElement('span');
      badge.className = 'absolute -top-2 -right-2 bg-error text-on-error font-label-caps text-xs px-2 py-0.5 rounded shadow font-bold';
      badge.textContent = f.fuelCount;
      fuelEl.appendChild(badge);
    }
  } else {
    const label = document.createElement('span');
    label.className = 'font-label-caps text-[10px] text-on-surface-variant uppercase';
    label.textContent = 'FUEL';
    fuelEl.appendChild(label);
  }

  // Render Flame & Progress
  const burnPct = f.maxBurnTime > 0 ? Math.min(100, Math.round((f.burnTimeRemaining / f.maxBurnTime) * 100)) : 0;
  flameActiveEl.style.height = `${burnPct}%`;

  const recipe = f.inputItem > 0 ? SMELT_RECIPES[f.inputItem] : null;
  const pct = recipe ? Math.min(100, Math.round((f.cookProgress / recipe.time) * 100)) : 0;
  barEl.style.width = `${pct}%`;

  // Render Output Slot
  outputEl.innerHTML = '';
  if (f.outputItem > 0) {
    const icon = createBlockIconCanvas(f.outputItem, 64);
    outputEl.appendChild(icon);
    if (f.outputCount > 1) {
      const badge = document.createElement('span');
      badge.className = 'absolute -top-3 -right-3 bg-primary text-on-primary font-label-caps text-sm px-2.5 py-1 rounded shadow-[0_0_10px_rgba(120,220,119,0.8)] font-bold';
      badge.textContent = f.outputCount;
      outputEl.appendChild(badge);
    }
  } else {
    const label = document.createElement('span');
    label.className = 'font-label-caps text-[11px] text-primary/70 uppercase';
    label.textContent = 'PRODUTO';
    outputEl.appendChild(label);
  }

  // Render Quick Hotbar
  hotbarEl.innerHTML = '';
  const hotbar = getHotbarSlots();
  hotbar.forEach((type, idx) => {
    const slot = document.createElement('div');
    slot.className = 'slot w-full h-11 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary flex items-center justify-center cursor-pointer transition-all';
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
