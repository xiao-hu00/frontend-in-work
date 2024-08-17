'use client'

// import Image from 'next/image'
import { PanelGroup, Panel, PanelResizeHandle, disableGlobalCursorStyles } from 'react-resizable-panels'

export default function Home() {
  // disableGlobalCursorStyles()
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1200px]'>
        resizable
        {/* <Image src='/05.jpg' alt='main' width={1200} height={615} /> */}
        <PanelGroup direction='vertical' style={{ height: 500, width: 800, border: '1px solid #ddd' }}>
          <Panel maxSize={75}>top</Panel>
          <PanelResizeHandle style={{ height: 2, background: '#333' }} />
          <Panel maxSize={75}>bottom</Panel>
        </PanelGroup>
      </div>
    </div>
  )
}
