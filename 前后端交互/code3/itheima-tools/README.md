## 安装
```
npm install itheima-tools
```


## 导入
```js
const itheima = require('itheima-tools')
```

## 格式化时间
```js
// 调用dateFormat 对时间进行格式化
const dtStr = itheima.dateFormat(new Date())
```

## 转义HTML中的特殊字符
```js
// 待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用方法进行转义
const str = itheima.htmlEscape(htmlStr)
// 转义的结果
```

## 还原HTML中的转义字符
```js
// 带还原的HTML字符串
const str2 = itheima.htmlUnEscape(str)
console.log(str2);
```

## 开源协议
ISC

