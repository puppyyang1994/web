// 该文件用于创建vuex中最为关键的store

// 引入Vue
// from 后面的vue必须小写
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 用于响应组件中的动作
// 第一个参数是miniStore 第二个是传的值value
const actions = {
    // 当业务简单的时候 可以直接commit然后mutation省略了action这一步 commit和mutation对话 dispatch和action对话 所以名字需要大写
    /* jia(context,value){
        console.log('action中的jia被调用了');
       context.commit('JIA', value)
    },
    jian(context, value){
        console.log('action中的jian被调用了');
        context.commit('JIAN', value)
    }, */
    jiaOdd(context, value){
        console.log('action中的jiaodd被调用了');
        if(context.state.sum%2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        console.log('action中的jiawait被调用了');
        setTimeout(()=>{
            context.commit('JIA', value)
        })
    }
}

// 用于操作数据state
const mutations = {
    JIA(state,value){
        // console.log('mutations', a, b);
        state.sum +=value
    },
    JIAN(state,value){
        // console.log('mutations', a, b);
        state.sum -=value
    },

}

// 用于存储数据
const state = { sum: 0, school:'尚硅谷', subject:'计算机'}

// 准备getters用于将state中的数据进行加工
// 当state中的数据需要进行加工时 用getters
const getters={
    bigSum(state){
        return state.sum*10

    }
}


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
    state,
    getters
})