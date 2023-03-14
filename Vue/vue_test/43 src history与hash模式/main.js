import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'



// 引入路由器
import router from './router'

// 应用插件

Vue.use(VueRouter)









// 把import上升了（类似于变量提升）


Vue.config.productionTip = false


new Vue({
    el:'#app',
    render:h=>h(App),
    // router:'hello' 这样写不行
    router:router

   
})