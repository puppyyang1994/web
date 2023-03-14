<template>
  <div id="app">
    <category></category>
    <new-list></new-list>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import NewList from "./components/NewList.vue";
export default {
  components: { Category, NewList },
  name: "App",
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
