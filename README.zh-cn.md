# 球队颜色

使用: https://teamcolor.vercel.app

在这个网站中，你可以查看你支持的球队的主题色的HEX、RGB、CMYK表示。目前支持查询CBA联赛和中超联赛的球队。

*其他语言版本：[English](README.md).*

## 运行项目

1. Clone或者下载仓库源码；

2. 在项目主目录下先运行`yarn`，再运行`yarn start`。

## 资源来源

CBA球队logo来自于[CBA联赛官方网站](https://www.cbaleague.com/data/#/teams).

中超联赛球队logo来自于[维基百科球队主页](https://en.wikipedia.org/wiki/Chinese_Super_League).

目前网站中的颜色数据不是官方的。

## 贡献

Fork这个仓库, 修改代码, 提PR。

- 更新或者添加颜色数据

球队的颜色数据以对象数组的形式存储在`/src/data/${league}/teams.js`中。在一个对象中: `theme` 属性表示球队的主题色，例如申花的蓝色，国安的绿色等等；`colors` 数组中的第一项就是主题色，其余的元素代表了球队的其他相关颜色， 例如主客场球衣颜色等等。`teams.js`文件中有着更详细的注释。

## 未来可能的更新

- 引入电竞联赛的数据，例如KPL等等；
- 多语言支持。
