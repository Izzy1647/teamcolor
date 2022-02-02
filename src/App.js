import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Detail from './modules/Detail'
import Home from './modules/Home'
import League from './modules/League'
import Oops from './modules/Oops'
import SearchResults from './modules/SearchResults'

export default function App() {
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div style={!isMobileScreen ? { padding: '3.8rem' } : { padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cba" element={<League type="cba" />} />
          <Route path="/cba/:team" element={<Detail />} />
          <Route path="/csl" element={<Oops type="noSupport" />} />
          <Route path="/esports" element={<Oops type="noSupport" />} />
          <Route path="/more" element={<Oops type="noSupport" />} />
          <Route path="/no-match" element={<Oops type="noMatch" />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  )
}
