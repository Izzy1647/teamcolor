import search from '../utils/search'

test('search: 上海', () => {
  expect(search('上海')).toEqual({
    cba: [
      {
        league: 'cba',
        link: '/cba/shanghai',
        name: '上海久事',
        theme: '#081864'
      }
    ],
    csl: [
      {
        league: 'csl',
        link: '/csl/shenhua',
        name: '上海申花',
        theme: '#1C4596'
      },
      {
        league: 'csl',
        link: '/csl/haigang',
        name: '上海海港',
        theme: '#C3281C'
      }
    ],
    lpl: []
  })
})

test('search: 北京', () => {
  expect(search('北京')).toEqual({
    cba: [
      {
        league: 'cba',
        link: '/cba/beikong',
        name: '北京控股',
        theme: '#4A2478'
      },
      {
        league: 'cba',
        link: '/cba/beijing',
        name: '北京首钢',
        theme: '#3375C4'
      }
    ],
    csl: [
      { league: 'csl', link: '/csl/guoan', name: '北京国安', theme: '#388022' }
    ],
    lpl: [
      { league: 'lpl', link: '/lpl/jdg', name: '北京JDG', theme: '#C8102E' }
    ]
  })
})

test('search: lgd', () => {
  expect(search('lgd')).toEqual({
    cba: [],
    csl: [],
    lpl: [
      { league: 'lpl', link: '/lpl/lgd', name: '杭州LGD', theme: '#0D408F' }
    ]
  })
})

test('search: lGD', () => {
  expect(search('lGD')).toEqual({
    cba: [],
    csl: [],
    lpl: [
      { league: 'lpl', link: '/lpl/lgd', name: '杭州LGD', theme: '#0D408F' }
    ]
  })
})

test('search: shanghai', () => {
  expect(search('shanghai')).toEqual({ cba: [], csl: [], lpl: [] })
})
