<template>
  <div>
    <van-cell center :title="name" :key="id" :label="author + ' - ' + name">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @click="playFn" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "SongItem",
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    // 点击跳路由 把id传到play页面
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, // 歌曲id，通过路由跳转 传递过去
        },
      });
    },
  },
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>