<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "SchoolY",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data);
    },
  },
  mounted() {
    // console.log('School', this.x);
    // 通过$bus给给school组件绑定了一个hello事件
    /* this.$bus.$on('hello', (data)=>{
        console.log('我是School组件，收到了数据', data)
      }) */
    // 订阅消息
    // 回调函数有两个参数 一个是a 消息名 一个是b 数据
    /*  this.pubId= pubsub.subscribe('hello', function(msgName, data){
        console.log(this);//这里是undefined 因为这里用了第三方库 pubId 所以这里写成箭头函数最好
        console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
      }) */
    // 第一种写法：写成箭头函数
    /*   this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
        console.log(this);//这里的this就是vc
        console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
      }) */

    // 第二种写法 上面methods里写好函数 下面直接调用
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  // 为了不一直占用hello 所以销毁前 要给他解绑hell事件
  beforeDestroy() {
    // this.$bus.$off('hello')
    // 如果组件要销毁了 把订阅也取消
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>