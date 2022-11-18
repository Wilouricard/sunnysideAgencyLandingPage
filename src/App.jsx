import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <Hero /> 
    </div>
  )
}

export default App
