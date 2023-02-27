<template>
  <div>
    <span>给父组件传值：{{ childValue }}</span>
    <!-- 定义一个子组件传值的方法 -->
    <!-- 通过按钮来触发自定义事件 -->
    <input type="button" value="点击触发" @click="childClick">
  </div>
</template>

<script>
export default {
  name:'ChildComponent',
  data(){
    return{
      childValue:'我是子组件数据'
    }
  },
  methods:{
    childClick(){
    //  childByValue是父组件on监听的方法
    // this.childValue是需要传给父组件的值
    // 触发自定义事件要调用vc身上的$emit('事件名', 传递的参数)
      this.$emit('childByValue', this.childValue)
    }
  }

}
</script>

<style>

</style>