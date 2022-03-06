import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { cbaTeams } from '../../data/cba/teams'
import { cslTeams } from '../../data/csl/teams'
import { lplTeams } from '../../data/lpl/teams'

import Colorblock from '../../components/Colorblock'

import './style.css'

const Detail = () => {
  const { team } = useParams()
  const { state } = useLocation()
  const { league } = state

  let teamInfo
  if (league === 'cba') {
    teamInfo = cbaTeams.find(item => item.key === team)
  }

  if (league === 'csl') {
    teamInfo = cslTeams.find(item => item.key === team)
  }

  if (league === 'lpl') {
    teamInfo = lplTeams.find(item => item.key === team)
  }

  return (
    <div className="team-detail-container">
      <div className="team-detail-left">
        <h1>{teamInfo.full ? teamInfo.full : ''}</h1>
        <img
          height={200}
          width={200}
          src={`../logos/${league}/${teamInfo.key}.png`}
          alt="logo"
          style={{ margin: '1rem 0' }}
        />
        <Colorblock colors={teamInfo.colors} />
      </div>
      {/* <div className='team-detail-right'>
        <TeamShirt />
      </div> */}
    </div>
  )
}

export default Detail
