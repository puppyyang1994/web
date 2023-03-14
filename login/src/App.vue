<template>
  <div id="app">
    <el-card class="login-card">
      <!-- 表单 -->
      <el-form
        ref="loginForm"
        style="margin-top: 50px"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item prop="mobile">
          <el-input
            placeholder="请输入您的手机号"
            v-model="loginForm.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入您的密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <el-button @click="test">测试async</el-button>
      <el-button @click="test1">测试async1</el-button>
      <el-button @click="getCatch">测试catch1</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const checkMobile = function (rule, value, callback) {
      // 自定义校验规则
      // charAt（下标） 找到对应的下标对应的值
      value.charAt(2) === "9"
        ? callback()
        : callback(new Error("手机号第三位必须是9"));
    };
    return {
      // 数据对象
      loginForm: {
        // 校验的字段
        mobile: "",
        password: "",
      },

      // 校验规则
      loginRules: {
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            trigger: "blur",
            message: "手机号格式不正确",
            pattern: /^1[3-9]\d{9}$/,
          },
          {
            trigger: "blur",
            validate: checkMobile,
          },
        ],
        password: [
          { required: true, message: "密码不正确", trigger: "blur" },
          { min: 6, max: 16, message: "密码的长度为6-16位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      // 获取到el-form的实例 调用上面的validate
      /* this.$refs.loginForm.validate((isOk) => {
        if (isOk) {
          console.log("校验通过"); //再进行后面的操作
        }
      }); */
      // 如果validate里不放入回调函数作为参数 会返回一个promise对象 通过then和catch获得返回的结果
      // then是验证成功 catch是验证失败
      this.$refs.loginForm
        .validate()
        .then(() => {
          console.log("验证成功");
        })
        .catch(() => {
          console.log("验证失败");
        });
    },
    async test() {
      // await 后面跟上一个promise对象 他总是会等到Promise对象resolve执行完之后，接收他的结果 执行下面的逻辑
      // await 必须和async配合使用  在await的父级函数的位置 标记一个async
      // await等了5秒钟直到等到resolve
      // await会造成强制等待 造成接的方法死锁  async表示该函数就是一个异步函数 不会阻塞别的方法的执行
      const result = await new Promise(function (resolve) {
        // 5秒之后执行resolve
        setTimeout(function () {
          resolve(5);
        }, 5000);
      });
      alert(result);
    },
    async test1() {
      await this.test(); //调用test方法， 标记了async的方法 是一个异步的方法，
      // 异步方法不会阻塞其他逻辑的执行
      // 会先弹出1234 不会等待test()执行完成之后才执行alert
      // 如果强制想让test先执行 可以 await this.test() 轻质等待test先执行 才能alert（1234
      alert(1234);
    },
    async getCatch() {
      // catch能捕获失败的结果
      try {
        const result = await new Promise(function (resolve, reject) {
          reject("失败了");
        });
        alert(result);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  /* 可视屏 */
  height: 100vh;
  background-color: pink;
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
}
.login-card {
  width: 440px;
  height: 370px;
}
</style>
