<template>
  <div class="school">
    
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>

export default {
    name:'SchoolY',
    data(){
        return {
          name:'尚硅谷',
          address:'北京'
        }
    },
    mounted(){
      // console.log('School', this.x);
      // 通过$bus给给school组件绑定了一个hello事件
      this.$bus.$on('hello', (data)=>{
        console.log('我是School组件，收到了数据', data)
      })
    },
    // 为了不一直占用hello 所以销毁前 要给他解绑hell事件
    beforeDestroy(){
      this.$bus.$off('hello')
    }
       
  
}
</script>

<style>
  .school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 10px;
  }
</style>