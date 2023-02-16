const express = require('express')
const app = express()

// 如果要托管多个静态资源目录，请多次调用 express.static() 函数：
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。

app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(80, ()=>{
    console.log('hehe express server running at http://127.0.0.1');
})