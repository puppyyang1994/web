# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 笔记
安装脚手架 

插件  本质是一个对象 对象里必须包含install
安装 nmp i less-loader   这样Vue可以处理less语言
npm view webpack version 查看webpack的版本


### webstorage 
localStorage
sessionStorage


####
82集 真没太听懂  组件自定义事件

##### 2023-2-28
1. 全局事件总线：任意组件间通信（主要用这个）
VueComponent 是 Vue.extend()生成的
每次创建一个组件 new的都是一个新的VueComponent
$on $emit $off 都在vue的原型对象上 所以 组件的实例对象vc可以直接调用
globalEventBus 
安装全局事件总线
使用事件总线 1. 接收数据 2.提供数据
在beforeDestory中解绑事件

2. 消息订阅与发布 (vue中用的并不多)
pubsub-js 库   publish subscrib 
安装库 npm i pubsub-js
引入 谁需要数据就给谁引入 这里给school组件 import pubsub
 3. ref的使用
4. nextTick的使用
5. 动画效果的实现
6. 动画库 animate.css   有很多的动画库
   流程： 1. 准备好样式 进入的元素 离开的元素； 2. 使用transition包裹并配置name属性 多个用transition-group 每个都要指定一个key

Vue中发送Ajax请求
两个服务器已准备好 打开文件包 node server1

<!-- 真正开发不用 -->
xhr  newXMLHttpRequest()  JS内置的
xhr.open()
xhr.send()

2. jQuery $get $post (主要是封装DOM请求)
3. axios (封装了ajax) 常用
4. fetch 也能发送ajax请求 都是对xhr的封装 fetch有兼容性问题 IE用不了
5. 所谓的跨域就是违背了同源策略 CORS Access-control-allow-origin
6. 协议http 域名 localhost 端口号 5000
7. 跨域可以发请求 服务器也收到了 也返回了 只是客户端收不到
8. 解决跨域：cors （后端配置特殊的响应头） jsonp 借助了script标签的src属性（开发用的很少 只能解决get请求的）
   配置一个代理服务器（开发常用）Nginx 服务器和服务器之间传输数据不用ajax，用http请求。 ajax是前端用的
   开启代理服务器的方法： 1. Nginx（很麻烦)  2. 解除v-cli开启代理服务器
   devServerproxy  配置代理
   public文件夹 相当于8080服务器的根路径
   如果要请求的地址路径public文件夹里有了 就会直接去public里面找 而不会给5000服务器发请求
   只要改了配置就要停掉 然后重新npm


   alt+shift+f  自动格式化
   vue-resource库 vue里的插件库
   npm i vue-resource