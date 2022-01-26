/**
 * HEX to RGB
 * Convert a HEX value to a space delimited string of RGB values
 *
 * @param {string} hex - Hex color value (supports inclusin of '#' symbol)
 * @returns {string} - Space delimited string of RGB values
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
    ? `(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`
    : null
}
