import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'
import Experience from './components/Experience'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Analytics />
    </BrowserRouter>
  );
}

export default App