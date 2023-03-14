<template>
  <div>
    <button @click="add">+2原始形式</button>
    <!-- vue中方法的默认第一个参数 事件参数对象 通过()添加参数  -->
    <!-- 事件参数对象 $event -->
    <button @click="addCount(100, $event)">+100(辅助函数)</button>
    <button @click="test1">异步调用(原始形式)</button>
    <button @click="getAynscCount(222)">异步调用(辅助函数)</button>
    <div>原始形式getters {{ $store.getters.filterList }}</div>
    <div>辅助函数getters {{ filterList }}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Child",
  computed: {
    // 将getters中的计算属性导入到组件的计算属性中
    ...mapGetters(["filterList"]),
  },
  methods: {
    // 调用mutation方法   提交mutation
    // commi(mutation的名称, 参数)
    // commit的第二个参数就是需要传递的载荷palyload
    add() {
      this.$store.commit("addCount", 2);
    },
    // 有可能导入很多个 所以用延展运算符
    ...mapMutations(["addCount"]),
    test1() {
      // 原始形式
      // commit是提交mutation
      // 调用action用dispatch(action的名称, 载荷)
      //   传递参数playload
      this.$store.dispatch("getAynscCount", 111);
    },
    ...mapActions(["getAynscCount"]), //引入异步的action
  },
};
</script>

<style>
</style>