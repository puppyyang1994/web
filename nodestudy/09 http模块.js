const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request事件，监听客户端的请求
// 只要有客户端发来请求 就会触发request事件，从而调用这个事件处理函数
server.on('request', function(req, res){
    console.log('someone visits our web server');
}) 
// 3. 启动服务器
// listen(端口号, cb回调)
server.listen(8080, function(){
    console.log('server running at http://127.0.0.1:8080')
})