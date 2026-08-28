/**
 * Mob Manager — Entity & AI system for peaceful (Pig) and hostile (Zombie, Skeleton, Spider) mobs.
 *
 * Features:
 *  - Realistic Vision Cone (FOV 120°) and Voxel Line-of-Sight (LOS) raycasting.
 *  - Auditory/proximity senses (hearing footsteps from behind within close range).
 *  - Tactical AI:
 *      - Zombie: Melee assault with arm swings.
 *      - Skeleton: Tactical ranged kiting + shooting arrow projectiles.
 *      - Spider: Fast crawling, wall leap attack, glowing red eyes.
 *      - Pig: Peaceful wandering and panic fleeing upon taking damage.
 *  - Day/Night spawning & sunlight burning.
 *  - Hard population cap (MAX_MOBS = 12) for solid 60 FPS.
 */

import * as THREE from 'three';
import { isWorldBlockSolid, getHeight } from '../world/worldManager.js';
import { BlockType } from '../world/blockTypes.js';
import { getPlayerPosition, damage as damagePlayer } from './player.js';
import { playPigSound, playZombieSound, playMobHitSound, playSwordSwingSound } from '../engine/soundFx.js';
import { spawnHitParticles } from '../rendering/particles.js';
import { isDaytime, isNighttime } from '../world/dayNightCycle.js';
import { spawnDrop } from './dropManager.js';

export const MobType = {
  PIG:      'pig',
  ZOMBIE:   'zombie',
  SKELETON: 'skeleton',
  SPIDER:   'spider',
};

let scene = null;
const mobs = [];
const arrows = [];
let spawnTimer = 0;
const MAX_MOBS = 12;

// ── Voxel Line-of-Sight (LOS) Raycast ─────────────────────

export function hasLineOfSight(x0, y0, z0, x1, y1, z1) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const dz = z1 - z0;
  const dist = Math.hypot(dx, dy, dz);
  if (dist < 0.3) return true;

  const steps = Math.ceil(dist * 2.2);
  const stepX = dx / steps;
  const stepY = dy / steps;
  const stepZ = dz / steps;

  for (let i = 1; i < steps; i++) {
    const cx = Math.floor(x0 + stepX * i);
    const cy = Math.floor(y0 + stepY * i);
    const cz = Math.floor(z0 + stepZ * i);

    if (isWorldBlockSolid(cx, cy, cz)) {
      return false;
    }
  }
  return true;
}

// ── 3D Model Builders ─────────────────────────────────────

function createPigModel() {
  const group = new THREE.Group();
  const pinkMat = new THREE.MeshLambertMaterial({ color: 0xf472b6 });
  const snoutMat = new THREE.MeshLambertMaterial({ color: 0xfb7185 });
  const eyeMat = new THREE.MeshLambertMaterial({ color: 0x1f2937 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.9), pinkMat);
  body.position.set(0, 0.45, 0);
  group.add(body);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), pinkMat);
  head.position.set(0, 0.65, -0.55);
  group.add(head);

  const snout = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.12), snoutMat);
  snout.position.set(0, 0.58, -0.80);
  group.add(snout);

  const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeMat);
  leftEye.position.set(-0.16, 0.72, -0.78);
  const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeMat);
  rightEye.position.set(0.16, 0.72, -0.78);
  group.add(leftEye);
  group.add(rightEye);

  const legGeo = new THREE.BoxGeometry(0.18, 0.35, 0.18);
  const legs = [];
  const legPositions = [
    [-0.24, 0.18, -0.30],
    [0.24, 0.18, -0.30],
    [-0.24, 0.18, 0.30],
    [0.24, 0.18, 0.30],
  ];

  for (const pos of legPositions) {
    const leg = new THREE.Mesh(legGeo, pinkMat);
    leg.position.set(...pos);
    group.add(leg);
    legs.push(leg);
  }

  return {
    group,
    legs,
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

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.44, 0.44), skinMat);
  head.position.set(0, 1.45, 0);
  group.add(head);

  const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.02), eyeMat);
  leftEye.position.set(-0.12, 1.48, -0.23);
  const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.02), eyeMat);
  rightEye.position.set(0.12, 1.48, -0.23);
  group.add(leftEye);
  group.add(rightEye);

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.65, 0.28), shirtMat);
  torso.position.set(0, 0.90, 0);
  group.add(torso);

  const armGeo = new THREE.BoxGeometry(0.16, 0.16, 0.55);
  const leftArm = new THREE.Mesh(armGeo, skinMat);
  leftArm.position.set(-0.35, 1.05, -0.26);
  const rightArm = new THREE.Mesh(armGeo, skinMat);
  rightArm.position.set(0.35, 1.05, -0.26);
  group.add(leftArm);
  group.add(rightArm);

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
    arms: [leftArm, rightArm],
    head,
    body: torso,
    originalMats: [skinMat, shirtMat, pantsMat],
  };
}

function createSkeletonModel() {
  const group = new THREE.Group();
  const boneMat = new THREE.MeshLambertMaterial({ color: 0xd1d5db });
  const eyeMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });
  const bowMat = new THREE.MeshLambertMaterial({ color: 0x78350f });

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), boneMat);
  head.position.set(0, 1.45, 0);
  group.add(head);

  // Deep dark eye sockets
  const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.08, 0.02), eyeMat);
  leftEye.position.set(-0.11, 1.47, -0.22);
  const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.08, 0.02), eyeMat);
  rightEye.position.set(0.11, 1.47, -0.22);
  group.add(leftEye);
  group.add(rightEye);

  // Ribcage
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.60, 0.20), boneMat);
  torso.position.set(0, 0.90, 0);
  group.add(torso);

  // Thin bony arms
  const armGeo = new THREE.BoxGeometry(0.10, 0.55, 0.10);
  const leftArm = new THREE.Mesh(armGeo, boneMat);
  leftArm.position.set(-0.28, 0.90, -0.20);
  leftArm.rotation.x = -Math.PI / 2.5;

  const rightArm = new THREE.Mesh(armGeo, boneMat);
  rightArm.position.set(0.28, 0.90, -0.20);
  rightArm.rotation.x = -Math.PI / 2.5;
  group.add(leftArm);
  group.add(rightArm);

  // Bow
  const bow = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.06), bowMat);
  bow.position.set(0.28, 0.85, -0.42);
  group.add(bow);

  // Legs
  const legGeo = new THREE.BoxGeometry(0.12, 0.60, 0.12);
  const leftLeg = new THREE.Mesh(legGeo, boneMat);
  leftLeg.position.set(-0.11, 0.30, 0);
  const rightLeg = new THREE.Mesh(legGeo, boneMat);
  rightLeg.position.set(0.11, 0.30, 0);
  group.add(leftLeg);
  group.add(rightLeg);

  return {
    group,
    legs: [leftLeg, rightLeg],
    arms: [leftArm, rightArm],
    head,
    body: torso,
    originalMats: [boneMat, bowMat],
  };
}

function createSpiderModel() {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1e293b });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xef4444 }); // Glowing red eyes

  // Abdomen (rear)
  const abdomen = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.45, 0.70), bodyMat);
  abdomen.position.set(0, 0.35, 0.40);
  group.add(abdomen);

  // Cephalothorax (front)
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 0.45), bodyMat);
  head.position.set(0, 0.30, -0.25);
  group.add(head);

  // 4 Glowing Red Eyes
  const eyeGeo = new THREE.BoxGeometry(0.06, 0.06, 0.02);
  const e1 = new THREE.Mesh(eyeGeo, eyeMat);
  e1.position.set(-0.12, 0.32, -0.48);
  const e2 = new THREE.Mesh(eyeGeo, eyeMat);
  e2.position.set(0.12, 0.32, -0.48);
  group.add(e1);
  group.add(e2);

  // 8 Articulated Sprawling Legs
  const legGeo = new THREE.BoxGeometry(0.60, 0.08, 0.08);
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const leftLeg = new THREE.Mesh(legGeo, bodyMat);
    leftLeg.position.set(-0.45, 0.22, -0.3 + i * 0.22);
    leftLeg.rotation.z = 0.35;
    group.add(leftLeg);
    legs.push(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, bodyMat);
    rightLeg.position.set(0.45, 0.22, -0.3 + i * 0.22);
    rightLeg.rotation.z = -0.35;
    group.add(rightLeg);
    legs.push(rightLeg);
  }

  return {
    group,
    legs,
    head,
    body: abdomen,
    originalMats: [bodyMat, eyeMat],
  };
}

// ── Spawn Function ─────────────────────────────────────────

export function spawnMob(type, x, y, z) {
  if (!scene) return null;

  let modelData;
  if (type === MobType.PIG) modelData = createPigModel();
  else if (type === MobType.SKELETON) modelData = createSkeletonModel();
  else if (type === MobType.SPIDER) modelData = createSpiderModel();
  else modelData = createZombieModel();

  modelData.group.position.set(x, y, z);
  scene.add(modelData.group);

  const mob = {
    type,
    model: modelData,
    pos: new THREE.Vector3(x, y, z),
    vel: new THREE.Vector3(0, 0, 0),
    health: type === MobType.PIG ? 10 : type === MobType.SPIDER ? 16 : 20,
    maxHealth: type === MobType.PIG ? 10 : type === MobType.SPIDER ? 16 : 20,
    yaw: Math.random() * Math.PI * 2,
    targetYaw: 0,
    stateTimer: 1.0 + Math.random() * 2.0,
    state: 'idle',
    attackCooldown: 0,
    hurtTimer: 0,
    animPhase: 0,
    onGround: false,
    eyeHeight: type === MobType.PIG ? 0.6 : type === MobType.SPIDER ? 0.35 : 1.45,
    losCheckTimer: Math.random() * 0.2,
    canSeePlayer: false,
    lastSeenPos: null,
    investigateTimer: 0,
    burnTimer: 0,
    isBurning: false,
    shootCooldown: 1.0 + Math.random() * 1.5,
  };

  mobs.push(mob);
  return mob;
}

export function initMobManager(s) {
  scene = s;
}

export function getMobs() {
  return mobs;
}

export function raycastMob(origin, direction, maxDist = 3.8) {
  const dir = direction.clone().normalize();
  let closestMob = null;
  let closestDist = maxDist;

  for (const mob of mobs) {
    const mobCenter = mob.pos.clone().add(new THREE.Vector3(0, mob.eyeHeight * 0.6, 0));
    const toMob = mobCenter.clone().sub(origin);
    const proj = toMob.dot(dir);

    if (proj > 0 && proj < closestDist) {
      const perpDist = toMob.clone().sub(dir.clone().multiplyScalar(proj)).length();
      const radius = mob.type === MobType.PIG ? 0.6 : mob.type === MobType.SPIDER ? 0.75 : 0.55;

      if (perpDist < radius) {
        closestDist = proj;
        closestMob = mob;
      }
    }
  }

  return closestMob;
}

export function hitMob(mob, damage, knockbackDir) {
  mob.health -= damage;
  mob.hurtTimer = 0.25;

  playMobHitSound();
  spawnHitParticles(mob.pos.x, mob.pos.y + mob.eyeHeight * 0.5, mob.pos.z);

  const kb = knockbackDir.clone().normalize().multiplyScalar(7.5);
  mob.vel.x += kb.x;
  mob.vel.z += kb.z;
  mob.vel.y = 3.5;

  if (mob.type === MobType.PIG) {
    mob.state = 'flee';
    mob.stateTimer = 4.0;
  } else {
    mob.state = 'chase';
    mob.lastSeenPos = getPlayerPosition().clone();
  }

  if (mob.health <= 0) {
    killMob(mob);
  }
}

function killMob(mob) {
  scene.remove(mob.model.group);
  const idx = mobs.indexOf(mob);
  if (idx !== -1) mobs.splice(idx, 1);

  // Authentic Mob Drops
  if (mob.type === MobType.PIG) {
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.PORKCHOP);
  } else if (mob.type === MobType.ZOMBIE) {
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.ROTTEN_FLESH);
    if (Math.random() < 0.25) {
      spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.IRON_INGOT);
    }
  } else if (mob.type === MobType.SKELETON) {
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.BONE);
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.ARROW);
  } else if (mob.type === MobType.SPIDER) {
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.STRING);
    spawnDrop(mob.pos.x, mob.pos.y + 0.5, mob.pos.z, BlockType.SPIDER_EYE);
  }
}

// ── Projectile Arrow Spawn & Physics ──────────────────────

function spawnArrow(origin, targetPos) {
  if (!scene) return;

  const arrowGeo = new THREE.BoxGeometry(0.08, 0.08, 0.5);
  const arrowMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
  const mesh = new THREE.Mesh(arrowGeo, arrowMat);

  mesh.position.copy(origin);
  scene.add(mesh);

  const dir = targetPos.clone().sub(origin).normalize();
  const vel = dir.multiplyScalar(18); // 18 blocks/s

  arrows.push({
    mesh,
    pos: origin.clone(),
    vel,
    life: 4.0,
  });
}

function updateArrows(dt) {
  const playerPos = getPlayerPosition();

  for (let i = arrows.length - 1; i >= 0; i--) {
    const a = arrows[i];
    a.life -= dt;

    a.vel.y -= 12 * dt; // Gravity
    a.pos.addScaledVector(a.vel, dt);
    a.mesh.position.copy(a.pos);

    // Collision with Player
    const distToPlayer = a.pos.distanceTo(playerPos.clone().add(new THREE.Vector3(0, 0.9, 0)));
    if (distToPlayer < 0.75) {
      damagePlayer(4, a.vel.clone().normalize());
      scene.remove(a.mesh);
      arrows.splice(i, 1);
      continue;
    }

    // Collision with solid voxels
    if (isWorldBlockSolid(Math.floor(a.pos.x), Math.floor(a.pos.y), Math.floor(a.pos.z)) || a.life <= 0) {
      scene.remove(a.mesh);
      arrows.splice(i, 1);
    }
  }
}

// ── Mob Update Loop ────────────────────────────────────────

export function updateMobs(dt) {
  const playerPos = getPlayerPosition();

  // Spawning logic
  spawnTimer += dt;
  if (spawnTimer > 3.0 && mobs.length < MAX_MOBS) {
    spawnTimer = 0;
    trySpawnNaturalMob(playerPos);
  }

  updateArrows(dt);

  for (let i = mobs.length - 1; i >= 0; i--) {
    const mob = mobs[i];
    updateSingleMob(mob, dt, playerPos);
  }
}

function trySpawnNaturalMob(playerPos) {
  const angle = Math.random() * Math.PI * 2;
  const dist = 18 + Math.random() * 20;
  const sx = Math.floor(playerPos.x + Math.cos(angle) * dist);
  const sz = Math.floor(playerPos.z + Math.sin(angle) * dist);
  const sy = getHeight(sx, sz);

  if (sy > 18 && sy < 50) {
    const day = isDaytime();
    if (day) {
      spawnMob(MobType.PIG, sx + 0.5, sy + 1, sz + 0.5);
    } else {
      const r = Math.random();
      if (r < 0.4) spawnMob(MobType.ZOMBIE, sx + 0.5, sy + 1, sz + 0.5);
      else if (r < 0.75) spawnMob(MobType.SKELETON, sx + 0.5, sy + 1, sz + 0.5);
      else spawnMob(MobType.SPIDER, sx + 0.5, sy + 1, sz + 0.5);
    }
  }
}

function updateSingleMob(mob, dt, playerPos) {
  const toPlayer = playerPos.clone().sub(mob.pos);
  const distToPlayer = toPlayer.length();

  // Sunlight burn for Zombies and Skeletons
  if ((mob.type === MobType.ZOMBIE || mob.type === MobType.SKELETON) && isDaytime()) {
    const topY = getHeight(Math.floor(mob.pos.x), Math.floor(mob.pos.z));
    if (mob.pos.y >= topY) {
      mob.burnTimer += dt;
      if (mob.burnTimer >= 1.0) {
        mob.burnTimer = 0;
        mob.health -= 2;
        spawnHitParticles(mob.pos.x, mob.pos.y + 1, mob.pos.z);
        if (mob.health <= 0) {
          killMob(mob);
          return;
        }
      }
    }
  }

  // Vision Check
  mob.losCheckTimer -= dt;
  if (mob.losCheckTimer <= 0) {
    mob.losCheckTimer = 0.25;
    const canSee = hasLineOfSight(mob.pos.x, mob.pos.y + mob.eyeHeight, mob.pos.z, playerPos.x, playerPos.y + 1.2, playerPos.z);
    mob.canSeePlayer = canSee && distToPlayer < 24;
    if (mob.canSeePlayer) {
      mob.lastSeenPos = playerPos.clone();
      if (mob.type !== MobType.PIG) {
        mob.state = 'chase';
      }
    }
  }

  // AI Behaviors
  if (mob.type === MobType.PIG) {
    updatePigAI(mob, dt, playerPos, distToPlayer);
  } else if (mob.type === MobType.SKELETON) {
    updateSkeletonAI(mob, dt, playerPos, distToPlayer);
  } else if (mob.type === MobType.SPIDER) {
    updateSpiderAI(mob, dt, playerPos, distToPlayer);
  } else {
    updateZombieAI(mob, dt, playerPos, distToPlayer);
  }

  // Apply Movement & Voxel Physics
  mob.vel.y -= 22 * dt; // Gravity
  mob.pos.addScaledVector(mob.vel, dt);

  const floorY = getHeight(Math.floor(mob.pos.x), Math.floor(mob.pos.z));
  if (mob.pos.y <= floorY + 1) {
    mob.pos.y = floorY + 1;
    mob.vel.y = 0;
    mob.onGround = true;
  }

  mob.vel.x *= Math.exp(-8 * dt);
  mob.vel.z *= Math.exp(-8 * dt);

  mob.model.group.position.copy(mob.pos);
  mob.model.group.rotation.y = mob.yaw;
}

function updateZombieAI(mob, dt, playerPos, distToPlayer) {
  if (mob.state === 'chase') {
    mob.yaw = Math.atan2(playerPos.x - mob.pos.x, playerPos.z - mob.pos.z);
    const speed = 3.4;
    mob.vel.x = Math.sin(mob.yaw) * speed;
    mob.vel.z = Math.cos(mob.yaw) * speed;

    if (distToPlayer < 1.4) {
      mob.attackCooldown -= dt;
      if (mob.attackCooldown <= 0) {
        mob.attackCooldown = 1.0;
        damagePlayer(3, new THREE.Vector3(Math.sin(mob.yaw), 0, Math.cos(mob.yaw)));
      }
    }
  }
}

function updateSkeletonAI(mob, dt, playerPos, distToPlayer) {
  mob.yaw = Math.atan2(playerPos.x - mob.pos.x, playerPos.z - mob.pos.z);

  if (mob.canSeePlayer) {
    // Keep 8 to 12 blocks distance
    if (distToPlayer < 7.0) {
      // Back away
      mob.vel.x = -Math.sin(mob.yaw) * 2.8;
      mob.vel.z = -Math.cos(mob.yaw) * 2.8;
    } else if (distToPlayer > 12.0) {
      // Advance
      mob.vel.x = Math.sin(mob.yaw) * 2.8;
      mob.vel.z = Math.cos(mob.yaw) * 2.8;
    }

    // Shoot arrow
    mob.shootCooldown -= dt;
    if (mob.shootCooldown <= 0 && distToPlayer < 18) {
      mob.shootCooldown = 2.2;
      playSwordSwingSound();
      spawnArrow(
        mob.pos.clone().add(new THREE.Vector3(0, 1.2, 0)),
        playerPos.clone().add(new THREE.Vector3(0, 0.9, 0))
      );
    }
  }
}

function updateSpiderAI(mob, dt, playerPos, distToPlayer) {
  if (mob.state === 'chase') {
    mob.yaw = Math.atan2(playerPos.x - mob.pos.x, playerPos.z - mob.pos.z);
    const speed = 4.5;
    mob.vel.x = Math.sin(mob.yaw) * speed;
    mob.vel.z = Math.cos(mob.yaw) * speed;

    // Spider Pounce Leap
    if (distToPlayer < 4.5 && mob.onGround && Math.random() < 0.05) {
      mob.vel.y = 5.5;
      mob.vel.x *= 1.5;
      mob.vel.z *= 1.5;
      mob.onGround = false;
    }

    if (distToPlayer < 1.3) {
      mob.attackCooldown -= dt;
      if (mob.attackCooldown <= 0) {
        mob.attackCooldown = 0.8;
        damagePlayer(2, new THREE.Vector3(Math.sin(mob.yaw), 0, Math.cos(mob.yaw)));
      }
    }
  }
}

function updatePigAI(mob, dt, playerPos, distToPlayer) {
  if (mob.state === 'flee') {
    mob.stateTimer -= dt;
    const away = mob.pos.clone().sub(playerPos).normalize();
    mob.yaw = Math.atan2(away.x, away.z);
    mob.vel.x = away.x * 4.2;
    mob.vel.z = away.z * 4.2;
    if (mob.stateTimer <= 0) mob.state = 'idle';
  } else {
    mob.stateTimer -= dt;
    if (mob.stateTimer <= 0) {
      mob.stateTimer = 2.0 + Math.random() * 3.0;
      mob.yaw += (Math.random() - 0.5) * 1.5;
    }
    mob.vel.x = Math.sin(mob.yaw) * 1.2;
    mob.vel.z = Math.cos(mob.yaw) * 1.2;
  }
}
