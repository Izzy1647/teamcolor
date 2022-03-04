import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import search from '../../utils/search'

import './style.css'

const getRandomBgColor = () => {
  const colors = ['#034694', '#4B7CAD', '#3E8A63', '#8F6DB8', '#BA5E49']
  return { backgroundColor: colors[Math.floor(Math.random() * 5)] }
}

const Bar = () => {
  const { t } = useTranslation()
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const team = document.getElementById('team').value
    const { cba, csl, lpl } = search(team)

    // no match result for searched string
    if (!cba.length && !csl.length && !lpl.length) {
      navigate('/no-match')
    }

    // exact one match
    else if ([...cba, ...csl, ...lpl].length === 1) {
      const { league, link } = [...cba, ...csl, ...lpl][0]

      // make sure league info is added in state as it's required by team detail page
      navigate(link, { state: { league } })
    }

    // multiple match res
    else {
      navigate('/results', {
        state: {
          teams: {
            cba,
            csl,
            lpl
          }
        }
      })
    }
  }

  return (
    <section className="searchbar-container" style={getRandomBgColor()}>
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
                style={{ color: 'white', marginTop: '16px', fontSize: '18px' }}
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
