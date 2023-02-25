<template>
  <div>
    
    <h2 @click="showName">学生名字:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
   
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'StudentShow',
    data(){
      
        return {
          name:'puppy',
          sex:'男'
        }
    },
    mixins:[mixin]
    
  
}
</script>

<style>
  
</style>