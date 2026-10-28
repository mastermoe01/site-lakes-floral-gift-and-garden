"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { bulbs, frameSegments, panes } from "./greenhouse";

const EVERGREEN = new THREE.Color("#4b5443");
const GLASS = new THREE.Color("#d5d7ca");
const WARM = new THREE.Color("#ffc98a");

/** Deterministic 0–1 hash, so the pollen field is the same on every render. */
const rand = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

function Greenhouse() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const frame = useMemo(() => {
    const pts = frameSegments().flat().flat();
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  const glass = useMemo(() => {
    const pos: number[] = [];
    for (const [a, b, c, d] of panes()) pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals();
    return g;
  }, []);

  const lights = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(bulbs().flat(), 3));
    return g;
  }, []);

  // Sparse pollen drifting through and around the house.
  const pollen = useMemo(() => {
    const n = 140;
    const p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      p[i * 3] = (rand(i * 3) - 0.5) * 4.4;
      p[i * 3 + 1] = rand(i * 3 + 1) * 2.6;
      p[i * 3 + 2] = (rand(i * 3 + 2) - 0.5) * 4.6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    return g;
  }, []);
  const pollenRef = useRef<THREE.Points>(null);
  const bulbMat = useRef<THREE.PointsMaterial>(null);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // Slow turn, plus a few degrees of pointer parallax.
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;
    g.rotation.y = -0.65 + t * 0.06 + pointer.current.x * 0.18;
    g.rotation.x = 0.08 - pointer.current.y * 0.06;

    const pos = pollenRef.current?.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (pos) {
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) + dt * (0.05 + (i % 7) * 0.008);
        if (y > 2.7) y = 0;
        pos.setY(i, y);
        pos.setX(i, pos.getX(i) + Math.sin(t * 0.4 + i) * dt * 0.02);
      }
      pos.needsUpdate = true;
    }
    if (bulbMat.current) bulbMat.current.opacity = 0.85 + Math.sin(t * 1.3) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.95, 0]}>
      <mesh geometry={glass}>
        <meshBasicMaterial color={GLASS} transparent opacity={0.16} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <lineSegments geometry={frame}>
        <lineBasicMaterial color={EVERGREEN} transparent opacity={0.95} />
      </lineSegments>
      <points geometry={lights}>
        <pointsMaterial ref={bulbMat} color="#e9a35c" size={0.07} sizeAttenuation transparent depthWrite={false} />
      </points>
      <points geometry={lights}>
        <pointsMaterial color={WARM} size={0.34} sizeAttenuation transparent opacity={0.16} depthWrite={false} />
      </points>
      <points ref={pollenRef} geometry={pollen}>
        <pointsMaterial color="#a75945" size={0.022} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
      </points>
      {/* ground line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
        <ringGeometry args={[2.02, 2.04, 96]} />
        <meshBasicMaterial color={EVERGREEN} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.5, 7.4], fov: 36 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.05, 0)}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <Greenhouse />
    </Canvas>
  );
}
