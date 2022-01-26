import React from 'react'
import { useParams } from 'react-router-dom'
import { cbaTeams } from '../../data/cba/teams'

import './style.css'

const Detail = () => {
  const { team } = useParams()
  // const { state } = useLocation()
  // const { league } = state
  const teamInfo = cbaTeams.find(item => item.key === team)
  return (
    <div className="team-detail-container">
      <h1>{teamInfo.full ? teamInfo.full : ''}</h1>
      <img
        height={200}
        width={200}
        src={`../logos/cba/${teamInfo.key}.png`}
        alt="logo"
      />
    </div>
  )
}

export default Detail
