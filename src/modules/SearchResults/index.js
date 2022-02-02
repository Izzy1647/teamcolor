import React from 'react'
import { useLocation } from 'react-router-dom'
import Teamlist from '../League/Teamlist'

import './style.css'

const SearchResults = () => {
  const { state } = useLocation()
  const { teams } = state

  return (
    <div className="search-result-container">
      <Teamlist teams={teams} />
    </div>
  )
}

export default SearchResults
