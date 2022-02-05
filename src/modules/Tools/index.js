import React from 'react'
import Converter from '../../components/Converter'

import './style.css'

const Tools = () => {
  return (
    <>
      <div className="tools-container">
        <div className="converter-container">
          <Converter />
        </div>
      </div>
    </>
  )
}

export default Tools
