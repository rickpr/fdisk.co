import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Model from './model'

const DeskScene = (): JSX.Element => {
  return (
    <Canvas style={{ height: '500px' }} shadows>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} />
        <OrbitControls enablePan={false} autoRotate />
        <ambientLight />
        <Model position={[0, -35, 0]} rotation={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  )
}

export default DeskScene
