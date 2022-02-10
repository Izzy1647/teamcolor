import { rgbToHex } from '../utils/convertColor'

test('hex to rgb: 1, 1, 1', () => {
  expect(rgbToHex(1, 1, 1)).toBe('#010101')
})

test('hex to rgb: 0, 0, 0', () => {
  expect(rgbToHex(0, 0, 0)).toBe('#000000')
})

test('hex to rgb: 123, 12, 223', () => {
  expect(rgbToHex(123, 12, 223)).toBe('#7B0CDF')
})

test('hex to rgb: 0, 0', () => {
  expect(rgbToHex(0, 0)).toBeNull()
})

test('hex to rgb: 0, 0, 333', () => {
  expect(rgbToHex(0, 0, 333)).toBeNull()
})
