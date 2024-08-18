/*
 * @Author: xiaohu
 * @Date: 2024-08-17 22:18:53
 * @Description: threejs的平面组件
 */
import React, { useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { vertexShader } from '../shader/planVertexShader'
import { fragmentShader } from '../shader/planFragmentShader'

const Plan: React.FC = () => {
  const settings = useMemo(
    () => ({
      uTime: { value: 0 },
      uNumber: { value: 800 },
      uColor: { value: new THREE.Color('yellow') },
    }),
    []
  )
  // 获取模型宽高
  const { width, height } = useThree((state) => state.viewport);

  useFrame((_, delta) => {
    settings.uTime.value += delta * 0.5
  })
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        transparent={true}
        uniforms={settings}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default Plan
