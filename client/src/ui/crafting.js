/**
 * Crafting System — Minecraft-style 2×2 and 3×3 shape-based and shapeless recipe evaluator,
 * 3×3 Crafting Table GUI, and interactive visual Recipe Book (?).
 */

import { BlockType, ITEM_NAMES } from '../world/blockTypes.js';
import { createBlockIconCanvas } from './blockIcon.js';
import { playCraftSound, playInventorySound } from '../engine/soundFx.js';
import { addItemToInventory, getHotbarSlots } from './inventory.js';
import { openWindow, closeWindow, UIWindow, isWindowOpen } from './uiManager.js';

let craftingTableModal = null;
let recipeBookModal = null;

// 3×3 Table slots state (9 slots)
export const tableSlots = new Array(9).fill(0);
// 2×2 Inventory crafting slots state (4 slots)
export const inv2x2Slots = new Array(4).fill(0);

let currentTableOutput = null;

// ── Complete Catalog of Progression Recipes ──────────────────

export const RECIPE_CATALOG = [
  // ── 1. Wood Planks (Shapeless: 1 Wood Log -> 4 Planks) ──
  {
    id: 'planks',
    name: 'Tábuas de Madeira',
    category: 'Blocos',
    result: BlockType.WOOD_PLANKS,
    count: 4,
    gridSize: 2,
    layout: [BlockType.WOOD_LOG, 0, 0, 0],
    desc: 'Coloque 1 Tronco de Carvalho em qualquer espaço da grade.',
    check: (grid) => {
      const logs = grid.filter(v => v === BlockType.WOOD_LOG).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.WOOD_LOG).length;
      return logs === 1 && others === 0;
    },
  },

  // ── 2. Sticks (Vertical 2 Planks -> 4 Sticks) ──
  {
    id: 'sticks',
    name: 'Gravetos',
    category: 'Materiais',
    result: BlockType.STICK,
    count: 4,
    gridSize: 2,
    layout: [BlockType.WOOD_PLANKS, 0, BlockType.WOOD_PLANKS, 0],
    desc: 'Coloque 2 Tábuas de Madeira verticalmente.',
    check: (grid, w, h) => {
      if (w === 2 && h === 2) {
        return (
          (grid[0] === BlockType.WOOD_PLANKS && grid[2] === BlockType.WOOD_PLANKS && grid[1] === 0 && grid[3] === 0) ||
          (grid[1] === BlockType.WOOD_PLANKS && grid[3] === BlockType.WOOD_PLANKS && grid[0] === 0 && grid[2] === 0)
        );
      }
      if (w === 3 && h === 3) {
        for (let col = 0; col < 3; col++) {
          for (let row = 0; row < 2; row++) {
            const idx1 = row * 3 + col;
            const idx2 = (row + 1) * 3 + col;
            if (grid[idx1] === BlockType.WOOD_PLANKS && grid[idx2] === BlockType.WOOD_PLANKS) {
              const othersEmpty = grid.every((v, i) => (i === idx1 || i === idx2) ? true : v === 0);
              if (othersEmpty) return true;
            }
          }
        }
      }
      return false;
    },
  },

  // ── 3. Crafting Table (2×2 Planks -> 1 Crafting Table) ──
  {
    id: 'crafting_table',
    name: 'Bancada de Trabalho',
    category: 'Blocos',
    result: BlockType.CRAFTING_TABLE,
    count: 1,
    gridSize: 2,
    layout: [BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS],
    desc: 'Preencha os 4 espaços (2×2) com Tábuas de Madeira.',
    check: (grid, w, h) => {
      if (w === 2 && h === 2) {
        return grid.every(v => v === BlockType.WOOD_PLANKS);
      }
      if (w === 3 && h === 3) {
        const offsets = [0, 1, 3, 4];
        for (const off of offsets) {
          const r0c0 = off;
          const r0c1 = off + 1;
          const r1c0 = off + 3;
          const r1c1 = off + 4;
          if (
            grid[r0c0] === BlockType.WOOD_PLANKS &&
            grid[r0c1] === BlockType.WOOD_PLANKS &&
            grid[r1c0] === BlockType.WOOD_PLANKS &&
            grid[r1c1] === BlockType.WOOD_PLANKS
          ) {
            const othersEmpty = grid.every((v, i) => (i === r0c0 || i === r0c1 || i === r1c0 || i === r1c1) ? true : v === 0);
            if (othersEmpty) return true;
          }
        }
      }
      return false;
    },
  },

  // ── 4. Furnace (8 Cobblestone around center in 3x3) ──
  {
    id: 'furnace',
    name: 'Fornalha',
    category: 'Blocos',
    result: BlockType.FURNACE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.COBBLESTONE, BlockType.COBBLESTONE, BlockType.COBBLESTONE,
      BlockType.COBBLESTONE, 0,                     BlockType.COBBLESTONE,
      BlockType.COBBLESTONE, BlockType.COBBLESTONE, BlockType.COBBLESTONE,
    ],
    desc: 'Disponha 8 Pedregulhos ao redor das bordas da grade 3×3, deixando o centro vazio.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const ring = [0, 1, 2, 3, 5, 6, 7, 8];
      return ring.every(i => grid[i] === BlockType.COBBLESTONE) && grid[4] === 0;
    },
  },

  // ── 5. Chest (8 Wood Planks around center in 3x3) ──
  {
    id: 'chest',
    name: 'Baú de Madeira',
    category: 'Blocos',
    result: BlockType.CHEST,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS,
      BlockType.WOOD_PLANKS, 0,                     BlockType.WOOD_PLANKS,
      BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS,
    ],
    desc: 'Disponha 8 Tábuas de Madeira ao redor da grade 3×3 com centro vazio.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const ring = [0, 1, 2, 3, 5, 6, 7, 8];
      return ring.every(i => grid[i] === BlockType.WOOD_PLANKS) && grid[4] === 0;
    },
  },

  // ── 6. Torches (Coal + Stick) ──
  {
    id: 'torches',
    name: 'Tochas (4x)',
    category: 'Iluminação',
    result: BlockType.TORCH,
    count: 4,
    gridSize: 2,
    layout: [BlockType.COAL_ORE, 0, BlockType.STICK, 0],
    desc: '1 Carvão em cima e 1 Graveto logo abaixo.',
    check: (grid, w, h) => {
      if (w === 2 && h === 2) {
        return (
          (grid[0] === BlockType.COAL_ORE && grid[2] === BlockType.STICK && grid[1] === 0 && grid[3] === 0) ||
          (grid[1] === BlockType.COAL_ORE && grid[3] === BlockType.STICK && grid[0] === 0 && grid[2] === 0)
        );
      }
      if (w === 3 && h === 3) {
        for (let col = 0; col < 3; col++) {
          for (let row = 0; row < 2; row++) {
            const topIdx = row * 3 + col;
            const botIdx = (row + 1) * 3 + col;
            if (grid[topIdx] === BlockType.COAL_ORE && grid[botIdx] === BlockType.STICK) {
              const othersEmpty = grid.every((v, i) => (i === topIdx || i === botIdx) ? true : v === 0);
              if (othersEmpty) return true;
            }
          }
        }
      }
      return false;
    },
  },

  // ── 7. Wooden Pickaxe ──
  {
    id: 'wooden_pickaxe',
    name: 'Picareta de Madeira',
    category: 'Ferramentas',
    result: BlockType.WOODEN_PICKAXE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS,
      0,                     BlockType.STICK,       0,
      0,                     BlockType.STICK,       0,
    ],
    desc: '3 Tábuas no topo e 2 Gravetos no meio (grade 3×3).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.WOOD_PLANKS && grid[1] === BlockType.WOOD_PLANKS && grid[2] === BlockType.WOOD_PLANKS &&
        grid[4] === BlockType.STICK && grid[7] === BlockType.STICK &&
        grid[3] === 0 && grid[5] === 0 && grid[6] === 0 && grid[8] === 0
      );
    },
  },

  // ── 8. Wooden Sword ──
  {
    id: 'wooden_sword',
    name: 'Espada de Madeira',
    category: 'Armas',
    result: BlockType.WOODEN_SWORD,
    count: 1,
    gridSize: 3,
    layout: [
      0, BlockType.WOOD_PLANKS, 0,
      0, BlockType.WOOD_PLANKS, 0,
      0, BlockType.STICK,       0,
    ],
    desc: '2 Tábuas verticais com 1 Graveto embaixo.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      for (let col = 0; col < 3; col++) {
        const match = grid[col] === BlockType.WOOD_PLANKS && grid[3 + col] === BlockType.WOOD_PLANKS && grid[6 + col] === BlockType.STICK;
        const othersEmpty = grid.every((v, i) => (i === col || i === 3 + col || i === 6 + col) ? true : v === 0);
        if (match && othersEmpty) return true;
      }
      return false;
    },
  },

  // ── 9. Stone Pickaxe ──
  {
    id: 'stone_pickaxe',
    name: 'Picareta de Pedra',
    category: 'Ferramentas',
    result: BlockType.STONE_PICKAXE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.COBBLESTONE, BlockType.COBBLESTONE, BlockType.COBBLESTONE,
      0,                     BlockType.STICK,       0,
      0,                     BlockType.STICK,       0,
    ],
    desc: '3 Pedregulhos no topo e 2 Gravetos no meio.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.COBBLESTONE && grid[1] === BlockType.COBBLESTONE && grid[2] === BlockType.COBBLESTONE &&
        grid[4] === BlockType.STICK && grid[7] === BlockType.STICK &&
        grid[3] === 0 && grid[5] === 0 && grid[6] === 0 && grid[8] === 0
      );
    },
  },

  // ── 10. Stone Sword ──
  {
    id: 'stone_sword',
    name: 'Espada de Pedra',
    category: 'Armas',
    result: BlockType.STONE_SWORD,
    count: 1,
    gridSize: 3,
    layout: [
      0, BlockType.COBBLESTONE, 0,
      0, BlockType.COBBLESTONE, 0,
      0, BlockType.STICK,       0,
    ],
    desc: '2 Pedregulhos verticais com 1 Graveto embaixo.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      for (let col = 0; col < 3; col++) {
        const match = grid[col] === BlockType.COBBLESTONE && grid[3 + col] === BlockType.COBBLESTONE && grid[6 + col] === BlockType.STICK;
        const othersEmpty = grid.every((v, i) => (i === col || i === 3 + col || i === 6 + col) ? true : v === 0);
        if (match && othersEmpty) return true;
      }
      return false;
    },
  },

  // ── 11. Iron Pickaxe (Uses Smelted Iron Ingots!) ──
  {
    id: 'iron_pickaxe',
    name: 'Picareta de Ferro',
    category: 'Ferramentas',
    result: BlockType.IRON_PICKAXE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, BlockType.IRON_INGOT,
      0,                    BlockType.STICK,      0,
      0,                    BlockType.STICK,      0,
    ],
    desc: '3 Barras de Ferro fundidas no topo e 2 Gravetos no centro.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.IRON_INGOT && grid[1] === BlockType.IRON_INGOT && grid[2] === BlockType.IRON_INGOT &&
        grid[4] === BlockType.STICK && grid[7] === BlockType.STICK &&
        grid[3] === 0 && grid[5] === 0 && grid[6] === 0 && grid[8] === 0
      );
    },
  },

  // ── 12. Iron Sword ──
  {
    id: 'iron_sword',
    name: 'Espada de Ferro',
    category: 'Armas',
    result: BlockType.IRON_SWORD,
    count: 1,
    gridSize: 3,
    layout: [
      0, BlockType.IRON_INGOT, 0,
      0, BlockType.IRON_INGOT, 0,
      0, BlockType.STICK,      0,
    ],
    desc: '2 Barras de Ferro verticais com 1 Graveto embaixo.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      for (let col = 0; col < 3; col++) {
        const match = grid[col] === BlockType.IRON_INGOT && grid[3 + col] === BlockType.IRON_INGOT && grid[6 + col] === BlockType.STICK;
        const othersEmpty = grid.every((v, i) => (i === col || i === 3 + col || i === 6 + col) ? true : v === 0);
        if (match && othersEmpty) return true;
      }
      return false;
    },
  },

  // ── 13. Iron Helmet (5 Iron Ingots) ──
  {
    id: 'iron_helmet',
    name: 'Capacete de Ferro',
    category: 'Armaduras',
    result: BlockType.IRON_HELMET,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, 0,                    BlockType.IRON_INGOT,
      0,                    0,                    0,
    ],
    desc: '5 Barras de Ferro em arco no topo da grade 3×3 (+2 Defesa).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.IRON_INGOT && grid[1] === BlockType.IRON_INGOT && grid[2] === BlockType.IRON_INGOT &&
        grid[3] === BlockType.IRON_INGOT && grid[4] === 0 && grid[5] === BlockType.IRON_INGOT &&
        grid[6] === 0 && grid[7] === 0 && grid[8] === 0
      );
    },
  },

  // ── 14. Iron Chestplate (8 Iron Ingots) ──
  {
    id: 'iron_chestplate',
    name: 'Peitoral de Ferro',
    category: 'Armaduras',
    result: BlockType.IRON_CHESTPLATE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, 0,                    BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, BlockType.IRON_INGOT,
    ],
    desc: '8 Barras de Ferro em formato de colete com espaço superior central (+6 Defesa).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.IRON_INGOT && grid[1] === 0 && grid[2] === BlockType.IRON_INGOT &&
        grid[3] === BlockType.IRON_INGOT && grid[4] === BlockType.IRON_INGOT && grid[5] === BlockType.IRON_INGOT &&
        grid[6] === BlockType.IRON_INGOT && grid[7] === BlockType.IRON_INGOT && grid[8] === BlockType.IRON_INGOT
      );
    },
  },

  // ── 15. Iron Leggings (7 Iron Ingots) ──
  {
    id: 'iron_leggings',
    name: 'Calças de Ferro',
    category: 'Armaduras',
    result: BlockType.IRON_LEGGINGS,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, 0,                    BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, 0,                    BlockType.IRON_INGOT,
    ],
    desc: '7 Barras de Ferro em formato de calças (+5 Defesa).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.IRON_INGOT && grid[1] === BlockType.IRON_INGOT && grid[2] === BlockType.IRON_INGOT &&
        grid[3] === BlockType.IRON_INGOT && grid[4] === 0 && grid[5] === BlockType.IRON_INGOT &&
        grid[6] === BlockType.IRON_INGOT && grid[7] === 0 && grid[8] === BlockType.IRON_INGOT
      );
    },
  },

  // ── 16. Iron Boots (4 Iron Ingots) ──
  {
    id: 'iron_boots',
    name: 'Botas de Ferro',
    category: 'Armaduras',
    result: BlockType.IRON_BOOTS,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, 0, BlockType.IRON_INGOT,
      BlockType.IRON_INGOT, 0, BlockType.IRON_INGOT,
      0,                    0, 0,
    ],
    desc: '4 Barras de Ferro em formato de botas (+2 Defesa).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      return (
        grid[0] === BlockType.IRON_INGOT && grid[1] === 0 && grid[2] === BlockType.IRON_INGOT &&
        grid[3] === BlockType.IRON_INGOT && grid[4] === 0 && grid[5] === BlockType.IRON_INGOT &&
        grid[6] === 0 && grid[7] === 0 && grid[8] === 0
      );
    },
  },

  // ── 17. Bow (3 Sticks + 3 Strings) ──
  {
    id: 'bow',
    name: 'Arco de Caça',
    category: 'Armas',
    result: BlockType.BOW,
    count: 1,
    gridSize: 3,
    layout: [
      0,               BlockType.STICK, BlockType.STRING,
      BlockType.STICK, 0,               BlockType.STRING,
      0,               BlockType.STICK, BlockType.STRING,
    ],
    desc: '3 Gravetos e 3 Linhas de Teia na bancada 3×3.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const sticks = grid.filter(v => v === BlockType.STICK).length;
      const strings = grid.filter(v => v === BlockType.STRING).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.STICK && v !== BlockType.STRING).length;
      return sticks === 3 && strings === 3 && others === 0;
    },
  },

  // ── 18. Wooden Hoe ──
  {
    id: 'wooden_hoe',
    name: 'Enxada de Madeira',
    category: 'Ferramentas',
    result: BlockType.WOODEN_HOE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.WOOD_PLANKS, BlockType.WOOD_PLANKS, 0,
      0,                     BlockType.STICK,       0,
      0,                     BlockType.STICK,       0,
    ],
    desc: '2 Tábuas no topo e 2 Gravetos verticais.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const match = (
        (grid[0] === BlockType.WOOD_PLANKS && grid[1] === BlockType.WOOD_PLANKS && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK) ||
        (grid[1] === BlockType.WOOD_PLANKS && grid[2] === BlockType.WOOD_PLANKS && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK)
      );
      const sticks = grid.filter(v => v === BlockType.STICK).length;
      const planks = grid.filter(v => v === BlockType.WOOD_PLANKS).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.STICK && v !== BlockType.WOOD_PLANKS).length;
      return match && sticks === 2 && planks === 2 && others === 0;
    },
  },

  // ── 19. Stone Hoe ──
  {
    id: 'stone_hoe',
    name: 'Enxada de Pedra',
    category: 'Ferramentas',
    result: BlockType.STONE_HOE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.COBBLESTONE, BlockType.COBBLESTONE, 0,
      0,                     BlockType.STICK,       0,
      0,                     BlockType.STICK,       0,
    ],
    desc: '2 Pedregulhos no topo e 2 Gravetos verticais.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const match = (
        (grid[0] === BlockType.COBBLESTONE && grid[1] === BlockType.COBBLESTONE && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK) ||
        (grid[1] === BlockType.COBBLESTONE && grid[2] === BlockType.COBBLESTONE && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK)
      );
      const sticks = grid.filter(v => v === BlockType.STICK).length;
      const cobble = grid.filter(v => v === BlockType.COBBLESTONE).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.STICK && v !== BlockType.COBBLESTONE).length;
      return match && sticks === 2 && cobble === 2 && others === 0;
    },
  },

  // ── 20. Iron Hoe ──
  {
    id: 'iron_hoe',
    name: 'Enxada de Ferro',
    category: 'Ferramentas',
    result: BlockType.IRON_HOE,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.IRON_INGOT, BlockType.IRON_INGOT, 0,
      0,                    BlockType.STICK,      0,
      0,                    BlockType.STICK,      0,
    ],
    desc: '2 Barras de Ferro no topo e 2 Gravetos verticais.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const match = (
        (grid[0] === BlockType.IRON_INGOT && grid[1] === BlockType.IRON_INGOT && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK) ||
        (grid[1] === BlockType.IRON_INGOT && grid[2] === BlockType.IRON_INGOT && grid[4] === BlockType.STICK && grid[7] === BlockType.STICK)
      );
      const sticks = grid.filter(v => v === BlockType.STICK).length;
      const iron = grid.filter(v => v === BlockType.IRON_INGOT).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.STICK && v !== BlockType.IRON_INGOT).length;
      return match && sticks === 2 && iron === 2 && others === 0;
    },
  },

  // ── 21. Bread (3 Wheat horizontally) ──
  {
    id: 'bread',
    name: 'Pão Dourado',
    category: 'Alimentação',
    result: BlockType.BREAD,
    count: 1,
    gridSize: 3,
    layout: [
      0,               0,               0,
      BlockType.WHEAT, BlockType.WHEAT, BlockType.WHEAT,
      0,               0,               0,
    ],
    desc: '3 Trigos colhidos em linha horizontal (+5 Vida).',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      for (let row = 0; row < 3; row++) {
        const i0 = row * 3;
        const i1 = row * 3 + 1;
        const i2 = row * 3 + 2;
        if (grid[i0] === BlockType.WHEAT && grid[i1] === BlockType.WHEAT && grid[i2] === BlockType.WHEAT) {
          const othersEmpty = grid.every((v, i) => (i === i0 || i === i1 || i === i2) ? true : v === 0);
          if (othersEmpty) return true;
        }
      }
      return false;
    },
  },

  // ── 22. TNT (4 Sand + 5 Gunpowder) ──
  {
    id: 'tnt',
    name: 'Bloco de TNT',
    category: 'Explosivos',
    result: BlockType.TNT,
    count: 1,
    gridSize: 3,
    layout: [
      BlockType.GUNPOWDER, BlockType.SAND,      BlockType.GUNPOWDER,
      BlockType.SAND,      BlockType.GUNPOWDER, BlockType.SAND,
      BlockType.GUNPOWDER, BlockType.SAND,      BlockType.GUNPOWDER,
    ],
    desc: '5 Pólvoras (drop de Creeper) intercaladas com 4 Areias.',
    check: (grid, w, h) => {
      if (w !== 3 || h !== 3) return false;
      const gp = grid.filter(v => v === BlockType.GUNPOWDER).length;
      const sand = grid.filter(v => v === BlockType.SAND).length;
      const others = grid.filter(v => v !== 0 && v !== BlockType.GUNPOWDER && v !== BlockType.SAND).length;
      return gp === 5 && sand === 4 && others === 0;
    },
  },
];

export function evaluateCrafting(grid, width, height) {
  for (const recipe of RECIPE_CATALOG) {
    if (recipe.check(grid, width, height)) {
      return { result: recipe.result, count: recipe.count, name: recipe.name };
    }
  }
  return null;
}

// ── 3×3 Crafting Table UI Modal ────────────────────────────

export function initCraftingTable() {
  if (craftingTableModal) return;

  craftingTableModal = document.createElement('div');
  craftingTableModal.id = 'crafting-table-modal';
  Object.assign(craftingTableModal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '460px',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(15, 23, 42, 0.96)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 197, 94, 0.15)',
    zIndex: '150',
    display: 'none',
    color: '#f8fafc',
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
    backdropFilter: 'blur(16px)',
  });

  craftingTableModal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:20px;">🔨</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#4ade80;">BANCADA DE TRABALHO (3×3)</h2>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button id="open-recipe-book-table" title="Guia com diagramas de montagem" style="background:linear-gradient(135deg, #3b82f6, #1d4ed8); border:1px solid #60a5fa; color:#fff; font-size:12px; font-weight:700; padding:6px 12px; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow:0 4px 12px rgba(59,130,246,0.4);">
          <span>❓</span> Receitas
        </button>
        <button id="close-table-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
      </div>
    </div>

    <!-- Crafting Matrix & Output Area -->
    <div style="display:flex; align-items:center; justify-content:center; gap:20px; margin-bottom:20px; background:rgba(30,41,59,0.6); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
      <!-- 3×3 Grid -->
      <div id="table-craft-grid" style="display:grid; grid-template-columns:repeat(3, 44px); gap:6px;"></div>

      <!-- Arrow -->
      <div style="font-size:24px; color:#4ade80;">➜</div>

      <!-- Output Slot -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
        <div id="table-output-slot" style="width:54px; height:54px; border-radius:10px; background:rgba(15,23,42,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative; box-shadow:0 0 16px rgba(34,197,94,0.3);" title="Resultado do Crafting"></div>
        <span style="font-size:11px; color:#cbd5e1; font-weight:700;">PRODUTO</span>
      </div>
    </div>

    <!-- Player Quick Hotbar Transfer -->
    <div style="font-size:12px; font-weight:700; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">SEU INVENTÁRIO (Clique para pegar)</div>
    <div id="table-hotbar-grid" style="display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;"></div>
  `;

  document.body.appendChild(craftingTableModal);

  document.getElementById('close-table-btn').addEventListener('click', closeCraftingTable);
  document.getElementById('open-recipe-book-table').addEventListener('click', openRecipeBook);

  initRecipeBook();
  renderCraftingTableGrid();
}

export function openCraftingTable() {
  if (!craftingTableModal) initCraftingTable();
  craftingTableModal.style.display = 'block';
  openWindow(UIWindow.CRAFTING_TABLE);
  playInventorySound(true);
  renderCraftingTableGrid();
}

export function closeCraftingTable() {
  if (!craftingTableModal) return;
  craftingTableModal.style.display = 'none';
  closeWindow(UIWindow.CRAFTING_TABLE);
  playInventorySound(false);

  // Return any remaining items in the table to player inventory
  for (let i = 0; i < 9; i++) {
    if (tableSlots[i] > 0) {
      addItemToInventory(tableSlots[i]);
      tableSlots[i] = 0;
    }
  }
}

export function isCraftingTableOpen() {
  return isWindowOpen(UIWindow.CRAFTING_TABLE);
}

export function renderCraftingTableGrid() {
  const gridEl = document.getElementById('table-craft-grid');
  const outputEl = document.getElementById('table-output-slot');
  const hotbarEl = document.getElementById('table-hotbar-grid');
  if (!gridEl || !outputEl || !hotbarEl) return;

  // 1. Render 3×3 Grid
  gridEl.innerHTML = '';
  tableSlots.forEach((type, idx) => {
    const slot = document.createElement('div');
    slot.style.cssText = 'width:44px; height:44px; border-radius:8px; background:rgba(15,23,42,0.85); border:1.5px solid rgba(255,255,255,0.18); display:flex; align-items:center; justify-content:center; cursor:pointer; position:relative;';

    if (type > 0) {
      const icon = createBlockIconCanvas(type, 34);
      slot.appendChild(icon);
    }

    slot.addEventListener('click', () => {
      if (tableSlots[idx] > 0) {
        addItemToInventory(tableSlots[idx]);
        tableSlots[idx] = 0;
        updateTableCraftingOutput();
        renderCraftingTableGrid();
      }
    });

    gridEl.appendChild(slot);
  });

  // 2. Render Output Slot
  outputEl.innerHTML = '';
  if (currentTableOutput && currentTableOutput.result > 0) {
    const icon = createBlockIconCanvas(currentTableOutput.result, 40);
    outputEl.appendChild(icon);

    if (currentTableOutput.count > 1) {
      const badge = document.createElement('span');
      badge.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:12px; font-weight:800; color:#fff; text-shadow:0 1px 2px #000;';
      badge.textContent = currentTableOutput.count;
      outputEl.appendChild(badge);
    }
  }

  outputEl.onclick = () => {
    if (currentTableOutput && currentTableOutput.result > 0) {
      for (let c = 0; c < currentTableOutput.count; c++) {
        addItemToInventory(currentTableOutput.result);
      }
      playCraftSound();
      for (let i = 0; i < 9; i++) {
        tableSlots[i] = 0;
      }
      updateTableCraftingOutput();
      renderCraftingTableGrid();
    }
  };

  // 3. Render Quick Hotbar
  hotbarEl.innerHTML = '';
  const hotbar = getHotbarSlots();
  hotbar.forEach((type, idx) => {
    const slot = document.createElement('div');
    slot.style.cssText = 'width:40px; height:40px; border-radius:6px; background:rgba(30,41,59,0.85); border:1.5px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; cursor:pointer;';
    if (type > 0) {
      const icon = createBlockIconCanvas(type, 30);
      slot.appendChild(icon);
      slot.title = `${ITEM_NAMES[type] || 'Item'} (Clique para colocar na bancada)`;
      slot.addEventListener('click', () => {
        const firstEmpty = tableSlots.findIndex(v => v === 0);
        if (firstEmpty !== -1) {
          tableSlots[firstEmpty] = type;
          hotbar[idx] = 0;
          updateTableCraftingOutput();
          renderCraftingTableGrid();
        }
      });
    }
    hotbarEl.appendChild(slot);
  });
}

export function updateTableCraftingOutput() {
  currentTableOutput = evaluateCrafting(tableSlots, 3, 3);
}

// ── Interactive Recipe Book (❓ Guia de Receitas) ──────────────

export function initRecipeBook() {
  if (recipeBookModal) return;

  recipeBookModal = document.createElement('div');
  recipeBookModal.id = 'recipe-book-modal';
  Object.assign(recipeBookModal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    maxHeight: '82vh',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(15, 23, 42, 0.98)',
    border: '1px solid rgba(59, 130, 246, 0.4)',
    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(59, 130, 246, 0.25)',
    zIndex: '200',
    display: 'none',
    color: '#f8fafc',
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
    backdropFilter: 'blur(20px)',
    flexDirection: 'column',
  });

  recipeBookModal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:22px;">📖</span>
        <h2 style="margin:0; font-size:18px; font-weight:800; letter-spacing:1px; color:#60a5fa;">LIVRO DE RECEITAS (GUIA DE FABRICAÇÃO)</h2>
      </div>
      <button id="close-recipe-book-btn" style="background:transparent; border:none; color:#94a3b8; font-size:20px; font-weight:bold; cursor:pointer; padding:4px 8px; border-radius:6px;">✕</button>
    </div>

    <div style="font-size:13px; color:#94a3b8; margin-bottom:14px;">
      Veja como organizar os blocos e materiais na grade para forjar cada item no jogo:
    </div>

    <!-- Recipe Cards List -->
    <div id="recipe-cards-container" style="overflow-y:auto; max-height:60vh; padding-right:8px; display:flex; flex-direction:column; gap:12px;"></div>
  `;

  document.body.appendChild(recipeBookModal);

  document.getElementById('close-recipe-book-btn').addEventListener('click', closeRecipeBook);

  renderRecipeCards();
}

function renderRecipeCards() {
  const container = document.getElementById('recipe-cards-container');
  if (!container) return;

  container.innerHTML = '';

  RECIPE_CATALOG.forEach(r => {
    const card = document.createElement('div');
    card.style.cssText = 'display:flex; align-items:center; justify-content:space-between; background:rgba(30,41,59,0.7); padding:12px 16px; border-radius:12px; border:1px solid rgba(255,255,255,0.08);';

    // Left: Result Icon + Name + Description
    const leftDiv = document.createElement('div');
    leftDiv.style.cssText = 'display:flex; align-items:center; gap:14px; max-width:320px;';

    const resultBox = document.createElement('div');
    resultBox.style.cssText = 'width:48px; height:48px; border-radius:8px; background:rgba(15,23,42,0.9); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; position:relative; flex-shrink:0;';
    const resultIcon = createBlockIconCanvas(r.result, 36);
    resultBox.appendChild(resultIcon);
    if (r.count > 1) {
      const countTag = document.createElement('span');
      countTag.style.cssText = 'position:absolute; bottom:2px; right:4px; font-size:11px; font-weight:800; color:#fff;';
      countTag.textContent = r.count;
      resultBox.appendChild(countTag);
    }
    leftDiv.appendChild(resultBox);

    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `
      <div style="font-size:15px; font-weight:800; color:#f1f5f9;">${r.name}</div>
      <div style="font-size:11px; font-weight:700; color:#38bdf8; text-transform:uppercase; margin-bottom:2px;">${r.category}</div>
      <div style="font-size:12px; color:#94a3b8; line-height:1.3;">${r.desc}</div>
    `;
    leftDiv.appendChild(infoDiv);

    // Right: Visual Grid Layout (2×2 or 3×3)
    const rightDiv = document.createElement('div');
    rightDiv.style.cssText = 'display:flex; flex-direction:column; align-items:center; gap:4px;';

    const gridLabel = document.createElement('span');
    gridLabel.style.cssText = 'font-size:10px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;';
    gridLabel.textContent = `Grade ${r.gridSize}×${r.gridSize}`;
    rightDiv.appendChild(gridLabel);

    const miniGrid = document.createElement('div');
    const cols = r.gridSize;
    miniGrid.style.cssText = `display:grid; grid-template-columns:repeat(${cols}, 28px); gap:3px; background:rgba(15,23,42,0.85); padding:4px; border-radius:6px; border:1px solid rgba(255,255,255,0.15);`;

    r.layout.forEach(itemType => {
      const miniSlot = document.createElement('div');
      miniSlot.style.cssText = 'width:28px; height:28px; border-radius:4px; background:rgba(30,41,59,0.9); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center;';
      if (itemType > 0) {
        const miniIcon = createBlockIconCanvas(itemType, 22);
        miniSlot.appendChild(miniIcon);
        miniSlot.title = ITEM_NAMES[itemType] || '';
      }
      miniGrid.appendChild(miniSlot);
    });

    rightDiv.appendChild(miniGrid);

    card.appendChild(leftDiv);
    card.appendChild(rightDiv);
    container.appendChild(card);
  });
}

export function openRecipeBook() {
  if (!recipeBookModal) initRecipeBook();
  recipeBookModal.style.display = 'flex';
  openWindow(UIWindow.RECIPE_BOOK);
}

export function closeRecipeBook() {
  if (!recipeBookModal) return;
  recipeBookModal.style.display = 'none';
  closeWindow(UIWindow.RECIPE_BOOK);
}
