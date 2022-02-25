import React from 'react'
import SearchBar from '../../components/SearchBar'

import './style.css'

const MainPage = () => {
  return (
    <>
      <div style={{ border: '1px red solid' }}>
        <SearchBar />
      </div>
      <div className="logo-container" style={{ border: '1px red solid' }}>
        <img
          className="logo-image"
          src={`../logos/cba/cba_logo.png`}
          height={128}
          width={100}
          alt="cba"
        />
        <img
          className="logo-image"
          src={`../logos/csl/csl_logo.png`}
          height={124}
          width={200}
          alt="csl"
        />
      </div>
    </>
  )
}

export default MainPage
