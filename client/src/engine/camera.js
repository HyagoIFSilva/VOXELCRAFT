/**
 * FPS Camera — first-person camera with pointer lock and pitch/yaw rotation.
 */

import * as THREE from 'three';

const MOUSE_SENSITIVITY = 0.0022;
const MAX_PITCH = 1.55;

let camera = null;
let yaw = 0;
let pitch = -0.15;
let isLocked = false;

let lockPrompt = null;
let crosshair = null;
let controlsHint = null;

export function createCamera(aspect, spawnPos = { x: 0, y: 20, z: 0 }) {
  camera = new THREE.PerspectiveCamera(75, aspect, 0.05, 500);
  camera.rotation.order = 'YXZ';
  camera.position.set(spawnPos.x, spawnPos.y, spawnPos.z);
  camera.rotation.set(pitch, yaw, 0);
  return camera;
}

export function initPointerLock(canvas) {
  lockPrompt = document.getElementById('lock-prompt');
  crosshair = document.getElementById('crosshair');
  controlsHint = document.getElementById('controls-hint');

  const requestLock = () => canvas.requestPointerLock();
  if (lockPrompt) lockPrompt.addEventListener('click', requestLock);
  canvas.addEventListener('click', () => {
    if (!isLocked) requestLock();
  });

  document.addEventListener('pointerlockchange', () => {
    isLocked = document.pointerLockElement === canvas;
    if (lockPrompt) lockPrompt.style.display = isLocked ? 'none' : 'block';
    if (crosshair) crosshair.style.display = isLocked ? 'block' : 'none';
    if (controlsHint) controlsHint.style.display = isLocked ? 'block' : 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isLocked || !camera) return;

    if (Math.abs(e.movementX) > 250 || Math.abs(e.movementY) > 250) return;

    yaw -= e.movementX * MOUSE_SENSITIVITY;
    pitch -= e.movementY * MOUSE_SENSITIVITY;
    pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch));

    camera.rotation.set(pitch, yaw, 0);
  });
}

export function getCamera() { return camera; }
export function isPointerLocked() { return isLocked; }
export function getYaw() { return yaw; }
export function getPitch() { return pitch; }
