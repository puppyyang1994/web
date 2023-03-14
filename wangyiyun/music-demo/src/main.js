import Vue from 'vue'
import App from './App.vue'

// 做适配
import "@/mobile/flexible"
// 初始化样式 css的后缀名必须写全 
import "@/styles/reset.css"
// 引入路由对象
import router from '@/router'

// 引入Tabbar组件
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage ,
   Cell, CellGroup,Icon , Search, List } from 'vant';


// 引入 推荐歌单API
// import { recommendMusicAPI } from '@/api'




// async function myFn(){
//   const res = await recommendMusicAPI({limit:6});
//   console.log(res);
// }
// myFn();




// 注册组件
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon )
Vue.use(Search)
Vue.use(List)

Vue.config.productionTip = false


// Vant组件库的自动适配
// 自动px转rem(以后我们可以直接写px) -- webpack配合postcss和postcss-pxtorem插件就可以翻译css代码，把px转rem
// 1. 下载postcss postcss-pxtorem
// 2. 配置 postcss.config.js
// 3. 重启服务器
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
