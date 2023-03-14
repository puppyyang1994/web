
import axios from 'axios'
export default {
    namespaced: true,
    state:{
        // 定义一个存放分类数组的属性
        category: [],
        // 高亮  当前激活的分类
        currentCategory:''
    },
    mutations:{
        // 会认为载荷是要更新的数组
        updateCategory(state, payload){
            state.category = payload
        },
         // 会认为载荷是要更新的分类
        updateCurrentCategory(state, payload){
            state.currentCategory = payload

        }
    },
    // 异步请求axios
    actions:{
        // 返回的是一个promise对象 可以通过。then获得他的结果
        // async 、 await
        // axios默认包了一层data的数据结构

      async  getCategory(context ){
        // await 总是会等到后面的 代码执行完成 才会去执行下面的逻辑
        // 最外层的data 是axios包的  第二层是接口包的 
        const {data:{data:{channels}}} = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
        // 拿到了数组 改数据
        context.commit('updateCategory', channels)//更新数组
        context.commit('updateCurrentCategory', channels[0].id) //更新激活的id
      
        }
    }
}