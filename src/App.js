import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './modules/Home'
import League from './modules/League'
import Oops from './modules/Oops'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cba" element={<League type="cba" />} />
        <Route path="/csl" element={<Oops />} />
        <Route path="/esports" element={<Oops />} />
        <Route path="/more" element={<Oops />} />
      </Routes>
    </Router>
  )
}

function Cba() {
  return <div>cba</div>
}

function Csl() {
  return <div>csa</div>
}

function Esports() {
  return <div>esports</div>
}

function More() {
  return <div>more</div>
}
