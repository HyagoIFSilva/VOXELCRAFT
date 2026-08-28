/**
 * Block & Item Icon — renders isometric block cubes and pixel-art weapon/item icons for the UI.
 */

import { generateAllTextures } from '../rendering/textures/textureGenerator.js';
import { BlockType, BlockTextures } from '../world/blockTypes.js';

let atlas = null;

function getAtlas() {
  if (!atlas) atlas = generateAllTextures();
  return atlas;
}

function drawFace(ctx, quad, img, brightness) {
  const [p0, p1, p2, p3] = quad;
  const a = (p1[0] - p0[0]) / 16;
  const b = (p1[1] - p0[1]) / 16;
  const c = (p3[0] - p0[0]) / 16;
  const d = (p3[1] - p0[1]) / 16;

  ctx.save();
  ctx.filter = `brightness(${brightness})`;
  ctx.setTransform(a, b, c, d, p0[0], p0[1]);
  ctx.drawImage(img, 0, 0, 16, 16, 0, 0, 16, 16);
  ctx.restore();
}

/**
 * Create an icon for a block type or weapon.
 * @param {number} blockType
 * @param {number} size
 * @returns {HTMLCanvasElement|null}
 */
export function createBlockIconCanvas(blockType, size = 46) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (
    blockType === BlockType.IRON_SWORD ||
    blockType === BlockType.STONE_SWORD ||
    blockType === BlockType.WOODEN_SWORD
  ) {
    const isIron = blockType === BlockType.IRON_SWORD;
    const isStone = blockType === BlockType.STONE_SWORD;

    const bladeFill = isIron ? '#f1f5f9' : isStone ? '#94a3b8' : '#b45309';
    const bladeStroke = isIron ? '#475569' : isStone ? '#334155' : '#78350f';

    ctx.lineWidth = 3;
    ctx.strokeStyle = bladeStroke;
    ctx.fillStyle = bladeFill;

    // Blade
    ctx.beginPath();
    ctx.moveTo(size * 0.75, size * 0.15);
    ctx.lineTo(size * 0.85, size * 0.25);
    ctx.lineTo(size * 0.45, size * 0.65);
    ctx.lineTo(size * 0.35, size * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Guard
    ctx.strokeStyle = isIron ? '#334155' : '#451a03';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.60);
    ctx.lineTo(size * 0.50, size * 0.85);
    ctx.stroke();

    // Handle
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(size * 0.35, size * 0.70);
    ctx.lineTo(size * 0.20, size * 0.85);
    ctx.stroke();

    return canvas;
  }

  if (
    blockType === BlockType.IRON_PICKAXE ||
    blockType === BlockType.STONE_PICKAXE ||
    blockType === BlockType.WOODEN_PICKAXE
  ) {
    const isIron = blockType === BlockType.IRON_PICKAXE;
    const isStone = blockType === BlockType.STONE_PICKAXE;

    const headColor = isIron ? '#cbd5e1' : isStone ? '#64748b' : '#b45309';

    // Handle
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.75);
    ctx.lineTo(size * 0.70, size * 0.30);
    ctx.stroke();

    // Pick head arc
    ctx.lineWidth = 5;
    ctx.strokeStyle = headColor;
    ctx.beginPath();
    ctx.arc(size * 0.70, size * 0.30, size * 0.25, -Math.PI * 0.75, -Math.PI * 0.15);
    ctx.stroke();

    return canvas;
  }

  if (blockType === BlockType.STICK) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#92400e';
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.75);
    ctx.lineTo(size * 0.75, size * 0.25);
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.TORCH) {
    // Stick
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(size * 0.30, size * 0.75);
    ctx.lineTo(size * 0.65, size * 0.40);
    ctx.stroke();

    // Flame head
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(size * 0.68, size * 0.35, size * 0.15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(size * 0.68, size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    return canvas;
  }

  if (blockType === BlockType.IRON_INGOT) {
    ctx.fillStyle = '#cbd5e1';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.40);
    ctx.lineTo(size * 0.65, size * 0.30);
    ctx.lineTo(size * 0.80, size * 0.55);
    ctx.lineTo(size * 0.40, size * 0.65);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f8fafc'; // Specular highlight
    ctx.fillRect(size * 0.35, size * 0.42, size * 0.25, size * 0.08);
    return canvas;
  }

  if (blockType === BlockType.COOKED_PORKCHOP) {
    ctx.fillStyle = '#b45309';
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.5, size * 0.35, size * 0.22, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Grill marks
    ctx.fillStyle = '#451a03';
    ctx.fillRect(size * 0.4, size * 0.4, size * 0.2, 2);
    ctx.fillRect(size * 0.45, size * 0.5, size * 0.2, 2);
    return canvas;
  }

  if (blockType === BlockType.IRON_HELMET) {
    ctx.fillStyle = '#cbd5e1';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.5, size * 0.32, Math.PI, 0);
    ctx.lineTo(size * 0.82, size * 0.65);
    ctx.lineTo(size * 0.65, size * 0.65);
    ctx.lineTo(size * 0.65, size * 0.55);
    ctx.lineTo(size * 0.35, size * 0.55);
    ctx.lineTo(size * 0.35, size * 0.65);
    ctx.lineTo(size * 0.18, size * 0.65);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.IRON_CHESTPLATE) {
    ctx.fillStyle = '#cbd5e1';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.25);
    ctx.lineTo(size * 0.40, size * 0.35);
    ctx.lineTo(size * 0.60, size * 0.35);
    ctx.lineTo(size * 0.75, size * 0.25);
    ctx.lineTo(size * 0.85, size * 0.45);
    ctx.lineTo(size * 0.75, size * 0.50);
    ctx.lineTo(size * 0.75, size * 0.75);
    ctx.lineTo(size * 0.25, size * 0.75);
    ctx.lineTo(size * 0.25, size * 0.50);
    ctx.lineTo(size * 0.15, size * 0.45);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.IRON_LEGGINGS) {
    ctx.fillStyle = '#cbd5e1';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.25);
    ctx.lineTo(size * 0.75, size * 0.25);
    ctx.lineTo(size * 0.75, size * 0.75);
    ctx.lineTo(size * 0.55, size * 0.75);
    ctx.lineTo(size * 0.50, size * 0.45);
    ctx.lineTo(size * 0.45, size * 0.75);
    ctx.lineTo(size * 0.25, size * 0.75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.IRON_BOOTS) {
    ctx.fillStyle = '#cbd5e1';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    // Left boot
    ctx.fillRect(size * 0.22, size * 0.45, size * 0.18, size * 0.30);
    ctx.fillRect(size * 0.15, size * 0.60, size * 0.25, size * 0.15);
    // Right boot
    ctx.fillRect(size * 0.60, size * 0.45, size * 0.18, size * 0.30);
    ctx.fillRect(size * 0.60, size * 0.60, size * 0.25, size * 0.15);
    return canvas;
  }

  if (blockType === BlockType.ARROW) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(size * 0.2, size * 0.8);
    ctx.lineTo(size * 0.75, size * 0.25);
    ctx.stroke();
    // Arrow head
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.moveTo(size * 0.82, size * 0.18);
    ctx.lineTo(size * 0.65, size * 0.25);
    ctx.lineTo(size * 0.75, size * 0.35);
    ctx.closePath();
    ctx.fill();
    return canvas;
  }

  if (blockType === BlockType.BONE) {
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(size * 0.25, size * 0.42, size * 0.5, size * 0.16, 4);
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.STRING) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.5, size * 0.25, 0, Math.PI * 1.7);
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.SPIDER_EYE) {
    ctx.fillStyle = '#991b1b';
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.5, size * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.BOW) {
    // Bow wooden curve
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = '#78350f';
    ctx.beginPath();
    ctx.arc(size * 0.4, size * 0.5, size * 0.35, -Math.PI * 0.45, Math.PI * 0.45);
    ctx.stroke();

    // Bow string
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#f8fafc';
    ctx.beginPath();
    ctx.moveTo(size * 0.4 + Math.cos(-Math.PI * 0.45) * (size * 0.35), size * 0.5 + Math.sin(-Math.PI * 0.45) * (size * 0.35));
    ctx.lineTo(size * 0.4 + Math.cos(Math.PI * 0.45) * (size * 0.35), size * 0.5 + Math.sin(Math.PI * 0.45) * (size * 0.35));
    ctx.stroke();
    return canvas;
  }

  if (
    blockType === BlockType.IRON_HOE ||
    blockType === BlockType.STONE_HOE ||
    blockType === BlockType.WOODEN_HOE
  ) {
    const isIron = blockType === BlockType.IRON_HOE;
    const isStone = blockType === BlockType.STONE_HOE;
    const bladeColor = isIron ? '#cbd5e1' : isStone ? '#64748b' : '#b45309';

    // Handle
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.75);
    ctx.lineTo(size * 0.65, size * 0.30);
    ctx.stroke();

    // Hoe head blade
    ctx.lineWidth = 5;
    ctx.strokeStyle = bladeColor;
    ctx.beginPath();
    ctx.moveTo(size * 0.65, size * 0.30);
    ctx.lineTo(size * 0.85, size * 0.30);
    ctx.lineTo(size * 0.85, size * 0.45);
    ctx.stroke();
    return canvas;
  }

  if (blockType === BlockType.WHEAT_SEEDS) {
    ctx.fillStyle = '#65a30d';
    ctx.strokeStyle = '#365314';
    ctx.lineWidth = 1.5;
    const seedCoords = [
      [size * 0.35, size * 0.4],
      [size * 0.55, size * 0.35],
      [size * 0.45, size * 0.6],
      [size * 0.65, size * 0.55],
    ];
    seedCoords.forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.arc(sx, sy, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    return canvas;
  }

  if (blockType === BlockType.WHEAT) {
    // Sheaf of golden wheat
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#eab308';
    ctx.beginPath();
    ctx.moveTo(size * 0.3, size * 0.8);
    ctx.lineTo(size * 0.5, size * 0.25);
    ctx.moveTo(size * 0.5, size * 0.8);
    ctx.lineTo(size * 0.5, size * 0.2);
    ctx.moveTo(size * 0.7, size * 0.8);
    ctx.lineTo(size * 0.5, size * 0.25);
    ctx.stroke();

    // Red ribbon tie
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(size * 0.38, size * 0.55, size * 0.24, 4);
    return canvas;
  }

  if (blockType === BlockType.BREAD) {
    ctx.fillStyle = '#b45309';
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(size * 0.2, size * 0.35, size * 0.6, size * 0.32, 8);
    ctx.fill();
    ctx.stroke();

    // Scoring cuts on top of loaf
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(size * 0.32, size * 0.42, 3, size * 0.18);
    ctx.fillRect(size * 0.48, size * 0.42, 3, size * 0.18);
    ctx.fillRect(size * 0.64, size * 0.42, 3, size * 0.18);
    return canvas;
  }

  if (blockType === BlockType.GUNPOWDER) {
    ctx.fillStyle = '#475569';
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.7);
    ctx.lineTo(size * 0.5, size * 0.3);
    ctx.lineTo(size * 0.75, size * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Grains
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(size * 0.45, size * 0.45, 2, 2);
    ctx.fillRect(size * 0.55, size * 0.55, 2, 2);
    ctx.fillRect(size * 0.35, size * 0.6, 2, 2);
    return canvas;
  }

  if (blockType === BlockType.ROTTEN_FLESH) {
    ctx.fillStyle = '#65a30d';
    ctx.strokeStyle = '#365314';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.5, size * 0.32, size * 0.20, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    return canvas;
  }

  // Standard voxel isometric block icon
  const atlas = getAtlas();
  const bt = BlockTextures[blockType];
  if (!bt) return null;

  const imgTop = atlas[bt.top];
  const imgSide = atlas[bt.side];

  const u = size / 4;

  const topQuad = [
    [size / 2, 0], [size / 2 + u, u / 2], [size / 2, u], [size / 2 - u, u / 2],
  ];
  const leftQuad = [
    [size / 2 - u, u / 2], [size / 2, u], [size / 2, 2 * u], [size / 2 - u, (3 * u) / 2],
  ];
  const rightQuad = [
    [size / 2, u], [size / 2 + u, u / 2], [size / 2 + u, (3 * u) / 2], [size / 2, 2 * u],
  ];

  drawFace(ctx, rightQuad, imgSide, 0.8);
  drawFace(ctx, leftQuad, imgSide, 0.66);
  drawFace(ctx, topQuad, imgTop, 1.0);

  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 1.5;
  [topQuad, leftQuad, rightQuad].forEach((quad) => {
    ctx.beginPath();
    ctx.moveTo(quad[0][0], quad[0][1]);
    for (let i = 1; i < quad.length; i++) ctx.lineTo(quad[i][0], quad[i][1]);
    ctx.closePath();
    ctx.stroke();
  });

  return canvas;
}
