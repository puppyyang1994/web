<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link class="list-group-item" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 缓存路由组件：让步展示的路由组件保持挂载，不被销毁 include=‘组件名’ -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy() {
  //   console.log("Home组件销毁");
  // },
  // mounted() {
  //   console.log("Home组件挂载完毕", this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
};

// aboutRoute === homeRoute   false
// aboutRouter === homeRouter  true
</script>

<style>
</style>