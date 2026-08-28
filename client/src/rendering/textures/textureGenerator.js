/**
 * Texture Generator — procedurally draws 16×16 pixel-art block textures
 * on HTML Canvas elements, mimicking Minecraft's classic look with crisp colors.
 */

export const TEX_SIZE = 16;

/**
 * Simple seeded PRNG for deterministic texture patterns.
 */
function seededRandom(seed) {
  let s = seed | 0;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

/**
 * Create a canvas and run a draw function on it.
 * @param {Function} drawFn - (ctx, size) => void
 * @returns {HTMLCanvasElement}
 */
function makeCanvas(drawFn) {
  const canvas = document.createElement('canvas');
  canvas.width = TEX_SIZE;
  canvas.height = TEX_SIZE;
  const ctx = canvas.getContext('2d');
  drawFn(ctx, TEX_SIZE);
  return canvas;
}

/**
 * Fill a canvas with a base color, then scatter random noise pixels.
 */
function fillWithNoise(ctx, size, baseColor, noiseColors, density, seed) {
  const rng = seededRandom(seed);
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (rng() < density) {
        const colorIdx = Math.floor(rng() * noiseColors.length);
        ctx.fillStyle = noiseColors[colorIdx];
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

// ── Individual texture generators ─────────────────────────

function drawGrassTop(ctx, size) {
  fillWithNoise(ctx, size, '#5ba638', ['#4f9430', '#6bc043', '#458528', '#75cc4a'], 0.4, 101);
  const rng = seededRandom(202);
  for (let i = 0; i < 2; i++) {
    const x = Math.floor(rng() * (size - 2)) + 1;
    const y = Math.floor(rng() * (size - 2)) + 1;
    ctx.fillStyle = '#f6e05e';
    ctx.fillRect(x, y, 1, 1);
  }
}

function drawGrassSide(ctx, size) {
  fillWithNoise(ctx, size, '#86652d', ['#775924', '#957134', '#664c1e', '#a37d3a'], 0.35, 301);

  const rng = seededRandom(302);
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < size; x++) {
      if (y < 2) {
        ctx.fillStyle = rng() > 0.3 ? '#5ba638' : '#4f9430';
        ctx.fillRect(x, y, 1, 1);
      } else if (y < 3) {
        if (rng() > 0.35) {
          ctx.fillStyle = rng() > 0.5 ? '#5ba638' : '#4f9430';
          ctx.fillRect(x, y, 1, 1);
        }
      } else if (y < 4) {
        if (rng() > 0.65) {
          ctx.fillStyle = '#458528';
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
}

function drawDirt(ctx, size) {
  fillWithNoise(ctx, size, '#86652d', ['#775924', '#957134', '#664c1e', '#a37d3a', '#584117'], 0.4, 401);
  const rng = seededRandom(402);
  for (let i = 0; i < 3; i++) {
    const x = Math.floor(rng() * (size - 1));
    const y = Math.floor(rng() * (size - 1));
    ctx.fillStyle = '#584117';
    ctx.fillRect(x, y, 2, 1);
  }
}

function drawStone(ctx, size) {
  fillWithNoise(ctx, size, '#828282', ['#737373', '#919191', '#656565', '#9e9e9e', '#595959'], 0.45, 501);
  const rng = seededRandom(502);
  for (let i = 0; i < 4; i++) {
    const x = Math.floor(rng() * (size - 3));
    const y = Math.floor(rng() * size);
    ctx.fillStyle = '#505050';
    ctx.fillRect(x, y, 2 + Math.floor(rng() * 2), 1);
  }
}

function drawSand(ctx, size) {
  fillWithNoise(ctx, size, '#e5d38a', ['#dac67c', '#eedd98', '#cfbc6f', '#f5e6a4', '#c5b161'], 0.45, 601);
}

function drawSnow(ctx, size) {
  fillWithNoise(ctx, size, '#f5f7fa', ['#e9ecf2', '#ffffff', '#dfe3ec', '#edf0f7'], 0.35, 701);
  const rng = seededRandom(702);
  for (let i = 0; i < 3; i++) {
    const x = Math.floor(rng() * (size - 1));
    const y = Math.floor(rng() * size);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(x, y, 2, 1);
  }
}

function drawSnowSide(ctx, size) {
  fillWithNoise(ctx, size, '#86652d', ['#775924', '#957134', '#664c1e'], 0.35, 1401);
  const rng = seededRandom(1402);
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < size; x++) {
      if (y < 2) {
        ctx.fillStyle = '#f5f7fa';
        ctx.fillRect(x, y, 1, 1);
      } else if (y < 3) {
        if (rng() > 0.3) {
          ctx.fillStyle = '#e9ecf2';
          ctx.fillRect(x, y, 1, 1);
        }
      } else {
        if (rng() > 0.7) {
          ctx.fillStyle = '#dfe3ec';
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
}

function drawStoneBricks(ctx, size) {
  ctx.fillStyle = '#888888';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#555555';
  ctx.fillRect(0, 3, size, 1);
  ctx.fillRect(0, 7, size, 1);
  ctx.fillRect(0, 11, size, 1);
  ctx.fillRect(0, 15, size, 1);

  for (let row = 0; row < 4; row++) {
    const offset = row % 2 === 0 ? 0 : 8;
    const yStart = row * 4;
    ctx.fillRect(offset, yStart, 1, 4);
    ctx.fillRect(offset + 8, yStart, 1, 4);
  }

  const rng = seededRandom(801);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (rng() < 0.2) {
        ctx.fillStyle = rng() > 0.5 ? '#9e9e9e' : '#737373';
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

function drawWoodLog(ctx, size) {
  fillWithNoise(ctx, size, '#6b4524', ['#5a391d', '#7c512c', '#4e3016', '#8d5c32'], 0.35, 901);
  for (let x = 0; x < size; x += 3) {
    ctx.fillStyle = '#472c14';
    ctx.fillRect(x, 0, 1, size);
  }
}

function drawWoodLogTop(ctx, size) {
  ctx.fillStyle = '#c5a368';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#6b4524';
  ctx.fillRect(0, 0, size, 2);
  ctx.fillRect(0, 14, size, 2);
  ctx.fillRect(0, 0, 2, size);
  ctx.fillRect(14, 0, 2, size);

  const cx = 7.5, cy = 7.5;
  const ringRadii = [2, 4, 6];
  ctx.fillStyle = '#9e804f';
  for (const r of ringRadii) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dist = Math.hypot(x - cx, y - cy);
        if (Math.abs(dist - r) < 0.65) {
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
  ctx.fillStyle = '#7a6036';
  ctx.fillRect(7, 7, 2, 2);
}

function drawLeaves(ctx, size) {
  fillWithNoise(ctx, size, '#3c8524', ['#2f6d1b', '#4fa631', '#245614', '#5dbd3c', '#1b400e'], 0.5, 1001);
  const rng = seededRandom(1002);
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(rng() * (size - 1));
    const y = Math.floor(rng() * (size - 1));
    ctx.fillStyle = '#1b400e';
    ctx.fillRect(x, y, 1, 1);
  }
}

function drawCoalOre(ctx, size) {
  drawStone(ctx, size);
  const rng = seededRandom(1101);
  for (let i = 0; i < 4; i++) {
    const cx = 2 + Math.floor(rng() * (size - 5));
    const cy = 2 + Math.floor(rng() * (size - 5));
    ctx.fillStyle = '#222222';
    ctx.fillRect(cx, cy, 2, 2);
    ctx.fillStyle = '#111111';
    ctx.fillRect(cx + 1, cy + 1, 1, 1);
  }
}

function drawIronOre(ctx, size) {
  drawStone(ctx, size);
  const rng = seededRandom(1201);
  for (let i = 0; i < 4; i++) {
    const cx = 2 + Math.floor(rng() * (size - 5));
    const cy = 2 + Math.floor(rng() * (size - 5));
    ctx.fillStyle = '#d4a373';
    ctx.fillRect(cx, cy, 2, 2);
    ctx.fillStyle = '#faedcd';
    ctx.fillRect(cx, cy, 1, 1);
  }
}

function drawWater(ctx, size) {
  fillWithNoise(ctx, size, '#2c75d8', ['#2565bf', '#3b86e8', '#1e52a0', '#4a95f5'], 0.4, 1301);
  const rng = seededRandom(1302);
  for (let i = 0; i < 3; i++) {
    const x = Math.floor(rng() * (size - 3));
    const y = Math.floor(rng() * size);
    ctx.fillStyle = '#8bc3f7';
    ctx.fillRect(x, y, 3, 1);
  }
}

function drawCactusTop(ctx, size) {
  fillWithNoise(ctx, size, '#15803d', ['#166534', '#14532d', '#22c55e'], 0.4, 1501);
  ctx.fillStyle = '#14532d';
  ctx.fillRect(7, 7, 2, 2);
}

function drawCactusSide(ctx, size) {
  fillWithNoise(ctx, size, '#15803d', ['#166534', '#15803d', '#22c55e', '#14532d'], 0.35, 1601);
  const rng = seededRandom(1602);
  // Vertical green ribs
  for (let x = 0; x < size; x += 4) {
    ctx.fillStyle = '#14532d';
    ctx.fillRect(x, 0, 1, size);
  }
  // Spikes
  for (let i = 0; i < 6; i++) {
    const x = Math.floor(rng() * (size - 2)) + 1;
    const y = Math.floor(rng() * (size - 2)) + 1;
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(x, y, 1, 1);
  }
}

function drawWoodPlanks(ctx, size) {
  fillWithNoise(ctx, size, '#b45309', ['#92400e', '#78350f', '#d97706', '#a16207'], 0.35, 1701);
  // Plank divider horizontal lines
  ctx.fillStyle = '#451a03';
  ctx.fillRect(0, 3, size, 1);
  ctx.fillRect(0, 7, size, 1);
  ctx.fillRect(0, 11, size, 1);
  ctx.fillRect(0, 15, size, 1);
  // Vertical joints
  ctx.fillRect(5, 0, 1, 3);
  ctx.fillRect(11, 4, 1, 3);
  ctx.fillRect(4, 8, 1, 3);
  ctx.fillRect(12, 12, 1, 3);
}

function drawCobblestone(ctx, size) {
  fillWithNoise(ctx, size, '#64748b', ['#475569', '#334155', '#94a3b8', '#1e293b'], 0.45, 1801);
  const rng = seededRandom(1802);
  ctx.fillStyle = '#1e293b';
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(rng() * (size - 4));
    const y = Math.floor(rng() * (size - 4));
    ctx.fillRect(x, y, 3, 2);
  }
}

function drawFlowerRed(ctx, size) {
  ctx.clearRect(0, 0, size, size);
  // Green stem
  ctx.fillStyle = '#15803d';
  ctx.fillRect(7, 7, 2, 9);
  ctx.fillRect(5, 11, 2, 2);
  ctx.fillRect(9, 9, 2, 2);
  // Red petals
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(6, 3, 4, 4);
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(7, 2, 2, 1);
  ctx.fillRect(5, 4, 1, 2);
  ctx.fillRect(10, 4, 1, 2);
  // Center
  ctx.fillStyle = '#450a0a';
  ctx.fillRect(7, 4, 2, 2);
}

function drawFlowerYellow(ctx, size) {
  ctx.clearRect(0, 0, size, size);
  // Green stem
  ctx.fillStyle = '#15803d';
  ctx.fillRect(7, 6, 2, 10);
  ctx.fillRect(5, 10, 2, 2);
  ctx.fillRect(9, 12, 2, 2);
  // Yellow petals
  ctx.fillStyle = '#eab308';
  ctx.fillRect(6, 2, 4, 4);
  ctx.fillStyle = '#facc15';
  ctx.fillRect(7, 1, 2, 1);
  ctx.fillRect(5, 3, 1, 2);
  ctx.fillRect(10, 3, 1, 2);
  // Center
  ctx.fillStyle = '#ca8a04';
  ctx.fillRect(7, 3, 2, 2);
}

// ── Export: texture definitions ───────────────────────────

export const TEXTURE_DEFS = [
  { name: 'grass_top',     draw: drawGrassTop },      // 0
  { name: 'grass_side',    draw: drawGrassSide },     // 1
  { name: 'dirt',          draw: drawDirt },          // 2
  { name: 'stone',         draw: drawStone },         // 3
  { name: 'sand',          draw: drawSand },          // 4
  { name: 'snow',          draw: drawSnow },          // 5
  { name: 'wood_log',      draw: drawWoodLog },       // 6
  { name: 'wood_log_top',  draw: drawWoodLogTop },    // 7
  { name: 'leaves',        draw: drawLeaves },        // 8
  { name: 'coal_ore',      draw: drawCoalOre },       // 9
  { name: 'iron_ore',      draw: drawIronOre },       // 10
  { name: 'water',         draw: drawWater },         // 11
  { name: 'stone_bricks',  draw: drawStoneBricks },   // 12
  { name: 'snow_side',     draw: drawSnowSide },      // 13
  { name: 'cactus_top',    draw: drawCactusTop },     // 14
  { name: 'cactus_side',   draw: drawCactusSide },    // 15
  { name: 'wood_planks',   draw: drawWoodPlanks },    // 16
  { name: 'cobblestone',   draw: drawCobblestone },   // 17
  { name: 'flower_red',    draw: drawFlowerRed },     // 18
  { name: 'flower_yellow', draw: drawFlowerYellow },  // 19
];

/**
 * Generate all texture canvases.
 * @returns {HTMLCanvasElement[]}
 */
export function generateAllTextures() {
  return TEXTURE_DEFS.map(def => makeCanvas(def.draw));
}

export function getTextureIndex(name) {
  return TEXTURE_DEFS.findIndex(d => d.name === name);
}
