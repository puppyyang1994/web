<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // 路由组件时频繁的被挂载销毁的
  /* beforeDestroy() {
    console.log("about组件销毁");
  }, */
  mounted() {
    console.log("About组件挂在完毕", this);
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
};
</script>

<style>
</style>