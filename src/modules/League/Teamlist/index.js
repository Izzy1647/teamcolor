import React from 'react'
import { Link } from 'react-router-dom'
import isLightColor from '../../../utils/lightColor'

import './style.css'

const titleStyle = isLightColor => {
  return isLightColor ? { color: 'black' } : { color: 'white' }
}

/**
 *
 * @param {Array} [{*theme, *link, *name}]
 * @returns
 */
const Teamlist = ({ teams, league }) => {
  return (
    <>
      {teams.map((team, index) => {
        return (
          <div
            key={index}
            className="team-block"
            style={{ background: team.theme }}
          >
            <Link to={team.link} state={{ league }}>
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
