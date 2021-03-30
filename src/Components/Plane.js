import React from 'react'
import * as CANNON from 'cannon'
import { useCannon } from '../Hooks/useCannon'

export default function Plane({ position }) {
  // Register plane as a physics body with zero mass
  const ref = useCannon({ mass: 0 }, body => {
    body.addShape(new CANNON.Plane())
    body.position.set(...position)
  })

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach='material' color='wheat'/>
    </mesh>
  )
}
