import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './modules/Mainpage'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}


function Home() {
  return <div>home</div>
}
