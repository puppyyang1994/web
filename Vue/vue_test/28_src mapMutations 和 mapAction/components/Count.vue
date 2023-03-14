<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>

    <h3>当前求和放大10倍为: {{ bigSum }}</h3>

    <h3>我在{{ school }} 学习{{ subject }}</h3>

    <select name="" id="">
      <!-- 这里一定要加上： 不然会变成字符串 v-bind后面是表达式  或者加上number修饰符 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- 值在这里传入 -->
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
  computed: {
    // 程序员自己亲自去写计算属性
    /* he() {
      return this.$store.state.sum;
    },
    xuexiao() {
      return this.$store.state.school;
    },
    xueke() {
      return this.$store.state.subject;
    }, */
    // 借助mapState生成计算属性
    //
    // ...mapState({ he: "sum", xuexiao: "school", xueke: "sbuject" }),
    ...mapState(["sum", "school", "subject"]),
    /*     bigSum() {
      return this.$store.getters.bigSum;
    }, */
    // ...mapGetters({ bigSum: "bigsum" }),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    /*  increment() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    // ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 数组写法
    ...mapMutations(["JIA", "JIAN"]),

    // mapActions (对象写法 也有数组写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    /* incrementOdd() {
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
    }, */
  },
  mounted() {
    const x = mapState({ he: "sum", xuexiao: "school", xueke: "sbuject" });
    console.log(x);
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>