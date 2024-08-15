import './App.css'

import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, Html, useProgress } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Suspense } from 'react'
import ScrollingText from './ScrollingText'


function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return <primitive object={gltf.scene} scale={1.5} rotation={[0, -Math.PI / 2, 0]} />
}


function App() {

  return (
    <>
      <div className="main-scroll">
        <ScrollingText text="el sueño es la actividad más antigua de la humanidad, y también la más enigmática"/>
        <ScrollingText text="الكوابيس هي الحقيقة التي لا نريد أن نعترف بها"/>
        <ScrollingText text="夜半梦魇，晨起明心"/>
        <ScrollingText text="В кошмарах мы встречаемся с самими собой"/>
      </div>
      <div style={{ position: "fixed", width: "60%", height: "60%", top: "20%", left: "20%" }}>
        <Canvas camera={{ position: [0, 0, 5]}}>
          <Suspense>
            <Model />
            <OrbitControls enablePan={false} enableZoom={false} />
            <Environment preset="forest" background={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App
