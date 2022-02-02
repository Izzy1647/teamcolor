import React from 'react'
import { useNavigate } from 'react-router-dom'
import search from '../../utils/search'

import './style.css'

const SearchBar = () => {
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const team = document.getElementById('team').value
    const searchRes = search(team)

    if (searchRes.length) {
      const { league, link } = searchRes[0]

      // make sure league info is added in state as it's required by team detail page
      navigate(link, { state: { league } })
    } else {
      navigate('/no-match')
    }
  }

  return (
    <section className="searchbar-container">
      <div className="search-widget-wrap">
        <p className="search-widget-title">查找你的球队</p>
        <form onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            placeholder="网站中查找"
            id="team"
            type="text"
          />
          {isMobileScreen && (
            <>
              <p
                style={{ color: 'white', marginTop: '12px', fontSize: '18px' }}
                onClick={handleSubmit}
              >
                搜索{'>>'}
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default SearchBar
