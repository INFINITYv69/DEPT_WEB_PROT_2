"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 3000 }) {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const cyan = new THREE.Color("#00f5ff");
    const magenta = new THREE.Color("#ff00ff");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color = Math.random() > 0.5 ? cyan : magenta;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.05 + 0.02;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    
    // Subtle rotation
    points.current.rotation.y += 0.001;
    points.current.rotation.x += 0.0005;

    // Mouse parallax
    const targetX = state.mouse.x * 2;
    const targetY = state.mouse.y * 2;
    points.current.position.x += (targetX - points.current.position.x) * 0.05;
    points.current.position.y += (targetY - points.current.position.y) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function AmbientParticles() {
  const particleCount = typeof navigator !== "undefined" && navigator.hardwareConcurrency < 4 ? 500 : 1600;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-2]">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <Particles count={particleCount} />
      </Canvas>
    </div>
  );
}
