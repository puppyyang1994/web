const http = require('http')

const server = http.createServer()
// req是请求对象 包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    // res是相应对象 它包含了服务器相关的数据和属性 例如 发送到客户端的字符串
    // req.url 是客户端请求的url 地址

    // req.method 是客户端请求的method类型
    const url = req.url
    const method = req.method
    const str = `您请求的 url 是 ${url}, and requset method is ${method}`
    console.log(str);
    //  防止中文乱码
    // res.setHeader('Content-Type')
    // 调用res.end()方法  向客户端响应一些内容
    res.end(str)
})
server.listen(80, ()=>{
    console.log('server runnint at http:127.0.0.1');
})

// 解决中文乱码的问题