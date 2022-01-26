import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Detail from './modules/Detail'
import Home from './modules/Home'
import League from './modules/League'
import Oops from './modules/Oops'

export default function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '3.8rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cba" element={<League type="cba" />} />
          <Route path="/cba/:team" element={<Detail />} />
          <Route path="/csl" element={<Oops />} />
          <Route path="/esports" element={<Oops />} />
          <Route path="/more" element={<Oops />} />
        </Routes>
      </div>
    </Router>
  )
}
