<template>
   
        <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showX">点我提示学校名</button>
        </div> 
   
</template>

<script> 

export default {
    name:'School',
    data() {
        return {
            schoolName: '尚硅谷',
            address: '北京'
        }
    },
    methods: {
        showX() {
           
            console.log(this.schoolName);
        }
    }
}
</script>




<style>
.demo{
    background-color:orange ;
}
</style>