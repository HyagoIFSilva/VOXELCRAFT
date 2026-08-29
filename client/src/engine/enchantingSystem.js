/**
 * Enchanting System — Arcane Enchantments & Experience Leveling.
 *
 * Implements Sharpness, Protection, Efficiency, Fire Aspect, and XP levels.
 */

import { BlockType } from '../world/blockTypes.js';

export const EnchantmentType = {
  SHARPNESS:   'sharpness',   // Extra sword damage + glint
  PROTECTION:  'protection',  // Extra armor defense
  EFFICIENCY:  'efficiency',  // Mining speed multiplier
  FIRE_ASPECT: 'fire_aspect', // Ignites enemies on hit
  UNBREAKING:  'unbreaking',  // Enhanced durability
};

export const ENCHANTMENT_NAMES = {
  [EnchantmentType.SHARPNESS]:   'Afiação',
  [EnchantmentType.PROTECTION]:  'Proteção',
  [EnchantmentType.EFFICIENCY]:  'Eficiência',
  [EnchantmentType.FIRE_ASPECT]: 'Aspecto Flamejante',
  [EnchantmentType.UNBREAKING]:  'Inquebrável',
};

// Player progression state
let playerXp = 0;
let playerLevel = 1;
const itemEnchantments = new Map(); // key "slotId" or "itemKey" => [{ type, level }]

export function getPlayerXp() {
  return playerXp;
}

export function getPlayerLevel() {
  return playerLevel;
}

export function addPlayerXp(amount) {
  playerXp += amount;
  const xpNeeded = playerLevel * 25;
  while (playerXp >= xpNeeded) {
    playerXp -= xpNeeded;
    playerLevel++;
  }
}

export function spendPlayerLevels(levels) {
  if (playerLevel > levels) {
    playerLevel -= levels;
    return true;
  }
  return false;
}

/**
 * Enchant an item slot.
 */
export function enchantItem(slotKey, enchantType, level = 1) {
  const current = itemEnchantments.get(slotKey) || [];
  // Replace or add
  const filtered = current.filter(e => e.type !== enchantType);
  filtered.push({ type: enchantType, level });
  itemEnchantments.set(slotKey, filtered);
}

export function getItemEnchantments(slotKey) {
  return itemEnchantments.get(slotKey) || [];
}

export function getBonusDamage(slotKey) {
  const enchants = getItemEnchantments(slotKey);
  const sharp = enchants.find(e => e.type === EnchantmentType.SHARPNESS);
  return sharp ? sharp.level * 2.5 : 0;
}

export function getBonusEfficiency(slotKey) {
  const enchants = getItemEnchantments(slotKey);
  const eff = enchants.find(e => e.type === EnchantmentType.EFFICIENCY);
  return eff ? eff.level * 0.45 : 0;
}

export function hasFireAspect(slotKey) {
  const enchants = getItemEnchantments(slotKey);
  return enchants.some(e => e.type === EnchantmentType.FIRE_ASPECT);
}
