<template>
  <div>
    <!-- 加了：后就是v-bind:age  里面是表达式  -->
   <StudentShow name="李四" sex="女" :age="18"></StudentShow>
   
  </div>
</template>

<script>

import StudentShow from './components/StudentShow.vue'
export default {
    name:'App',
    data(){
      return {
        msg:'欢迎学习Vue'
      }
    },
    components:{
        StudentShow
    },
    
}
</script>

<style>

</style>