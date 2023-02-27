<template>
   <div>
    <span>{{ name }}</span>
 <!-- 给childcomponent组件绑定了一个名为childByValue的事件： -->
    <ChildComponent v-on:childByValue="childByValue"></ChildComponent>

    <!-- 方法二 -->
    <!-- 通过ref属性 拿到TestB组件的实例对象vc 在组件挂在完毕后 通过this.$refs.组件名.$on('自定义事件名', 回调函数) 完成对子组件自定义事件的绑定-->
    <TestB ref="testb"></TestB>
   </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
import TestB from './components/TestB.vue'
export default {
  name:'App',
  components:{
    ChildComponent,
    TestB
  },
  data(){
    return {
      name:''
    }
  },
  methods:{
    // 自定义事件的具体内容就是接收子组件穿过来的数据
    childByValue(childValue){
       // childValue是子组件传过来的值
      this.name = childValue
    },
    send(name){
      console.log('send被调用了', name);
    }
  },
  mounted(){
    this.$refs.testb.$on('demo', this.send)
  }
}
</script>

<style>

</style>