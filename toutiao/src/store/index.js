import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import newlist from './modules/newlist'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        // es6写法
        category,
        newlist
    },
    getters:{
        //建立对子模块的快捷访问
        category: state=> state.category.category,
        currentCategory: state=> state.category.currentCategory
    }
})
