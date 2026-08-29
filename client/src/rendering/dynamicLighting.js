/**
 * Dynamic Lighting Engine — Handheld Torch Glow, Emissive Block Illumination & Organic Fire Flicker.
 *
 * Casts real-time dynamic point lights that illuminate dark caves and surfaces when holding a Torch,
 * Glowstone or Lava bucket in first or third person.
 */

import * as THREE from 'three';
import { BlockType } from '../world/blockTypes.js';

let handheldLight = null;
let currentLightIntensity = 0;

export function initDynamicLighting(scene) {
  if (handheldLight) {
    scene.remove(handheldLight);
  }

  handheldLight = new THREE.PointLight(0xffa144, 0, 20, 1.6);
  handheldLight.castShadow = false;
  scene.add(handheldLight);
}

/**
 * Updates dynamic lighting attached to player and active held item.
 * @param {number} dt
 * @param {number} time
 * @param {THREE.Vector3} playerPos
 * @param {number} activeItemType
 * @param {THREE.Vector3} cameraPos
 */
export function updateDynamicLighting(dt, time, playerPos, activeItemType, cameraPos) {
  if (!handheldLight) return;

  const isTorch = activeItemType === BlockType.TORCH;
  const isLava = activeItemType === BlockType.LAVA;
  const isGlowstone = activeItemType === BlockType.GLOWSTONE;

  if (isTorch || isLava || isGlowstone) {
    // Position light slightly in front/below camera for realistic hand emission
    const px = cameraPos ? cameraPos.x : playerPos.x;
    const py = cameraPos ? cameraPos.y - 0.2 : playerPos.y + 1.2;
    const pz = cameraPos ? cameraPos.z : playerPos.z;
    handheldLight.position.set(px, py, pz);

    if (isTorch) {
      handheldLight.color.setHex(0xff9e3b); // Warm amber flame
      const flicker = 1.0 + 0.12 * Math.sin(time * 16.0) + 0.08 * Math.sin(time * 31.0) + 0.04 * (Math.random() - 0.5);
      const targetIntensity = 2.4 * flicker;
      currentLightIntensity = THREE.MathUtils.lerp(currentLightIntensity, targetIntensity, dt * 14.0);
      handheldLight.distance = 20;
    } else if (isLava) {
      handheldLight.color.setHex(0xff5511); // Magma orange-red
      const flicker = 1.0 + 0.06 * Math.sin(time * 8.0);
      const targetIntensity = 2.0 * flicker;
      currentLightIntensity = THREE.MathUtils.lerp(currentLightIntensity, targetIntensity, dt * 10.0);
      handheldLight.distance = 18;
    } else if (isGlowstone) {
      handheldLight.color.setHex(0xffea33); // Bright solar yellow
      const targetIntensity = 2.8;
      currentLightIntensity = THREE.MathUtils.lerp(currentLightIntensity, targetIntensity, dt * 12.0);
      handheldLight.distance = 24;
    }

    handheldLight.intensity = currentLightIntensity;
  } else {
    // Fade out light smoothly
    currentLightIntensity = Math.max(0, currentLightIntensity - dt * 8.0);
    handheldLight.intensity = currentLightIntensity;
  }
}
