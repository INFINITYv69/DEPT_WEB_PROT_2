"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
    // Mouse tilt
    meshRef.current.rotation.x = state.mouse.y * 0.2;
    meshRef.current.rotation.z = -state.mouse.x * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial 
        color="#00f5ff" 
        wireframe 
        transparent 
        opacity={0.3} 
        emissive="#00f5ff" 
        emissiveIntensity={0.5} 
      />
      {/* Internal Core */}
      <mesh scale={0.98}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial 
          color="#0a0e1a" 
          transparent 
          opacity={0.5} 
        />
      </mesh>
    </mesh>
  );
}

type OrbitingIconProps = {
  radius: number;
  speed: number;
  offset: number;
  color: string;
};

function OrbitingIcon({ radius, speed, offset, color }: OrbitingIconProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speed + offset;
    meshRef.current.position.x = Math.cos(time) * radius;
    meshRef.current.position.z = Math.sin(time) * radius;
    meshRef.current.position.y = Math.sin(time * 0.5) * (radius * 0.5);
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={meshRef}>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f5ff" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={2} />
        
        <Stars radius={100} depth={50} count={1800} factor={4} saturation={0} fade speed={0.7} />
        
        <Suspense fallback={null}>
          <group position={[3, 0, 0]}>
            <Globe />
            <OrbitingIcon radius={4.5} speed={0.5} offset={0} color="#00f5ff" />
            <OrbitingIcon radius={5} speed={0.4} offset={Math.PI * 0.3} color="#ff00ff" />
            <OrbitingIcon radius={4} speed={0.6} offset={Math.PI * 0.7} color="#39ff14" />
            <OrbitingIcon radius={5.5} speed={0.3} offset={Math.PI * 1.2} color="#bf00ff" />
            <OrbitingIcon radius={4.8} speed={0.7} offset={Math.PI * 1.5} color="#ff6600" />
          </group>
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
