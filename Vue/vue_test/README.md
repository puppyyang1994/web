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

 ### 插槽

   作用域插槽
   可以让父组件向子组件指定位置插入html结构 也是一种组件间的通信方式
   默认插槽
   具名插槽
   作用域插槽：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定


   Vuex 现在建议使用pinia
   专门在Vue中实现集中式状态（数据）管理的一个Vue插件,对vue应用中多个组件的共享状态进行集中式的管理（读、写）
   也是一种组件间的通信方式 且适用于任意组件间通信
   Vue.use()

   什么时候使用？（共享数据） 多个组件依赖于同一状态（数据）来自不同组件的行为需要变更为同一状态

   mutation 加工
   state状态  本质是一个object对象 里面有数组等{todos:[], sum:0, }
   Vue components
   dispatch分发   dispatch('jia', 2)
   dispatch分发出来的动作 action第一个去响应
   actions object对象  {jia:functioin, }
   调用 commit ('jia', 2)
   mutations { jia:function} state.sum +=

   使用步骤:  
   1. npm i vuex
   2. Vue.use(Vuex)
   3. store
   4. vc 都能看得到store
   5. 目前用的是vue2要安装vuex3版本


### 路由
1. 路由route就是一组key:value的对应关系   key是路径  value是组件
2. 多个路由，需要经过路由器router的管理
   SPA应用 single page web application 
   单页面应用:
   1. 整个应用只有一个完整的页面
   2. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
   3. 数据需要通过ajax请求获取
   vue-router 是一个插件库 npm i vue-router
   路由的两种工作模式
   
   多页面应用



3. 搭建路由
4. vue-router3 才能在vue2中使用  默认的是4 所以安装的时候要注意版本号
5. query参数  params参数 props参数
6. 
历史记录操作模式 
push模式 不破坏任何一条记录  压栈
指针默认指向最上一条 点击后退时 指针会后退
默认router-link开启的是push模式

开启replace模式  只有一条记录   替换当前记录

hash值 不会随http请求发给服务器
#/后面 是哈希值
路由器:  hash工作模式 /#/    history工作模式 /   
区别: 
1. hash的兼容性好  history兼容性略差
2. 项目上线：代码写完了 要上线 要通过webpack打包 生成纯粹的.html .css .js文件
   npm run build 上线
   打包出来的文件 必须放到服务器上部署 才能打开

   创建文件夹 然后vscode打开  然后 npm init 命名
   然后 npm i express
   新建一个服务器主文件 server.js
   写好代码后运行 node server 
   通过localhost:5050/person访问

   创建一个static文件静态资源文件
   通过app.use(express.static)
   去浏览器里把person 改成index.hmtl就可以访问了

   并不是一定只能用hash模式  用history模式  有一个node.js中间件 可以解决history模式刷新后404的问题
   npm 网站可以找到 connect-history-api-fallback  然后安装 引入

   ngix解决404   根治要找后端

   UI组件库
   组件的概念是有了框架之后才出来的
   组件库是基于什么技术： vue还是react
   是PC端的还是移动端的
   Element UI
   IView UI

webpack 开发依赖和生产依赖 得会区分
babel.config.js
UI组件库需要和脚手架配合 才能完成按需引入

模块没找到 就要重新 npm i abc

Ant-Design