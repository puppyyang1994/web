<template>
  <div>
  <StudentShow></StudentShow>
   <SchoolShow></SchoolShow>
   
  </div>
</template>

<script>

import StudentShow from './components/StudentShow.vue'
import SchoolShow from './components/SchoolShow.vue'
export default {
    name:'App',
    components:{
        StudentShow,
        SchoolShow
    },
    
}
</script>

<style>

</style>