// 基于axios进行二次封装 设置基础地址
// 网络请求

import axios from "axios";
// 设置项目的基础地址
axios.defaults.baseURL = 'http://localhost:3000'
export default axios

