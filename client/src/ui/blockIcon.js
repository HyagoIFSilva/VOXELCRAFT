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

  if (blockType === BlockType.IRON_SWORD) {
    // Draw 2D Iron Sword icon
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#475569';
    ctx.fillStyle = '#cbd5e1';

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
    ctx.strokeStyle = '#334155';
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

  if (blockType === BlockType.IRON_PICKAXE) {
    // Draw 2D Pickaxe icon
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(size * 0.25, size * 0.75);
    ctx.lineTo(size * 0.70, size * 0.30);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(size * 0.70, size * 0.30, size * 0.25, -Math.PI * 0.75, -Math.PI * 0.15);
    ctx.stroke();

    return canvas;
  }

  if (blockType === BlockType.PORKCHOP) {
    ctx.fillStyle = '#f472b6';
    ctx.strokeStyle = '#be185d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.5, size * 0.35, size * 0.22, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
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
