import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const isLightColor = color => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155
}

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
            <Link to={team.link}>
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
