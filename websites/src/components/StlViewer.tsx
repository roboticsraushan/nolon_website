import { useEffect, useRef, useState } from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { BufferGeometry, Mesh } from 'three';

interface StlViewerProps {
  url: string;
  className?: string;
}

function Model({ url }: { url: string }) {
  const [geometry, setGeometry] = useState<BufferGeometry | null>(null);
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    const loader = new STLLoader();
    loader.load(url, (loadedGeometry: BufferGeometry) => {
      setGeometry(loadedGeometry);
    });
  }, [url]);

  if (!geometry) {
    return null;
  }

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[0.16, 0.16, 0.16]} castShadow receiveShadow position={[0, 0, 0]}>
      <meshPhysicalMaterial
        color="#666666"
        metalness={0.8}
        roughness={0.2}
        clearcoat={0.5}
        clearcoatRoughness={0.3}
      />
    </mesh>
  );
}

export default function StlViewer({ url, className = '' }: StlViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#000000']} />
        <PerspectiveCamera makeDefault position={[0, 600, 0]} fov={70} />
        <ambientLight intensity={0.8} />
        <spotLight
          position={[150, 150, 150]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-50, -50, -50]} intensity={0.5} />
        <Stage
          environment="city"
          intensity={0.5}
          adjustCamera={false}
          preset="rembrandt"
        >
          <Model url={url} />
        </Stage>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={true}
          minDistance={300}
          maxDistance={800}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
} 