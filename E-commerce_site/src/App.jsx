import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Wishlist } from './pages/Wishlist'
import { AuthLogin } from './pages/AuthLogin'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/Auth/login' element={<AuthLogin/>}/>
    </Routes>
    </>
  )
}

export default App
