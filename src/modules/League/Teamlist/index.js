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
 *
 * issue here: on the first stage designing this component,
 * it is supposed to contain teams in one single league,
 * this is basically the reason why there is a *league* property.
 * However now as the search results are displayed using the same component,
 * teams can be from different leagues, this is the reason of line 36,
 * why we need to check if there is a *league* property in advance.
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
            <Link
              to={team.link}
              // technical debt down here!!
              state={league ? { league } : { league: team.league }}
            >
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
