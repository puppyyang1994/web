1.XMLHttpRequest(xhr) xhr 浏览器提供的js对象 通过他 可以请求服务器上的数据资源
2. 之前学的jQuery中的Ajax函数 就是基于xhr对象封装出来的
3. XMLHttpRequest ---- jquery中的Ajax --- $.get() $.post() $.post()
4. 使用xhr发起get请求： 创建xhr对象； 调用xhr.open()函数  调用xhr.send() 监听onreadystatechange事件


5. readyState属性 表示当前Ajax请求所处的状态， 每个Ajax有四个状态
   值从0-4 
   
6. URL 地址后面拼接的参数（变量） 叫做 查询字符串
7. 格式： ？参数=值， 相加多个参数使用&符号
   http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记

8. 无论使用$.get() $.ajax()或者是xrl对象发起GET请求，当需要携带参数的时候 本质上 都是直接将参数以查询字符串的形式追加到URL地址大的后面 发送到服务器
9. URL编码 不允许出现中文  对中文字符进行编码（转义）
原则： 使用英文字符表示非英文字符
9.如何对URL进行编码和解码
encodeURI()
decodeURI()

10. 数据交换格式  服务器与客户端之间进行数据传输与交换的格式  XML  JSON
11. XML extensible Markup language 可扩展的标记语言  和HTML类似 区别是：HTML是网页内容的载体 XML是数据的载体。  XML的缺点 ： 格式臃肿 和数据无关的代码多； 解析麻烦
12. JSON JavaScript对象和数组的字符串表示法  本质是字符串（轻量级的文本数据交换格式）
13. JSON的两种结构：对象和数组
14. 对象结构：{}括起来的内容 键值对的形式  key必须是" "包裹，value可以是各种属性(数字 字符串 布尔值 null 数组 对象) 字符串必须用" " 不允许出现undefined 和function
15. 数组结构 []括起来的内容 (数字 字符串 布尔值 null 数组 对象）六种类型[100,200,300.5, true,false, null, "苹果", {"name":"zhangsan"}]
16. JSON 语法注意事项：属性名必须" "  , 字符串必须使用" " ,  json中不能写注释  json的最外层必须是对象或数组， 不能使用undefined 和function
17. 作用：在计算机与网络之间传输和存储数据
18. 本质： 用字符串来表示JavaScript对象数据或者数组数据
19. JSON 和JS对象的关系 ：
20. let obj = {a: "hello:, b: 'world"}

     let json = '{"a": "hello", "b": "world"}'
   json 和js对象的转换
     let obj = JSON.parse('{"a": "hello", "b": "world"}')//  {a: "hello:, b: 'world"}

21. 序列化 （对象转字符串 调用 stringfy)  反序列化（字符串转对象的过程  parse)
22. XMLHttpRequset Level 2 新特性：
23. 可设置HTTP请求时限  使用formdata对象管理表单数据  可以上传文件 可以获得数据传输的进度
24. 新增了timeout属性设置HTTP请求时限  还有一个timeout事件 指定一个回调函数
25. HTML5 新增了一个formdata对象 操作表单


26. 防抖： 保证最后一次触发
27. 节流： 减少事件触发的频率