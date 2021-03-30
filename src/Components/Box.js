import React, { useState } from 'react'
import * as CANNON from 'cannon'
import { useCannon } from '../Hooks/useCannon'

export default function Box({ position, show, color, hoverColor, preview }) {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 100000 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
    body.position.set(...position)
  });

  const [boxColor, setBoxColor] = useState(color ? color : "#575757")

  return (
    <mesh ref={ref} castShadow receiveShadow
      onClick={() => show(true)}
      onPointerOver={() => { setBoxColor(hoverColor); preview(true)  }}
      onPointerOut={() => { setBoxColor(color); preview(false) }}>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" roughness={0.5} color={boxColor} />

    </mesh>
  )
}
