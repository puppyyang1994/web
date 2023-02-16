/* 1. 创建路由模块对应的.js文件
    2. 调用express.Router()函数创建路由对象
    3. 向路由对象上挂载具体的路由
    4. 使用module.exports向外共享路由对象
    5. 使用app.use()函数注册路由模块 */


    // 这是路由模块
    // 1. 导入express
    const express = require('express')
    // 2. 创建路由对象
    const router = express.Router()

    // 3. 挂载具体的路由
    router.get('/user/list', (req, res)=>{
        res.send('Get user list.')
    })
    router.post('/user/add', (req, res)=>{
        res.send('Add new user.')
    })

    // 向外到处路由对象
    module.exports = router
