// 该文件用于创建vuex中最为关键的store

// 引入Vue
// from 后面的vue必须小写
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 用于响应组件中的动作
const actions = {}

// 用于操作数据state
const mutations = {}

// 用于存储数据
const state = {}


/* // 创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state
})

// 暴露store
export default store */

export default new Vuex.Store({
    actions,
    mutations,
    state
})