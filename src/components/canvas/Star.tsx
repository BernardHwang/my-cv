"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { Section } from "../../data/portfolio";

interface StarProps {
  section: Section;
  onClick: (section: Section) => void;
  isActive: boolean;
}

export const Star: React.FC<StarProps> = ({ section, onClick, isActive }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Gentle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + section.position[0]) * 0.002;
    }
    if (materialRef.current) {
      const targetEmissive = hovered || isActive ? 1 : 0.2;
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        materialRef.current.emissiveIntensity,
        targetEmissive,
        0.1
      );
    }
  });

  return (
    <group position={section.position}>
      {/* The Star Mesh */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(section);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHover(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[isActive ? 0.8 : 0.5, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={section.color}
          emissive={section.color}
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Label for the Star */}
      <Text
        position={[0, isActive ? 1.2 : 0.8, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {section.title}
      </Text>

      {/* Ring around active star */}
      {isActive && (
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[1, 1.05, 32]} />
          <meshBasicMaterial color={section.color} side={THREE.DoubleSide} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
};
