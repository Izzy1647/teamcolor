import React from 'react'
import { useLocation } from 'react-router-dom'
import Teamlist from '../League/Teamlist'

import './style.css'

const ResultBlock = ({ teams }) => {
  return (
    <>
      {/* {teams.length !== 0 && (
        <div style={{ textAlign: 'center' }}>
          <img
            height={imgHeight}
            width={imgWidth}
            src={`../logos/${league}/${league}_logo.png`}
            alt="logo"
            style={{ margin: '0.6rem auto' }}
          />
        </div>
      )} */}

      <Teamlist teams={teams} type="search"/>
    </>
  )
}

const SearchResults = () => {
  const { state } = useLocation()
  const { teams } = state
  const { cba, csl, lpl } = teams

  const results = [
    { teams: cba, league: 'cba', imgHeight: 36, imgWidth: 30 },
    { teams: csl, league: 'csl', imgHeight: 36, imgWidth: 60 },
    { teams: lpl, league: 'lpl', imgHeight: 36, imgWidth: 60 }

  ]

  return (
    <div className="search-result-container">
      {results.map((item, index) => {
        return (
          <ResultBlock
            key={index}
            teams={item.teams}
            // league={item.league}
            // imgHeight={item.imgHeight}
            // imgWidth={item.imgWidth}
          />
        )
      })}
    </div>
  )
}

export default SearchResults
