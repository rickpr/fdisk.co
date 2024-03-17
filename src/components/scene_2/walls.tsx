import React from 'react'
import { useTexture } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'

import Wood from 'images/scene/wood.png'

const SCALE = 80
const Y_OFFSET = -30
const sideSize = SCALE * 2

/* eslint-disable react/no-unknown-property */

const Walls = (props: MeshProps): JSX.Element[] => {
  const woodTexture = useTexture(Wood)

  const floor = (
    <mesh
      {...props}
      position={[0, Y_OFFSET, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

  const ceiling = (
    <mesh
      {...props}
      position={[0, SCALE * 2 + Y_OFFSET, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

  const leftWall = (
    <mesh
      {...props}
      position={[-SCALE, SCALE + Y_OFFSET, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

  const rightWall = (
    <mesh
      {...props}
      position={[SCALE, SCALE + Y_OFFSET, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

  const backWall = (
    <mesh
      {...props}
      position={[0, SCALE + Y_OFFSET, SCALE]}
      rotation={[0, 0, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

  const frontWall = (
    <mesh
      {...props}
      position={[0, SCALE / 4 + Y_OFFSET, -SCALE]}
      rotation={[0, 0, 0]}
    >
      <planeGeometry args={[sideSize, SCALE / 2]} />
      <meshPhysicalMaterial roughness={0.2} opacity={0} transmission={0.5} thickness={1} />
    </mesh>
  )

  return [floor, ceiling, leftWall, rightWall, backWall, frontWall]
}
export default Walls
