<template>
  <div class="app">
    <h1>{{msg}}  学生姓名{{ studentName }}</h1>
 
  <!-- 实现子给父传递数据 -->

   <SchoolShow :getSchoolName="getSchoolName"></SchoolShow>
   <!-- 绑定自定义事件 -->
   <!-- 给student组件的实例对象vc绑定了事件  实现子给父传递数据-->
   <!-- 第一种写法 v-on: @ -->
   <StudentShow @atguigu="getStudentName" @demo="m1"></StudentShow>

   <!--第二种写法 ref  -->
   <!-- <StudentShow ref="student"></StudentShow> -->
   
  </div>
</template>

<!-- 普通函数作为方法添加到另一个对象上，this指向由调用者决定，作用域和this指向是分开的； 箭头函数在哪定义，this永远指向父级函数this， 且this指向不可改变，即使作为属性添加到另一个对象上-->
<script>

import StudentShow from './components/StudentShow.vue'
import SchoolShow from './components/SchoolShow.vue'
export default {
    name:'App',
    components:{
        StudentShow,
        SchoolShow
    },
    data(){
      return {
        msg:'你好啊',
        studentName:''
      }
    },
    methods:{
      getSchoolName(name){
        console.log('App收到了学校名:', name)
      },
      // 多个参数
      getStudentName(name, ...params){
        console.log('App收到了学生名：', name, ...params)
        this.studentName = name
      },
      m1(){
        console.log('出阿发了');
      }
    },
    // mounted这种写法更灵活
    mounted(){
      // this.$refs.student.$on('atguigu', this.getStudentName)
      // this.$refs.student.$on('atguigu', this.getStudentName)
      // setTimeout(()=>{
      //   this.$refs.student.$on('atuigu', this.getStudentName)
      // },3000)
    }
    
}
</script>

<style scoped>

.app {
  background-color: gray;
}

</style>