<template>
  <div class="container">
    <!-- 最终都是塞到了category组件 现在app里解析之后才去category组件-->
    <!-- : 加冒号（v-bind)后面跟表达式 不加 传的是字符串 title是属性 -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      food: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["教父", "拆弹专家", "你好，李焕英", "尚硅谷"],
    };
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
img,
video {
  width: 100%;
}
</style>