import { useFrame } from '@react-three/fiber'
import React from 'react'

const Polyhedron = (props) => {
  const ref = React.useRef()
  const [index, setIndex] = React.useState(0)

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      geometry={props.geometry[index]}
      onPointerDown={() => {
        setIndex((index) => (index + 1) % 3)
      }}>
      <meshBasicMaterial color={0x00ffff} wireframe />
      <>props.name</>
    </mesh>
  )
}

export default Polyhedron
