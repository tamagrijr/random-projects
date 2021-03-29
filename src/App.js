import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { Provider } from './Hooks/useCannon'

import Box from './Components/Box';
import Plane from './Components/Plane';

function App() {
  const [showPlane, set] = useState(true);
  // When React removes (unmounts) the upper plane after 5 sec, objects should drop ...
  // This may seem like magic, but as the plane unmounts it removes itself from cannon and that's that
  useEffect(() => void setTimeout(() => set(false), 5000), []);

  const [showSprite, setShowSprite] = useState(false);

  return (
    <div className="main">
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
          {/* {showPlane && <Plane position={[0, 0, 0]} />} */}
          <Box onClick={() => setShowSprite(true)} 
          position={[1, 0, 1]} 
          color={'#BC6C75'}
          hoverColor={'#BD081C'}
          />
          <Box position={[2, 1, 5]} />
          <Box position={[0, 0, 6]} />
          <Box position={[-1, 1, 8]} />
          <Box position={[-2, 2, 13]} />
          <Box position={[2, -1, 13]} />
          {/* {!showPlane && <Box position={[0.5, 1.0, 20]} />} */}
        </Provider>
      </Canvas>
    </div>
  )
}

export default App;
