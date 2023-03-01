<template>
 <div>
    <h2>籍贯{{ native }}</h2>
  <button @click="sendNative">点击触发自定义事件</button>
 </div>
</template>

<script>
export default {
    name:'TestB',
    data(){
        return {
            native:'东海'
        }
    },
    methods:{
        sendNative(){
            this.$emit('demo', this.native)
        }
    }

}
</script>

<style>

</style>