<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素用transition-group -->
    <!-- 三个属性 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__bounceOutUp"
    >
      <h1 v-show="isShow" :key="1">你好啊!</h1>
      <h1 v-show="isShow" :key="2">你好啊!</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入第三方库 注意引入时的书写格式
import "animate.css";
export default {
  name: "ForTest3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}
/* hello-enter 进入的起点  离开的终点*/
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 借助过渡实现 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点  离开的起点*/
.hello-enter-to,
.hello-leave {
  transform: translate(0px);
}
</style>