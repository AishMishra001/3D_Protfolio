import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <group>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight 
      position={[-20, 30 , 15]}
      angle={0.2}
      penumbra={1}
      intensity={20}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={isMobile ? 0.55 : 0.75} 
      position={isMobile ? [-3 , -3.25 , -1.5] : [0 , -3.25 , -1.5]}
      rotation={isMobile ? [-0.01 , 0.75 , -0.1] :[ -0.01 , -0.2 , -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {

    const [isMobile , setIsMobile ] = useState(false) ; 

    useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width: 500px)'); 

      setIsMobile(mediaQuery.matches); 

      const handleMediaQueryChange = (event)=>{
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change',handleMediaQueryChange) ; 

      return ()=>{
        mediaQuery.removeEventListener('change' , handleMediaQueryChange) ; 
      }
    },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas ; 
