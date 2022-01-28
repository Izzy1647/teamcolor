import React from 'react'
import { useNavigate } from 'react-router-dom'
import search from '../../utils/search'

import './style.css'

const SearchBar = () => {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const team = document.getElementById('team').value
    const [redirect, league] = search(team)

    // make sure league info is added in state as it's required by team detail page
    navigate(redirect, { state: { league} })
  }

  return (
    <section className="searchbar-container">
      <div className="search-widget-wrap">
        <p className="search-widget-title">查找你的球队</p>
        <form onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            placeholder="网站中查找"
            id="team"
            type="text"
          />
        </form>
      </div>
    </section>
  )
}

export default SearchBar
