import React from 'react'
import Teamlist from './Teamlist'
import { cbaTeams } from '../../data/cba/teams'
import { cslTeams } from '../../data/csl/teams'
import { lplTeams } from '../../data/lpl/teams'

import './style.css'

const typeMap = {
  cba: 'CBA',
  csl: '中超',
  esports: '电竞',
  lpl: 'LPL'
}

const League = ({ type }) => {
  return (
    <>
      <div className="teamlist-wrapper">
        <h1 className="teamlist-title">{typeMap[type]}</h1>
        <div className="teamlist-container">
          {type === 'cba' && <Teamlist teams={cbaTeams} league="cba" />}
          {type === 'csl' && <Teamlist teams={cslTeams} league="csl" />}
          {type === 'lpl' && <Teamlist teams={lplTeams} league="lpl" />}
        </div>
      </div>
    </>
  )
}

export default League
