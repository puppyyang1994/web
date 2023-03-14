// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 路由组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
export default new VueRouter({
    routes:[
        // 一级路由
        {
            // 给路由命名  一般路径比较长使用 可以简化
            name:'guanyu',
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
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',  //使用占位符声明接收params参数
                            component:Detail,
                            // props的第一种写法  值为对象 ; 该对象中的所有key-value都会以props的形式传给detail
                            // props:{a:1, b:'hello'}
                            // props的第二种写法 值为布尔值， 若布尔值为真，就会把该路由组件收到的所有params参数 以props形式传给detail
                            // props:true

                            // props的第三种写法 值为函数
                           /*  props($route){
                                return {id:$route.query.id, title:$route.query.title}
                            } */
                            // 拿到参数的时候解构赋值 能写更简单点
                            props($route){
                                return {id:$route.query.id, title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]

})

