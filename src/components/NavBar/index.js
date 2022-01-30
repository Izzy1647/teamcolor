import React from 'react'
import { Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

import './style.css'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/cba">CBA</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/csl">中超</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/esports">电竞</Link>
    </Menu.Item>
  </Menu>
)

const NavBar = () => {
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches

  return (
    <div className="wrap">
      <ul className="topnav" style={{ margin: 6 }}>
        <li>
          <Link to="/" className="site-title">
            球队颜色
          </Link>
        </li>
        <div className="right">
          <li>
            <Link to="/cba">CBA</Link>
          </li>
          <li>
            <Link to="/csl">中超</Link>
          </li>
          <li>
            <Link to="/esports">电竞</Link>
          </li>
          <li>
            <Link to="/more">更多</Link>
          </li>
        </div>
        {isMobileScreen && (
          <li style={{"marginLeft": "auto"}}>
            <Dropdown
              overlay={menu}
              trigger={['click']}
              placement="bottomRight"
            >
              <span>
                <BiMenu />
              </span>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar
