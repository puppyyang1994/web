<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是默认内容</slot>
    <!-- 把games传给了slot的使用者 -->

    <!-- <ul>
      <li v-for="(item, index) in games" :key="index">
        {{ item }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    // 根据数据生成的结构要变 所以ul结构不合适
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
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