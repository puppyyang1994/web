<template>
  <div class="student">
    
    <h2>学生名字:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudent">把学生名给school</button>
   
  </div>
</template>

<script>

export default {
    name:'StudentShow',
    data(){
        return {
          name:'puppy',
          sex:'男',
        }
    },
    mounted(){
    //  console.log('Student', this.x)
    },
    methods:{
      sendStudent(){
        // 把student的名字传过去
        this.$bus.$emit('hello', this.name)
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