import React, { useRef } from 'react'
import { useFrame, type GroupProps } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import backgroundImage from 'images/clock_face.png'

const SCALE = 8
const sideSize = SCALE * 2

/* Precompute some of these values so they don't recalculate on render */
// Second Hand
const secondToRadian = Math.PI / 30
const millisecondToRadian = Math.PI / 30000
// Minute Hand
const minuteToRadian = Math.PI / 30
const secondToMinute = 1 / 60
// Hour Hand
const hourToRadian = Math.PI / 6
const minuteToHour = 1 / 60

// Widths
const clockRadius = sideSize / 2
const centerRadius = clockRadius / 10
const frameWidth = clockRadius / 20

/* Hands */
// Depths
const hourHandDepth = sideSize / 40
const minuteHandDepth = sideSize / 30
const secondHandDepth = minuteHandDepth + (minuteHandDepth - hourHandDepth)
// Widths
const hourHandWidth = secondHandDepth
const minuteHandWidth = minuteHandDepth
const secondHandWidth = hourHandDepth
// Lengths
const secondHandLength = sideSize / 2
const minuteHandLength = sideSize / 3
const hourHandLength = sideSize / 4
// Offsets
const hourHandOffset = hourHandLength / 2 - sideSize / 10
const minuteHandOffset = minuteHandLength / 2 - sideSize / 10
const secondHandOffset = secondHandLength / 2 - sideSize / 10

const ClockFace = (props: GroupProps): JSX.Element => {
  const background = useTexture(backgroundImage)
  const secondHandRef = useRef(null)
  const minuteHandRef = useRef(null)
  const hourHandRef = useRef(null)
  useFrame(() => {
    const now = new Date()
    const secondHandRotation = now.getSeconds() * secondToRadian + now.getMilliseconds() * millisecondToRadian
    const minuteHandRotation = now.getMinutes() * minuteToRadian + secondHandRotation * secondToMinute
    const hourHandRotation = now.getHours() * hourToRadian + minuteHandRotation * minuteToHour
    // @ts-expect-error these are already initialized
    secondHandRef.current.rotation.z = -secondHandRotation
    // @ts-expect-error these are already initialized
    minuteHandRef.current.rotation.z = -minuteHandRotation
    // @ts-expect-error these are already initialized
    hourHandRef.current.rotation.z = -hourHandRotation
  })
  /* eslint-disable react/no-unknown-property */
  const backing = (
    <mesh>
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial
        map={background}
        side={THREE.DoubleSide}
        roughness={0}
      />
    </mesh>
  )
  const center = (
    <mesh rotation-x={Math.PI / 2}>
      <cylinderGeometry args={[centerRadius, centerRadius, 2, 21]} />
    </mesh>
  )
  const frame = (
    <mesh>
      <torusGeometry args={[clockRadius - frameWidth, frameWidth, 8, 100]} />
    </mesh>
  )
  const secondHand = (
    <group ref={secondHandRef}>
      <mesh position={[0, secondHandOffset, secondHandDepth]}>
        <boxGeometry args={[secondHandWidth, secondHandLength, 0.1]} />
        <meshStandardMaterial color='red' roughness={0.5} />
      </mesh>
    </group>
  )
  const minuteHand = (
    <group ref={minuteHandRef}>
      <mesh position={[0, minuteHandOffset, minuteHandDepth]}>
        <boxGeometry args={[minuteHandWidth, minuteHandLength, 0.1]} />
        <meshStandardMaterial color='black' roughness={0.5} />
      </mesh>
    </group>
  )
  const hourHand = (
    <group ref={hourHandRef}>
      <mesh position={[0, hourHandOffset, hourHandDepth]}>
        <boxGeometry args={[hourHandWidth, hourHandLength, 0.1]} />
        <meshStandardMaterial color='black' roughness={0.5} />
      </mesh>
    </group>
  )
  /* eslint-enable react/no-unknown-property */
  return (
    <group {...props}>
      {backing}
      {center}
      {frame}
      {secondHand}
      {minuteHand}
      {hourHand}
    </group>
  )
}

export default ClockFace
