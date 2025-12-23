import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-primary'>Hi, I'm Leonardo.</h1>
      <p className='text-primary'>I'm a <b className='text-white'>Frontend Software Engineer</b>, based in Brazil.</p>
      <p className='text-primary'>I approach software development pragmatically, prioritizing clarity, maintainability, and real-world impact.</p>
      <p className='text-primary'>Influenced by <i>The Pragmatic Programmer</i>, I focus on practical solutions, thoughtful trade-offs, and continuous improvement.</p>
      <p className='text-primary'>Currently open to frontend and fullstack engineering opportunities.</p>
    </>
  )
}

export default App
