/**
 * Weather & Atmospheric System — Dynamic rain, thunderstorms, and atmospheric transitions.
 */

import * as THREE from 'three';

export const WeatherType = {
  SUNNY:        'sunny',
  RAIN:         'rain',
  THUNDERSTORM: 'thunderstorm',
};

let currentWeather = WeatherType.SUNNY;
let weatherTimer = 120.0 + Math.random() * 60.0; // Changes every 2-3 mins
let rainParticles = null;
let rainGeo = null;
const RAIN_COUNT = 800;

export function initWeather(scene) {
  rainGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(RAIN_COUNT * 3);

  for (let i = 0; i < RAIN_COUNT * 3; i += 3) {
    positions[i]     = (Math.random() - 0.5) * 40;
    positions[i + 1] = Math.random() * 25;
    positions[i + 2] = (Math.random() - 0.5) * 40;
  }

  rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const rainMat = new THREE.PointsMaterial({
    color: 0x93c5fd,
    size: 0.12,
    transparent: true,
    opacity: 0.0,
  });

  rainParticles = new THREE.Points(rainGeo, rainMat);
  scene.add(rainParticles);
}

export function updateWeather(dt, playerPos) {
  weatherTimer -= dt;
  if (weatherTimer <= 0) {
    weatherTimer = 90.0 + Math.random() * 120.0;
    currentWeather = (currentWeather === WeatherType.SUNNY) ? WeatherType.RAIN : WeatherType.SUNNY;
  }

  if (rainParticles && playerPos) {
    rainParticles.position.set(playerPos.x, playerPos.y, playerPos.z);

    const isRaining = currentWeather !== WeatherType.SUNNY;
    const targetOpacity = isRaining ? 0.65 : 0.0;
    rainParticles.material.opacity += (targetOpacity - rainParticles.material.opacity) * dt * 2.0;

    if (rainParticles.material.opacity > 0.01) {
      const positions = rainGeo.attributes.position.array;
      for (let i = 1; i < RAIN_COUNT * 3; i += 3) {
        positions[i] -= 32 * dt; // Fast falling rain
        if (positions[i] < -5) {
          positions[i] = 20 + Math.random() * 5;
        }
      }
      rainGeo.attributes.position.needsUpdate = true;
    }
  }
}

export function getCurrentWeather() {
  return currentWeather;
}
