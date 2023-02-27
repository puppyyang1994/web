<template>
  <div class="student">
    
    <h2>学生名字:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudnetName">点我学生名</button>
    <button @click="unbind">解绑atguigu</button>
    <!-- 销毁实例对象student -->
    <button @click="death">销毁student</button>

   
  </div>
</template>

<script>

export default {
    name:'StudentShow',
    data(){
      
        return {
          name:'puppy',
          sex:'男',
          number:0
        }
    },
   methods:{
    add(){
      console.log('add被调用了');
      this.number++

    },
    sendStudnetName(){
      // $emit(事件名, 参数)
      this.$emit('atguigu', this.name,666, 888)
      // this.$emit('demo')
    },
    unbind(){
      // 解绑事件  只适用于解绑一个自定义事件
      // this.$off('atguigu') 解绑多个自定义事件
      this.$off(['atguigu', 'demo'])

      // 简写 所有的自定义事件全部解绑
      // this.$off()
    },
    death(){
      this.$destroy()//销毁了当前的student组件实例, 销毁后所有student实例的自定义事件全都不奏效
    }
   }
  
}
</script>

<style>
  .student {
    background-color: yellow;
    padding: 5px;
    margin-top: 5px;
  }
</style>