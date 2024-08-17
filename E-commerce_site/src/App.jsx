import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
