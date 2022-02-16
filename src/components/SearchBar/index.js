import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import search from '../../utils/search'

import './style.css'

const Bar = () => {
  const { t } = useTranslation()
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const team = document.getElementById('team').value
    const searchRes = search(team)

    // no match result for searched string
    if (!searchRes.length) {
      navigate('/no-match')
    }

    // exact one match
    if (searchRes.length === 1) {
      const { league, link } = searchRes[0]

      // make sure league info is added in state as it's required by team detail page
      navigate(link, { state: { league } })
    }

    // multiple match results
    if (searchRes.length > 1) {
      navigate('/results', {
        state: {
          teams: searchRes
        }
      })
    }
  }

  return (
    <section className="searchbar-container">
      <div className="search-widget-wrap">
        <p className="search-widget-title">{t('Search for your team')}</p>
        <form onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            placeholder={t('Search in website')}
            id="team"
            type="text"
          />
          {isMobileScreen && (
            <>
              <p
                style={{ color: 'white', marginTop: '12px', fontSize: '18px' }}
                onClick={handleSubmit}
              >
                {t('Search')}
                {'>>'}
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default function SearchBar() {
  return (
    <Suspense fallback="loading">
      <Bar />
    </Suspense>
  )
}
