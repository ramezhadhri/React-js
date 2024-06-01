import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/home'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
