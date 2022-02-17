import { cbaTeams } from '../data/cba/teams'
import { cslTeams } from '../data/csl/teams'

/**
 * search the input string in team data, return the target url for redirect
 *
 * @param {string} team
 * @returns {Object} {cba: [{team, league, link, theme}], csl: [{team, league, link, theme}]]
 */
export default function search(team) {
  const searchTeamInLeague = (teamString, league) => {
    const teamList = league === 'cba' ? cbaTeams : cslTeams

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

  const cbaRes = searchTeamInLeague(team, 'cba')
  const cslRes = searchTeamInLeague(team, 'csl')

  return {
    cba: cbaRes,
    csl: cslRes
  }
}
