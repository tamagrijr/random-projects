import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { Provider } from './Hooks/useCannon'

import Box from './Components/Box';
import Plane from './Components/Plane';
import Sprite from './Components/Sprite';
import Preview from './Components/Preview';
import useMousePosition from './Hooks/useMousePosition';

function App() {
  //useMousePosition Hook grabs the location of the cursor left by x top by y
  const { x, y } = useMousePosition();
  const [showPlane, setShowPlane] = useState(true);
  // When React removes (unmounts) the upper plane after 5 sec, objects should drop ...
  // This may seem like magic, but as the plane unmounts it removes itself from cannon and that's that
  useEffect(() => void setTimeout(() => setShowPlane(false), 5000), []);

  const [showPreview, setShowPreview] = useState(false);
  const [showSprite, setShowSprite] = useState(false);
  const [showParticleRain, setShowParticleRain] = useState(false);

  return (
    <div className="main">
      {showPreview && <Preview x={x} y={y} message={showPreview} />}
      
      <Canvas
        shadowMap
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}>
        <pointLight position={[-10, -10, 30]} intensity={0.25} />
        <spotLight intensity={0.3} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <Provider>
          <Plane position={[0, 0, -10]} />
          {showPlane && <Plane position={[0, 0, 0]} />}

          <Box 
          position={[1, 0, 1]} 
          show={setShowSprite} 
          color={'#BC6C75'}
          hoverColor={'#FE664E'}
          preview={setShowPreview}
          message={'Click to check out a sprite animation!'}
          />
          <Box 
          position={[2, 1, 5]}
          show={setShowParticleRain} 
          color={'#A8C2FB'}
          hoverColor={'#6893EE'}
          preview={setShowPreview}
          message={'Click to check out a particle effect!'}
          />

          {/* <Box position={[0, 0, 6]} />
          <Box position={[-1, 1, 8]} />
          <Box position={[-2, 2, 13]} />
          <Box position={[2, -1, 13]} />
          {!showPlane && <Box position={[0.5, 1.0, 20]} />} */}
        </Provider>
      </Canvas>
      
      {showSprite && <Sprite show={setShowSprite} />}  
    </div>
  )
}

export default App;
