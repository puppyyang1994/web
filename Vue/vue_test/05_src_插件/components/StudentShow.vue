<template>
  <div>
    
    <h2>学生名字:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
   
  </div>
</template>

<script>

export default {
    name:'StudentShow',
    data(){
      
        return {
          name:'puppy',
          sex:'男'
        }
    },
   
  
}
</script>

<style>
  
</style>