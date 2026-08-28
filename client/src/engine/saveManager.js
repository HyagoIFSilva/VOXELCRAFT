/**
 * Save Manager — Automatic and manual world & player state persistence in localStorage.
 */

import { getPlayerPosition, getHealth } from '../entities/player.js';
import { getHotbarSlots, armorSlots } from '../ui/inventory.js';

const SAVE_KEY = 'voxelcraft_world_save_v03';

export function saveWorld() {
  try {
    const pos = getPlayerPosition();
    const hotbar = getHotbarSlots();
    const hp = getHealth();

    const data = {
      timestamp: Date.now(),
      player: {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        health: hp,
        hotbar,
        armor: [...armorSlots],
      },
    };

    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('Could not save world data:', err);
  }
}

export function loadWorld() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;

    const data = JSON.parse(raw);
    if (!data || !data.player) return false;

    const pos = getPlayerPosition();
    if (pos && data.player.x !== undefined) {
      pos.set(data.player.x, data.player.y, data.player.z);
    }

    if (data.player.armor) {
      for (let i = 0; i < 4; i++) {
        armorSlots[i] = data.player.armor[i] || 0;
      }
    }

    return true;
  } catch (err) {
    console.warn('Could not load world data:', err);
    return false;
  }
}

export function hasSavedWorld() {
  return !!localStorage.getItem(SAVE_KEY);
}
