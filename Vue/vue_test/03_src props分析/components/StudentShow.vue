<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名字:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄: {{ myAge+1 }}</h2>
    <!-- 能实现功能 但是VUe不建议 改给的数据 -->
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>

export default {
    name:'StudentShow',
    data(){
      console.log(this); //vc
        return {
          msg:'我是学生',
          //   StudentName:'puppy',
          //   StudentAge: 18
          myAge:this.age
        }
    },
    methods:{
      updateAge(){
        this.myAge = 22
      }
    },
    // 简单接收
    // props:['name', 'sex', 'age'] 

    // 接收的同时对数据进行类型限制
    /* props:{
      name:String,
      age:Number,
      sex:String
    } */

    // 接收的同时对数据进行限制+默认值的指定+必要性限制

    props:{
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:99
      },
      sex:{
        type:String,
        required:true
      }
    }
}
</script>

<style>
  
</style>