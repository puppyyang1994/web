<template>
   <div>
    <span>{{ name }}</span>
    <!-- 引入子组件  定义一个on的方法监听子组件状态-->
    <ChildComponent v-on:childByValue="childByValue"></ChildComponent>
   </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
  name:'App',
  components:{
    ChildComponent
  },
  data(){
    return {
      name:''
    }
  },
  methods:{
    childByValue(childValue){
       // childValue是子组件传过来的值
      this.name = childValue
    }
  }
}
</script>

<style>

</style>