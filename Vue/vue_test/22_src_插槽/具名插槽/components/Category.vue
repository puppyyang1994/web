<template>
  <div class="category">
    <h3>{{ title }}分类</h3>

    <slot name="center"
      >我是一些默认值，当使用者没有过传递具体结构时，我会出现</slot
    >
    <slot name="footer"
      >我是一些默认值，当使用者没有过传递具体结构时，我会出现</slot
    >
  </div>
</template>

<script>
export default {
  name: "Category",

  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  margin: 20px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>