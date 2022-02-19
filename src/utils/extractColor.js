/**
 * Script for extract color from images and write into teams.js file.
 * Execute with `node extractColor.js`
 */

const path = require('path')
const fs = require('fs')
const { extractColors } = require('extract-colors')

const league = 'lpl'
const logoFolder = `../../public/logos/${league}`
const resDataPath = `../data/${league}/teams.js`

const teams = fs.readdirSync(logoFolder)
const teamsCount = teams.length
const retData = []

teams.forEach(fileName => {
  const src = path.join(__dirname, `../../public/logos/${league}/${fileName}`)
  writeColors(src, fileName.replace(/\.[^/.]+$/, ''))
})

async function writeColors(src, key) {
  const data = await extractColors(src)
  const resData = {
    key,
    name: key.toUpperCase(),
    full: '',
    theme: data[0].hex.toUpperCase(),
    colors: data.map(item => item.hex.toUpperCase()),
    link: `/${league}/${key}`
  }
  retData.push(resData)

  // write the data into a file
  if (retData.length === teamsCount) {
    try {
      fs.writeFileSync(
        resDataPath,
        `export const ${league}Teams =  ${JSON.stringify(retData)}`,
        { flag: 'w' }
      )
      console.log('success')
    } catch (err) {
      console.error(err)
    }
  }
}

// {
//   key: 'shanghai',
//   name: '上海久事',
//   full: '上海久事大鲨鱼俱乐部',
//   theme: '#081864',
//   link: '/cba/shanghai',
//   colors: ['#081864', '#EB6715', '#FFFFFF']
// },
