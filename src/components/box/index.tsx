import React, { useEffect, useRef } from 'react'
import { useTexture } from '@react-three/drei'
import type { MeshProps, ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'

import Me from 'images/me.jpg'
import Glider from 'images/glider.jpg'
import GithubIcon from 'images/brand-github.png'
import LinkedInIcon from 'images/brand-linkedin.png'
import Blog from 'images/blog.png'

import ClockFace from './clock_face'

const SCALE = 8
const sideSize = SCALE * 2

const Box = (props: MeshProps): JSX.Element => {
  const meTexture = useTexture(Me)
  const gliderTexture = useTexture(Glider)
  const githubTexture = useTexture(GithubIcon)
  const linkedInTexture = useTexture(LinkedInIcon)
  const blogTexture = useTexture(Blog)

  const currentLink = useRef<string | null>(null)
  const mousePositionWhenClicking = useRef<{ x: number, y: number } | null>(null)

  useEffect(() => {
    const goToLink = (event: MouseEvent): void => {
      if (
        currentLink.current !== null &&
          event.clientX === mousePositionWhenClicking.current?.x &&
          event.clientY === mousePositionWhenClicking.current?.y
      ) {
        window.open(currentLink.current, '_blank')
      }
      currentLink.current = null
    }
    window.addEventListener('mouseup', goToLink)
    return () => { window.removeEventListener('mouseup', goToLink) }
  }, [])

  const openLink = (linkURL: string | null): (event: ThreeEvent<PointerEvent>) => void => {
    return event => {
      currentLink.current = linkURL
      mousePositionWhenClicking.current = {
        x: Math.trunc(event.clientX),
        y: Math.trunc(event.clientY)
      }
      event.stopPropagation()
    }
  }

  const front = (
    <ClockFace
      position={[0, 0, SCALE]}
      onPointerDown={openLink(null)}
    />
  )

  /* eslint-disable react/no-unknown-property */
  const right = (
    <mesh
      {...props}
      position={[SCALE, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      onPointerDown={() => { window.location.href = '/blog' }}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={blogTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )
  const left = (
    <mesh
      {...props}
      position={[-SCALE, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      onPointerDown={openLink('https://linkedin.com/in/rickpr')}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={linkedInTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const back = (
    <mesh
      {...props}
      position={[0, 0, -SCALE]}
      rotation={[0, Math.PI, 0]}
      onPointerDown={openLink('https://github.com/rickpr')}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={githubTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const top = (
    <mesh
      {...props}
      position={[0, SCALE, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onPointerDown={openLink(null)}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={meTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const bottom = (
    <mesh
      {...props}
      position={[0, -SCALE, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerDown={openLink(null)}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={gliderTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )
  /* eslint-enable react/no-unknown-property */

  return (
    <>
      {front}
      {right}
      {left}
      {back}
      {top}
      {bottom}
    </>
  )
}

export default Box
