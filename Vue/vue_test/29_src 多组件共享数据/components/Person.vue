<template>
  <div>
    <h1>人员列表</h1>
    <h1>Count组件的总数为{{ sum }}</h1>
    <input type="text" name="" id="" placeholder="请输入" v-model="name" />

    <button @click="add">添加</button>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :key="p.id">{{ p.name }}</li> -->
      <!-- 写法2 搭配计算属性 -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },

    // ...mapState(["personList"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
    },
  },
};
</script>

<style>
</style>