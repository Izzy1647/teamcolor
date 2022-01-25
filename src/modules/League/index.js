import React from 'react'
import Teamlist from './Teamlist'
import { cbaTeams } from '../../data/cba/teams'

import './style.css'

const typeMap = {
  cba: 'CBA',
  csl: '中超',
  esports: '电竞'
}

const League = ({ type }) => {
  return (
    <>
      <div className="teamlist-container">
        <h1>{typeMap[type]}</h1>
        {type === 'cba' && <Teamlist teams={cbaTeams} />}
      </div>
    </>
  )
}

export default League