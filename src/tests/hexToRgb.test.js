import { hexToRgb } from '../utils/convertColor'

test('hex to rgb: #332233', () => {
  expect(hexToRgb('#332233')).toEqual([51, 34, 51])
})

test('hex to rgb: ff2ed2', () => {
  expect(hexToRgb('ff2ed2')).toEqual([255, 46, 210])
})

test('hex to rgb: FF2ED2', () => {
  expect(hexToRgb('FF2ED2')).toEqual([255, 46, 210])
})

test('hex to rgb: #7BE9E6', () => {
  expect(hexToRgb('#7BE9E6')).toEqual([123, 233, 230])
})

test('hex to rgb: 000000', () => {
  expect(hexToRgb('000000')).toEqual([0, 0, 0])
})

test('hex to rgb: 00000', () => {
  expect(hexToRgb('00000')).toBeNull()
})

test('hex to rgb: ff2es2', () => {
  expect(hexToRgb('ff2es2')).toBeNull()
})
