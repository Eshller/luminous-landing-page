import { Object3DNode } from '@react-three/fiber';
import { Mesh, ShaderMaterial, PlaneGeometry } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>;
      shaderMaterial: Object3DNode<ShaderMaterial, typeof ShaderMaterial>;
      planeGeometry: Object3DNode<PlaneGeometry, typeof PlaneGeometry>;
    }
  }
}

export {};
