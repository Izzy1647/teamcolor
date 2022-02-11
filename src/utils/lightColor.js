import { hexToRgb } from './convertColor'

/**
 * check if a color(in hex format) is "light" or "dark"
 *
 * @param {string} color - In hex format, i.e., "#FFFFFF"
 * @returns {boolean}
 */
export default function isLightColor(color) {
  const [r, g, b] = hexToRgb(color)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155
}
