import { useState } from 'react'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'


function App() {

  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
    </div>
  )
}

export default App
