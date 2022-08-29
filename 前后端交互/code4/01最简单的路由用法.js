const express = require('express')
const app = express()

// 挂载路由    到app上    （但实际开发中很少这样用）
app.get('/',(req, res)=>{
res.send('hello world')
})

app.post('/', (req, res)=>{
    res.send('Posr requset')
})
app.listen(80, ()=>{
    console.log('http://127.0.0.1');
})