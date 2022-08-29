
// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 为服务器实例绑定request事件 监听客户端的请求
server.on('request', function(req, res){
    console.log('someone visits our web server');
})
// 启动服务器  启动的端口80  
server.listen(8080, function(){
    console.log('server running at http://127.0.0.1:8080');
})