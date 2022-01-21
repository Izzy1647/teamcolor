import React from 'react'
import Teamlist from './Teamlist'

import { cbaList } from './data/cba'

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
        {type === 'cba' && <Teamlist teams={cbaList} />}
      </div>
    </>
  )
}

export default League
