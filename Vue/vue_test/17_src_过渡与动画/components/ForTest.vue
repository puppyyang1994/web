<template>
   <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
  <!-- 用transition包裹 -->
  <!-- 动画效果 如果取名了 style里的名也要加  默认是v-leave-active -->
  <!-- 加上appear属性 一打开页面就有动画效果 -->
    <transition name="hello" appear>
    <h1 v-show="isShow">你好啊!</h1>
   </transition>
   <!-- transition标签 浏览器是不认识的  vue用的 -->

   <transition name="hello" appear>
    <h1 v-show="isShow">你好啊!</h1>
   </transition>
   </div>

</template>

<script>
export default {
    name:'ForTest',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style>
    h1{
        background-color: orange;
    }
    .hello-enter-active {
        animation: atguigu 1.5s linear;
    }
    .hello-leave-active {
        animation: atguigu 1.5s linear reverse;
    }
    /* 通过动画实现 */
    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>