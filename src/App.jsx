import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights'
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <main className='bg-black'>
      
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        
      
    </main>
  
  )
}

export default App
