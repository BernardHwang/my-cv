"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars as DreiStars, Sparkles } from "@react-three/drei";
import { Star } from "./Star";
import { portfolioData, Section } from "../../data/portfolio";
import * as THREE from "three";

interface UniverseProps {
  activeSection: Section | null;
  onSectionClick: (section: Section) => void;
}

const Scene = ({ activeSection, onSectionClick }: UniverseProps) => {
  const groupRef = useRef<THREE.Group>(null);

  // Optional: slowly rotate the entire universe
  useFrame((state, delta) => {
    if (groupRef.current && !activeSection) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Background stars for atmosphere */}
      <DreiStars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#ffffff" />

      <group ref={groupRef}>
        {portfolioData.sections.map((section) => (
          <Star
            key={section.id}
            section={section}
            onClick={onSectionClick}
            isActive={activeSection?.id === section.id}
          />
        ))}
      </group>
      
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={3}
        maxDistance={20}
        autoRotate={!activeSection}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

export const Universe: React.FC<UniverseProps> = (props) => {
  return (
    <div className="w-full h-screen absolute inset-0 z-0 bg-[#050510]">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
};
