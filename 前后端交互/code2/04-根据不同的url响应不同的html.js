// 1. 导入http模块

const http = require('http')

// 2. 创建web 服务器实例

const server = http.createServer()

// 3. 为服务器绑定request事件，监听客户端发送过来的网络请求

server.on('request', (req, res) =>{
// // 如果想要在事件处理函数中，访问与客户端相关的数据或属性，可以使用
// const str = `Your request url is ${req.url}, and request method is ${req.method}`
// console.log(str);

// // 如果想要访问与服务器相关的数据或属性，可以使用

// // 先解决中文乱码的问题：
// res.setHeader('Content-Type', 'text/html; charset=utf-8')
// // 把包含中文的内容响应给客户端
// res.end(str)


// 动态响应内容
const url = req.url //获取请求的url地址
let content = '<h1>404 Not Found!</h1>' //设置默认的响应内容
if(url === '/' || url === '/index.html'){
    content = '<h1>首页<h1>'   //用户请求的是首页
} else if (url === '/about.html'){
    content = '<h1>关于页面<h1>'  //用户请求的是关于页面
}
res.setHeader('Content-Type', 'text/html; charset=utf-8')
res.end(content)
})


// 4. 启动服务器 -- 调用服务器实例的.listen()
server.listen(80, ()=>{
    console.log('http server running at http://127.0.0.1');
})