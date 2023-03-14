<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // 缓存后就不触发这个destory了 所以没用 必须用路由生命周期
  /*  beforeDestroy() {
    console.log("news被销毁了");
    clearInterval(this.timer);
  },
  mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */

  // 这个钩子能保证input框里的内容不会消失
  activated() {
    // 激活
    console.log("news组件被激活了");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    // 失活
    console.log("news组件失活了");
    clearInterval(this.timer);
  },
};
// $nextTick
// $nextTick
</script>

<style>
</style>