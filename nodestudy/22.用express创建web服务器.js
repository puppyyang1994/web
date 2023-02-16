const express = require('express')
// 创建web服务器
const app = express()


// 调用app.get()监听客户端的GET和POST请求,并向客户端响应具体内容
// 参数1：客户端请求的url地址
// 参数2：请求对应的处理函数 req 请求相关的属性和方法 res 响应相关的属性和方法
app.get('/user',(req, res)=>{
    // 调用res.send()方法 向客户端响应一个JSON对象
    res.send({name:'zs', age:20, gender:'nan'})
})
app.post('/user', (req, res)=>{
    // 调用express提供的res.send()方法， 向客户端响应一个 文本字符串
    res.send('请求成功')
})

//req.query 可以获取到客户端发送过来的 查询参数
 // 注意：默认情况下，req.query 是一个空对象
app.get('/', (req, res)=>{
    console.log(req.query);//{}
    res.send(req.query)
})
// 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数：
// req.params 是动态匹配到的 URL 参数，默认也是一个空对象
app.get('/user/:ids/:username', (req,res)=>{
    console.log(req.params);
    res.send(req.params)
})
// 调用app.listen()启动服务器
app.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})
