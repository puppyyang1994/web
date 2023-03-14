<template>
  <div>
    <!-- 用户的token和应用名称name -->
    <!-- 直接是$store.子模块.属性 -->
    <div>用户名称 {{ $store.state.user.token }}</div>
    <div>网络名称: {{ $store.state.setting.name }}</div>
    <!-- 快捷访问 -->
    <div>快捷访问</div>
    <div>{{ name }}</div>
    <div>{{ token }}</div>
    <button @click="updateToken">更新子模块token</button>
    <button @click="test">更新子模块token 辅助函数形式</button>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers("user");
export default {
  computed: {
    ...mapGetters(["name", "token"]),
  },
  methods: {
    updateToken() {
      //   this.$store.commit("updateToken");
      //   采用路径形式调用
      this.$store.commit("user/updateToken");
    },
    // ...mapMutations(["user/updateToken"]),
    test() {
      // 调用
      this["user/updateToken"]();
    },
    ...mapMutations(["updateToken"]),
  },
};
</script>

<style>
</style>