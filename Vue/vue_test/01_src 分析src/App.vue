<template>
  
  <div>
    <img src="./assets/logo.png" alt="">
    <StudentInfo></StudentInfo>
    <SchoolShow></SchoolShow>
  </div>
</template>

<script>
// 引入组件
import SchoolShow from './components/SchoolFile.vue'
import StudentInfo from './components/StudentName.vue'
export default {
    name:'App',
    components:{
        SchoolShow,
        StudentInfo
    }
}
</script>
