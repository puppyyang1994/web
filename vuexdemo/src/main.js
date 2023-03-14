import Vue from 'vue'
import App from './App.vue'
import Vuex  from 'vuex'

Vue.use(Vuex)  //注册Vuex的功能 Vue.use的方法实际是调用了vuex中的install的方法
// Vue.use(VueRouter) 调用VueRouter中的install

Vue.config.productionTip = false

const store = new Vuex.Store({
  // 实例化Vuex的构造参数 state
  state:{
    // 存储的状态
    count:0,
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  // 防止所有的vuex的计算属性
  // state参数 指的就是store中的state
  getters:{
    /* filterList: function(state){
     return state.list.filter(item => item >5)
    } */
    // 箭头函数简写 跟常见
    filterList: state => state.list.filter(item => item>5),
    // 子模块的属性 （更简单的写法）
    token: state => state.user.token,
    name: state => state.setting.name
  },
  mutations:{
    // 修改state 必须通过mutations
    // 修改state的mutation方法
    addCount(state, playload){
      state.count += playload
    }
  },
  // 异步动作
  // 从后端获取一个数 更新到state的count中
  actions:{
    // 方法
    // action 方法依然有参数 第一个参数：执行的上下文对象
    // context相当于组件中的 this.$store  store的运行实例
    getAynscCount(context, parmas){
      // 异步请求
      // 模拟异步请求
      setTimeout(function(){
        // 获取得到一个值   改数据必须通过mutations
        // 通过context.commit 调用addCount    123相当于playload
        context.commit("addCount", parmas)
       
      },1000)
    }

  },
  
  modules:{
    // 放置子模块属性
    user:{
      namespaced:true,  //true就表示加锁 不再是全局了
      state:{
        token:'12345'
      },
      mutations:{
        updateToken(state){
          state.token = '678910'
        }
      }
    },
    setting:{
      state:{
        name:'Vuex实例'
      }
    }
  }
}) //实例化一个Vuex

new Vue({
  render: h => h(App),
  store //es6写法
}).$mount('#app')
