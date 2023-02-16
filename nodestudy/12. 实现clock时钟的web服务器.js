

// 1. 导入需要的模块
const fs = require('fs')
const path = require('path')
const http = require('http')

// 创建基本的web服务器
const server = http.createServer()

// 监听request事件
server.on('request', (req, res)=>{
    // 将请求的url地址 映射为文件的存放路径
    const url = req.url
    // const fpath = path.join(__dirname, url)

    // 优化资源的请求路径
   let fpath = ''
//    如果请求的路径为/ 则手动指定文件的存放路径
    if(url === '/'){
       fpath =  path.join(__dirname, './clock/index.html')
    }else {
        // 否则 动态拼接存放路径
        fpath = path.join(__dirname, '/clock', url)
    }

    // 读取文件的内容 响应给客户端
    fs.readFile(fpath, 'utf8', (err, dataStr)=>{
        if(err){
            return res.end('404 Not Found')
        }
        // 读取文件成功后将读取的内容响应给客户端
        res.end(dataStr)
    })

})

// 启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1')
})