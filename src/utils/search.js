import { cbaTeams } from '../data/cba/teams'

/**
 * search the input string in team data, return the target url for redirect
 *
 * @param {string} team
 * @returns {Array} [{team, league, link, theme}]
 */
export default function search(team) {
  const cbaRes = cbaTeams
    .filter(item => item.full.includes(team) || item.name.includes(team))
    .map(teamInfo => {
      return {
        name: teamInfo.name,
        league: 'cba',
        link: teamInfo.link,
        theme: teamInfo.theme
      }
    })

  return cbaRes
}
