/**
 * Block & Item Types — Complete registry of all blocks, weapons, armors, foods, and progression materials.
 */

export const BlockType = {
  AIR:             0,
  GRASS:           1,
  DIRT:            2,
  STONE:           3,
  SAND:            4,
  SNOW:            5,
  WOOD_LOG:        6,
  LEAVES:          7,
  COAL_ORE:        8,
  IRON_ORE:        9,
  WATER:           10,
  CACTUS:          11,
  WOOD_PLANKS:     12,
  COBBLESTONE:     13,
  FLOWER_RED:      14,
  FLOWER_YELLOW:   15,
  CRAFTING_TABLE:  16,
  TORCH:           17,
  FURNACE:         18,
  FURNACE_LIT:     19,
  CHEST:           20,
  FARMLAND:        21,
  WHEAT_STAGE_1:   22,
  WHEAT_STAGE_2:   23,
  WHEAT_STAGE_3:   24,
  TNT:             25,
  LAVA:            26,
  DIAMOND_ORE:     27,
  OBSIDIAN:        28,
  BED:             29,
  WOOL:            30,
  // Items / Weapons / Tools
  IRON_SWORD:      101,
  IRON_PICKAXE:    102,
  PORKCHOP:        103,
  ROTTEN_FLESH:    104,
  STICK:           105,
  WOODEN_SWORD:    106,
  WOODEN_PICKAXE:  107,
  STONE_SWORD:     108,
  STONE_PICKAXE:   109,
  IRON_INGOT:      110,
  COOKED_PORKCHOP: 111,
  // Iron Armor
  IRON_HELMET:     112,
  IRON_CHESTPLATE: 113,
  IRON_LEGGINGS:   114,
  IRON_BOOTS:      115,
  // Drops & Projectiles
  ARROW:           116,
  BONE:            117,
  STRING:          118,
  SPIDER_EYE:      119,
  // Farming, Bow & Explosives
  BOW:             120,
  WOODEN_HOE:      121,
  STONE_HOE:       122,
  IRON_HOE:        123,
  WHEAT_SEEDS:     124,
  WHEAT:           125,
  BREAD:           126,
  GUNPOWDER:       127,
  // The Diamond Era & Metallurgy
  DIAMOND:         128,
  DIAMOND_SWORD:   129,
  DIAMOND_PICKAXE: 130,
  DIAMOND_HELMET:  131,
  DIAMOND_CHESTPLATE: 132,
  DIAMOND_LEGGINGS:   133,
  DIAMOND_BOOTS:      134,
  MUTTON:          135,
  COOKED_MUTTON:   136,
};

export const ITEM_NAMES = {
  [BlockType.GRASS]:           'Grama',
  [BlockType.DIRT]:            'Terra',
  [BlockType.STONE]:           'Pedra',
  [BlockType.SAND]:            'Areia',
  [BlockType.SNOW]:            'Neve',
  [BlockType.WOOD_LOG]:        'Tronco de Carvalho',
  [BlockType.LEAVES]:          'Folhas',
  [BlockType.COAL_ORE]:        'Minério de Carvão',
  [BlockType.IRON_ORE]:        'Minério de Ferro',
  [BlockType.WATER]:           'Balde de Água',
  [BlockType.CACTUS]:          'Cacto',
  [BlockType.WOOD_PLANKS]:     'Tábuas de Madeira',
  [BlockType.COBBLESTONE]:     'Pedregulho',
  [BlockType.FLOWER_RED]:      'Flor Vermelha (Papoula)',
  [BlockType.FLOWER_YELLOW]:   'Flor Amarela (Dente-de-Leão)',
  [BlockType.CRAFTING_TABLE]:  'Bancada de Trabalho',
  [BlockType.TORCH]:           'Tocha',
  [BlockType.FURNACE]:         'Fornalha',
  [BlockType.FURNACE_LIT]:     'Fornalha (Acesa)',
  [BlockType.CHEST]:           'Baú de Madeira',
  [BlockType.FARMLAND]:        'Terra Arada',
  [BlockType.WHEAT_STAGE_1]:   'Brotos de Trigo',
  [BlockType.WHEAT_STAGE_2]:   'Trigo em Crescimento',
  [BlockType.WHEAT_STAGE_3]:   'Trigo Maduro',
  [BlockType.TNT]:             'Bloco de TNT',
  [BlockType.LAVA]:            'Balde de Lava',
  [BlockType.DIAMOND_ORE]:     'Minério de Diamante',
  [BlockType.OBSIDIAN]:        'Bloco de Obsidiana',
  [BlockType.BED]:             'Cama Confortável',
  [BlockType.WOOL]:            'Bloco de Lã Branca',
  [BlockType.IRON_SWORD]:      'Espada de Ferro',
  [BlockType.IRON_PICKAXE]:    'Picareta de Ferro',
  [BlockType.PORKCHOP]:        'Costela de Porco Crua',
  [BlockType.ROTTEN_FLESH]:    'Carne Podre',
  [BlockType.STICK]:           'Graveto',
  [BlockType.WOODEN_SWORD]:    'Espada de Madeira',
  [BlockType.WOODEN_PICKAXE]:  'Picareta de Madeira',
  [BlockType.STONE_SWORD]:     'Espada de Pedra',
  [BlockType.STONE_PICKAXE]:   'Picareta de Pedra',
  [BlockType.IRON_INGOT]:      'Barra de Ferro',
  [BlockType.COOKED_PORKCHOP]: 'Bife de Porco Assado',
  [BlockType.IRON_HELMET]:     'Capacete de Ferro',
  [BlockType.IRON_CHESTPLATE]: 'Peitoral de Ferro',
  [BlockType.IRON_LEGGINGS]:   'Calças de Ferro',
  [BlockType.IRON_BOOTS]:      'Botas de Ferro',
  [BlockType.ARROW]:           'Flecha',
  [BlockType.BONE]:            'Osso',
  [BlockType.STRING]:          'Linha de Teia',
  [BlockType.SPIDER_EYE]:      'Olho de Aranha',
  [BlockType.BOW]:             'Arco e Flecha',
  [BlockType.WOODEN_HOE]:      'Enxada de Madeira',
  [BlockType.STONE_HOE]:       'Enxada de Pedra',
  [BlockType.IRON_HOE]:        'Enxada de Ferro',
  [BlockType.WHEAT_SEEDS]:     'Sementes de Trigo',
  [BlockType.WHEAT]:           'Trigo',
  [BlockType.BREAD]:           'Pão Dourado',
  [BlockType.GUNPOWDER]:       'Pólvora',
  [BlockType.DIAMOND]:         'Gema de Diamante',
  [BlockType.DIAMOND_SWORD]:   'Espada de Diamante',
  [BlockType.DIAMOND_PICKAXE]: 'Picareta de Diamante',
  [BlockType.DIAMOND_HELMET]:  'Capacete de Diamante',
  [BlockType.DIAMOND_CHESTPLATE]: 'Peitoral de Diamante',
  [BlockType.DIAMOND_LEGGINGS]:   'Calças de Diamante',
  [BlockType.DIAMOND_BOOTS]:      'Botas de Diamante',
  [BlockType.MUTTON]:          'Carneiro Cru',
  [BlockType.COOKED_MUTTON]:   'Carneiro Assado',
};

/**
 * Texture indices per block face referencing TEXTURE_DEFS in textureGenerator.js.
 */
export const BlockTextures = {
  [BlockType.GRASS]:          { top: 0,  side: 1,  bottom: 2 },
  [BlockType.DIRT]:           { top: 2,  side: 2,  bottom: 2 },
  [BlockType.STONE]:          { top: 3,  side: 3,  bottom: 3 },
  [BlockType.SAND]:           { top: 4,  side: 4,  bottom: 4 },
  [BlockType.SNOW]:           { top: 5,  side: 13, bottom: 2 },
  [BlockType.WOOD_LOG]:       { top: 7,  side: 6,  bottom: 7 },
  [BlockType.LEAVES]:         { top: 8,  side: 8,  bottom: 8 },
  [BlockType.COAL_ORE]:       { top: 9,  side: 9,  bottom: 9 },
  [BlockType.IRON_ORE]:       { top: 10, side: 10, bottom: 10 },
  [BlockType.WATER]:          { top: 11, side: 11, bottom: 11 },
  [BlockType.CACTUS]:         { top: 14, side: 15, bottom: 14 },
  [BlockType.WOOD_PLANKS]:    { top: 16, side: 16, bottom: 16 },
  [BlockType.COBBLESTONE]:    { top: 17, side: 17, bottom: 17 },
  [BlockType.FLOWER_RED]:     { top: 18, side: 18, bottom: 18 },
  [BlockType.FLOWER_YELLOW]:  { top: 19, side: 19, bottom: 19 },
  [BlockType.CRAFTING_TABLE]: { top: 20, side: 21, bottom: 16 },
  [BlockType.TORCH]:          { top: 22, side: 22, bottom: 22 },
  [BlockType.FURNACE]:        { top: 3,  side: 23, bottom: 3 },
  [BlockType.FURNACE_LIT]:    { top: 3,  side: 25, bottom: 3 },
  [BlockType.CHEST]:          { top: 26, side: 27, bottom: 16 },
  [BlockType.FARMLAND]:       { top: 28, side: 29, bottom: 2 },
  [BlockType.WHEAT_STAGE_1]:  { top: 30, side: 30, bottom: 30 },
  [BlockType.WHEAT_STAGE_2]:  { top: 31, side: 31, bottom: 31 },
  [BlockType.WHEAT_STAGE_3]:  { top: 32, side: 32, bottom: 32 },
  [BlockType.TNT]:            { top: 33, side: 34, bottom: 35 },
  [BlockType.LAVA]:           { top: 36, side: 36, bottom: 36 },
  [BlockType.DIAMOND_ORE]:    { top: 37, side: 37, bottom: 37 },
  [BlockType.OBSIDIAN]:       { top: 38, side: 38, bottom: 38 },
  [BlockType.BED]:            { top: 39, side: 40, bottom: 16 },
  [BlockType.WOOL]:           { top: 41, side: 41, bottom: 41 },
};

export function isSolid(type) {
  return (
    type > BlockType.AIR &&
    type < 100 &&
    type !== BlockType.WATER &&
    type !== BlockType.LAVA &&
    type !== BlockType.FLOWER_RED &&
    type !== BlockType.FLOWER_YELLOW &&
    type !== BlockType.TORCH &&
    type !== BlockType.WHEAT_STAGE_1 &&
    type !== BlockType.WHEAT_STAGE_2 &&
    type !== BlockType.WHEAT_STAGE_3
  );
}

export function isPlaceableBlock(type) {
  return (type >= BlockType.GRASS && type < 100);
}

export function isWeapon(type) {
  return (
    type === BlockType.DIAMOND_SWORD ||
    type === BlockType.IRON_SWORD ||
    type === BlockType.STONE_SWORD ||
    type === BlockType.WOODEN_SWORD ||
    type === BlockType.BOW
  );
}

export function isPickaxe(type) {
  return (
    type === BlockType.DIAMOND_PICKAXE ||
    type === BlockType.IRON_PICKAXE ||
    type === BlockType.STONE_PICKAXE ||
    type === BlockType.WOODEN_PICKAXE
  );
}

export function isHoe(type) {
  return (
    type === BlockType.IRON_HOE ||
    type === BlockType.STONE_HOE ||
    type === BlockType.WOODEN_HOE
  );
}

export function isFood(type) {
  return (
    type === BlockType.PORKCHOP ||
    type === BlockType.COOKED_PORKCHOP ||
    type === BlockType.MUTTON ||
    type === BlockType.COOKED_MUTTON ||
    type === BlockType.ROTTEN_FLESH ||
    type === BlockType.BREAD
  );
}

export function isArmor(type) {
  return (
    type === BlockType.IRON_HELMET ||
    type === BlockType.IRON_CHESTPLATE ||
    type === BlockType.IRON_LEGGINGS ||
    type === BlockType.IRON_BOOTS ||
    type === BlockType.DIAMOND_HELMET ||
    type === BlockType.DIAMOND_CHESTPLATE ||
    type === BlockType.DIAMOND_LEGGINGS ||
    type === BlockType.DIAMOND_BOOTS
  );
}

export function getArmorDefense(type) {
  switch (type) {
    case BlockType.DIAMOND_HELMET:     return 3;
    case BlockType.DIAMOND_CHESTPLATE: return 8;
    case BlockType.DIAMOND_LEGGINGS:   return 6;
    case BlockType.DIAMOND_BOOTS:      return 3;
    case BlockType.IRON_HELMET:        return 2;
    case BlockType.IRON_CHESTPLATE:    return 6;
    case BlockType.IRON_LEGGINGS:      return 5;
    case BlockType.IRON_BOOTS:         return 2;
    default: return 0;
  }
}

export function getFoodNutrition(type) {
  switch (type) {
    case BlockType.COOKED_PORKCHOP: return 8; // 4 hearts
    case BlockType.COOKED_MUTTON:   return 6; // 3 hearts
    case BlockType.BREAD:           return 5; // 2.5 hearts
    case BlockType.PORKCHOP:        return 3; // 1.5 hearts
    case BlockType.MUTTON:          return 2; // 1 heart
    case BlockType.ROTTEN_FLESH:    return 1; // 0.5 heart
    default: return 0;
  }
}

export function isTransparent(type) {
  return (
    type === BlockType.AIR ||
    type === BlockType.WATER ||
    type === BlockType.LAVA ||
    type === BlockType.FLOWER_RED ||
    type === BlockType.FLOWER_YELLOW ||
    type === BlockType.TORCH ||
    type === BlockType.WHEAT_STAGE_1 ||
    type === BlockType.WHEAT_STAGE_2 ||
    type === BlockType.WHEAT_STAGE_3 ||
    type >= 100
  );
}

export function getBlockHardness(type) {
  switch (type) {
    case BlockType.LEAVES:
    case BlockType.FLOWER_RED:
    case BlockType.FLOWER_YELLOW:
    case BlockType.WHEAT_STAGE_1:
    case BlockType.WHEAT_STAGE_2:
    case BlockType.WHEAT_STAGE_3:
      return 0.15;
    case BlockType.DIRT:
    case BlockType.GRASS:
    case BlockType.SAND:
    case BlockType.SNOW:
    case BlockType.FARMLAND:
      return 0.55;
    case BlockType.TNT:
    case BlockType.BED:
    case BlockType.WOOL:
      return 0.4;
    case BlockType.WOOD_LOG:
    case BlockType.WOOD_PLANKS:
    case BlockType.CRAFTING_TABLE:
    case BlockType.CHEST:
    case BlockType.CACTUS:
      return 1.4;
    case BlockType.STONE:
    case BlockType.COBBLESTONE:
    case BlockType.FURNACE:
    case BlockType.FURNACE_LIT:
      return 2.5;
    case BlockType.COAL_ORE:
    case BlockType.IRON_ORE:
      return 3.5;
    case BlockType.DIAMOND_ORE:
      return 4.5;
    case BlockType.OBSIDIAN:
      return 9.0;
    case BlockType.TORCH:
      return 0.05;
    default:
      return 1.0;
  }
}

export function getMiningSpeed(blockType, toolType) {
  const isDiamondPick = toolType === BlockType.DIAMOND_PICKAXE;
  const isIronPick = toolType === BlockType.IRON_PICKAXE;
  const isStonePick = toolType === BlockType.STONE_PICKAXE;
  const isWoodPick = toolType === BlockType.WOODEN_PICKAXE;

  const isDiamondSword = toolType === BlockType.DIAMOND_SWORD;
  const isIronSword = toolType === BlockType.IRON_SWORD;
  const isStoneSword = toolType === BlockType.STONE_SWORD;
  const isWoodSword = toolType === BlockType.WOODEN_SWORD;

  // Obsidian
  if (blockType === BlockType.OBSIDIAN) {
    if (isDiamondPick) return 4.0;
    return 0.2; // Virtually unbreakable without diamond pick
  }

  // Diamond Ore
  if (blockType === BlockType.DIAMOND_ORE) {
    if (isDiamondPick) return 8.0;
    if (isIronPick) return 6.0;
    return 0.4;
  }

  // Pickaxe on stone/ores/furnaces
  if (
    blockType === BlockType.STONE ||
    blockType === BlockType.COBBLESTONE ||
    blockType === BlockType.COAL_ORE ||
    blockType === BlockType.IRON_ORE ||
    blockType === BlockType.FURNACE ||
    blockType === BlockType.FURNACE_LIT
  ) {
    if (isDiamondPick) return 9.5;
    if (isIronPick) return 6.5;
    if (isStonePick) return 4.2;
    if (isWoodPick) return 2.6;
    return 0.65;
  }

  // Sword on leaves/plants/crops/wool
  if (
    blockType === BlockType.LEAVES ||
    blockType === BlockType.WOOL ||
    blockType === BlockType.FLOWER_RED ||
    blockType === BlockType.FLOWER_YELLOW ||
    blockType === BlockType.WHEAT_STAGE_1 ||
    blockType === BlockType.WHEAT_STAGE_2 ||
    blockType === BlockType.WHEAT_STAGE_3
  ) {
    if (isDiamondSword) return 8.5;
    if (isIronSword || isStoneSword || isWoodSword) return 6.0;
    return 2.0;
  }

  // Wood blocks
  if (blockType === BlockType.WOOD_LOG || blockType === BlockType.WOOD_PLANKS || blockType === BlockType.CRAFTING_TABLE || blockType === BlockType.CHEST || blockType === BlockType.BED) {
    if (isDiamondPick) return 2.2;
    if (isIronPick || isStonePick || isWoodPick) return 1.6;
    return 1.0;
  }

  return 1.0;
}

export function getBlockDrop(type) {
  switch (type) {
    case BlockType.STONE:
      return BlockType.COBBLESTONE;
    case BlockType.GRASS:
      return BlockType.DIRT;
    case BlockType.COAL_ORE:
      return BlockType.COAL_ORE;
    case BlockType.IRON_ORE:
      return BlockType.IRON_ORE;
    case BlockType.DIAMOND_ORE:
      return BlockType.DIAMOND;
    case BlockType.OBSIDIAN:
      return BlockType.OBSIDIAN;
    case BlockType.FURNACE:
    case BlockType.FURNACE_LIT:
      return BlockType.FURNACE;
    case BlockType.FARMLAND:
      return BlockType.DIRT;
    case BlockType.WHEAT_STAGE_3:
      return BlockType.WHEAT;
    case BlockType.WHEAT_STAGE_1:
    case BlockType.WHEAT_STAGE_2:
      return BlockType.WHEAT_SEEDS;
    case BlockType.LEAVES:
      return Math.random() < 0.35 ? BlockType.LEAVES : 0;
    case BlockType.TNT:
      return BlockType.TNT;
    case BlockType.BED:
      return BlockType.BED;
    case BlockType.WOOL:
      return BlockType.WOOL;
    default:
      return type;
  }
}
