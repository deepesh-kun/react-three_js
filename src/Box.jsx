import { useFrame } from '@react-three/fiber'
import React from 'react'

const Box = (props) => {
  const ref = React.useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
    ref.current.position.y = 0
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => {
        console.log(e)
      }}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ffff} wireframe />
      <>props.name</>
    </mesh>
  )
}

export default Box
