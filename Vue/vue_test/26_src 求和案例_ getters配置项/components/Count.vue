<template>
  <div>
    <h1>当前求和为:{{ $store.state.sum }}</h1>

    <h3>当前求和放大10倍为: {{ $store.getters.bigSum }}</h3>
    <select name="" id="">
      <!-- 这里一定要加上： 不然会变成字符串 v-bind后面是表达式  或者加上number修饰符 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      // 用户选择的数字
      n: 1,
      //   当前的和
      // 放到state里面去
    };
  },
  methods: {
    increment() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      // 如果是奇数 this.sum%2 不等于0  布尔值为真 所以能进到If里
      // if (this.$store.state.sum % 2) {
      //   this.$store.dispatch("jia", this.n);
      // }
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //   this.$stroe.dispatch("jia", this.n);
      // }, 500);
      // 不写在这里了
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>