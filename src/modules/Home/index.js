import React from 'react'
import SearchBar from '../../components/SearchBar'
import cbaLogo from '../../data/cba/cba_logo.png'
import cslLogo from '../../data/csl/csl_logo.png'


import './style.css'

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      <div className="logo-container">
        <img className='logo-image' src={cbaLogo} height={128} width={100} alt="cba" />
        <img className='logo-image' src={cslLogo} height={124} width={200} alt="csl" />
      </div>
    </div>
  )
}

export default MainPage
