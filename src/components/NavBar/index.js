import React from 'react'

import './style.css'

const NavBar = () => {
  return (
    <div className='wrap'>
      <ul className="topnav">
        <li>
          <a className="site-title" href="home">
            球队颜色
          </a>
        </li>
        <div className="right">
          <li>
            <a href="cba">CBA</a>
          </li>
          <li>
            <a href="csa">中超</a>
          </li>
          <li>
            <a href="esports">电竞</a>
          </li>
          <li>
            <a href="more">更多</a>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default NavBar
