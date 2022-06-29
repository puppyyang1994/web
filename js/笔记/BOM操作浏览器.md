# BOM操作浏览器（window对象）

## 1. BOM

BOM(Browser Object Model ) 是浏览器对象模型

![搜狗截图20220620104433](C:\Users\ASUS\Desktop\搜狗截图20220620104433.png)

- window 是浏览器内置中的全局对象，我们所学习的所有 Web APIs 的知识内容都是基于 window 对象实现的 

- window 对象下包含了 navigator、location、document、history、screen 5个属性，即所谓的 BOM （浏览器对象模 

  型） 

-  document 是实现 DOM 的基础，它其实是依附于 window 的属性

 

注：依附于 window 对象的所有属性和方法，使用时可以省略 window

## 2. 定时器-延时函数

1. JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout

   ```
   setTimeout(执行的回调函数，等待的秒数)
   // setTimeout只执行一次 所以可以理解为就是把一段代码延迟执行, 平时省略window
   ```

2. 清除延时函数

   ```
   let timer = setTimeout()
   clearTimeout(timer);
   ```

   

3. 结合递归函数可以使用 setTimeout 实现 setInterval 一样的功能

   ```javascript
   <body>
       <div></div>
       <script>
           // 利用递归函数 模拟 setinterval
           // 递归函数 就是自己调用自己
           let div = document.querySelector('div')
           function fn(){
               div.innerHTML = new Date().toLocaleString();
               setTimeout(fn,1000)
           }
           fn();
       </script>
   </body>
   ```

   

4. 递归函数

   ```javascript
    <script>
           // 递归函数 ： 自己调用自己就是递归函数
           // 递归函数容易造成死递归，一定要加退出条件
           let num = 0
           function fn() {
               num++
               console.log(111)
               // 在函数里面，调用自己  
               if (num >= 100) {
                   return
               }
               fn()
           }
           fn()
       </script>
   ```

   

5. 两种定时器对比
   - setInterval 的特征是重复执行，首次执行会延时
   - setTimeout 的特征是延时执行，只执行 1 次
   -  setTimeout 结合递归函数，能模拟 setInterval 重复执行
   - clearTimeout 清除由 setTimeout 创建的定时任务

## 3. JS执行机制

1. js是单线程

   JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这 

   门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比 

   如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。 

   单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问 

   题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

2. **同步和异步**

   为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 

   JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。

3. **同步**

    前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步 做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。 

4. **异步** 

​        你在做一件事情时，因为这件事情会花费很长时间，在做这件事   的同时，你还可以去处理其他事 情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

**他们的本质区别： 这条流水线上各个流程的执行顺序不同。**



5. **同步任务**

   同步任务都在主线程上执行，形成一个**执行栈。** 

6. **异步任务**

   JS 的异步是通过回调函数实现的。 

   一般而言，异步任务有以下三种类型: 

   1、普通事件，如 click、resize 等 

   2、资源加载，如 load、error 等 

   3、定时器，包括 setInterval、setTimeout 等 

   异步任务相关添加到**任务队列**中（任务队列也称为消息队列）。 

<img src="C:\Users\ASUS\Desktop\搜狗截图20220620111642.png" alt="搜狗截图20220620111642" style="zoom:50%;" />

\1. 先执行执行栈中的同步任务。 

\2. 异步任务放入任务队列中。 

\3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务 

结束等待状态，进入执行栈，开始执行。 

<img src="C:\Users\ASUS\Desktop\搜狗截图20220620111812.png" alt="搜狗截图20220620111812" style="zoom:50%;" />

<img src="C:\Users\ASUS\Desktop\搜狗截图20220620112128.png" alt="搜狗截图20220620112128" style="zoom:80%;" />

## 4. location对象

- location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分

- **常用属性和方法：** 

  - href 属性获取完整的 URL 地址，对其赋值时用于地址的跳转 
  - search 属性获取地址中携带的参数，符号 ？后面部分
  - hash 属性获取地址中的啥希值，符号 # 后面部分 （后期vue路由的铺垫，经常用于不刷新页面，显示不同页面，比如 网易云音乐）
  - reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新

  ```javascript
   // 5秒后页面跳转案例
  <style>
          span {
              color: red;
          }
      </style>
  </head>
  <body>
      <a href="http://www.itcast.cn">支付成功，<span>5</span> 秒之后跳转首页</a>
      <script>
          let a = document.querySelector('a');
          let span = document.querySelector('span');
          let num = 5;
          let timer = setInterval(function(){
              num--;
              a.innerHTML = `支付成功，<span>${num}</span>秒之后跳转首页`;
              if(num === 0){
                  clearInterval(timer);
                  // 跳转页面
                 location.href = 'http://www.itcast.cn';
              }
          },1000)
      </script>
  ```

  ```javascript
   <button>刷新</button>
      <script>
          let btn = document.querySelector('button')
          btn.addEventListener('click', function () {
              // reload() 刷新方法 有本地缓存   强制刷新 ctrl + f5   直接更新最新内容从网上拉去，不走本地缓存
              location.reload(true)
          })
      </script>
  ```

  

## 5. navigator 对象

1. navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息

2. 通过 userAgent 检测浏览器的版本及平台 

   ```javascript
   // 检测 userAgent（浏览器信息）
   !(function () {
   const userAgent = navigator.userAgent
   // 验证是否为Android或iPhone
   const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
   const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
   // 如果是Android或iPhone，则跳转至移动站点
   if (android || iphone) {
   location.href = 'http://m.itcast.cn'
   }
   })()
   ```

   

## 6. history对象

1. history 的数据类型是对象，该对象与浏览器地址栏的操作相对应，如前进、后退、历史记录等 
2. 常用属性和方法： back（）后退； forward（）前进； go(参数) 参数是1前进一个页面 参数是-1后退一个页面
3. history 对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到。

## 7. swiper插件

 插件: 就是别人写好的一些代码,我们只需要复制对应的代码,就可以直接实现对应的效果 

 学习插件的基本过程 

 熟悉官网,了解这个插件可以完成什么需求 

https://www.swiper.com.cn/  

 看在线演示,找到符合自己需求的demo https://www.swiper.com.cn/demo/index.html 

 查看基本使用流程 

https://www.swiper.com.cn/usage/index.html 

 查看APi文档,去配置自己的插件 

https://www.swiper.com.cn/api/index.html 

 注意: 多个swiper同时使用的时候, 类名需要注意区分

```javascript
<link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <style>
        .box {
            width: 600px;
            height: 350px;
            background-color: pink;
            margin: 100px auto;
        }

        html,
        body {
            position: relative;
            height: 100%;
        }

        body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #000;
            margin: 0;
            padding: 0;
        }

        .swiper-container {
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }

        .swiper-slide img {
            width: 100%;
            height: 350px;
        }

        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
        }

        .swiper-pagination-bullet-active {
            background-color: #fff;
        }
    </style>
</head>

<body>
    <div class="box">
        <!-- Swiper -->
        <div class="swiper-container one">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_01.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_02.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_03.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_04.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_05.jpg" alt="">
                    </a>
                </div>


            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

    </div>


    <div class="box">
        <!-- Swiper -->
        <div class="swiper-container two">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_01.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_02.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_03.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_04.jpg" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="./images/b_05.jpg" alt="">
                    </a>
                </div>


            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

    </div>
    <script src="./js/swiper-bundle.min.js"></script>
    <!-- 要放到插件的下面 -->
    <!-- Initialize Swiper -->
    <script>
        var swiper = new Swiper('.one', {
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: true,
        });
        var swiper = new Swiper('.two', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: true,
        });
    </script>
```



## 8. 本地存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在 

本地存储大量的数据，HTML5规范提出了相关解决方案。 

1、数据存储在用户浏览器中 

2、设置、读取方便、甚至页面刷新不丢失数据 

3、容量较大，sessionStorage和localStorage约 5M 左右

### 1. localStorage

1. 生命周期永久生效，除非手动删除 否则关闭页面也会存在 

2. 可以多窗口（页面）共享（同一浏览器可以共享） 

3. 以键值对的形式存储使用

### 2. 使用

1. 存储数据

localStorage.setItem(key, value);   存储数据 localStorage.setItem('键', '值') 

2. 获取数据：

localStorage.getItem(key);  localStorage.getItem('键') 

3. 删除数据：

localStorage.removeItem(key)

**4. 存储复杂数据类型存储** 

本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串,在存储到本地

**JSON.stringify(复杂数据类型)**  将复杂数据转换成JSON字符串 **存储** 本地存储中

**JSON.parse(JSON字符串)**   将JSON字符串转换成对象  **取出** 时候使用

```javascript
 <script>
        localStorage.setItem('uname', 'pink'); 
        console.log(localStorage.getItem('uname')); //pink
        localStorage.removeItem('uname');
        // 存储复杂数据类型 （引用数据类型）
        let obj = {
            uname: '刘德华',
            age: 17,
            adress: '海口'
        }
    //    console.log(JSON.stringify(obj)) （转化成JSON字符串）JSON.stringify(obj)
    // 1. 复杂数据类型一定要转换为json字符串再进行存储
    localStorage.setItem('obj', JSON.stringify(obj))
    // JSON属性和值都是双引号进行包含
    // let obj = {
    //         uname: "刘德华",
    //         age: "",
    //         age: "17",
    //         adress: "海口"
    //     }
    //    
    //  2. 取数据 可以使用JSON。parse（） 取出复杂数据类型(将JSON字符串转化为对象)
    console.log(typeof localStorage.getItem('obj')); //strig
    console.log(JSON.parse(localStorage.getItem('obj')));//是一个对象

    let object = {
        age:18
    }
    // 本地存储只能存储字符串 所以我要转换  转换为JSON格式的字符串
    localStorage.setItem('key', JSON.stringify(object))
    //  // 获取的过来的值是字符串，不是对象了没有办法直接使用，因此我们首先吧字符串转换为对象
    console.log(JSON.parse(localStorage.getItem('key')));
    </script>
</body>
```

### 3. **sessionStorage（了解）**

1、生命周期为关闭浏览器窗口 

2、在同一个窗口(页面)下数据可以共享 

\3. 以键值对的形式存储使用 

\4. 用法跟localStorage 基本相同



# 正则表达式(未完成)

## 1. 概念

正则表达式（Regular Expression）是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象 

通常用来查找、替换那些符合正则表达式的文本，许多语言都支持正则表达式。 

戴帽子、戴眼镜、男人都是描述信息，通过这些信息能够在人群中查找到确定的某个人，那么这些用于查找的描述信息编 写一个模式，对应到计算机中就是所谓的正则表达式。

## 2. 使用场景

正则表达式在 JavaScript中的使用场景： 

例如验证表单：用户名表单只能输入英文字母、数字或者下划线， 昵称输入框中可以输入中文(匹配) 

比如用户名: /^[a-z0-9_-]{3,16}$/

过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等 。

```javascript
 <script>
        // 定义正则表达式  里面存的是对象
        let reg = /前端/
        // 2. 检测是否匹配 test（重点）
        let str = '我们都在学前端'
        console.log(reg.test(str)); //true
        // 3.检索exec()
        console.log(reg.exec(str))//返回的是数组  如果匹配不成功 返回的是null
    </script>
```

1.正则表达式检测查找 test方法和exec方法有什么区别？ 

 test方法 用于判断是否有符合规则的字符串，返回的是布尔值 找到返回 

true，否则false 

 exec方法用于检索（查找）符合规则的字符串，找到返回数组，否则为 

null