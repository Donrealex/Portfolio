import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Hero />
    </BrowserRouter>
    </>
   
     
  )
}

export default App