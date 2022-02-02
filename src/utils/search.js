import { cbaTeams } from '../data/cba/teams'

/**
 * search the input string in team data, return the target url for redirect
 *
 * @param {string} team
 * @returns {Array} [{team, league, link}]
 */
export default function search(team) {
  const cbaRes = cbaTeams
    .filter(item => item.full.includes(team) || item.name.includes(team))
    .map(teamInfo => {
      return {
        team: teamInfo.name,
        league: 'cba',
        link: teamInfo.link
      }
    })
  
  return cbaRes
}
