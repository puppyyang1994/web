<template>
  <div>
    <ForTest></ForTest>
    <ForTest2></ForTest2>
    <ForTest3></ForTest3>
</div>
</template>

<script>
// 删除-- 利用消息订阅 App需要数据 item提供数据
import ForTest from './components/ForTest.vue'
import ForTest2 from './components/ForTest2.vue'
import ForTest3 from './components/ForTest3.vue'

export default {
  name:'App',
  components:{
    ForTest,
    ForTest2,
    ForTest3
  }

}
</script>

<style>

</style>