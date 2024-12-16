import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abt' element={<About />} />
        <Route path='/cnt' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
