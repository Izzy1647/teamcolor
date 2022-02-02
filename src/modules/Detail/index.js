import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { cbaTeams } from '../../data/cba/teams'
import Colorblock from './Colorblock'

import './style.css'

const Detail = () => {
  const { team } = useParams()
  const { state } = useLocation()
  const { league } = state
  const teamInfo = cbaTeams.find(item => item.key === team)
  return (
    <div className="team-detail-container">
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
  )
}

export default Detail
