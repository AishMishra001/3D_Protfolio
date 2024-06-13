import { Suspense } from "react";
import React from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgURL]);
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={4}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgURL={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
