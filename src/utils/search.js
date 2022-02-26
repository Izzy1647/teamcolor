import { cbaTeams } from '../data/cba/teams'
import { cslTeams } from '../data/csl/teams'
import { lplTeams } from '../data/lpl/teams'

/**
 * search the input string in team data, return the target url for redirect
 *
 * @param {string} team
 * @returns {Object} {cba: [{team, league, link, theme}], csl: [{team, league, link, theme}]]
 */
export default function search(team) {
  const searchTeamInLeague = (teamString, league) => {
    let teamList
    if (league === 'cba') {
      teamList = cbaTeams
    } else if (league === 'csl') {
      teamList = cslTeams
    } else if (league === 'lpl') {
      teamList = lplTeams
    }

    return teamList
      .filter(
        item => item.full.includes(teamString) || item.name.includes(teamString)
      )
      .map(teamInfo => {
        return {
          name: teamInfo.name,
          league,
          link: teamInfo.link,
          theme: teamInfo.theme
        }
      })
  }

  console.log("LPL:", searchTeamInLeague(team, 'lpl'))

  return {
    cba: searchTeamInLeague(team, 'cba'),
    csl: searchTeamInLeague(team, 'csl'),
    lpl: searchTeamInLeague(team, 'lpl')
  }
}
