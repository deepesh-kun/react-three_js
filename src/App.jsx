import React from 'react'
import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron.jsx'
import { OrbitControls, Stats } from '@react-three/drei'
import * as THREE from 'three'

const App = () => {
  const geometry = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398)
  ]

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} geometry={geometry} />
      <Polyhedron position={[0.75, -0.75, 0]} geometry={geometry} />
      <Polyhedron position={[-0.75, 0.75, 0]} geometry={geometry} />
      <Polyhedron position={[0.75, 0.75, 0]} geometry={geometry} />
      <Stats />
      <OrbitControls />
      <axesHelper args={[3]} />
      <gridHelper args={[20, 20]} />
    </Canvas>
  )
}

export default App
