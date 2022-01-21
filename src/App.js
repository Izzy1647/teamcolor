import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './modules/Home'

import 'antd/dist/antd.css'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cba" element={<Cba />} />
        <Route path="/csa" element={<Csa />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  )
}

function Cba() {
  return <div>cba</div>
}

function Csa() {
  return <div>csa</div>
}

function Esports() {
  return <div>esports</div>
}

function More() {
  return <div>more</div>
}
