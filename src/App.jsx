import { useState } from 'react'
 
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/aboout"
import Welcome from "./components/Welcome/Welcome"
import Stay from "./components/stay/stay"
import Rooms from "./components/rooms/rooms"
import Reviews from "./components/Reviews/Reviews"
import Footer from "./components/Footer/Footer"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Welcome/>
     <About/>
     <Stay/>
     <Rooms/>
     <Reviews/>
     <Footer/>
     
    </>
  )
}

export default App
