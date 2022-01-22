# `tmaito-fetch`

基于restfull规范通用的 `http` 请求库

> 该库基于axios封装，axios的参数全部都能支持。详见[axios官网](https://github.com/axios/axios)

## Usage

```js
const { fetch } = require('tmaito-fetch');

fetch({
  url: 'xxx/xxx',
  data: {
    arg1: 1
	},
	headers: {
    'x-access-token': 'test'
  },
	method: 'post', // 默认为POST
	response: true, // 返回结果是否为 response，默认返回 data
}).then(res => {
  console.log(res)
}).catch(e => {
  console.error(e)
})
```
