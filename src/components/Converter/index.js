import React, { useState } from 'react'
import { hexToRgb, rgbToHex } from '../../utils/convertColor'

import './style.css'

const Converter = () => {
  const [rgb, setRGB] = useState('')
  const [hex, setHEX] = useState('')
  const [lastModified, setLastModified] = useState('')

  const handleRGBInput = e => {
    setRGB(e.target.value)
    setLastModified('rgb')
  }

  const handleHEXInput = e => {
    setHEX(e.target.value)
    setLastModified('hex')
  }

  const clear = e => {
    e.preventDefault()
    setHEX('')
    setRGB('')
  }

  const convert = e => {
    e.preventDefault()

    if (lastModified === 'hex') {
      let rgb = hexToRgb(hex)
      setRGB(rgb ? `(${rgb.join(',')})` : 'illegal input')
    }

    if (lastModified === 'rgb') {
      let hex = rgbToHex(...rgb.split(' ').map(str => Number(str)))
      setHEX(hex ? hex : 'illegal input')
    }
  }
  return (
    <>
      <h1>Hex / RGB Color Converter</h1>
      <form>
        <div className="converter-form-group">
          <label>
            RGB: &nbsp;
            <input
              type="text"
              placeholder="input format: r g b"
              value={rgb}
              onChange={handleRGBInput}
              style={{ outline: 'none' }}
            />
          </label>
        </div>

        <button className="converter-button" onClick={convert}>
          convert
        </button>

        <button className="converter-button" onClick={clear}>
          clear
        </button>

        <div className="converter-form-group">
          <label>
            HEX: &nbsp;
            <input
              type="text"
              placeholder="input format: xxxxxx"
              value={hex}
              onChange={handleHEXInput}
              style={{ outline: 'none' }}
            />
          </label>
        </div>
      </form>
    </>
  )
}

export default Converter
