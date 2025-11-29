// src/components/RotatingGlobe.jsx
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "../../data/skillsData"; // adjust path if needed

// Logos placed on a sphere
function LogoSprites({ radius = 2.2 }) {
  const urls = useMemo(() => skills.map((s) => s.src), []);
  const textures = useTexture(urls);

  const positions = useMemo(() => {
    const pts = [];
    const N = textures.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      pts.push([x * radius, y * radius * 0.9, z * radius]);
    }
    return pts;
  }, [textures.length, radius]);

  return (
    <group>
      {textures.map((tex, i) => {
        // Create THREE.Sprite manually
        const spriteMaterial = new THREE.SpriteMaterial({
          map: tex,
          transparent: true,
          depthTest: false,
          depthWrite: false,
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(0.6, 0.6, 0.6);
        sprite.position.set(...positions[i]);

        return <primitive key={i} object={sprite} />;
      })}
    </group>
  );
}

// Globe mesh with subtle opacity
function Globe({ autoRotate = true }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += delta * 0.2; // rotate slowly
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {/* subtle sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
          roughness={1}
        />
      </mesh>

      {/* Logo Sprites */}
      <LogoSprites radius={2.2} />
    </group>
  );
}

// Main exported Canvas wrapper
export default function RotatingGlobe({ height = 420 }) {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Globe />
      </Canvas>
    </div>
  );
}
