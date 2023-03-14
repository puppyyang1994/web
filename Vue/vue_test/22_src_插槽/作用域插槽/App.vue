<template>
  <!-- APP组件是category组件的使用者  数据也在App里 -->
  <div class="container">
    <Category title="游戏">
      <!-- 这样不行 因为数据games在category里面 作用域问题 -->
      <!-- 接收games要包裹template 然后加上scope -->
      <!-- atguigu是收到的数据 -->
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 这里可以用解构赋值 {games} games -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
};
</script>

<style lang="css" scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img,
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>