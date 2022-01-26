import React from 'react'
import { Link } from 'react-router-dom'
import isLightColor from '../../../utils/lightColor'

import './style.css'

const titleStyle = isLightColor => {
  return isLightColor ? { color: 'black' } : { color: 'white' }
}

const Teamlist = ({ teams }) => {
  return (
    <>
      {teams.map((team, index) => {
        return (
          <div
            key={index}
            className="team-block"
            style={{ background: team.theme }}
          >
            <Link to={team.link} state={{ league: 'cba' }}>
              <p
                className="team-title"
                style={titleStyle(isLightColor(team.theme))}
              >
                {team.name}
              </p>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Teamlist
