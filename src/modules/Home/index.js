import React from 'react'
import SearchBar from '../../components/SearchBar'

import './style.css'

const MainPage = () => {
  const leagues = ['csl', 'cba', 'lpl']
  return (
    <>
      <SearchBar />
      <div className="logo-container">
        {leagues.map(league => {
          return (
            <img
              className="logo-image"
              src={`../logos/${league}/${league}_logo.png`}
              alt={league}
            />
          )
        })}
      </div>
    </>
  )
}

export default MainPage
