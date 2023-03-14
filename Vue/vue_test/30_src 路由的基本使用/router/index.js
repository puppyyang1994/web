// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 路由组件
import Home from '../pages/Home'
import About from '../pages/About'

// 创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
    ]

})

