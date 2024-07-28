import React from 'react'

const App: React.FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <span>这个是首页，app的name是{name}</span>
    </>
  )
}

export default App
