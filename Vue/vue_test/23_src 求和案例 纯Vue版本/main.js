import Vue from 'vue'
import App from './App.vue'

// 引入插件库vue-resource

import vueResource from 'vue-resource'
Vue.config.productionTip = false
// 使用插件  vc和vm 都多了一个$http
Vue.use(vueResource)

new Vue({
    el:'#app',
    render:h=>h(App),
   
    beforeCreate(){
    //    安装全局事件总线
        Vue.prototype.$bus = this  
    }
   
})