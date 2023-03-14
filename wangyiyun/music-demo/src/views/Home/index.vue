<template>
  <div>
    <p class="title">推荐歌单</p>
    <!-- 1个row就行 放不下会自动换行 -->
    <!-- gutter设置间距 -->
    <van-row gutter="6">
      <!-- 注意遍历的是meiyigecol -->
      <van-col span="8" v-for="obj in reList" :key="obj.id"
        ><van-image width="100%" height="3rem" fit="cover" :src="obj.picUrl" />
        <!-- 歌单名称 -->
        <p class="song_name">{{ obj.name }}</p>
      </van-col>
    </van-row>

    <p class="title">最新音乐</p>
    <!-- -->
    <SongItem
      v-for="obj in songList"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
    ></SongItem>
  </div>
</template>

<script>
// 铺设推荐歌单
//  布局
// 图片
// 调用封装好的api/index.js的推荐歌单的api

import { recommendMusicAPI, newMusicAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";

export default {
  data() {
    return {
      reList: [], //推荐歌单的数据
      songList: [], //最新音乐数据
    };
  },
  components: { SongItem },
  // 在当前组件穿件完成的时候，就需要拿到数据进行渲染
  async created() {
    const res = await recommendMusicAPI({
      limit: 6,
    });
    // 拿到数据后把它给我们提前设定好放数据的data里的reList, 然后遍历它就可以了
    this.reList = res.data.result;
    const res2 = await newMusicAPI({
      limit: 20,
    });
    // console.log(res2);
    this.songList = res2.data.result;
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>