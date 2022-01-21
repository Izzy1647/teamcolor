import React from 'react'
import oopsImg from './oops.png'

import './style.css'

const Oops = () => {
  return (
    <div className='oops-container'>
      <img src={oopsImg} alt='oops' />
      <p>网站仍在建设中:)</p>
      
    </div>
  )
}

export default Oops
