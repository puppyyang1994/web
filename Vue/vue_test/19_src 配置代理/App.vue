<template>
    <div>
      <button @click="getInfo">获取学生信息</button>
      <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
// 下载并引入axios
import axios from 'axios'
export default {
  name:'App',
  methods:{
    getInfo(){
      // 注意这里的端口名
      // 方式二加上/api
      axios.get('http://localhost:8080/students').then(
        // 给两个回调
        response=>{
          console.log('请求成功了', response.data);
        },
        error =>{
          console.log('请求失败了', error.message);
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/getcars/cars').then(
        // 给两个回调
        response=>{
          console.log('请求成功了', response.data);
        },
        error =>{
          console.log('请求失败了', error.message);
        }
      )
    }
  }
}
</script>

<style>

</style>