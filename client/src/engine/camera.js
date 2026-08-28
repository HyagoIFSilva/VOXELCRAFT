import * as THREE from 'three';
import { Settings } from '../ui/titleScreen.js';

const BASE_MOUSE_SENSITIVITY = 0.0022;
const MAX_PITCH = 1.55;

let camera = null;
let yaw = 0;
let pitch = -0.15;
let isLocked = false;

export function createCamera(aspect, spawnPos = { x: 0, y: 20, z: 0 }) {
  camera = new THREE.PerspectiveCamera(Settings.fov || 75, aspect, 0.05, 500);
  camera.rotation.order = 'YXZ';
  camera.position.set(spawnPos.x, spawnPos.y, spawnPos.z);
  camera.rotation.set(pitch, yaw, 0);
  return camera;
}

export function initPointerLock(canvas) {
  document.addEventListener('pointerlockchange', () => {
    isLocked = document.pointerLockElement === canvas;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isLocked || !camera) return;

    if (Math.abs(e.movementX) > 250 || Math.abs(e.movementY) > 250) return;

    const sens = BASE_MOUSE_SENSITIVITY * (Settings.sensitivity || 1.0);
    yaw -= e.movementX * sens;
    pitch -= e.movementY * sens;
    pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch));

    camera.rotation.set(pitch, yaw, 0);
  });
}

export function getCamera() { return camera; }
export function isPointerLocked() { return isLocked; }
export function getYaw() { return yaw; }
export function getPitch() { return pitch; }
export function setYaw(y) { yaw = y; if (camera) camera.rotation.y = y; }
export function setPitch(p) { pitch = p; if (camera) camera.rotation.x = p; }
