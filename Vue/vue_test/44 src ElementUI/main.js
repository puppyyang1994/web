import Vue from 'vue'
import App from './App.vue'


// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全局样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import { Button, DatePicker } from 'element-ui'


// 应用插件


// Vue.use(ElementUI)

Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)





Vue.config.productionTip = false


new Vue({
    el:'#app',
    render:h=>h(App),
    // router:'hello' 这样写不行


   
})