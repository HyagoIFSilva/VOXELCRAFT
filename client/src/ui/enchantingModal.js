/**
 * Enchanting Table UI Modal — Arcane spellcrafting interface.
 *
 * Allows players to empower weapons, armors, and tools with
 * Sharpness, Protection, Efficiency, and Fire Aspect using XP.
 */

import { BlockType } from '../world/blockTypes.js';
import { getPlayerLevel, spendPlayerLevels, enchantItem, EnchantmentType } from '../engine/enchantingSystem.js';
import { playCraftSound, playCriticalHitSound } from '../engine/soundFx.js';
import { spawnCriticalHitParticles } from '../rendering/particles.js';
import { getPlayerPosition } from '../entities/player.js';

let modal = null;

export function initEnchantingTableModal() {
  if (modal) return;

  modal = document.createElement('div');
  modal.id = 'enchanting-modal';
  modal.className = 'fixed inset-0 z-[160] hidden items-center justify-center p-4 bg-black/70 backdrop-blur-md select-none';

  modal.innerHTML = `
    <div class="glass-panel w-full max-w-lg bg-surface/95 backdrop-blur-2xl border border-purple-500/40 rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.35)] overflow-hidden p-6 text-on-surface">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-purple-500/30 pb-3 mb-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-purple-400 text-3xl animate-pulse">auto_fix_high</span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-purple-300 tracking-tighter uppercase font-bold">Mesa de Encantamentos</h2>
        </div>
        <button id="close-enchant-modal" class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-xl font-bold p-1">&times;</button>
      </div>

      <p class="text-xs text-purple-200/80 mb-5 tracking-wide">
        Canalize seus pontos de experiência arcanos para forjar encantamentos lendários em seus equipamentos.
      </p>

      <!-- Player XP Indicator -->
      <div class="flex items-center justify-between bg-purple-950/40 border border-purple-500/30 rounded-xl px-4 py-3 mb-6">
        <span class="text-xs font-label-caps text-purple-300">Nível Arcano do Jogador:</span>
        <span id="enchant-player-level" class="text-lg font-bold text-green-400 font-mono">Nível 1</span>
      </div>

      <!-- Enchantment Options -->
      <div class="flex flex-col gap-3.5 mb-6">
        <button id="btn-enchant-sharpness" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-cyan-400 group-hover:scale-110 transition-transform">swords</span>
            <div class="text-left">
              <div class="font-bold text-sm text-cyan-200">Afiação Arcana (Sharpness II)</div>
              <div class="text-[11px] text-purple-300/70">+5 Dano de Ataque na Espada</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>

        <button id="btn-enchant-fire" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-orange-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform">local_fire_department</span>
            <div class="text-left">
              <div class="font-bold text-sm text-orange-200">Aspecto Flamejante (Fire Aspect)</div>
              <div class="text-[11px] text-purple-300/70">Incendeia monstros e mobs ao golpear</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 3 Níveis</span>
        </button>

        <button id="btn-enchant-efficiency" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-emerald-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-emerald-400 group-hover:scale-110 transition-transform">bolt</span>
            <div class="text-left">
              <div class="font-bold text-sm text-emerald-200">Eficiência (Efficiency III)</div>
              <div class="text-[11px] text-purple-300/70">+90% Velocidade de Mineração na Picareta</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>

        <button id="btn-enchant-protection" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-blue-500/40 transition-all group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">shield</span>
            <div class="text-left">
              <div class="font-bold text-sm text-blue-200">Proteção Mística (Protection II)</div>
              <div class="text-[11px] text-purple-300/70">+30% Redução de Dano em Armaduras</div>
            </div>
          </div>
          <span class="bg-purple-950 px-3 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/30">Custa 2 Níveis</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('close-enchant-modal').addEventListener('click', closeEnchantingTable);

  document.getElementById('btn-enchant-sharpness').addEventListener('click', () => applyEnchantment(EnchantmentType.SHARPNESS, 2, 2));
  document.getElementById('btn-enchant-fire').addEventListener('click', () => applyEnchantment(EnchantmentType.FIRE_ASPECT, 1, 3));
  document.getElementById('btn-enchant-efficiency').addEventListener('click', () => applyEnchantment(EnchantmentType.EFFICIENCY, 3, 2));
  document.getElementById('btn-enchant-protection').addEventListener('click', () => applyEnchantment(EnchantmentType.PROTECTION, 2, 2));
}

function applyEnchantment(type, level, levelCost) {
  if (spendPlayerLevels(levelCost)) {
    enchantItem('active_weapon', type, level);
    playCriticalHitSound();
    const p = getPlayerPosition();
    spawnCriticalHitParticles(p.x, p.y + 1, p.z);
    updateEnchantLevelDisplay();
  } else {
    playCraftSound();
  }
}

function updateEnchantLevelDisplay() {
  const el = document.getElementById('enchant-player-level');
  if (el) el.textContent = `Nível ${getPlayerLevel()}`;
}

export function openEnchantingTable() {
  initEnchantingTableModal();
  updateEnchantLevelDisplay();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

export function closeEnchantingTable() {
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
