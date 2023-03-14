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
    // console.log("About组件挂在完毕", this);
    // window.aboutRoute = this.$route;
    // window.aboutRouter = this.$router;
  },
  // 通过路由规则进入该组件时，调用
  beforeRouteEnter(to, from, next) {
    console.log("App---beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        // 改Index.html里的title 就不会有抖动的效果
        // document.title= to.meta.title || '硅谷系统'
        next();
      } else {
        alert("学校名不对");
      }
    } else {
      next();
    }
  },
  //通过路由规则离开该组件时，调用
  beforeRouteLeave(to, from, next) {
    console.log("About---beforeRouteLeave");
    document.title = to.meta.title || "硅谷系统";
    next();
  },
};
</script>

<style>
</style>