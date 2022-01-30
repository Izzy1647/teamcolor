# Team color
See: https://izzy1647.github.io/teamcolor/

Team color is built for CBA (Chinese Basketball Association) fans to look up for the theme color of the team that they support (...or hate!)

## Run the project

1. Clone or download the repository.

2. In project directory run `yarn` then `yarn start` .

## Source reference

CBA team logos are from the [official website of Chinese Basketball Association](https://www.cbaleague.com/data/#/teams).

Colors are _not_ official so far.

## Contribute

Fork the repo, make changes, and create pull requests.

- Update or add color data

Team color data are stored in `/src/data/${league}/teams.js`, as an array of objects. In one specific object: `theme` property indicates the main color, like blue for Chelsea, red for Manchester United, etc; `colors` array saves all related colors of the team (but always with the theme color as the first element), e.g., the color of home/away/third shirts, etc. More details available in the file.
