import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Teamlist = ({teams}) => { 
  return (
    <>
      {teams.map((team, index) => {
          return (
            <div key={index} className="team-block" style={{ background: team.theme }}>
              <Link to={team.link}>
                <p className='team-title'>{team.name}</p>
              </Link>
            </div>
          )
        })}
    </>
    
  )
}

export default Teamlist