import * as THREE from 'three';
import { Settings } from '../ui/titleScreen.js';

const BASE_MOUSE_SENSITIVITY = 0.0022;
const MAX_PITCH = 1.55;

export const CameraMode = {
  FIRST_PERSON: 0,
  THIRD_PERSON_BACK: 1,
  THIRD_PERSON_FRONT: 2,
};

let camera = null;
let yaw = 0;
let pitch = -0.15;
let isLocked = false;
let cameraMode = CameraMode.FIRST_PERSON;

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

    const sens = BASE_MOUSE_SENSITIVITY * (Settings.mouseSensitivity || 1.0);
    yaw -= e.movementX * sens;
    pitch -= e.movementY * sens;
    pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch));

    if (cameraMode !== CameraMode.THIRD_PERSON_FRONT) {
      camera.rotation.set(pitch, yaw, 0);
    }
  });
}

export function getCamera() { return camera; }
export function isPointerLocked() { return isLocked; }
export function getYaw() { return yaw; }
export function getPitch() { return pitch; }
export function setYaw(y) { yaw = y; if (camera) camera.rotation.y = y; }
export function setPitch(p) { pitch = p; if (camera) camera.rotation.x = p; }

export function getCameraMode() {
  return cameraMode;
}

export function setCameraMode(mode) {
  cameraMode = mode;
}

export function toggleCameraMode() {
  cameraMode = (cameraMode + 1) % 3;
  return cameraMode;
}

/**
 * Updates camera position and orientation based on current camera mode and obstacle detection.
 * @param {THREE.Vector3} playerPos
 * @param {number} eyeHeight
 * @param {Function} isSolidAtFn (x, y, z) -> boolean
 */
export function updateCameraPosition(playerPos, eyeHeight = 1.62, isSolidAtFn = null) {
  if (!camera) return;

  const headX = playerPos.x;
  const headY = playerPos.y + eyeHeight;
  const headZ = playerPos.z;

  if (cameraMode === CameraMode.FIRST_PERSON) {
    camera.position.set(headX, headY, headZ);
    camera.rotation.set(pitch, yaw, 0);
  } else if (cameraMode === CameraMode.THIRD_PERSON_BACK) {
    const targetDist = 3.4;
    // Look direction vector
    const dirX = -Math.sin(yaw) * Math.cos(pitch);
    const dirY = Math.sin(pitch);
    const dirZ = -Math.cos(yaw) * Math.cos(pitch);

    // Step backwards from head to find maximum clear distance without entering solid blocks
    let actualDist = targetDist;
    if (isSolidAtFn) {
      const steps = 16;
      for (let s = 1; s <= steps; s++) {
        const d = (s / steps) * targetDist;
        const testX = headX - dirX * d;
        const testY = headY - dirY * d;
        const testZ = headZ - dirZ * d;
        if (isSolidAtFn(Math.floor(testX), Math.floor(testY), Math.floor(testZ))) {
          actualDist = Math.max(0.4, (s - 1) / steps * targetDist);
          break;
        }
      }
    }

    camera.position.set(
      headX - dirX * actualDist,
      headY - dirY * actualDist,
      headZ - dirZ * actualDist
    );
    camera.rotation.set(pitch, yaw, 0);
  } else if (cameraMode === CameraMode.THIRD_PERSON_FRONT) {
    const targetDist = 3.0;
    const dirX = -Math.sin(yaw) * Math.cos(pitch);
    const dirY = Math.sin(pitch);
    const dirZ = -Math.cos(yaw) * Math.cos(pitch);

    let actualDist = targetDist;
    if (isSolidAtFn) {
      const steps = 16;
      for (let s = 1; s <= steps; s++) {
        const d = (s / steps) * targetDist;
        const testX = headX + dirX * d;
        const testY = headY + dirY * d;
        const testZ = headZ + dirZ * d;
        if (isSolidAtFn(Math.floor(testX), Math.floor(testY), Math.floor(testZ))) {
          actualDist = Math.max(0.4, (s - 1) / steps * targetDist);
          break;
        }
      }
    }

    camera.position.set(
      headX + dirX * actualDist,
      headY + dirY * actualDist + 0.15,
      headZ + dirZ * actualDist
    );
    camera.lookAt(headX, headY - 0.1, headZ);
  }
}
