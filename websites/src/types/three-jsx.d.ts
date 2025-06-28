import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: ThreeElements['mesh'];
      meshStandardMaterial: ThreeElements['meshStandardMaterial'];
      meshPhysicalMaterial: ThreeElements['meshPhysicalMaterial'];
      ambientLight: ThreeElements['ambientLight'];
      spotLight: ThreeElements['spotLight'];
      pointLight: ThreeElements['pointLight'];
      color: ThreeElements['color'];
    }
  }
} 