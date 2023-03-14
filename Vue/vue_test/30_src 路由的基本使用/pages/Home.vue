<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件销毁");
  },
  mounted() {
    console.log("Home组件挂载完毕", this);
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
};

// aboutRoute === homeRoute   false
// aboutRouter === homeRouter  true
</script>

<style>
</style>