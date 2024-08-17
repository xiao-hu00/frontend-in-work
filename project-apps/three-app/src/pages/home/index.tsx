/*
 * @Author: xiaohu
 * @Date: 2024-08-17 12:22:48
 * @Description: 首页
 */
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Plan from './components/Plan'

const Home: React.FC = () => {
  
  return (
    <div className='p-4 w-[800px] h-[600px]'>
      <Canvas camera={{ fov: 45, near: 0.1, far: 100, zoom: 1 }}>
        <Plan />
      </Canvas>
    </div>
  )
}

export default Home
