<template>
  <div>
    <button>原生按钮</button>
    <input type="text" name="" id="" />
    <div>
      <!-- 组件 -->
      <el-button round>圆形按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </div>
    <el-date-picker type="datetime" placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>