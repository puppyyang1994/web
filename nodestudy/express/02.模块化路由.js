const express = require('express')
const app = express()



// 导入路由模块
const router = require('./03.router')

// 注册路由模块
app.use('/api', router)

// 注意：app.use()函数的作用，就是用来注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1')
})






// app.use(path,callback)中的callback既可以是router对象又可以是函数
// app.get(path,callback)中的callback只能是函数

// 当一个路由有好多个子路由时用app.use(path,router)


