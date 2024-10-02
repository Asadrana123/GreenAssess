import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import 'mapbox-gl/dist/mapbox-gl.css';
function App() {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
