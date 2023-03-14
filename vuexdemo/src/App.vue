<template>
  <div id="app">
    <!-- 原始形式应用 -->
    <!-- this.$store this可以省略 -->
    <div>原始形式获取state状态: {{ $store.state.count }}</div>
    <!-- 方法2  这样代码量会减少 -->
    <div>计算属性状态:{{ count }}</div>
    <div>mapState:{{ count }}</div>
    <Child></Child>
    <ChildB />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Child from "./components/Child.vue";
import ChildB from "./components/ChildB.vue";
export default {
  name: "App",
  components: { Child, ChildB },
  computed: {
    /* count() {
      // 来源于vuex
      return this.$store.state.count;
    }, */
    // 利用es6 延展运算符将导出的状态映射给计算属性  本质和上面代码一样
    ...mapState(["count"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
