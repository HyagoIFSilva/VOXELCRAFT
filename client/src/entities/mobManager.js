/**
 * Mob Manager — Entity system for peaceful (Pig) and hostile (Zombie) mobs.
 *
 * Handles 3D models, walking leg animations, AI behaviors (wandering, chasing, fleeing, attacking),
 * collision with voxel terrain, damage, knockback, and item drops.
 */

import * as THREE from 'three';
import { getBlockAtWorld, isWorldBlockSolid, getHeight } from '../world/worldManager.js';
import { BlockType } from '../world/blockTypes.js';
import { getPlayerPosition, damage as damagePlayer } from './player.js';
import { playPigSound, playZombieSound, playMobHitSound } from '../engine/soundFx.js';
import { spawnHitParticles } from '../rendering/particles.js';

export const MobType = {
  PIG: 'pig',
  ZOMBIE: 'zombie',
};

let scene = null;
const mobs = [];
let spawnTimer = 0;
const MAX_MOBS = 12;

// ── 3D Model Builders ─────────────────────────────────────

function createPigModel() {
  const group = new THREE.Group();

  const pinkMat = new THREE.MeshLambertMaterial({ color: 0xf472b6 });
  const snoutMat = new THREE.MeshLambertMaterial({ color: 0xfb7185 });
  const eyeMat = new THREE.MeshLambertMaterial({ color: 0x1f2937 });

  // Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.9), pinkMat);
  body.position.set(0, 0.45, 0);
  group.add(body);

  // Head
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), pinkMat);
  head.position.set(0, 0.65, -0.55);
  group.add(head);

  // Snout
  const snout = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.12), snoutMat);
  snout.position.set(0, 0.58, -0.80);
  group.add(snout);

  // Eyes
  const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeMat);
  leftEye.position.set(-0.16, 0.72, -0.78);
  const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeMat);
  rightEye.position.set(0.16, 0.72, -0.78);
  group.add(leftEye);
  group.add(rightEye);

  // 4 Legs
  const legGeo = new THREE.BoxGeometry(0.18, 0.35, 0.18);
  const legFL = new THREE.Mesh(legGeo, pinkMat); legFL.position.set(-0.22, 0.18, -0.3);
  const legFR = new THREE.Mesh(legGeo, pinkMat); legFR.position.set(0.22, 0.18, -0.3);
  const legBL = new THREE.Mesh(legGeo, pinkMat); legBL.position.set(-0.22, 0.18, 0.3);
  const legBR = new THREE.Mesh(legGeo, pinkMat); legBR.position.set(0.22, 0.18, 0.3);

  group.add(legFL);
  group.add(legFR);
  group.add(legBL);
  group.add(legBR);

  return {
    group,
    legs: [legFL, legFR, legBL, legBR],
    head,
    body,
    originalMats: [pinkMat, snoutMat],
  };
}

function createZombieModel() {
  const group = new THREE.Group();

  const skinMat = new THREE.MeshLambertMaterial({ color: 0x3b823e });
  const shirtMat = new THREE.MeshLambertMaterial({ color: 0x06b6d4 });
  const pantsMat = new THREE.MeshLambertMaterial({ color: 0x1e3a8a });
  const eyeMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });

  // Head
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.44, 0.44), skinMat);
  head.position.set(0, 1.45, 0);
  group.add(head);

  // Eyes
  const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.02), eyeMat);
  leftEye.position.set(-0.12, 1.48, -0.23);
  const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.02), eyeMat);
  rightEye.position.set(0.12, 1.48, -0.23);
  group.add(leftEye);
  group.add(rightEye);

  // Torso / Shirt
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.65, 0.28), shirtMat);
  torso.position.set(0, 0.90, 0);
  group.add(torso);

  // Arms outstretched forward (Classic Zombie pose)
  const armGeo = new THREE.BoxGeometry(0.16, 0.16, 0.55);
  const leftArm = new THREE.Mesh(armGeo, skinMat);
  leftArm.position.set(-0.35, 1.05, -0.26);
  const rightArm = new THREE.Mesh(armGeo, skinMat);
  rightArm.position.set(0.35, 1.05, -0.26);
  group.add(leftArm);
  group.add(rightArm);

  // Legs / Pants
  const legGeo = new THREE.BoxGeometry(0.20, 0.60, 0.22);
  const leftLeg = new THREE.Mesh(legGeo, pantsMat);
  leftLeg.position.set(-0.13, 0.30, 0);
  const rightLeg = new THREE.Mesh(legGeo, pantsMat);
  rightLeg.position.set(0.13, 0.30, 0);
  group.add(leftLeg);
  group.add(rightLeg);

  return {
    group,
    legs: [leftLeg, rightLeg],
    head,
    body: torso,
    originalMats: [skinMat, shirtMat, pantsMat],
  };
}

// ── Spawn Function ─────────────────────────────────────────

export function spawnMob(type, x, y, z) {
  if (!scene) return null;

  const modelData = type === MobType.PIG ? createPigModel() : createZombieModel();
  modelData.group.position.set(x, y, z);
  scene.add(modelData.group);

  const mob = {
    type,
    model: modelData,
    pos: new THREE.Vector3(x, y, z),
    vel: new THREE.Vector3(0, 0, 0),
    health: type === MobType.PIG ? 10 : 20,
    maxHealth: type === MobType.PIG ? 10 : 20,
    yaw: Math.random() * Math.PI * 2,
    targetYaw: 0,
    stateTimer: 0,
    state: 'idle', // idle, wander, chase, flee
    attackCooldown: 0,
    hurtTimer: 0,
    animPhase: 0,
    onGround: false,
  };

  mobs.push(mob);
  return mob;
}

// ── Public API ─────────────────────────────────────────────

export function initMobManager(s) {
  scene = s;
}

export function getMobs() {
  return mobs;
}

/**
 * Check if player ray intersects any mob.
 * @param {THREE.Vector3} origin
 * @param {THREE.Vector3} direction
 * @param {number} maxDist
 * @returns {object|null}
 */
export function raycastMob(origin, direction, maxDist = 3.8) {
  const dir = direction.clone().normalize();

  let closestMob = null;
  let closestDist = maxDist;

  for (const mob of mobs) {
    const mobCenter = mob.pos.clone().add(new THREE.Vector3(0, mob.type === MobType.PIG ? 0.4 : 0.9, 0));
    const toMob = mobCenter.clone().sub(origin);
    const proj = toMob.dot(dir);

    if (proj > 0 && proj < closestDist) {
      const perpDist = toMob.clone().sub(dir.clone().multiplyScalar(proj)).length();
      const radius = mob.type === MobType.PIG ? 0.6 : 0.55;

      if (perpDist < radius) {
        closestDist = proj;
        closestMob = mob;
      }
    }
  }

  return closestMob;
}

/**
 * Deal damage to a mob and apply knockback.
 * @param {object} mob
 * @param {number} dmg
 * @param {THREE.Vector3} [knockbackDir]
 */
export function hitMob(mob, dmg, knockbackDir = null) {
  mob.health -= dmg;
  mob.hurtTimer = 0.25;

  playMobHitSound();
  spawnHitParticles(mob.pos.x, mob.pos.y + 0.6, mob.pos.z, 0xef4444);

  if (knockbackDir) {
    mob.vel.x += knockbackDir.x * 6.5;
    mob.vel.y += 3.5;
    mob.vel.z += knockbackDir.z * 6.5;
  }

  if (mob.type === MobType.PIG) {
    mob.state = 'flee';
    mob.stateTimer = 4.0;
    playPigSound();
  } else if (mob.type === MobType.ZOMBIE) {
    playZombieSound();
  }

  // Flash red
  mob.model.group.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({ color: 0xff3333 });
    }
  });
}

// ── Mob Update Loop ────────────────────────────────────────

export function updateMobs(dt) {
  if (!scene) return;

  const playerPos = getPlayerPosition();

  // Spawning logic around player
  spawnTimer += dt;
  if (spawnTimer > 3.5 && mobs.length < MAX_MOBS) {
    spawnTimer = 0;
    const angle = Math.random() * Math.PI * 2;
    const dist = 18 + Math.random() * 16;
    const sx = Math.floor(playerPos.x + Math.cos(angle) * dist);
    const sz = Math.floor(playerPos.z + Math.sin(angle) * dist);
    const sy = getHeight(sx, sz) + 1;

    if (sy > 18) {
      const type = Math.random() > 0.45 ? MobType.PIG : MobType.ZOMBIE;
      spawnMob(type, sx + 0.5, sy, sz + 0.5);
    }
  }

  // Update each mob
  for (let i = mobs.length - 1; i >= 0; i--) {
    const mob = mobs[i];

    // Check Death
    if (mob.health <= 0) {
      scene.remove(mob.model.group);
      mobs.splice(i, 1);
      continue;
    }

    // Despawn if too far (> 65 blocks)
    const distToPlayer = mob.pos.distanceTo(playerPos);
    if (distToPlayer > 65) {
      scene.remove(mob.model.group);
      mobs.splice(i, 1);
      continue;
    }

    // Hurt red-flash restore
    if (mob.hurtTimer > 0) {
      mob.hurtTimer -= dt;
      if (mob.hurtTimer <= 0) {
        // Restore materials
        let matIdx = 0;
        mob.model.group.traverse((child) => {
          if (child.isMesh && mob.model.originalMats[matIdx]) {
            child.material = mob.model.originalMats[matIdx % mob.model.originalMats.length];
            matIdx++;
          }
        });
      }
    }

    // ── AI Behaviors ──────────────────────────────────────
    mob.stateTimer -= dt;
    if (mob.attackCooldown > 0) mob.attackCooldown -= dt;

    let targetSpeed = 0;
    let moveDirX = 0;
    let moveDirZ = 0;

    if (mob.type === MobType.PIG) {
      if (mob.state === 'flee') {
        targetSpeed = 4.8;
        // Run away from player
        const fleeVec = mob.pos.clone().sub(playerPos).setY(0).normalize();
        moveDirX = fleeVec.x;
        moveDirZ = fleeVec.z;
        mob.targetYaw = Math.atan2(-moveDirX, -moveDirZ);
        if (mob.stateTimer <= 0) mob.state = 'idle';
      } else {
        if (mob.stateTimer <= 0) {
          mob.state = Math.random() > 0.4 ? 'wander' : 'idle';
          mob.stateTimer = 2.5 + Math.random() * 4.0;
          mob.targetYaw = Math.random() * Math.PI * 2;
        }

        if (mob.state === 'wander') {
          targetSpeed = 1.8;
          moveDirX = -Math.sin(mob.yaw);
          moveDirZ = -Math.cos(mob.yaw);
        }
      }
    } else if (mob.type === MobType.ZOMBIE) {
      if (distToPlayer < 18) {
        // Chase player!
        targetSpeed = 3.2;
        const chaseVec = playerPos.clone().sub(mob.pos).setY(0).normalize();
        moveDirX = chaseVec.x;
        moveDirZ = chaseVec.z;
        mob.targetYaw = Math.atan2(-moveDirX, -moveDirZ);

        // Melee attack player
        if (distToPlayer < 1.4 && mob.attackCooldown <= 0) {
          mob.attackCooldown = 1.1;
          damagePlayer(3); // 1.5 hearts damage
          playZombieSound();
        }
      } else {
        // Passive wandering
        if (mob.stateTimer <= 0) {
          mob.state = Math.random() > 0.5 ? 'wander' : 'idle';
          mob.stateTimer = 3.0 + Math.random() * 3.0;
          mob.targetYaw = Math.random() * Math.PI * 2;
        }

        if (mob.state === 'wander') {
          targetSpeed = 1.5;
          moveDirX = -Math.sin(mob.yaw);
          moveDirZ = -Math.cos(mob.yaw);
        }
      }
    }

    // Smooth rotation towards target yaw
    mob.yaw += (mob.targetYaw - mob.yaw) * Math.min(1, dt * 6.0);

    // Apply movement acceleration
    const k = 1 - Math.exp(-12 * dt);
    mob.vel.x += (moveDirX * targetSpeed - mob.vel.x) * k;
    mob.vel.z += (moveDirZ * targetSpeed - mob.vel.z) * k;

    // Gravity
    mob.vel.y -= 26 * dt;
    if (mob.vel.y < -28) mob.vel.y = -28;

    // Jump / Step-up over 1 block obstacles
    const nextBlockX = Math.floor(mob.pos.x + moveDirX * 0.6);
    const nextBlockZ = Math.floor(mob.pos.z + moveDirZ * 0.6);
    const nextBlockY = Math.floor(mob.pos.y);

    if (mob.onGround && targetSpeed > 0) {
      if (isWorldBlockSolid(nextBlockX, nextBlockY, nextBlockZ) && !isWorldBlockSolid(nextBlockX, nextBlockY + 1, nextBlockZ)) {
        mob.vel.y = 7.0; // Jump up over block
        mob.onGround = false;
      }
    }

    // Physics Integration
    mob.pos.x += mob.vel.x * dt;
    mob.pos.z += mob.vel.z * dt;
    mob.pos.y += mob.vel.y * dt;

    // Voxel ground collision
    const groundY = getHeight(Math.floor(mob.pos.x), Math.floor(mob.pos.z)) + 1;
    if (mob.pos.y <= groundY) {
      mob.pos.y = groundY;
      mob.vel.y = 0;
      mob.onGround = true;
    }

    // Update Model Position and Rotation
    mob.model.group.position.copy(mob.pos);
    mob.model.group.rotation.y = mob.yaw;

    // Leg Walking Animations
    if (targetSpeed > 0 && Math.hypot(mob.vel.x, mob.vel.z) > 0.3) {
      mob.animPhase += dt * 8.0;
      const swing = Math.sin(mob.animPhase) * 0.55;

      if (mob.type === MobType.PIG) {
        mob.model.legs[0].rotation.x = swing;
        mob.model.legs[1].rotation.x = -swing;
        mob.model.legs[2].rotation.x = -swing;
        mob.model.legs[3].rotation.x = swing;
      } else {
        mob.model.legs[0].rotation.x = swing;
        mob.model.legs[1].rotation.x = -swing;
      }
    } else {
      mob.model.legs.forEach(leg => leg.rotation.x = 0);
    }
  }
}
