/* 该文件是整个文件的入口文件 */

// 引入Vue   这个是完整版的vue.js  默认的是没有模板解析器的vue
import Vue from 'vue'
// 引入App组件 所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建Vue实例对象 vm
new Vue({
  // 功能：将APP组件放入容器中
  render: h => h(App),
}).$mount('#app')

/* render主要是便于webpack打包时候的体积小一些 */
// 执行了 npm run serve 之后 首先执行main.js文件
//残缺版的vue 不能解析template配置项 所以需要Vue调用render函数
/* render(createElement){
  return createElement('h1', '你看啊')

  render: createElement => createElement('h1', '你好啊')
} */