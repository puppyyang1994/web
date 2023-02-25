<template>
  <div>
    <!-- 原生里是id  这里用ref -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输入上方的DOM元素</button>
    <SchoolInfo></SchoolInfo>
    <SchoolInfo></SchoolInfo>
    <SchoolInfo ref="sch"></SchoolInfo>
  </div>
</template>

<script>
import { clearScreenDown } from 'readline';
import SchoolInfo from './components/SchoolInfo.vue'
export default {
    name:'App',
    data(){
      return {
        msg:'欢迎学习Vue'
      }
    },
    components:{
        SchoolInfo
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title); //获取到的是真实DOM元素
        console.log(this.$refs.btn)
        console.log(this.$refs.sch);//组件的实例对象vc
      }
    }
}
</script>

<style>

</style>