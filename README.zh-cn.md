# 球队颜色

使用: https://teamcolor.vercel.app

在这个网站中，你可以查看你支持的球队的主题色的HEX、RGB、CMYK表示。目前支持查询CBA联赛、LPL联赛和中超联赛的队伍。

*其他语言版本：[English](README.md).*

## 运行项目

1. Clone或者下载仓库源码；

2. 在项目主目录下先运行`yarn`，再运行`yarn start`。

## 资源来源

CBA球队logo来自于[CBA联赛官方网站](https://www.cbaleague.com/data/#/teams).

中超联赛球队logo来自于[维基百科球队主页](https://en.wikipedia.org/wiki/Chinese_Super_League).

LPL队伍logo来自于[腾讯LPL联赛官方主页](https://lpl.qq.com/es/team.shtml).

目前网站中的颜色数据不是官方的。

## 贡献

Fork这个仓库, 修改代码, 提PR。

- 更新或者添加颜色数据

球队的颜色数据以对象数组的形式存储在`/src/data/${league}/teams.js`中。在一个对象中: `theme` 属性表示球队的主题色，例如申花的蓝色，国安的绿色等等；`colors` 数组中的第一项就是主题色，其余的元素代表了球队的其他相关颜色， 例如主客场球衣颜色等等。`teams.js`文件中有着更详细的注释。

## 使用 `/utils/extractColor.js`
这个脚本用来从球队logo图片自动提取颜色。

1. 往`/public/logos/${league}`文件夹下添加各支球队logo的png格式的图片。

2. 在`/utils/extractColor.js`脚本中改变`league`的值，对应刚刚添加的联赛名称。

3. 在`utils`目录下运行`node extractColor.js`。

4. 提取好的数据就会被添加到`src/data/${league}/teams.js`中了.

## 未来可能的更新

- 引入电竞联赛的数据，例如KPL等等；
- 多语言支持。
