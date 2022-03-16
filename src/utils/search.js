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
  const searchTeamInLeague = (teamString, league, teamList) => {
    return teamList
      .filter(
        item =>
          item.full.toUpperCase().includes(teamString.toUpperCase()) ||
          item.name.toUpperCase().includes(teamString.toUpperCase())
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

  return {
    cba: searchTeamInLeague(team, 'cba', cbaTeams),
    csl: searchTeamInLeague(team, 'csl', cslTeams),
    lpl: searchTeamInLeague(team, 'lpl', lplTeams)
  }
}
