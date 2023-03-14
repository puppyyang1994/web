<template>
  <div>
    <ul>
      <!-- 通过数据生成 -->
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数 to的字符串写法 -->
        <!--  to加冒号后就当成js去解析了 -->
        <!--   <router-link :to="`/home/message/detail?id=${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <!-- 建议这种对象的写法 -->
        <router-link
          :to="{
            // path: '/home/message/detail',
            // 此时不能使用path 只能用name写法
            name: 'xiangqing',
            // 改成query
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>