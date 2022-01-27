import React from 'react'
import { useNavigate } from 'react-router-dom'
import oopsImg from './oops.png'

import './style.css'

const Oops = ({ type }) => {
  const navigate = useNavigate()
  const returnToHome = () => {
    navigate('/')
  }
  return (
    <div className="oops-container">
      <img src={oopsImg} alt="oops" />
      {type === 'noSupport' && <p>网站仍在建设中:)</p>}
      {type === 'noMatch' && (
        <>
          <p>没有符合搜索条件的球队:)</p>
          <p onClick={returnToHome} style={{"cursor": 'pointer', color:'#102233'}}>👈 返回主页重新搜索</p>
        </>
      )}
    </div>
  )
}

export default Oops
