// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 路由组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建一个路由器
const router= new VueRouter({
    routes:[
        // 一级路由
        {
            // 给路由命名  一般路径比较长使用 可以简化
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
           
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            // 二级路由 注意路径前面不需要加/
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true, title:'新闻'},
                    // 独享路由守卫
                    beforeEnter:(to,from,next)=>{
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === 'atguigu'){
                                  // 改Index.html里的title 就不会有抖动的效果
                        // document.title= to.meta.title || '硅谷系统'
                                next()
                            }else{
                                alert('学校名不对')
                            }
                        }else{
                            next()
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true, title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',  //使用占位符声明接收params参数
                            component:Detail,
                            meta:{isAuth:true, title:'详情'},
                            // props的第一种写法  值为对象 ; 该对象中的所有key-value都会以props的形式传给detail
                            // props:{a:1, b:'hello'}
                            // props的第二种写法 值为布尔值， 若布尔值为真，就会把该路由组件收到的所有params参数 以props形式传给detail
                            // props:true

                            // props的第三种写法 值为函数
                           /*  props($route){
                                return {id:$route.query.id, title:$route.query.title}
                            } */
                            // 拿到参数的时候解构赋值 能写更简单点
                            // props({query}){
                            //     return {id:query.id, title:query.title}
                            // }
                        }
                    ]
                }
            ]
        },
    ]

})
// 全局前置路由守卫 每一次路由切换前都会帮你调用一个函数
// 每次路由切换之前 会被调用
// 每次初始化的时候会被调用
// router.beforeEach((to,from,next)=>{
    // to 目标路由的信息
    // from 从哪开始去
    // console.log(to, from);
  
    // 放行 写了这个页面才展示  给放行一个条件
    /* if(localStorage.getItem('school') === 'atguigu'){
        next()
    } */
// 判断是否需要鉴权
  /*   if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
              // 改Index.html里的title 就不会有抖动的效果
    // document.title= to.meta.title || '硅谷系统'
            next()
        }else{
            alert('学校名不对')
        }
    }else{
        next()
    }
    
}) */

// 全局后置路由守卫  初始化的时候被调用 每次路由切换后被调用
// 没有next了
// 切换后调用

/* router.afterEach((to,from)=>{
    console.log('后置路由首位', to, from);
      // 改Index.html里的title 就不会有抖动的效果
      document.title= to.meta.title || '硅谷系统'
}) */
export default router 
