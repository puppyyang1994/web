import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// window.x = {a:1,b:2}  不合适
// 把x放在vue的原型对象上 这样vc和vm都可以访问得到
/* const Demo = Vue.extend({})
// demo是VueComponent 我们写组件标签 Vue帮我们new实例对象
const d = new Demo()
// d就是vc  所以d就能调用$on等
Vue.prototype.x = d   */

new Vue({
    el:'#app',
    render:h=>h(App),
    //   this就是new出来的vm 这个时候模板都还没有开始解析 这样就不会报错了
    
   
})