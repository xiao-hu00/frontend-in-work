/*
 * @Author: xiaohu
 * @Date: 2024-08-17 22:18:53
 * @Description: threejs的平面组件
 */
import React, { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Plan: React.FC = () => {
  const settings = useMemo(
    () => ({
      uTime: { value: 0 },
      uNumber: { value: 800 },
      uColor: { value: new THREE.Color('yellow') },
    }),
    []
  )
  useFrame((_, delta) => {
    settings.uTime.value += delta * 0.5
  })
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        transparent={true}
        uniforms={settings}
        vertexShader={
          /* glsl */ `
            uniform float uTime;
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
            }
        `
        }
        fragmentShader={
          /* glsl */ `
          uniform vec3 uColor;
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            gl_FragColor = vec4(vUv, 1. * sin(uTime), 1.);
          }
        `
        }
      />
    </mesh>
  )
}

export default Plan
