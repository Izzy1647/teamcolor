import { hexToCMYK } from '../utils/convertColor'

test('hex to cmyk: #332233', () => {
  expect(hexToCMYK('#4A2478')).toEqual([38, 70, 0, 53])
})

test('hex to cmyk: 000000', () => {
  expect(hexToCMYK('000000')).toEqual([0,0,0,100])
})

test('hex to cmyk: #eeee12', () => {
  expect(hexToCMYK('#eeee12')).toEqual([0, 0, 92, 7])
})
