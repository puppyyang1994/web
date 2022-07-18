# Ajax

### 1. 客户端与服务器

1. 服务器的概念：在上网过程中，负责存放和对外提供资源的电脑。
2. 客户端的概念：在上网过程中，负责获取和消费资源的电脑。

### 2. URL地址的概念

统一资源定位符，  用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而访问到对应的资源

2. 组成：

   - 客户端与服务器之间的通信协议 http

   - 存有该资源的服务器名称    www.cnblogs.com
   - 资源在服务器上具体的存放位置 liulongbinblogs/p/123404.html

### 3. 网页的打开过程



![无标题](C:\Users\ASUS\Desktop\ajax\images\无标题.png)

### 4. 服务器对外提供哪些资源

1. 文字
2. 图片
3. 视频 音频
4. 网页中的数据也是服务器对外提供的一种资源 例如：股票数据 各行业排行榜等

5. **数据**是网页的灵魂

### 5. 网页中如何请求资源

1. 如果要在网页中请求服务器上的数据资源，则需要用到XMLHttpRequest对象
2. XMLHttpRequest(简称xhr ) 是浏览器提供的js成员 通过它 可以请求服务器上的数据资源。 
3. 最简单的用法 let xhrObj = new XMLHttpRequest()



### 6. 资源的请求方式

1. get 请求   （向服务器获取资源）根据URL 从服务器获取HTML css js 图片 数据资源等 
2. post请求 （向服务器提交资源） 如：登陆时向服务器提交的登录信息，注册信息，添加用户信息等各种数据操作



### 7. 了解ajax

1. Ajax全称 Asynchronous Javascript And XML (异步Javascript 和 XML)

2. 通俗： 在网页中利用XMLHttpRequest对象和服务器进行数据交互的方式 就是Ajax

3. 为什么学习：Ajax能让我们轻松的实现 网页和服务器之间数据交互。

   

![2](C:\Users\ASUS\Desktop\ajax\images\2.png)

### 8. 典型应用场景

1. 用户名检测 注册用户
2. 搜索提示。当输入搜索关键字时通过ajax的形式，动态加载搜索提示列表 数据分页显示
3. 数据的增删改查

### 9. jQuery中的Ajax

jQuery中发起Ajax请求常用的三个方法如下：

$.get( url(string), data（object可选), callback（可选）) 

$.post()

$.ajax()

