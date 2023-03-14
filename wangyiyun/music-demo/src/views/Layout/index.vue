<template>
  <div>
    <!-- 固定顶部导航 -->
    <van-nav-bar :title="activeTitle" fixed />
    <!-- 二级路由 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 路由模式 可以随着切换变换url -->
    <van-tabbar route>
      <!-- replace to 替换路由路径 -->
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title,
    };
  },
  // 路由切换后 要监听路由的改变
  watch: {
    $route() {
      // 一旦路由变化 就要切换到当前打开的路由信息
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>