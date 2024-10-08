/*
 * @Author: xiaohu
 * @Date: 2023-12-09 13:06:44
 * @Description: 写一些测试动画效果
 */
import React, { useRef } from 'react'
import {
  useSpring,
  animated,
  useSpringValue,
  useSprings,
} from '@react-spring/web'
import { useScroll as useScrollHooks } from 'ahooks'

const Page: React.FC = () => {
  const ref = useRef<any>(null)
  const sRef = useRef<any>(null)
  const scroll = useScrollHooks(sRef) as {
    top: number
    left: number
  }

  const fontSize = useSpringValue(12)
  if (scroll?.top > 200) {
    fontSize.start(20)
  } else {
    fontSize.start(12)
  }
  const [springs, api] = useSpring(() => ({ opacity: 0, y: 60 }))
  if (scroll?.top < 200) {
    api.start({ opacity: 0, y: 60 })
  } else {
    api.start({ opacity: 1, y: 0 })
  }
  const list = Array.from({ length: 20 }, (_, i) => 1 + i)
  const [animateList, api2] = useSprings(
    7,
    () => ({
      // ref: boxApi,
      scale: 0,
      opacity: 0,
      config: {
        mass: 2,
        tension: 220,
      },
    }),
    []
  )
  if (scroll?.top < 100) {
    api2.start(i => ({ scale: 0, opacity: 0, delay: (6 - i) * 200 }))
  } else {
    api2.start(i => ({ scale: 1, opacity: 1, delay: i * 200 }))
  }

  return (
    <div ref={sRef} className='h-[100%] relative overflow-y-scroll'>
      {/* <animated.div
        style={{
          position: 'absolute',
          ...styles
        }}
      >
        test animate
      </animated.div> */}
      <div style={{ position: 'absolute', right: 100, top: 100 }}>
        {animateList.map(({ scale, opacity }, index) => (
          <animated.div
            key={index}
            style={{
              transform: `translate(0px, ${index * 10}px)`,
              scale,
              opacity,
            }}
          >
            animate{index}
          </animated.div>
        ))}
      </div>
      {/* <animated.div style={{ position: 'absolute', left: 200, top: scrollY, fontSize }}>
        Hello Animate
      </animated.div> */}
      <animated.div
        style={{
          height: 200,
          background: 'hotpink',
          position: 'absolute',
          left: 200,
          top: 400,
          ...springs,
        }}
      >
        this is an animate
      </animated.div>
      {/* <div style={{ position: 'fixed', top: 0, left: 300 }}>{JSON.stringify(scroll)}</div> */}
      <div ref={ref}>
        {list.map(item => (
          <div style={{ height: 100 }} key={item}>
            item: {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
