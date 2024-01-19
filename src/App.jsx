import { useState } from 'react'
 
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/aboout"
import Welcome from "./components/Welcome/Welcome"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Welcome/>
     <About/>
    </>
  )
}

export default App
