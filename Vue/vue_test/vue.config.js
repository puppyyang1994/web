const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  // 开启代理服务器   这种方式不能配多种代理 (方式一)
/* devServer: {
  // 这里改成你自己要的服务器端口名
  proxy: 'http://localhost:5000'
} */
// 方式二：指定多个代理 /api 请求前缀
devServer: {
  proxy: {
    '/atguigu': {
      target: 'http://localhost:5000',
      // 一定要加上这个配置
      pathRewrite:{'^/atguigu':''},
      // websocket
      ws: true,
      // 实话实说
      changeOrigin: true
    },
    '/getcars': {
      target: 'http://localhost:5001',
      // 一定要加上这个配置
      pathRewrite:{'^/getcars':''},
      // websocket
      ws: true,
      // 实话实说
      changeOrigin: true
    },
   
  }
}
}
