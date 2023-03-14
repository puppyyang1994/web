<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
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
      sum: 0,
    };
  },
  methods: {
    increment() {
      console.log(1);
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      // 如果是奇数 this.sum%2 不等于0  布尔值为真 所以能进到If里
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>