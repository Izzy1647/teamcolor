import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const NavBar = () => {
  return (
    <div className="wrap">
      <ul className="topnav">
        <li>
          <Link to="/home" className="site-title">
            球队颜色
          </Link>
        </li>
        <div className="right">
          <li>
            <Link to="/cba">CBA</Link>
          </li>
          <li>
            <Link to="/csa">中超</Link>
          </li>
          <li>
            <Link to="/esports">电竞</Link>
          </li>
          <li>
            <Link to="/more">更多</Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default NavBar
