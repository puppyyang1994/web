<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽 等着组件的使用者进行填充 -->
    <!-- 这是默认插槽 -->
    <slot>我是一些默认值，当使用者没有过传递具体结构时，我会出现</slot>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  //   注意这里直接用listData 而不是每一个 foods films都要单独写
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