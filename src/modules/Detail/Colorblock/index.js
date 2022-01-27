import React from 'react'
import { hexToRgb } from '../../../utils/hex2rgb'
import isLightColor from '../../../utils/lightColor'

import './style.css'

const Colorblock = ({ colors }) => {
  return colors.map((color, index) => {
    return (
      // is the long inline stylesheet a technical debt? ...or not?
      <div
        key={index}
        className="colorblock-container"
        style={{
          width: '50%',
          color: isLightColor(color) ? 'black' : 'white',
          backgroundColor: color,
          fontFamily: 'roboto mono,monospace',
          textTransform: 'uppercase',
          marginBottom: '1.6rem',
          borderRadius: '8px'
        }}
      >
        <div className='color-data-wrapper'>
          <p className="color-data-content">HEX: {color}</p>
          <p className="color-data-content">RGB: {hexToRgb(color)}</p>
        </div>
      </div>
    )
  })
}

export default Colorblock