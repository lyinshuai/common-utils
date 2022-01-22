# tmaito-utils [![NPM version](https://badge.fury.io/js/tmaito-utils.svg)](http://badge.fury.io/js/tmaito-utils) [![NPM Downloads](https://img.shields.io/npm/dm/tmaito-utils.svg)](https://npmcharts.com/compare/tmaito-utils?minimal=true)

> Fast, generic JavaScript/node.js utility functions.

Install

```sh
npm i tmaito-utils
// or
yarn add tmaito-utils
```

## Usage

```
import * as Utils from 'tmaito-utils'

// or

import { formatTime, ...} form 'tmaito-utils'
```

### Api 文档

##### `formatTime(timestamp, format)` 时间格式化

* `timestamp` 时间戳或者年月日拼接字符串(🌰`202002`、`20200218`)
* `format` 自定义转化格式，默认 `YYYY-MM-DD` ，例如：'YYYY-MM-DD'、'YYYY/MM/DD'、'YYYYMMDD'、'YYYY-MM-DD hh:mm:ss'等
> 若传入非日期格式，则直接返回该值，
> 若传入错误的日期格式，则返回 `YYYY-MM-DD hh:mm:ss` 格式

##### `randomNum(min, max)` 两个数间的随机数
* min 最小值
* max 最大值

##### `smalltoBig(value)` 价格小写转大写

##### `toPercent(value, isTransfer, fixed)` 数字转化百分比
* `value` 值
* `isTransfer` 是否需要转化，默认为 `true`，例如 `0.13 => 13%`
* `fixed` 小数点位数，默认为 `0`，例如 `1.2%`

##### `toThousands(value, fixed, isFilling)` 金额 千分位转换
* `value` 金额
* `fixed` 保留 `fixed` 位小数，若不足，则以`0`填充，若超出，则四舍五入后的期望位数
* `isFilling` 小数位不足时是否填充，默认`true` 填充 。

##### `sum(arr, key, defaultValue)` 一维数组计算之和
* `arr` 一维数组
* `key` 需要统计的字段和
* `defaultValue` 默认值，可选值

> 注意## 若 `arr` 为纯数字数组，则key 置空即可

##### `getParams(search, key)` 返回 URL 的参数
* `search`: 通过 `location.search` 获取的参数字符串
* `key`: 可选值，具体的参数

🌰：
```js
const search = '?name=test&age=31';
getParams(search);
// {
//  name: 'test,
//  age: '21
// }

getParams(search, name);
// test

// or
const { name, age } = getParams(search);
// name = 'test';
// age = '21';
```

##### `resetProtocal(url, protocal)` 重置协议头
* `url`: url l链接
* `protocal`: 通过 `location.protocal` 获取当前域名的协议头


🌰：
```js
const search = '?name=test&age=31';
resetProtocal('https://xxx.com', 'http:')
// http://xxx.com

resetProtocal('http://xxx.com', 'https:')
// https://xxx.com
```

##### `queryParams2String(queryParams)` 查询参数转成字符串
* `queryParams`: queryParams 查询参数


🌰：
```js
const search = '?name=test&age=31';
queryParams2String({
	name: 'test',
	age: '31'
})
// name=test&age=31
```

### `calculator` 系列精度计算

#### `calculator.strip(num, precision)` 截取想要的位数
#### `calculator.digitLength(num)` 返回小数点长度
#### `calculator.float2Fixed(num)` 把小数转成整数，支持科学计数法。如果是小数则放大成整数
#### `calculator.plus(num, ...)` 精确加法
#### `calculator.minus(num, ...)` 精确减法
#### `calculator.times(num, ...)` 精确乘法
#### `calculator.divide(num, ...)` 精确除法
#### `calculator.round(num, ratio) 四舍五入


### `download(url)` 下载文件
* `url`: 下载文件路径


🌰：
```js
download('xxx.xlsx')
```
