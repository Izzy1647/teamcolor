# Team color

See: https://teamcolor.vercel.app

Team color is built for CBA (Chinese Basketball Association), CSL (Chinese Super League) and LPL (League of Legends Pro League) fans to look up for the theme color of the team that they support (...or hate!)

*Read this in other languages: [简体中文](README.zh-cn.md).*

## Run the project

1. Clone or download the repository.

2. In project directory run `yarn` then `yarn start` .

## Source reference

CBA team logos are from the [official website of Chinese Basketball Association](https://www.cbaleague.com/data/#/teams).

CSL team logos are from [wikipedia pages](https://en.wikipedia.org/wiki/Chinese_Super_League).

LPL team logos are from the [official website by Tencent](https://lpl.qq.com/es/team.shtml)

Colors are _not_ official so far.

## Contribute

Fork the repo, make changes, and create pull requests.

- Update or add color data

Team color data are stored in `/src/data/${league}/teams.js`, as an array of objects. In one specific object: `theme` property indicates the main color, like blue for Chelsea, red for Manchester United, etc; `colors` array saves all related colors of the team (but always with the theme color as the first element), e.g., the color of home/away/third shirts, etc. More details available in the file.

## On using `/utils/extractColor.js`
The script is used to extract color from team logo images automatically.

1. Add logo images (in `.png` format) to `/public/logos/${league}` folder.

2. In `/utils/extractColor.js`, modify the `league` value to the league that is being introduced.

3. Run `node extractColor.js` under the `utils` directory.

4. Extracted color data will be added to `src/data/${league}/teams.js`.

## Possible future tasks

- Adapt esports leagues in China (kpl, etc.)
- Multi-language support
