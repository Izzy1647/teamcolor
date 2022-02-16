import React, { Suspense } from 'react'
import { Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

import './style.css'

// const lngs = [
//   { code: 'en', nativeName: 'English' },
//   { code: 'zh-CN', nativeName: '中文' }
// ]

const Nav = () => {
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  const { t } = useTranslation()

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/cba">CBA</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/csl">{t('csl')}</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/esports">{t('esports')}</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/tools">{t('tools')}</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="wrap">
      <ul className="topnav" style={{ margin: 6 }}>
        <li>
          <Link to="/" className="site-title">
            {t('teamcolor')}
          </Link>
        </li>
        <div className="right">
          <li>
            <Link to="/cba">CBA</Link>
          </li>
          <li>
            <Link to="/csl">{t('csl')}</Link>
          </li>
          <li>
            <Link to="/esports">{t('esports')}</Link>
          </li>
          <li>
            <Link to="/tools">{t('tools')}</Link>
          </li>
          {/* <li>
            {lngs.map(item => {
              return (
                <button onClick={() => i18n.changeLanguage(item.code)}>
                  {item.nativeName}
                </button>
              )
            })}
          </li> */}
        </div>
        {isMobileScreen && (
          <li style={{ marginLeft: 'auto' }}>
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

export default function NavBar() {
  return (
    <Suspense fallback="loading">
      <Nav />
    </Suspense>
  )
}
