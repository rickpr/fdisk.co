import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Background from './background'
import Walls from './walls'
import Model from './model'

const Scene2 = (): JSX.Element => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 5, 40]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Background />
        <Model position={[0, -30, 0]} rotation={[0, 0, 0]} />
        <Walls />
      </Suspense>
    </Canvas>
  )
}

export default Scene2
