import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-primary'>This is a <b className='text-white'>primary</b> text</h1>
      <p className='text-primary'>And this is a secondary text</p>
    </>
  )
}

export default App
