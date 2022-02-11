import search from '../utils/search'

test('search: 上海', () => {
  expect(search('上海')).toEqual([
    {
      league: 'cba',
      link: '/cba/shanghai',
      name: '上海久事',
      theme: '#081864'
    },
    { league: 'csl', link: '/csl/shenhua', name: '上海申花', theme: '#1C4596' },
    { league: 'csl', link: '/csl/haigang', name: '上海海港', theme: '#C3281C' }
  ])
})

test('search: 北京', () => {
  expect(search('北京')).toEqual([
    { league: 'cba', link: '/cba/beikong', name: '北京控股', theme: '#4A2478' },
    { league: 'cba', link: '/cba/beijing', name: '北京首钢', theme: '#3375C4' },
    { league: 'csl', link: '/csl/guoan', name: '北京国安', theme: '#388022' }
  ])
})

test('search: shanghai', () => {
  expect(search('shanghai')).toEqual([])
})
