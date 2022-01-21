import React from 'react'

import './style.css'

const SearchBar = () => {
  return (
    <section className='searchbar-container'>
      <div className='search-widget-wrap'>
        <p className='search-widget-title'>查找你的球队</p>
        <input className='search-form-input' placeholder='网站中查找'/>
      </div>
    </section>
  )
}

export default SearchBar