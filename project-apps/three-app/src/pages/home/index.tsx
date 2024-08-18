/*
 * @Author: xiaohu
 * @Date: 2024-08-17 12:22:48
 * @Description: 首页
 */
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Plan from './components/Plan'
import Markdown from 'react-markdown'

const Home: React.FC = () => {
  const code = `\`\`\`glsl
    uniform vec3 uColor;
    varying vec2 vUv;
    uniform float uTime;
    void main() {
      float dist = fract((length(vUv - vec2(0.5)) / 0.707 - 0.2 * uTime) * 5.0);
      float radius = 0.5;
      vec3 color = vec3(step(radius, dist));
      gl_FragColor = vec4(color, 1.0);
    }
  `
  return (
    <div className='p-4 w-[700px] h-[700px] ml-[auto] mr-[auto] prose lg:prose-xl'>
      <Markdown>### fragmentShader：</Markdown>
      <Markdown>{code}</Markdown>
      <Markdown>### result：</Markdown>
      <div className='w-[180px] h-[180px]'>
        <Canvas camera={{ fov: 45, near: 0.1, far: 100, zoom: 1 }} dpr={[1, 2]}>
          <Plan />
        </Canvas>
      </div>
    </div>
  )
}

export default Home
