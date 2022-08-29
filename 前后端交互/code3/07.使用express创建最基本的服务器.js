// 1. 导入express
const express = require('express')

// 2. 创建web服务器

const app = express()

// 监听客户端的GET和POST请求， 并向客户端响应具体的请求

app.get('/user', (req, res)=>{
    // 调用express提供的res.send() 方法向客户端响应一个JSON对象
 res.send({name: 'zs', gender: 'Nan', age: '28'})
})

app.post('/user', (req, res)=>{
     // 调用express提供的res.send() 方法向客户端响应一个JSON对象
    res.send('请求成功')
})

app.get('/', (req, res)=>{
    // 通过req.query可以获得客户端发送过来的 查询参数
    // 默认情况下req.query是一个空对象    通过查询字符串的方式   ?name=zs&age=20
    console.log(res.query)
    res.send(req.query)
})

// 注意 ：id是一个动态的参数 :后面的字符串是随便写的
app.get('/user/:ids/:name', (req, res)=>{
    // req.paramas 是动态匹配的URL
     console.log(req.params)
     res.send(req.params)
})
// 3. 启动服务器

app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1');
})