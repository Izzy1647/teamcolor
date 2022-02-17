import React from 'react'
import { useLocation } from 'react-router-dom'
import Teamlist from '../League/Teamlist'

import './style.css'

const SearchResults = () => {
  const { state } = useLocation()
  const { teams } = state
  const { cba, csl } = teams

  return (
    <div className="search-result-container">
      <p>CBA</p>
      <Teamlist teams={cba} />
      <p>中超</p>
      <Teamlist teams={csl} />
    </div>
  )
}

export default SearchResults
