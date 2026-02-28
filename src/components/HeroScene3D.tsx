import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[1.5, 1]} position={[2.5, 0.5, 0]}>
        <MeshDistortMaterial
          color="#e63462"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={[-2, -1, -1]}>
        <MeshWobbleMaterial
          color="#9333ea"
          roughness={0.3}
          metalness={0.7}
          factor={0.4}
          speed={1}
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
      <Octahedron ref={meshRef} args={[0.7]} position={[3, -2, -2]}>
        <MeshDistortMaterial
          color="#e63462"
          roughness={0.4}
          metalness={0.6}
          distort={0.2}
          speed={3}
          transparent
          opacity={0.5}
          wireframe
        />
      </Octahedron>
    </Float>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e63462" />
        <directionalLight position={[-5, -3, 3]} intensity={0.4} color="#9333ea" />
        <pointLight position={[0, 2, 4]} intensity={0.6} color="#e63462" />
        <FloatingIcosahedron />
        <FloatingTorus />
        <FloatingOctahedron />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
