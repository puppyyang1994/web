<template>
  <div class="row">
    <!-- 遍历-- 列表展示 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <!-- 动态绑定这个用户 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!--展示欢迎词-->
    <h1 v-show="info.isFirst">欢迎~</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      // 这几个要随着search变化
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      // console.log(dataObj);
      // console.log("我是list组件，收到了数据:", users);
      /*  this.isFirst = isFirst;
      this.isLoading = isLoading;
      this.errMsg = errMsg;
      this.users = users; */
      // 拿到了返回的dataobj
      // 合并对象 ES6语法   这样isFirst数据不会丢
      this.info = { ...this.info, ...dataObj };
      // 不要直接操作_data
      console.log(this);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>