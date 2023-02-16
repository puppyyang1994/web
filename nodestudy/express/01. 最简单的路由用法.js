const express = require('express')
const app = express()
//在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，
// 挂载路由
// 匹配get请求，且请求的url为/
app.get('/', (req, res)=>{
    res.send('hello world')
})
// 匹配post请求，且请求的url 为/
app.post('/', (req, res)=>{
    res.send('Post Request')
})
app.listen(80, ()=>{
    console.log('http://127.0.0.1');
})
