
const http = require('http')
const server = http.createServer()

// req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    // 客户端请求的url地址
    const url = req.url
    // method 客户端请求的类型
    const method = req.method
    const str = `你请求的 url is: ${url}, and method is ${method}`
    console.log(str)
    // 调用res.end(str)向客户端响应一些内容
    // 当响应内容里有中文字符的时候 会出现乱码 所以要设置
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})

// 启动服务器
server.listen('80', ()=>{
    console.log('server running at http://127.0.0.1');
})

// ctrl +c 终止终端运行