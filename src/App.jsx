import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'


function App() {

  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
