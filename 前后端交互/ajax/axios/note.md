axios 是专注于网络请求的库 比原生的XMLHttpRequest 对象 简单易用 更加轻量化
同源策略： 同源（页面的协议 域名 和端口都相同）
http://www.test.com/index.html 端口（：80）

HTTP协议 域名 www.test.com   端口：80（默认）  ：700
同源策略： same origin policy 是浏览器提供的一个安全功能
跨域：和同源相反


如何实现跨域数据请求
两种解决方案：
JSONP （出现较早 兼容性较好 一种临时解决方案） 只支持get请求 不支持POST请求
CORS 出现较晚 W3C标准  兼容性没有那么好 支持get和post

script标签不受浏览器同源策略的影响 可以通过src属性 请求非同源的js脚本