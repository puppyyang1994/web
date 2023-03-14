// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 路由组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'

// 创建一个路由器
export default new VueRouter({
    routes:[
        // 一级路由
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            // 二级路由 注意路径前面不需要加/
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                }
            ]
        },
    ]

})

