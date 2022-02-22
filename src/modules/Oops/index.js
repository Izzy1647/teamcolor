import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import oopsImg from './oops.png'

import './style.css'

const Ooops = ({ type }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const returnToHome = () => {
    navigate('/')
  }
  return (
    <div className="oops-container">
      <img src={oopsImg} alt="oops" />
      {type === 'noSupport' && <p>{t('Coming soon')}:)</p>}
      {type === 'notFound' && <p>{t('Page not found')}:)</p>}
      {type === 'noMatch' && (
        <>
          <p>{t('No match result')}:)</p>
          <p
            onClick={returnToHome}
            style={{ cursor: 'pointer', color: '#102233' }}
          >
            👈 {t('Go back to home page and search again')}
          </p>
        </>
      )}
    </div>
  )
}

export default function Oops({ type }) {
  return (
    <Suspense fallback="loading">
      <Ooops type={type} />
    </Suspense>
  )
}
