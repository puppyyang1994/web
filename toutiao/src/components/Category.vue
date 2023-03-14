<template>
  <ul class="category">
    <li
      @click="$store.commit('category/updateCurrentCategory', item.id)"
      :class="{ select: item.id === currentCategory }"
      v-for="item in category"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["category", "currentCategory"]),
  },
  //   组件创建后就调用actions
  created() {
    this.$store.dispatch("category/getCategory");
  },
};
</script>

<style>
.category {
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  background-color: #f4f5f6;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.category li {
  padding: 0 15px;
  text-align: center;
  line-height: 40px;
  color: #505050;
  cursor: pointer;
  z-index: 99;
  white-space: nowrap;
}
.category li.select {
  color: #f85959;
}
</style>