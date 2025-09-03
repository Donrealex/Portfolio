import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

const App = () => {
  return (
  
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Skills />
    </BrowserRouter>
   
   
     
  )
}

export default App