import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Header from './components/header/Header'
import Wishlist from './pages/wishlist/Wishlist'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path='*' element={<h2>empty</h2>} />
      </Routes>
    </>
  )
}

export default App
