import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* Placeholder for a laptop or complex shape using Icosahedron for futuristic feel */}
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color="#00f3ff" 
          wireframe={true} 
          emissive="#b026ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {/* Move the object to the right on desktop, center on mobile */}
        <group position={[0, 0, 0]}>
          <FloatingObject />
        </group>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}
