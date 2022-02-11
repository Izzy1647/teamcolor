import isLightColor from '../utils/lightColor'

test('islightcolor: #000000', () => {
  expect(isLightColor('#000000')).toBeFalsy()
})

test('islightcolor: #FFFFFF', () => {
  expect(isLightColor('#FFFFFF')).toBeTruthy()
})

test('islightcolor: FFFFFF', () => {
  expect(isLightColor('FFFFFF')).toBeTruthy()
})

test('islightcolor: b1d2db', () => {
  expect(isLightColor('b1d2db')).toBeTruthy()
})

test('islightcolor: #394a4e', () => {
  expect(isLightColor('#394a4e')).toBeFalsy()
})
