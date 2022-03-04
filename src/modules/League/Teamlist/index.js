import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import isLightColor from '../../../utils/lightColor'

import './style.css'

const titleStyle = isLightColor => {
  return { color: isLightColor ? 'black' : 'white' }
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
const List = ({ teams, league, type }) => {
  const { t } = useTranslation()

  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  const displayFullWidth = isMobileScreen || type === 'search'

  return (
    <>
      {teams.map((team, index) => {
        const teamBlockStyle = {
          background: team.theme,
          maxWidth: displayFullWidth ? '100%' : '48%'
        }
        return (
          <div key={index} className="team-block" style={teamBlockStyle}>
            <Link
              to={team.link}
              // technical debt down here!!
              state={league ? { league } : { league: team.league }}
            >
              <p
                className="team-title"
                style={titleStyle(isLightColor(team.theme))}
              >
                {t(team.name)}
              </p>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default function Teamlist({ teams, league, type }) {
  return (
    <Suspense fallback="loading">
      <List teams={teams} league={league} type={type} />
    </Suspense>
  )
}
