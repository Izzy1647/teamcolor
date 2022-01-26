/**
 * check if a color(in hex format) is "light" or "dark"
 *
 * @param {string} color - In hex format, i.e., "#FFFFFF"
 * @returns {boolean} 
 */
export default function isLightColor(color) {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155
}
