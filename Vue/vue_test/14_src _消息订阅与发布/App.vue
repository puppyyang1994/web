<template>
  <div id="app">
    <h1>{{msg}} </h1>
    <SchoolY></SchoolY>
    <StudentShow></StudentShow>
   
  </div>
</template>

<!-- 普通函数作为方法添加到另一个对象上，this指向由调用者决定，作用域和this指向是分开的； 箭头函数在哪定义，this永远指向父级函数this， 且this指向不可改变，即使作为属性添加到另一个对象上-->
<script>
import SchoolY from './components/SchoolY.vue'
import StudentShow from './components/StudentShow.vue'
export default {
    name:'App',
    components:{
        StudentShow,
        SchoolY
    },
    data(){
      return {
        msg:'你好啊',
      }
    },
    
}
</script>

<style scoped>

#app {
  background-color: gray;
}

</style>