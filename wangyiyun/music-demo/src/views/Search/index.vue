<template>
  <div>
    <van-search
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
      @input="inputFn"
    />

    <!-- 搜索人关键词容器 -->
    <!-- 互斥显示搜索结果和热搜关键词 -->
    <!-- 用v-if 和 v-else  判断条件是：如果没有搜索结果 就显示热搜关键词 否则就是显示搜索结果 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <!-- 注意是遍历每一条 所以是绑在这里 -->
        <!-- 数据里没有id 所以这里自己用index  -->
        <span
          class="hot_item"
          v-for="(obj, index) in hotArr"
          :key="index"
          @click="fn(obj.first)"
          >{{ obj.first }}</span
        >
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
          v-for="obj in resultList"
          :key="obj.id"
          :name="obj.name"
          :author="obj.ar[0].name"
          :id="obj.id"
        ></SongItem>
        <!--  <van-cell
          center
          :title="obj.name"
          v-for="obj in resultList"
          :key="obj.id"
          :label="obj.ar[0].name + ' - ' + obj.name"
        > -->
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <!--  <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell> -->
      </van-list>
    </div>
  </div>
</template>
<!-- 铺设页面 搜索显示的结果 和首页的vant-cell 一样 所以只需要把首页的复制过来 -->
<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";

export default {
  data() {
    return {
      value: "",
      hotArr: [], //热搜关键字数据
      resultList: [],
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    };
  },
  components: { SongItem },
  async created() {
    // 搜索框创建完成后就展示这些关键词
    const res = await hotSearchAPI();
    // console.log(res);
    // 拿到数组
    this.hotArr = res.data.result.hots;
  },
  methods: {
    // 搜索后的值显示
    async getListFn() {
      // 发起请求 然后将结果返回
      // 把搜索结果return出去
      return await searchResultAPI({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20, //固定公式 文档有  当前页面-1 往后偏移20个数据
      });
      // 难点： async修饰的函数 默认返回一个全新的Promise对象  这个Promise对象的结果就是async函数内return的值
      // 拿到getListFn的返回值 用await提取结果
    },
    async fn(val) {
      // 点击热搜关键词
      this.finished = false; //点击新关键词了 可能有新数据

      this.value = val; //选中的关键词放到搜索框中
      // console.log(this.getListFn());  Promise对象
      // 拿到pormise对象的值  要么通过then 要么通过 await
      const res = await this.getListFn();
      // console.log(res);
      this.resultList = res.data.result.songs;
      // 本次数据加载完毕 才能够让list加载更多
      this.finished = false;
    },
    // 实现输入框值的改变
    async inputFn() {
      // 让输入框改变-逻辑代码-慢点执行
      // 用户在n秒内不触发这个事件了  才会开始执行
      this.page = 1;
      if (this.timer) clearTimeout(this.timer);
      // awiat只能用在async修饰的函数内
      this.timer = setTimeout(async () => {
        this.page = 1; //点击重新获取第一页数据
        this.finised = false; //输入框改变 可能有更多新的数据
        // 没有值的话 列表不应该显示
        if (this.value.length == 0) {
          this.resultList = [];
          // 清空 然后阻止代码执行
          return;
        }
        const res = await this.getListFn();
        console.log(res);
        // 如果搜索响应结果没有songs字段-无数据
        if (res.data.result.songs === undefined) {
          this.resultList = [];
          return;
        }
        this.resultList = res.data.result.songs;
        this.loading = false;
      }, 900);
    },
    async onLoad() {
      // 触底事件 要加载下一页的数据
      this.page++; //数据触底了就页面增加一页
      const res = await this.getListFn();
      // 如果 songs没有数据了 触底了  finished为true loading false
      if (res.data.result.songs === undefined) {
        this.finished = true;
        this.loading = false;
        return;
      }
      // 把原数组和新数组合起来 形成一个新数组
      this.resultList = [...this.resultList, ...res.data.result.songs];
      // 触底后 loading变为了true  所以需要把loading改为true 保证下一次还能触发onLoad
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>