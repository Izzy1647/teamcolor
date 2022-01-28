import { cbaTeams } from '../data/cba/teams'

/**
 * search the input string in team data, return the target url for redirect
 *
 * @param {string} team
 * @returns {Array} [target url for redirect, league]
 */
export default function search(team) {
  const target = cbaTeams.find(item => {
    return item.full.includes(team) || item.name.includes(team)
  })

  return [target ? target.link : '/no-match', 'cba']
}
