import Vue from 'vue'
import App from './App.vue'

// 引入插件vue-resource
import vueResource from 'vue-resource'

// 引入Vuex
// import Vuex from 'vuex'

// 引入store
import store from './store/index'


// 把import上升了（类似于变量提升）


Vue.config.productionTip = false
// 使用插件  vc和vm 都多了一个$http
Vue.use(vueResource)
// Vue.use(Vuex)
// 只要use了Vuex 在new一个Vue的时候就能传入一个store配置项 这个是前提
new Vue({
    el:'#app',
    render:h=>h(App),
    // store:store,
    store,
    
    beforeCreate(){
    //    安装全局事件总线
        Vue.prototype.$bus = this  
    }
   
})