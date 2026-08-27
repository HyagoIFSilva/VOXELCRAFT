/**
 * Block Interaction & Combat — break/place blocks and attack mobs with weapons/fists.
 */

import * as THREE from 'three';
import { raycastVoxel } from './raycast.js';
import { setBlockAtWorld, getBlockAtWorld } from '../world/worldManager.js';
import { isPointerLocked, getCamera } from './camera.js';
import { playBlockBreakSound, playBlockPlaceSound, playSwordSwingSound } from './soundFx.js';
import { spawnBlockBreakParticles } from '../rendering/particles.js';
import { raycastMob, hitMob } from '../entities/mobManager.js';
import { BlockType, isPlaceableBlock } from '../world/blockTypes.js';

let scene = null;
let highlightMesh = null;
let currentTarget = null;
let selectedBlockType = BlockType.IRON_SWORD;

const highlightGeo = new THREE.BoxGeometry(1.002, 1.002, 1.002);
const highlightEdges = new THREE.EdgesGeometry(highlightGeo);
const highlightMat = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2,
  transparent: true,
  opacity: 0.5,
});

export function initInteraction(s) {
  scene = s;

  highlightMesh = new THREE.LineSegments(highlightEdges, highlightMat);
  highlightMesh.visible = false;
  scene.add(highlightMesh);

  document.addEventListener('mousedown', onMouseDown);
}

export function updateInteraction() {
  if (!isPointerLocked()) {
    highlightMesh.visible = false;
    currentTarget = null;
    return;
  }

  const cam = getCamera();
  if (!cam) return;

  const dir = new THREE.Vector3(0, 0, -1);
  dir.applyQuaternion(cam.quaternion);

  const result = raycastVoxel(cam.position, dir);
  if (result) {
    currentTarget = result;
    highlightMesh.position.set(result.hit.x + 0.5, result.hit.y + 0.5, result.hit.z + 0.5);
    highlightMesh.visible = true;
  } else {
    currentTarget = null;
    highlightMesh.visible = false;
  }
}

export function getCurrentTarget() {
  return currentTarget;
}

function onMouseDown(e) {
  if (!isPointerLocked()) return;

  if (e.button === 2) e.preventDefault();

  const cam = getCamera();
  if (!cam) return;

  const dir = new THREE.Vector3(0, 0, -1);
  dir.applyQuaternion(cam.quaternion);

  if (e.button === 0) {
    // ── Attack Mob OR Break Block ─────────────────────
    const targetMob = raycastMob(cam.position, dir, 3.8);

    if (targetMob) {
      // Hit Mob!
      const isSword = selectedBlockType === BlockType.IRON_SWORD;
      const isPickaxe = selectedBlockType === BlockType.IRON_PICKAXE;
      const damageAmount = isSword ? 7 : isPickaxe ? 4 : 2;

      playSwordSwingSound();
      hitMob(targetMob, damageAmount, dir);
      return;
    }

    // Break block
    if (currentTarget) {
      const { hit } = currentTarget;
      const oldType = getBlockAtWorld(hit.x, hit.y, hit.z);
      if (oldType !== 0) {
        spawnBlockBreakParticles(hit.x, hit.y, hit.z, oldType);
        playBlockBreakSound();
        setBlockAtWorld(scene, hit.x, hit.y, hit.z, 0);
      }
    }
  } else if (e.button === 2) {
    // ── Place Block (if item is placeable) ────────────
    if (currentTarget && isPlaceableBlock(selectedBlockType)) {
      const { prev } = currentTarget;
      if (prev.y >= 0 && prev.y < 64) {
        const existing = getBlockAtWorld(prev.x, prev.y, prev.z);
        if (existing === 0) {
          playBlockPlaceSound();
          setBlockAtWorld(scene, prev.x, prev.y, prev.z, selectedBlockType);
        }
      }
    }
  }
}

export function setSelectedBlockType(type) {
  selectedBlockType = type;
}

export function getSelectedBlockType() {
  return selectedBlockType;
}
