/**
 * Block & Item Types — registry of all blocks, weapons, and items.
 */

export const BlockType = {
  AIR:           0,
  GRASS:         1,
  DIRT:          2,
  STONE:         3,
  SAND:          4,
  SNOW:          5,
  WOOD_LOG:      6,
  LEAVES:        7,
  COAL_ORE:      8,
  IRON_ORE:      9,
  WATER:         10,
  CACTUS:        11,
  WOOD_PLANKS:   12,
  COBBLESTONE:   13,
  FLOWER_RED:    14,
  FLOWER_YELLOW: 15,
  // Items / Weapons
  IRON_SWORD:    101,
  IRON_PICKAXE:  102,
  PORKCHOP:      103,
  ROTTEN_FLESH:  104,
};

export const ITEM_NAMES = {
  [BlockType.GRASS]:         'Grama',
  [BlockType.DIRT]:          'Terra',
  [BlockType.STONE]:         'Pedra',
  [BlockType.SAND]:          'Areia',
  [BlockType.SNOW]:          'Neve',
  [BlockType.WOOD_LOG]:      'Tronco',
  [BlockType.LEAVES]:        'Folhas',
  [BlockType.COAL_ORE]:      'Carvão',
  [BlockType.IRON_ORE]:      'Ferro',
  [BlockType.WATER]:         'Balde de Água',
  [BlockType.CACTUS]:        'Cacto',
  [BlockType.WOOD_PLANKS]:   'Tábuas de Madeira',
  [BlockType.COBBLESTONE]:   'Pedregulho',
  [BlockType.FLOWER_RED]:    'Flor Vermelha',
  [BlockType.FLOWER_YELLOW]: 'Flor Amarela',
  [BlockType.IRON_SWORD]:    'Espada de Ferro',
  [BlockType.IRON_PICKAXE]:  'Picareta de Ferro',
  [BlockType.PORKCHOP]:      'Costela de Porco',
  [BlockType.ROTTEN_FLESH]:  'Carne Podre',
};

/**
 * Texture indices per block face referencing TEXTURE_DEFS in textureGenerator.js.
 */
export const BlockTextures = {
  [BlockType.GRASS]:         { top: 0,  side: 1,  bottom: 2 },
  [BlockType.DIRT]:          { top: 2,  side: 2,  bottom: 2 },
  [BlockType.STONE]:         { top: 3,  side: 3,  bottom: 3 },
  [BlockType.SAND]:          { top: 4,  side: 4,  bottom: 4 },
  [BlockType.SNOW]:          { top: 5,  side: 13, bottom: 2 },
  [BlockType.WOOD_LOG]:      { top: 7,  side: 6,  bottom: 7 },
  [BlockType.LEAVES]:        { top: 8,  side: 8,  bottom: 8 },
  [BlockType.COAL_ORE]:      { top: 9,  side: 9,  bottom: 9 },
  [BlockType.IRON_ORE]:      { top: 10, side: 10, bottom: 10 },
  [BlockType.WATER]:         { top: 11, side: 11, bottom: 11 },
  [BlockType.CACTUS]:        { top: 14, side: 15, bottom: 14 },
  [BlockType.WOOD_PLANKS]:   { top: 16, side: 16, bottom: 16 },
  [BlockType.COBBLESTONE]:   { top: 17, side: 17, bottom: 17 },
  [BlockType.FLOWER_RED]:    { top: 18, side: 18, bottom: 18 },
  [BlockType.FLOWER_YELLOW]: { top: 19, side: 19, bottom: 19 },
};

export function isSolid(type) {
  return (
    type > BlockType.AIR &&
    type < 100 &&
    type !== BlockType.WATER &&
    type !== BlockType.FLOWER_RED &&
    type !== BlockType.FLOWER_YELLOW
  );
}

export function isPlaceableBlock(type) {
  return type >= BlockType.GRASS && type < 100;
}

export function isWeapon(type) {
  return type === BlockType.IRON_SWORD || type === BlockType.IRON_PICKAXE;
}

export function isTransparent(type) {
  return (
    type === BlockType.AIR ||
    type === BlockType.WATER ||
    type === BlockType.FLOWER_RED ||
    type === BlockType.FLOWER_YELLOW ||
    type >= 100
  );
}
