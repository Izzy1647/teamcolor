/**
 * HEX to RGB
 * Convert a HEX value to an RGB value string
 *
 * @param {string} hex - Hex color value (supports inclusin of '#' symbol)
 * @returns {Array} - [r,g,b]
 *
 * see: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 */
export function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  // returns space separated RGB values, i.e. "123 40 51"
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null
}

/**
 * RGB to HEX
 * Convert a rgb color to hex string
 *
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {String} hex string like '#ff00ff'
 *
 * see: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 */
export function rgbToHex(r, g, b) {
  if (arguments.length !== 3 || r > 255 || g > 255 || b > 255) {
    return null
  }
  const decToHex = c => {
    let hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`.toUpperCase()
}

/**
 * HEX to CMYK
 * Convert HEX color to a CMYK array
 * @param {string} hex
 * @returns {Array} [c,m,y,k]
 *
 * formula see: https://www.rapidtables.com/convert/color/rgb-to-cmyk.html
 */
export function hexToCMYK(hex) {
  let [r, g, b] = hexToRgb(hex)

  // black
  if (r === 0 && g === 0 && b === 0) {
    return [0, 0, 0, 100]
  }

  let c = 1 - r / 255
  let m = 1 - g / 255
  let y = 1 - b / 255
  let k = Math.min(c, Math.min(m, y))

  c = (c - k) / (1 - k)
  m = (m - k) / (1 - k)
  y = (y - k) / (1 - k)

  c = Math.round(c * 100)
  m = Math.round(m * 100)
  y = Math.round(y * 100)
  k = Math.round(k * 100)

  return [c, m, y, k]
}
