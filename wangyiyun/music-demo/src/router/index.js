// 路由相关模块

import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'

// 注册路由
Vue.use(VueRouter)

const routes = [
    // 默认显示Layout
    {
        path:'/',
        // 强制重定向
        redirect:'layout'
    },
    // Layout默认显示二级路由的首页
    {
        path:'/layout',
        component:Layout,
        redirect:'/layout/home',
        children:[
            {
                path:'home',
                component:Home,
                // meta保存路由对象额外信息 (要切换的)
                meta:{
                    title:'首页'
                }
            },
            {
                path:'search',
                component:Search,
                 // meta保存路由对象额外信息 (要切换的)
                meta:{
                    title:'搜索'
                }
            }
        ]
    },
    {
        path:'/play',
        component:Play
    }
]

// 生成路由对象
const router = new VueRouter({routes})

// 暴露路由

export default router