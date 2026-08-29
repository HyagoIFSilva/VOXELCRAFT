/**
 * Articulated 3D Player Character Model with Real-time Armor Layering & Held Weapons.
 *
 * Renders the full player body in 3rd person perspective (F4) and the inventory preview.
 * Dynamically displays 3D Helmets, Chestplates, Leggings and Boots for Iron and Diamond tiers.
 */

import * as THREE from 'three';
import { BlockType, isArmor, isWeapon } from '../world/blockTypes.js';
import { armorSlots } from '../ui/inventory.js';
import { getBlockPreviewMesh } from '../rendering/blockPreview.js';

let playerGroup = null;
let bodyYawGroup = null;
let headGroup = null;
let torsoGroup = null;
let leftArmGroup = null;
let rightArmGroup = null;
let leftLegGroup = null;
let rightLegGroup = null;

// Armor Meshes
let helmetMesh = null;
let chestplateMesh = null;
let leftArmArmorMesh = null;
let rightArmArmorMesh = null;
let leftLeggingsMesh = null;
let rightLeggingsMesh = null;
let leftBootMesh = null;
let rightBootMesh = null;

// Held item in 3rd person
let heldItemGroup = null;
let lastHeldItemType = -1;

// Materials
let ironArmorMat = null;
let diamondArmorMat = null;

let walkPhase = 0;

export function initPlayerModel(scene) {
  if (playerGroup) {
    scene.remove(playerGroup);
  }

  playerGroup = new THREE.Group();
  playerGroup.name = 'player-3d-character';

  bodyYawGroup = new THREE.Group();
  playerGroup.add(bodyYawGroup);

  // ── Materials ───────────────────────────────────────────
  const skinMat = new THREE.MeshLambertMaterial({ color: 0xc68b59 });
  const hairMat = new THREE.MeshLambertMaterial({ color: 0x451a03 });
  const shirtMat = new THREE.MeshLambertMaterial({ color: 0x00a8a8 });
  const pantsMat = new THREE.MeshLambertMaterial({ color: 0x1e3a8a });
  const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyePupilMat = new THREE.MeshBasicMaterial({ color: 0x2563eb });
  const mouthMat = new THREE.MeshLambertMaterial({ color: 0x854d0e });

  ironArmorMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.35,
    metalness: 0.85,
  });

  diamondArmorMat = new THREE.MeshStandardMaterial({
    color: 0x22d3ee,
    roughness: 0.20,
    metalness: 0.65,
    emissive: 0x083344,
    emissiveIntensity: 0.35,
  });

  // ── 1. Head Group (Pivot at y = 1.42) ─────────────────────
  headGroup = new THREE.Group();
  headGroup.position.set(0, 1.42, 0);

  // Head base
  const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.40, 0.40), skinMat);
  headMesh.position.set(0, 0.20, 0);
  headGroup.add(headMesh);

  // Hair (top, back and sides)
  const hairMesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.42), hairMat);
  hairMesh.position.set(0, 0.33, -0.01);
  headGroup.add(hairMesh);

  // Eyes (Left & Right)
  const leftEyeWhite = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.02), eyeWhiteMat);
  leftEyeWhite.position.set(-0.09, 0.21, 0.205);
  headGroup.add(leftEyeWhite);

  const leftEyePupil = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.022), eyePupilMat);
  leftEyePupil.position.set(-0.11, 0.21, 0.206);
  headGroup.add(leftEyePupil);

  const rightEyeWhite = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.02), eyeWhiteMat);
  rightEyeWhite.position.set(0.09, 0.21, 0.205);
  headGroup.add(rightEyeWhite);

  const rightEyePupil = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.022), eyePupilMat);
  rightEyePupil.position.set(0.07, 0.21, 0.206);
  headGroup.add(rightEyePupil);

  // Mouth
  const mouthMesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.02), mouthMat);
  mouthMesh.position.set(0, 0.11, 0.205);
  headGroup.add(mouthMesh);

  // ── Helmet Armor 3D Layer ──
  helmetMesh = new THREE.Group();
  const helmCrown = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.22, 0.46), ironArmorMat);
  helmCrown.position.set(0, 0.31, 0);
  helmetMesh.add(helmCrown);

  const helmSideL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.44), ironArmorMat);
  helmSideL.position.set(-0.21, 0.18, 0);
  helmetMesh.add(helmSideL);

  const helmSideR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.44), ironArmorMat);
  helmSideR.position.set(0.21, 0.18, 0);
  helmetMesh.add(helmSideR);

  const helmBack = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.24, 0.04), ironArmorMat);
  helmBack.position.set(0, 0.18, -0.21);
  helmetMesh.add(helmBack);

  const helmNose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.10, 0.04), ironArmorMat);
  helmNose.position.set(0, 0.22, 0.21);
  helmetMesh.add(helmNose);

  helmetMesh.visible = false;
  headGroup.add(helmetMesh);

  bodyYawGroup.add(headGroup);

  // ── 2. Torso (Pivot at y = 0.90) ─────────────────────────
  torsoGroup = new THREE.Group();
  torsoGroup.position.set(0, 0.90, 0);

  const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.52, 0.22), shirtMat);
  torsoMesh.position.set(0, 0.26, 0);
  torsoGroup.add(torsoMesh);

  // ── Chestplate Armor 3D Layer ──
  chestplateMesh = new THREE.Group();
  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.54, 0.26), ironArmorMat);
  chestPlate.position.set(0, 0.26, 0);
  chestplateMesh.add(chestPlate);

  const pauldronL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.26), ironArmorMat);
  pauldronL.position.set(-0.30, 0.46, 0);
  chestplateMesh.add(pauldronL);

  const pauldronR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.26), ironArmorMat);
  pauldronR.position.set(0.30, 0.46, 0);
  chestplateMesh.add(pauldronR);

  chestplateMesh.visible = false;
  torsoGroup.add(chestplateMesh);

  bodyYawGroup.add(torsoGroup);

  // ── 3. Left Arm (Pivot at y = 1.38, x = -0.32) ───────────
  leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(-0.31, 1.38, 0);

  const leftArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.50, 0.18), skinMat);
  leftArmMesh.position.set(0, -0.25, 0);
  leftArmGroup.add(leftArmMesh);

  const leftSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.186, 0.18, 0.186), shirtMat);
  leftSleeve.position.set(0, -0.10, 0);
  leftArmGroup.add(leftSleeve);

  leftArmArmorMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.26, 0.20), ironArmorMat);
  leftArmArmorMesh.position.set(0, -0.14, 0);
  leftArmArmorMesh.visible = false;
  leftArmGroup.add(leftArmArmorMesh);

  bodyYawGroup.add(leftArmGroup);

  // ── 4. Right Arm (Pivot at y = 1.38, x = 0.32) ───────────
  rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(0.31, 1.38, 0);

  const rightArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.50, 0.18), skinMat);
  rightArmMesh.position.set(0, -0.25, 0);
  rightArmGroup.add(rightArmMesh);

  const rightSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.186, 0.18, 0.186), shirtMat);
  rightSleeve.position.set(0, -0.10, 0);
  rightArmGroup.add(rightSleeve);

  rightArmArmorMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.26, 0.20), ironArmorMat);
  rightArmArmorMesh.position.set(0, -0.14, 0);
  rightArmArmorMesh.visible = false;
  rightArmGroup.add(rightArmArmorMesh);

  // Held Item container at hand
  heldItemGroup = new THREE.Group();
  heldItemGroup.position.set(0, -0.42, 0.12);
  rightArmGroup.add(heldItemGroup);

  bodyYawGroup.add(rightArmGroup);

  // ── 5. Left Leg (Pivot at y = 0.90, x = -0.11) ───────────
  leftLegGroup = new THREE.Group();
  leftLegGroup.position.set(-0.11, 0.90, 0);

  const leftLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.60, 0.20), pantsMat);
  leftLegMesh.position.set(0, -0.30, 0);
  leftLegGroup.add(leftLegMesh);

  leftLeggingsMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.36, 0.22), ironArmorMat);
  leftLeggingsMesh.position.set(0, -0.18, 0);
  leftLeggingsMesh.visible = false;
  leftLegGroup.add(leftLeggingsMesh);

  leftBootMesh = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.20, 0.25), ironArmorMat);
  leftBootMesh.position.set(0, -0.48, 0.015);
  leftBootMesh.visible = false;
  leftLegGroup.add(leftBootMesh);

  bodyYawGroup.add(leftLegGroup);

  // ── 6. Right Leg (Pivot at y = 0.90, x = 0.11) ──────────
  rightLegGroup = new THREE.Group();
  rightLegGroup.position.set(0.11, 0.90, 0);

  const rightLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.60, 0.20), pantsMat);
  rightLegMesh.position.set(0, -0.30, 0);
  rightLegGroup.add(rightLegMesh);

  rightLeggingsMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.36, 0.22), ironArmorMat);
  rightLeggingsMesh.position.set(0, -0.18, 0);
  rightLeggingsMesh.visible = false;
  rightLegGroup.add(rightLeggingsMesh);

  rightBootMesh = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.20, 0.25), ironArmorMat);
  rightBootMesh.position.set(0, -0.48, 0.015);
  rightBootMesh.visible = false;
  rightLegGroup.add(rightBootMesh);

  bodyYawGroup.add(rightLegGroup);

  playerGroup.visible = false; // Initially 1st person
  scene.add(playerGroup);

  return playerGroup;
}

export function updatePlayerModel(
  dt,
  playerPos,
  playerYaw,
  playerPitch,
  isMoving,
  onGround,
  isFlying,
  swingProgress,
  activeItemType,
  is3rdPerson
) {
  if (!playerGroup) return;

  playerGroup.visible = is3rdPerson;
  if (!is3rdPerson) return;

  // Position & Base Yaw Orientation
  playerGroup.position.copy(playerPos);
  bodyYawGroup.rotation.y = playerYaw + Math.PI;

  // Head Pitch
  headGroup.rotation.x = -playerPitch;

  // Walk Cycle Animations
  if (isMoving) {
    walkPhase += dt * (isFlying ? 4.0 : 10.0);
  } else {
    walkPhase = 0;
  }

  const legSwing = Math.sin(walkPhase) * 0.65;
  leftLegGroup.rotation.x = -legSwing;
  rightLegGroup.rotation.x = legSwing;

  leftArmGroup.rotation.x = legSwing * 0.75;

  // Right arm swing / attack animation
  if (swingProgress < 1.0) {
    const swingFactor = Math.sin(swingProgress * Math.PI);
    rightArmGroup.rotation.x = -1.4 * swingFactor;
    rightArmGroup.rotation.z = -0.3 * swingFactor;
    rightArmGroup.rotation.y = 0.4 * swingFactor;
  } else {
    rightArmGroup.rotation.x = -legSwing * 0.75;
    rightArmGroup.rotation.z = 0;
    rightArmGroup.rotation.y = 0;
  }

  // ── Update Dynamic Armor Layers ─────────────────────────
  updateArmorVisuals();

  // ── Update Held Item in 3rd Person ──────────────────────
  if (activeItemType !== lastHeldItemType) {
    lastHeldItemType = activeItemType;
    heldItemGroup.clear();

    if (activeItemType > 0) {
      const preview = getBlockPreviewMesh(activeItemType, 0.28);
      if (preview) {
        if (isWeapon(activeItemType)) {
          preview.position.set(0, -0.30, -0.14);
          preview.rotation.set(-0.85, 0, 0);
        } else if (activeItemType === BlockType.TORCH || activeItemType === BlockType.FLINT_AND_STEEL) {
          preview.position.set(0, -0.30, -0.12);
          preview.rotation.set(-0.50, 0, 0);
        } else {
          preview.position.set(0, -0.26, -0.10);
          preview.rotation.set(0.15, 0.40, 0);
        }
        heldItemGroup.add(preview);
      }
    }
  }
}

function applyArmorMaterial(groupOrMesh, armorType) {
  const mat = (
    armorType === BlockType.DIAMOND_HELMET ||
    armorType === BlockType.DIAMOND_CHESTPLATE ||
    armorType === BlockType.DIAMOND_LEGGINGS ||
    armorType === BlockType.DIAMOND_BOOTS
  ) ? diamondArmorMat : ironArmorMat;

  if (groupOrMesh.isMesh) {
    groupOrMesh.material = mat;
  } else if (groupOrMesh.children) {
    groupOrMesh.children.forEach(child => {
      if (child.isMesh) child.material = mat;
    });
  }
}

function updateArmorVisuals() {
  // 1. Helmet (armorSlots[0])
  const helmType = armorSlots[0] || 0;
  if (helmType > 0) {
    helmetMesh.visible = true;
    applyArmorMaterial(helmetMesh, helmType);
  } else {
    helmetMesh.visible = false;
  }

  // 2. Chestplate (armorSlots[1])
  const chestType = armorSlots[1] || 0;
  if (chestType > 0) {
    chestplateMesh.visible = true;
    leftArmArmorMesh.visible = true;
    rightArmArmorMesh.visible = true;
    applyArmorMaterial(chestplateMesh, chestType);
    applyArmorMaterial(leftArmArmorMesh, chestType);
    applyArmorMaterial(rightArmArmorMesh, chestType);
  } else {
    chestplateMesh.visible = false;
    leftArmArmorMesh.visible = false;
    rightArmArmorMesh.visible = false;
  }

  // 3. Leggings (armorSlots[2])
  const legType = armorSlots[2] || 0;
  if (legType > 0) {
    leftLeggingsMesh.visible = true;
    rightLeggingsMesh.visible = true;
    applyArmorMaterial(leftLeggingsMesh, legType);
    applyArmorMaterial(rightLeggingsMesh, legType);
  } else {
    leftLeggingsMesh.visible = false;
    rightLeggingsMesh.visible = false;
  }

  // 4. Boots (armorSlots[3])
  const bootType = armorSlots[3] || 0;
  if (bootType > 0) {
    leftBootMesh.visible = true;
    rightBootMesh.visible = true;
    applyArmorMaterial(leftBootMesh, bootType);
    applyArmorMaterial(rightBootMesh, bootType);
  } else {
    leftBootMesh.visible = false;
    rightBootMesh.visible = false;
  }
}

export function getPlayerModelGroup() {
  return playerGroup;
}
