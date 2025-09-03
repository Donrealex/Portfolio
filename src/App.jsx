import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
  
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
    </BrowserRouter>
   
   
     
  )
}

export default App