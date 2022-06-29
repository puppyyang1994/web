# 1. DOM案例

### 1.网页轮播图案例

需求：每隔一秒钟切换一个图片 

思路：

①：获取元素（图片和文字） 

②：设置定时器函数 

设置一个变量++ 

更改图片张数 

更改文字信息 

③：处理图片自动复原从头播放 

如果图片播放到最后一张就是第9张 

则把变量重置为0 

注意逻辑代码写到图片和文字变化的前面

```javascript
<style>
        .img-box {
            width: 720px;
            height: 320px;
            margin: 50px auto;
            position: relative;
        }
        .img-box .pic {
            display: block;
            width: 100%;
            height: 320px;
        }
        .img-box .tip {
            position: absolute;
            width: 720px;
            height: 53px;
            left: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            line-height: 53px;
        }
        .tip h3 {
            width: 82%;
            margin: 0;
            margin-right: 20px;
            padding-left: 20px;
            color: #98E404;
            font-size: 28px;
            font-weight: 500;
            font-family: "Microsoft Yahei", Tahoma, Geneva;
        }
    </style>
</head>
<body>
    <div class="img-box">
        <img class= 'pic' src="./images/b01.jpg" alt="">
        <div class="tip">
            <h3 class="text">挑战云歌单，欢迎你来</h3>
        </div>
    </div>
    <script>
         // 1.数据
         let data = [
            {
                imgSrc: 'images/b01.jpg',
                title: '挑战云歌单，欢迎你来'
            },
            {
                imgSrc: 'images/b02.jpg',
                title: '田园日记，上演上京记'
            },
            {
                imgSrc: 'images/b03.jpg',
                title: '甜蜜攻势再次回归'
            },
            {
                imgSrc: 'images/b04.jpg',
                title: '我为歌狂，生为歌王'
            },
            {
                imgSrc: 'images/b05.jpg',
                title: '年度校园主题活动'
            },
            {
                imgSrc: 'images/b06.jpg',
                title: 'pink老师新歌发布，5月10号正式推出'
            },
            {
                imgSrc: 'images/b07.jpg',
                title: '动力火车来到西安'
            },
            {
                imgSrc: 'images/b08.jpg',
                title: '钢铁侠3，英雄镇东风'
            },
            {
                imgSrc: 'images/b09.jpg',
                title: '我用整颗心来等你'
            },
        ]
        // 2. 获取元素
        let pic = document.querySelector('.pic');
        let text = document.querySelector('.text');

        // 3. 记录图片的张数
        let i = 0;
        // 4. 设置定时器函数 
        setInterval(function(){
            i++;
            pic.src = data[i].imgSrc;
            text.innerHTML = data[i].title;

        // 5.无缝衔接  (一定要写在最后)
            if (i === data.length-1){
                i = -1;
            }
        }, 1000)

    </script>
</body>
```



### 2. 倒计时案例

需求：按钮60秒之后才可以使用 

分析： 

①：开始先把按钮禁用（disabled 属性） 

②：一定要获取元素 

③：函数内处理逻辑 

秒数开始减减 

按钮里面的文字跟着一起变化 

如果秒数等于0 停止定时器 里面文字变为 同意 最后 按钮可以点击



```javascript
<body>
    <textarea name="" id="" cols="30" rows="10">
        用户注册协议
        欢迎注册成为京东用户！在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）。
        【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看）
    </textarea>
    <br>
    <!-- // 1.开始先把按钮禁用（disabled 属性） -->
    <button class="btn" disabled>我已经阅读用户协议(10)</button>
    <script>
        let btn = document.querySelector('.btn');
        // 1. 需要一个变量 用来计数
        let i = 10;
    //    2. 开启定时器 (间歇函数)
        let timer = setInterval(function(){
            i--;
            // 记住这个写法
            btn.innerHTML = `我已经阅读用户协议(${i})`; 
            if (i=== 0){
                // 时间到了 清楚定时器
                clearInterval(timer);
                // 开启按钮
                btn.disabled = false;
                // 更换文字
                btn.innerHTML = '我同意该协议';
            }
        },1000)
    </script>
</body>
```



### 3. 页面随机更换背景图片案例

需求：当我们刷新页面，页面中的背景图片随机显示不同的图片

分析： 

①： 随机函数 

②： css页面背景图片 background-image 

③： 标签选择body， 因为body是唯一的标签，可以直接写 document.body.style

```javascript
 <style>
        body {
            background-image: url(./images/desktop_1.jpg);
        }
    </style>
</head>
<body>
    <script>
        // 随机函数
        function getRandom(min, max){
            return Math.floor(Math.random()*(max-min+1))+min;
        }
        let num = getRandom(1, 10);
        document.body.style.backgroundImage = `url(./images/desktop_${num}.jpg)`;

    </script>
```





### 4. 页面刷新 图片随机换

需求：当我们刷新页面，页面中的图片随机显示不同的图片 

分析： 

①：随机显示，则需要用到随机函数 

②：更换图片需要用到图片的 src 属性，进行修改 

③：核心思路： 

1. 获取图片元素 

2. 随机得到图片序号 

3. 图片.src = 图片随机路径

```javascript
 <style>
        img{
            width: 500px;
            height: 300px;
        }
    </style>
</head>
<body>
    <img src="./images/1.webp" alt="">
    <script>
        let pic = document.querySelector('img');
         // 2. 随机得到图片序号
         function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let num = getRandom(1, 6);
         // 3. 完成src 属性赋值
         pic.src = `./images/${num}.webp`;
    </script>
```

### 5.随机点名

```javascript
 <script>
        // 随机数
        function getRandom(min, max){
            return Math.floor(Math.random()*(max-min + 1))+min;
        }
        // 数组
        let data = ['赵云', '黄忠', '关羽', '张飞', '马超', '刘备', '曹操', 'pink老师'];
        let num = getRandom(0, data.length-1);
        document.write(data[num]);
        // 删除 data.splice（从哪开始删，删几个）
        data.splice(num, 1)
        console.log(data);

    </script>
```



### 6.淘宝点击关闭二维码

display:none 隐藏元素 display:block 显示元素

```javascript
<style>
        * {
            margin: 0;
            padding: 0;
        }

        .erweima {
            position: relative;
            width: 160px;
            height: 160px;
            margin: 100px auto;
            border: 1px solid #ccc;
        }

        .erweima i {
            position: absolute;
            left: -13px;
            top: 0;
            width: 10px;
            height: 10px;
            border: 1px solid #ccc;
            font-size: 12px;
            line-height: 10px;
            color: #ccc;
            font-style: normal;
            cursor: pointer;
        }
    </style>
    <body>
    <div class="erweima">
        <img src="./images/code.png" alt="">
        <i class="close_btn">x</i>
    </div>
    <script>
        let close_btn = document.querySelector('.close_btn');
        let erweima = document.querySelector('.erweima');
        close_btn.addEventListener('click', function(){
            erweima.style.display = 'none';
        })
    </script>
</body>
```



### 7. 随机点名（注册事件）

需求：点击按钮之后，随机显示一个名字，如果没有显示则禁用按钮

分析： 

①：点击的是按钮 

②：随机抽取一个名字 

③： 当名字抽取完毕，则利用 disabled 设置为 true

```javascript
<style>
        div {
            width: 200px;
            height: 40px;
            border: 1px solid pink;
            text-align: center;
            line-height: 40px;
        }
    </style>
</head>
<body>
    <div>开始抽奖吧</div>
    <button>点击点名</button>
    <script>
        let arr = ['刘备', '曹操', 'pink老师'];
        function getRandom(min, max){
            return Math.floor(Math.random()*(max-min+1))+min;
        }
        let btn = document.querySelector('button');
        let div = document.querySelector('div');
        btn.addEventListener('click', function(){
            let num = getRandom(0, arr.length-1);
            // 一定要在div里面显示点的名字
            div.innerHTML = arr[num];
            // 删除已经点名的
            arr.splice(num, 1);
            // 如果都点完了 数组为空 则禁用按钮
            if(arr.length === 0){
                btn.disabled = true;
                btn.innerHTML = '已经点名完毕';
            }
        })
    </script>
```

### 8.随机点名案例（2）

需求：点击开始随机抽取，点击结束输出结果

 业务分析：
① 点击开始按钮随机抽取数组的一个数据，放到页面中
② 点击结束按钮删除数组当前抽取的一个数据
③ 当抽取到最后一个数据的时候，两个按钮同时禁用
核心：利用定时器快速展示，停止定时器结束展示



```javascript
<style>
        * {
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
        }

        .box {
            width: 600px;
            margin: 50px auto;
            display: flex;
            font-size: 25px;
            line-height: 40px;
        }

        .qs {

            width: 450px;
            height: 40px;
            color: red;

        }

        .btns {
            text-align: center;
        }

        .btns button {
            width: 120px;
            height: 35px;
            margin: 0 50px;
        }
    </style>
<h2>随机点名</h2>
    <div class="box">
        <span>名字是：</span>
        <div class="qs">这里显示姓名</div>
    </div>
    <div class="btns">
        <button class="start">开始</button>
        <button class="end">结束</button>
    </div>
    <script>
        // 需求：点击开始随机抽取，点击结束输出结果
        let start = document.querySelector('.start');
        let end = document.querySelector('.end');
        let qs = document.querySelector('.qs');
        // 数组数据
        let arr =  ['马超', '黄忠', '赵云', '关羽', '张飞']
        let timer = 0;
        let random = 0;
        // 随机函数
        function getRandom(min, max){
            return Math.floor(Math.random()*(max - min + 1))+min;
        }
        start.addEventListener('click', function(){
            // 利用定时器 快速不断的抽取
           timer = setInterval(function(){
            random = getRandom(0, arr.length - 1);
            qs.innerHTML = arr[random];
            }, 25)
           
            // 到了最后一个 禁用两个按钮 (这个必须放在click里面)
            if(arr.length === 1){
                start.disabled = end.disabled = true;
            }
        })
        end.addEventListener('click', function(){
            clearInterval(timer);
            arr.splice(random, 1);
        })
        
    </script>
```

### 9. 小米搜索框隐藏案例

需求：当表单得到焦点，显示下拉菜单，失去焦点隐藏下来菜单
案例
分析：
①：开始下拉菜单要进行隐藏
②：表单获得焦点 focus，则显示下拉菜单，并且文本框变色（添加类）
③：表单失去焦点，反向操作

```javascript
<style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {

        list-style: none;
    }

    .mi {
        position: relative;
        width: 223px;
        margin: 100px auto;
    }

    .mi input {
        width: 223px;
        height: 48px;
        padding: 0 10px;
        font-size: 14px;
        line-height: 48px;
        border: 1px solid #e0e0e0;
        outline: none;
        transition: all .3s;
    }
/* 动态添加一个类 */
    .mi .search {
        border: 1px solid #ff6700;
    }

    .result-list {
        display: none;
        position: absolute;
        left: 0;
        top: 48px;
        width: 223px;
        border: 1px solid #ff6700;
        border-top: 0;
        background: #fff;
    }

    .result-list a {
        display: block;
        padding: 6px 15px;
        font-size: 12px;
        color: #424242;
        text-decoration: none;
    }

    .result-list a:hover {
        background-color: #eee;
    }
    </style>
</head>
<body>
    <div class="mi">
        <input type="search"  placeholder="小米笔记本">
        <ul class="result-list">
            <li><a href="#">全部商品</a></li>
            <li><a href="#">小米11</a></li>
            <li><a href="#">小米10S</a></li>
            <li><a href="#">小米笔记本</a></li>
            <li><a href="#">小米手机</a></li>
            <li><a href="#">黑鲨4</a></li>
            <li><a href="#">空调</a></li>
        </ul>
    </div>
    <script>
        // 需求：当表单得到焦点，显示下拉菜单，失去焦点隐藏下来菜单
        let input = document.querySelector('input');
        let result_list = document.querySelector('.result-list');
        // 表单获得焦点 focus，则显示下拉菜单，并且文本框变色（添加类）
        input.addEventListener('focus', function(){
            result_list.style.display = 'block';
            // 动态生成一个类 给input加边框
            this.classList.add('search');
        })
        // 表单失去焦点，反向操作
        input.addEventListener('blur', function(){
            result_list.style.display = 'none';
            this.classList.remove('search');
          
        })
    </script>
```

### 10. 微博输入案例

需求1：用户输入文字，可以计算用户输入的字数 

案例 

分析： 

①：判断用输入事件 input 

②：不断取得文本框里面的字符长度 

③：把获得数字给下面文本框

需求2 

克隆预定义好的模板,将模板的hidden属性设置为false, 并最终展示到页面上 

判断如果内容为空，则提示不能输入为空, 并且直接return 

防止输入无意义空格, 使用字符串.trim()去掉首尾空格, 并将表单的value值设置为空字符串 

需求3 

获取文本域的内容, 赋值给由模板克隆出来的新标签里面的content.innerText 

随机获取数据数组里面的内容, 替换newNode的图片和名称 

利用时间对象将时间动态化 

new Date().toLocaleString()

需求4 

在事件处理函数里面获取点击按钮,注册点击事件 

(易错点: 必须在事件里面获取,外面获取不到) 

删除对应的元素 (通过this获取对应的那条需要删除的元素) 

需求5 

将表单域内容重置为空 

将userCount里面的内容重置为0

```javascript
<script>
    // 需求：用户输入文字，可以计算用户输入的字数
    // 判断用输入事件 input
    // 不断取得文本框里面的字符长度
    // 把获得数字给下面文本框
    let textarea = document.querySelector('textarea');
    let count = docuemtn.querySelector('.useCount');
    textarea.addEventListener('input', function(){
      // // area.value.length 得到输入字符的长度
      count.innerHTML = textarea.value.length;
    })

  </script>
```

```javascript
<div class="w">
    <!-- 操作的界面 -->
    <div class="controls">
      <img src="images/tip.png" alt=""><br>
      <!-- maxlength 可以用来限制表单输入的内容长度 -->
      <textarea placeholder="说点什么吧..." id="area" cols="30" rows="10" maxlength="200"></textarea>
      <div>
        <span class="useCount">0</span>
        <span>/</span>
        <span>200</span>
        <button id="send">发布</button>
      </div>

    </div>
    <!-- 微博内容列表 -->
    <div class="contentList">
      <ul id="list"></ul>
    </div>
  </div>
  <!-- 添加了hidden属性元素会直接隐藏掉 -->
  <li hidden>
    <div class="info">
      <img class="userpic" src="./images/03.jpg" alt="" >
      <span class="username">死数据:百里守约</span>
      <p class="send-time">死数据:发布于 2020年12月05日 00:07:54</p>
    </div>
    <div class="content">死数据:111</div>
    <span class="the_del">X</span>
  </li>
  <script>
    // maxlength 是一个表单属性, 作用是给表单设置一个最大长度
// 模拟数据
let dataArr = [
      { uname: '司马懿', imgSrc: './images/9.5/01.jpg' },
      { uname: '女娲', imgSrc: './images/9.5/02.jpg' },
      { uname: '百里守约', imgSrc: './images/9.5/03.jpg' },
      { uname: '亚瑟', imgSrc: './images/9.5/04.jpg' },
      { uname: '虞姬', imgSrc: './images/9.5/05.jpg' },
      { uname: '张良', imgSrc: './images/9.5/06.jpg' },
      { uname: '安其拉', imgSrc: './images/9.5/07.jpg' },
      { uname: '李白', imgSrc: './images/9.5/08.jpg' },
      { uname: '阿珂', imgSrc: './images/9.5/09.jpg' },
      { uname: '墨子', imgSrc: './images/9.5/10.jpg' },
      { uname: '鲁班', imgSrc: './images/9.5/11.jpg' },
      { uname: '嬴政', imgSrc: './images/9.5/12.jpg' },
      { uname: '孙膑', imgSrc: './images/9.5/13.jpg' },
      { uname: '周瑜', imgSrc: './images/9.5/14.jpg' },
      { uname: '老夫子', imgSrc: './images/9.5/15.jpg' },
      { uname: '狄仁杰', imgSrc: './images/9.5/16.jpg' },
      { uname: '扁鹊', imgSrc: './images/9.5/17.jpg' },
      { uname: '马可波罗', imgSrc: './images/9.5/18.jpg' },
      { uname: '露娜', imgSrc: './images/9.5/19.jpg' },
      { uname: '孙悟空', imgSrc: './images/9.5/20.jpg' },
      { uname: '黄忠', imgSrc: './images/9.5/21.jpg' },
      { uname: '百里玄策', imgSrc: './images/9.5/22.jpg' },
    ]
    // 需求1：检测用户输入字数
    // 判断用输入事件 input
    // 不断取得文本框里面的字符长度
    // 把获得数字给下面文本框
    let textarea = document.querySelector('textarea');
    let useCount = document.querySelector('.useCount');
    // 发布按钮
    let send = document.querySelector('#send');
    // ul
    let ul = document.querySelector('#list');
    textarea.addEventListener('input', function(){
      // // area.value.length 得到输入字符的长度
      // 表单的maxlength属性可以直接限制在200个数之间
      useCount.innerHTML = textarea.value.length;
    })

    // 需求2：输入内容不能为空
    //   点击button之后判断
    //   判断如果内容为空，则提示不能输入为空, 并且直接return 不能为空
    //   防止输入无意义空格, 使用字符串.trim()去掉首尾空格(如果输入的都是空格键 点击提交后仍然提醒 不能为空)
    send.addEventListener('click', function(){
      if(textarea.value.trim()===''){
        textarea.value = '';
        useCount.innerHTML = 0;
        return alert('内容不能为空');
      }
      // 随机数
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let random = getRandom(0, dataArr.length - 1);

      // 需求3. 新增留言 写到send里
      // 创建一个小li，然后把里面的内容通过innerHTML追加数据
      // let lis = li.cloneNode(true);
      // lis.hidden = false;
      let li = document.createElement('li');
      // 随机获取数据数组里面的内容, 替换newNode的图片和名字以及留言内容
       // Date.prototype.toLocaleString()
      li.innerHTML =  `
      <div class="info">
      <img  class="userpic" src=${dataArr[random].imgSrc}>
      <span class="username">${dataArr[random].uname}</span>
     
      <p class="send-time">${new Date().toLocaleString()}</p>
    </div>
    <div class="content">${textarea.value}</div>
    <span class="the_del">X</span>
    `
   // 需求4：删除留言  放到追加的前面
      // 在事件处理函数里面获取点击按钮, 注册点击事件
      //   (易错点: 必须在事件里面获取, 外面获取不到)
      // 删除对应的元素(通过this获取对应的那条需要删除的元素)
      // 教你一招: 放到追加进ul的前面，这样创建元素的同时顺便绑定了事件，赞~~
      // 使用 li.querySelector()
      let del = li.querySelector('.the_del')
      del.addEventListener('click', function () {
        // 删除操作  点击的是X  删除的小li  父元素.removeChild(子元素)
        ul.removeChild(li)
      })
      // 利用时间对象将时间动态化       new Date().toLocaleString()
      // 追加给 ul  用  父元素.insertBefore(子元素, 那个元素的前面)
      ul.insertBefore(li, ul.children[0])
      // 需求5：重置
      // 将表单域内容重置为空
      // 将userCount里面的内容重置为0
      textarea.value = ''
      //   同时下面红色为设置为0
      useCount.innerHTML = 0
    })
    // 按下回车可以生成留言信息

    // 事件侦听的三要素
	//用到keydown 或者keyup 事件
    // textarea.addEventListener('键盘事件', function() {发布信息})
    textarea.addEventListener('keyup', function (e) {
      // console.log(11)
      // 俺们怎么知道用户按下了回车键呢？
      // console.log(e.keyCode) 已经废弃    只要 e.key === 'Enter'
      // console.log(e.key)
      if (e.key === 'Enter') {
        // alert(11)
        // 发布新闻
        // 自动触发点击按钮
        send.click()
     } 
    })
  </script>
```

```css
//css部分
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.w {
  width: 900px;
  margin:0 auto;
}
.controls textarea {
  width: 878px;
  height: 100px;
  resize: none;
  border-radius: 10px;
  outline:none;
  padding-left: 20px;
  padding-top:10px;
  font-size: 18px;
}
.controls {
  overflow: hidden;
}

.controls div {
  float: right;
}
.controls div span {
  color:#666;
}
.controls div .useCount {
  color:red;
}
.controls div button {
  width: 100px;
  outline: none;
  border:none;
  background: rgb(0, 132, 255);
  height: 30px;
  cursor: pointer;
  color:#fff;
  font:bold 14px '宋体';
  transition: all 0.5s;
}
.controls div button:hover {
  background: rgb(0, 225, 255);
}
.controls div button:disabled {
  background: rgba(0, 225, 255,0.5);
}
.contentList {
  margin-top:50px;
}
.contentList li {
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
  position: relative;
}
.contentList li .info {
  position: relative;
}
.contentList li .info span {
  position: absolute;
  top:15px;
  left:100px;
  font:bold 16px '宋体';
}
.contentList li .info p {
  position: absolute;
  top:40px;
  left: 100px;
  color:#aaa;
  font-size: 12px;
}
.contentList img {
  width: 80px;
  border-radius: 50%;
}
.contentList li .content {
  padding-left: 100px;
  color: #666;
  word-break: break-all;
}
.contentList li .the_del {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 28px;
  cursor: pointer;
}
```



### 11.全选文本框案例

#### 1.案例1

需求：用户点击全选，则下面复选框全部选择，取消全选则全部取消,文字对应变化 

分析： 

①：全选复选框点击，可以得到当前按钮的 checked 

②：把下面所有的小复选框状态checked，改为和全选复选框一致 

③：如果当前处于选中状态，则把文字改为取消， 否则反之

#### 2.案例2

需求：用户点击全选，则下面复选框全部选择，取消全选则全部取消,文字对应变化 

案例 

分析： 

①：遍历下面的所有的checkbox,添加点击事件 

②：在事件内部,遍历所有的checkbox状态,只要有一个为false 就将全选状态设置为false , 把文字改 

为全选，并且直接return (退出循环) 

③：在循环结束将全选的状态直接设置为true



```javascript
<style>
        * {
          margin: 0;
          padding: 0;
        }
    
        table {
          border-collapse: collapse;
          border-spacing: 0;
          border: 1px solid #c0c0c0;
          width: 500px;
          margin: 100px auto;
          text-align: center;
        }
    
        th {
          background-color: #09c;
          font: bold 16px "微软雅黑";
          color: #fff;
          height: 24px;
        }
    
        td {
          border: 1px solid #d0d0d0;
          color: #404060;
          padding: 10px;
        }
    
        .allCheck {
          width: 80px;
        }
      </style>
</head>
<body>
    <table>
        <tr>
          <th class="allCheck">
            <input type="checkbox" name="" id="checkAll"> <span class="all">全选</span>
          </th>
          <th>商品</th>
          <th>商家</th>
          <th>价格</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="check" class="ck">
          </td>
          <td>小米手机</td>
          <td>小米</td>
          <td>￥1999</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="check" class="ck">
          </td>
          <td>小米净水器</td>
          <td>小米</td>
          <td>￥4999</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="check" class="ck">
          </td>
          <td>小米电视</td>
          <td>小米</td>
          <td>￥5999</td>
        </tr>
      </table>
      <script>
        let checkAll = document.getElementById('checkAll');
        let cks = document.querySelectorAll('.ck');
        let span = document.querySelector('span');
        // 全选复选框点击，可以得到当前按钮的 checked
        checkAll.addEventListener('click', function(){
            // 要把全选框的状态给下面三个小按钮 checked 的状态  true  false
            
            // 三个小按钮在伪数组里 所以要通过遍历的方式依次赋值
            for(let i = 0; i< cks.length; i++){
                cks[i].checked = checkAll.checked;
            }
            // 当按钮处于全选状态 则文字改为取消
            if(checkAll.checked === true){
                span.innerHTML = '取消';        
            }else {
                span.innerHTML = '全选';
            }
        })
        // 同时给多个元素绑定相同事件
        for(let i = 0; i < cks.length; i++){
          // 绑定事件 要注意 这里要给每一个小按钮绑定事件
            cks[i].addEventListener('click', function(){
              // 只要点击任何一个小按钮，都要遍历所有的小按钮  
                for(let j = 0; j<cks.length; j++){
                  // 看看是不是有人没有选中
                    if(cks[j].checked === false){
                      // 如果有false 则退出循环 结束函数
                    checkAll.checked = false;
                    span.innerHTML = '全选';
                    return;
                }
                }
                //  当我们的循环结束，如果代码走到这里，说明没有false，都被选中了，则全选按钮要选中
               checkAll.checked = true;
               span.innerHTML = '取消'
            })
           
        }
            
        
      </script>
```



### 12.购物车加减操作

需求：用户点击加号，则文本框+1，点击减号，则文本框-1，如果文本框为1，则禁用减号

分析： 

①：给添加按钮注册点击事件, 获取表单的value,然后自增 

②：解除减号的disabled状态 

③：给减号按钮添加点击事件,获取表单的value,然后自减 

④：自减结束需要判断,如果结果小于等于1 则添加上disabled状态

```javascript
 <style>
        div {
          width: 80px;
        }
    
        input[type=text] {
          width: 50px;
          height: 44px;
          outline: none;
          border: 1px solid #ccc;
          text-align: center;
          border-right: 0;
        }
    
        input[type=button] {
          height: 24px;
          width: 22px;
          cursor: pointer;
        }
    
        input {
          float: left;
          border: 1px solid #ccc;
    
        }
      </style>
</head>
<body>
    <div>
        <input type="text" id="total" value="1" readonly>
        <input type="button" value="+" id="add">
        <input type="button" value="-" id="reduce" disabled>
    </div>
   <script>
     let total = document.querySelector('#total');
     let add = document.querySelector('#add');
     let reduce = document.querySelector('#reduce');
    //点击加号
     add.addEventListener('click', function(){
        total.value++;
        reduce.disabled = false;
     })
     // 点击减号
reduce.addEventListener('click', function(){
    // 等于1了就不能再减了
    if(total.value === '1'){
        reduce.disabled = true;
    }else {
        total.value--;
        reduce.disabled = false;
    }
})
   </script>
```

### 13.关闭二维码案例

关闭二维码案例 

需求：多个二维码，点击谁，谁关闭 

分析： 

①：需要给多个按钮绑定点击事件 

②：关闭的是当前的父节点 

```javascript
<style>
        .erweima {
          width: 149px;
          height: 152px;
          border: 1px solid #000;
          background: url(./images/456.png) no-repeat;
          position: relative;
        }
    
        .close {
          position: absolute;
          right: -52px;
          top: -1px;
          width: 50px;
          height: 50px;
          background: url(./images/bgs.png) no-repeat -159px -102px;
          cursor: pointer;
          border: 1px solid #000;
    
        }
        </style>
</head>
<body>
    <div class="erweima">
        <span class="close"></span>
      </div>
      <div class="erweima">
        <span class="close"></span>
      </div>
      <div class="erweima">
        <span class="close"></span>
      </div>
      <div class="erweima">
        <span class="close"></span>
      </div>
      <div class="erweima">
        <span class="close"></span>
      </div>
      <script>
        let close = document.querySelectorAll('.close');
        // 得到的是伪数组 这个很重要

        //一定要记得是 要给每一个close都绑定事件
        for(let i = 0; i< close.length; i++){
            close[i].addEventListener('click', function(){
            // this.parentNode.style.display = 'none';
            this.parentNode.style.visibility = 'hidden';
        })
        }
       
      </script>
```

### 14.显示页面时间

需求：将当前时间以：YYYY-MM-DD HH:mm 形式显示在页面

分析： 

①：调用时间对象方法进行转换 

②：字符串拼接后，通过 innerText 给 标签

```javascript
   <title>显示页面时间</title>
    <style>
        div {
            width: 400px;
            height: 50px;
            background-color: pink;
            text-align: center;
            line-height: 50px;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        let div = document.querySelector('div');
        let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
       
        // console.log(time); 当前的时间
        // 先调用一次 可以省去一秒钟的空白期  因为定时器是过一秒钟才调用一次getTime
        getTime();
        setInterval(getTime, 1000);
        function getTime(){
            // 实例化对象new Date() 一定要写到定时器里面
            let time = new Date();
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let date = time.getDay();
            let hour = time.getHours();
            let minute = time.getMinutes();
            let second = time.getSeconds();
            let day = time.getDay();//注意她返回的是数字
            div.innerHTML = `今天是：${year}年${month}月${date}日${hour}:${minute}:${second} ${arr[day]}`;
        }

    </script>
</body>
```



### 15.下班倒计时案例

需求：计算到下班还有多少时间 

分析： 

①：用将来时间减去现在时间就是剩余的时间 

②：核心： 使用将来的时间戳减去现在的时间戳 

③：把剩余的时间转换为 天 时 分 秒

注意： 

1. 通过时间戳得到是毫秒，需要转换为秒在计算 

2. 转换公式： 

   d = parseInt(总秒数/ 60/60 /24); // 计算天数 

   h = parseInt(总秒数/ 60/60 %24) // 计算小时 

   m = parseInt(总秒数 /60 %60 ); // 计算分数 

   s = parseInt(总秒数%60); // 计算当前秒数

```javascript
<style>
        .countdown {
          width: 240px;
          height: 305px;
          text-align: center;
          line-height: 1;
          color: #fff;
          background-color: brown;
          /* background-size: 240px; */
          /* float: left; */
          overflow: hidden;
          margin: 500px auto;
          
        }
    
        .countdown .next {
          font-size: 16px;
          margin: 25px 0 14px;
        }
    
        .countdown .title {
          font-size: 33px;
         
        }
    
        .countdown .tips {
          margin-top: 50px;
          font-size: 23px;
        }
    
        .countdown small {
          font-size: 17px;
        }
    
        .countdown .clock {
          width: 100%;
          margin: 20x auto 20px;
          padding-left: 8px;
          overflow: hidden;
         
        }
    
        .countdown .clock span,
        .countdown .clock i {
          display: block;
          text-align: center;
          line-height: 34px;
          font-size: 22px;
          float: left;
        }
      #day {
        width: 60px;
      }
        .countdown .clock span {
          width: 34px;
          height: 34px;
          border-radius: 2px;
          background-color: #303430;
        }
    
        .countdown .clock i {
          width: 20px;
          font-style: normal;
        }
      </style>
</head>
<body>
    <div class="countdown">
        <p class="next">今天是2022年6月15日</p>
        <p class="title">瘦成猴子倒计时</p>
        <p class="clock">
          <span id="day">00</span>
          <i>:</i>
          <span id="hour">00</span>
          <i>:</i>
          <span id="minutes">25</span>
          <i>:</i>
          <span id="scond">20</span>
        </p>
        <p class="tips">
          18:30:00
        </p>
      </div>
      <script>
      
        let next = document.querySelector('.next');
        let tips = document.querySelector('.tips');
        let day = document.querySelector('#day')
        let hour = document.querySelector('#hour');
        let minutes = document.querySelector('#minutes');
        let scond = document.querySelector('#scond');
       
         // 1. 获得现在的时间  (实时动态的时间)
        getTime();
        setInterval(getTime,1000);
        function getTime(){
        let date = new Date();
        // 把现在的实时时间给tips
        let month = date.getMonth() + 1;
        month = month <10? '0' + month : month;
        let day = date.getDate();
        day = day <10? '0' + day : day;
        let h = date.getHours();
        h = h<10? '0'+ h : h;
        let m = date.getMinutes();
        m = m<10? '0'+ m : m;
        let s = date.getSeconds();
        s = s<10? '0'+ s : s;
        next.innerHTML = `今天是2022年${month}月${day}日`;
        tips.innerHTML = `${h}时:${m}分:${s}秒`;

         
        }
        getTime2();
        setInterval(getTime2,1000);
        function getTime2(){
        //    当前时间戳
        let date1 = +new Date();
        //     下班点的时间戳
        let date2 = +new Date('2022-11-15 17:30:00');
        // 时间差（毫秒）
        let date3 = (date2 - date1)/1000;
        // 转化为整数这个别忘了 
        
        let day1 = parseInt(date3/60/60/24) + '天';
        let h1 = parseInt(date3/60/60%24) ;
        h1 = h1<10? '0'+ h1 : h1;
        let m1= parseInt(date3/60%60);
        m1 = m1<10? '0'+ m1  : m1;
        let s1 = parseInt(date3%60); 
        s1 = s1<10? '0'+ s1 : s1;

        day.innerHTML = day1 + '天';
        hour.innerHTML = h1;
        minutes.innerHTML = m1;
        scond.innerHTML = s1;
        }
      
        

      </script>
</body>
```

### 16.时钟案例

```javascript
<title>练习 - 网页时钟</title>
  <style>
    * {
      box-sizing: border-box;
    }

    .clock {
      width: 600px;
      height: 600px;
      background: url(./images/clock.jpg) no-repeat;
      margin: 50px auto 0;
      position: relative;
    }

    .hh,
    .mm,
    .ss {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: url(./images/hour.png) no-repeat center;
    }

    .mm {
      background-image: url(./images/minute.png);
      transform: rotate(270deg);
    }

    .ss {
      background-image: url(./images/second.png);
      transform: rotate(30deg);
    }
  </style>
</head>

<body>
  <div class="clock">
    <div class="hh" id="h"></div>
    <div class="mm" id="m"></div>
    <div class="ss" id="s"></div>
  </div>
  <script>
    /*
      知识点：
        1. 创建日期对象 获取当前时间
        2. 多次定时器，重复获取时间，让指针动起来
    */

    // 查找页面的元素，定时器调用的函数外面，查找一次即可
    let hour = document.getElementById('h');
    let minute = document.getElementById('m');
    let second = document.getElementById('s');
    // 封装时钟效果，定时器定时调用的函数
    function clock() {
      /* 业务1：获取系统时间 */
      let date = new Date();
      // 获取时分秒
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      /* 业务2：时钟动画效果 */
      // 角度换算： 公式复制即可
      //   小时角度公式：小时 * 30 + 分钟 / 60 * 30 
      //   分钟角度公式：分钟* 6 + 秒 / 60 * 6
      //   秒角度公式： 当前秒数 * 6
      hour.style.transform = `rotate(${hh * 30 + mm / 60 * 30}deg)`;
      minute.style.transform = `rotate(${mm * 6 + ss / 60 * 6}deg)`;
      second.style.transform = `rotate(${ss * 6}deg)`;
    }
    // 主动调用一次，页面加载之后就要调用一次
    clock();
    // 通过定时器每隔一秒钟再调用一次。
    setInterval(clock, 1000);
  </script>
```



#  2. DOM 高级事件案例



 ###  1. 跟随鼠标移动的小天使

```javascript
 <title>跟随鼠标的天使</title>
    <style>
        /* 一定一定要记得加定位 */
        img{
            position: absolute;
            left: 0;
            top: 0;
        }
    </style>
</head>
<body>
    <img src="./images/tianshi.gif" alt="">
    <script>
        let img = document.querySelector('img');
        // 鼠标在页面中移动
        // e.pageX 得到当前的鼠标坐标 给图片
        document.addEventListener('mousemove', function(e){
            img.style.left = e.pageX - 50 + 'px';
            img.style.top = e.pageY - 50 + 'px';
        })
    </script>
```



### 2.渲染学生信息案例

需求：点击录入按钮，可以增加学生信息

本次案例主要目的是为了后面学习Vue做铺垫（数据驱动视图）

分析：
1. 不管添加还是删除，都是操作的数据（数组），然后从新渲染页面
需求①：添加数据
	点击录入按钮，把表单里面的值都放入数组里面
	学号自动生成，是数组最后一个数据的学号+1
需求②：渲染
	把数组的数据渲染到页面中，同时清空表单里面的值，下拉列表的值复原
	注意，渲染之前，先清空以前渲染的内容
	因为多次渲染，最好封装为函数
	
	需求③：删除数据
		为了提高性能，最好使用事件委托方式，找到点击的是链接  e.target.tagName
		根据当前的删除链接，找到这条数据
		需要得到当前数据的索引号，可以渲染a的时候，把当前索引号给 id属性，然后通	过  e.target.id  来获取
	                  然后使用 splice 来删除对应数据
		重新渲染

```css
// CSS
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color:#721c24;
}
h1 {
  text-align: center;
  color:#333;
  margin: 20px 0;
 
}
table {
  margin:0 auto;
  width: 800px;
  border-collapse: collapse;
  color:#004085;
}
th {
  padding: 10px;
  background: #cfe5ff;
  
  font-size: 20px;
  font-weight: 400;
}
td,th {
  border:1px solid #b8daff;
}
td {
  padding:10px;
  color:#666;
  text-align: center;
  font-size: 16px;
}
tbody tr {
  background: #fff;
}
tbody tr:hover {
  background: #e1ecf8;
}
.info {
  width: 900px;
  margin: 50px auto;
  text-align: center;
}
.info  input {
  width: 80px;
  height: 25px;
  outline: none;
  border-radius: 5px;
  border:1px solid #b8daff;
  padding-left: 5px;
}
.info button {
  width: 60px;
  height: 25px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.info .age {
  width: 50px;
}
```

```javascript
 <h1>新增学员</h1>
  <div class="info">
    姓名：<input type="text" class="uname">
    年龄：<input type="text" class="age">
    性别: <select name="gender" id="" class="gender">
      <option value="男">男</option>
      <option value="女">女</option>
    </select>
    薪资：<input type="text" class="salary">
    就业城市：<select name="city" id="" class="city">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="曹县">曹县</option>

    </select>
    <button class="add">录入</button>
  </div>

  <h1>就业榜</h1>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>薪资</th>
        <th>就业城市</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td>1001</td>
        <td>欧阳霸天</td>
        <td>19</td>
        <td>男</td>

        <td>15000</td>
        <td>上海</td>
        <td>
          <a href="javascript:">删除</a>
        </td>
      </tr> -->
    </tbody>
  </table>
  <script>
    // 1. 准备好数据后端的数据
    let arr = [
      { stuId: 1001, uname: '欧阳霸天', age: 19, gender: '男', salary: '20000', city: '上海' },
      { stuId: 1002, uname: '令狐霸天', age: 29, gender: '男', salary: '30000', city: '北京' },
      { stuId: 1003, uname: '诸葛霸天', age: 39, gender: '男', salary: '2000', city: '北京' },
    ]
    //     需求①：添加数据
    // 点击录入按钮，把表单里面的值都放入数组里面
    // 学号自动生成，是数组最后一个数据的学号+1
    // 3. 获取父元素 tobody
    let tbody = document.querySelector('tbody');
    let add = document.querySelector('.add');
    // 获取各个表单的元素
    let uname = document.querySelector('.uname');
    let age = document.querySelector('.age');
    let gender = document.querySelector('.gender');
    let salary = document.querySelector('.salary')
    let city = document.querySelector('.city')
    // 2. 渲染函数  把数组里面的数据渲染到页面中
    function render(){
      // 干掉以前的函数   让tbody 里面原来的tr 都没有
      tbody.innerHTML = '';
      // 再渲染新的数据
      // 根据数据的条目来增tr;
      for(let i = 0; i<arr.length ; i++){
        // 1.创建tr
        let tr = document.createElement('tr');
        // 2. tr里面放内容
        tr.innerHTML = ` 
        <td>${arr[i].stuId}</td>
        <td>${arr[i].uname}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>

        <td>${arr[i].salary}</td>
        <td>${arr[i].city}</td>
        <td>
          <a href="javascript:" id='${i}'>删除</a>
        </td>
        `
        // 3.把tr追加给tbody 父元素.appendChild(子元素)
        tbody.appendChild(tr);
      }
    }
    
  //   页面加载就调用这个函数
  render();//页面一打开就会有这个数据
  // 4. 点击录入按钮 把数据都给数组
  add.addEventListener('click',function(){
    arr.push({
      stuId: arr[arr.length-1].stuId + 1, //学号是已知数据的最后一个数据+1
      uname: uname.value,
      age: age.value,
      gender:gender.value,
      salary:salary.value,
      city:city.value
    })
     // 5. 重新渲染数据
  render();
  // 复原所有的表单数据
  uname.value=age.value=salary.value = '';
  gender.value = '男';
  city.value = '北京';
  })
 

  // 6.删除数据 (删除的也是数组里面的数据，但是用事件委托)
  tbody.addEventListener('click', function(e){
    // 只有当点击了a链接才会执行删除操作
    // console.dir(e.target.tagName) 测试之后发现返回的是A 所以找到了判断条件
    if (e.target.tagName === 'A'){
      //删除数组里面的数据 arr.splice(从哪开始删,1)
      //要得到a的id需要 
      // console.log(e.target.id)
      arr.splice(e.target.id, 1);
      // 重新渲染
      render();
    }
  })
  </script>
```

### 3.购物车案例

需求：点击录入按钮，可以增加学生信息

```css
//css
<style>
    * {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #666;
    }

    body {
      background: #fff;
      color: #666;
      font-size: 14px;
    }

    input {
      outline: none;
    }

    .clearfix::before,
    .clearfix::after {
      content: '';
      display: block;
      clear: both;
    }

    .clearfix {
      *zoom: 1;
    }
  </style>
  <!-- 引入购物车样式 -->
  <style>
    table {
      width: 800px;
      margin: 0 auto;
      border-collapse: collapse;
    }

    th {
      font: normal 14px/50px '宋体';
      color: #666;
    }

    th,
    td {
      border: none;
      text-align: center;
      border-bottom: 1px dashed #ccc;
    }

    input[type='checkbox'] {
      width: 13px;
      height: 13px;
    }

    tbody p {
      position: relative;
      bottom: 10px;
    }

    tbody .add,
    tbody .reduce {
      float: left;
      width: 22px;
      height: 22px;
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      outline: none;
      cursor: pointer;
    }

    tbody input[type='text'] {
      width: 50px;
      float: left;
      height: 18px;
      text-align: center;
    }

    tbody .count-c {
      width: 98px;
      margin: 0 auto;
    }

    button[disabled] {
      color: #ddd;
      cursor: not-allowed;
    }

    tbody tr:hover {
      background: #eee;
    }

    tbody tr.active {
      background: rgba(241, 209, 149, 0.945);
    }

    .controls {
      width: 790px;
      margin: 10px auto;
      border: 1px solid #ccc;
      line-height: 50px;
      padding-left: 10px;
      position: relative;
    }

    .controls .del-all,
    .controls .clear {
      float: left;
      margin-right: 50px;
    }

    .controls p {
      float: right;
      margin-right: 100px;
    }

    .controls span {
      color: red;
    }

    .controls .pay {
      position: absolute;
      right: 0;
      width: 80px;
      height: 54px;
      background: red;
      font: bold 20px/54px '宋体';
      color: #fff;
      text-align: center;
      bottom: -1px;
    }

    .controls .total-price {
      font-weight: bold;
    }
  </style>
```



```javascript
 <div class="car">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" id="all" />全选</th>
          <th>商品</th>
          <th>单价</th>
          <th>商品数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="carBody">
        <tr>
          <td>
            <input class="s_ck" type="checkbox" readonly />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">5￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">5￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">10￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">20￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">20￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">40￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">35￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">70￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="controls clearfix">
      <a href="javascript:" class="del-all">删除所选商品</a>
      <a href="javascript:" class="clear">清理购物车</a>
      <a href="javascript:" class="pay">去结算</a>
      <p>
        已经选中<span id="totalCount">0</span>件商品;总价：<span id="totalPrice" class="total-price">0￥</span>
      </p>
    </div>
  </div>
  <script>
  //   + 和 — 是一一对应的 用for循环来遍历绑定事件
  let adds = document.querySelectorAll('.add');
  let reduces = document.querySelectorAll('.reduce');
  let dels = document.querySelectorAll('.del');
  // 输入框input
  let inputs = document.querySelectorAll('.count-c input');
  // 单价 price
  let prices = document.querySelectorAll('.price');
  // 小计 total
  let totals = document.querySelectorAll('.total');
  // 总价元素获取
  let totalResult = document.querySelector('.total-price');
  // 总的数量
  let totalCount = document.querySelector('#totalCount');
  // tbody
  let carBody = document.querySelector('#carBody');

  // 注册事件
  for(let i = 0 ; i <adds.length; i++ ){
    totals[i].innerHTML = prices[i].innerHTML
    // 1.加号的操作
    adds[i].addEventListener('click', function(){
      inputs[i].value++;
      // 减号要启用
      reduces[i].disabled = false;
      // 小计模块计算
      totals[i].innerHTML = parseInt(prices[i].innerHTML) * inputs[i].value + '￥';

      // 调用计算总额函数
      result();
    })

    // 2.减号的操作
    reduces[i].addEventListener('click', function(){
      inputs[i].value--;
      if(inputs[i].value<=1){
        this.disabled = true; //当数量小于等于1是 禁用减号
      }
      // 小计
      totals[i].innerHTML = parseInt(prices[i].innerHTML)* inputs[i].value + '￥';
      result();
      // 计算现在的总额
    })

    // 3.删除操作
    dels[i].addEventListener('click',function(){
      // 父元素.removeChild(字元素) 要删除的是tr 所以就是a的td的tr
      carBody.removeChild(this.parentNode.parentNode);
      // 调用总计模块
      result();
    })
  }
// 把所有小计的total加起来  (相当于数组求和)
  function result(){
    let totals = document.querySelectorAll('.total')
    // 输入框
    let inputs = document.querySelectorAll('.count-c input');
    let sum = 0;
    let num = 0;
    for(let i = 0; i < totals.length; i++){
      sum = sum + parseInt(totals[i].innerHTML);
      num =  num + parseInt(inputs[i].value);
    }
    totalResult.innerHTML = sum + '￥'
    totalCount.innerHTML = num;
  }
  
  result();
  </script>
```



### 4.返回页面顶部案例

需求：当页面滚动500像素，就显示返回顶部按钮，否则隐藏， 同时点击按钮，则返回顶部 

分析： 

①：用到页面滚动事件 

②：检测页面滚动大于等于100像素，则显示按钮 

③：点击按钮，则让页面的scrollTop 重置为 0

```javascript
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .content {
            width: 1000px;
            height: 3000px;
            background-color: pink;
            margin: 0 auto;
        }

        .backtop {
            display: none;
            width: 50px;
            left: 50%;
            margin: 0 0 0 505px;
            position: fixed;
            bottom: 60px;
            z-index: 100;
        }

        .backtop a {
            height: 50px;
            width: 50px;
            background: url(./images/bg2.png) 0 -600px no-repeat;
            opacity: 0.35;
            overflow: hidden;
            display: block;
            text-indent: -999em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="content"></div>
    <div class="backtop">
        <img src="./images/close2.png" alt="">
        <a href="javascript:;"></a>
    </div>
    <script>
        // 1. 获取元素
        let content = document.querySelector('.content');
        let backtop = document.querySelector('.backtop');
        let a = document.querySelector('a');
        // 2. 页面滚动事件
        window.addEventListener('scroll', function(){
        //    2-1, 页面滚动的距离
        let num = document.documentElement.scrollTop;
        if(num>50){
            backtop.style.display = 'block';
        }else {
            backtop.style.display = 'none';
        }
        })

        // 2. 点击链接返回顶部
        // 或者 backtop.children[1] = a
        a.addEventListener('click', function(){
            document.documentElement.scrollTop = 0;
        })
    </script>
```

### 5. 仿京东固定导航栏案例

需求：当页面滚动到秒杀模块，导航栏自动滑入，否则滑出 

分析： 

①：用到页面滚动事件 

②：检测页面滚动大于等于 秒杀模块的位置 则滑入，否则滑出

```javascript
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .content {
            overflow: hidden;
            width: 1000px;
            height: 3000px;
            background-color: pink;
            margin: 0 auto;
        }

        .backtop {
            display: none;
            width: 50px;
            left: 50%;
            margin: 0 0 0 505px;
            position: fixed;
            bottom: 60px;
            z-index: 100;
        }

        .backtop a {
            height: 50px;
            width: 50px;
            background: url(./images/bg2.png) 0 -600px no-repeat;
            opacity: 0.35;
            overflow: hidden;
            display: block;
            text-indent: -999em;
            cursor: pointer;
        }

        .header {
            position: fixed;
            top: -80px;
            left: 0;
            width: 100%;
            height: 80px;
            background-color: purple;
            text-align: center;
            color: #fff;
            line-height: 80px;
            font-size: 30px;
            transition: all .3s;
        }

        .sk {
            width: 300px;
            height: 300px;
            background-color: skyblue;
            margin-top: 600px;
        }
    </style>
</head>
<body>
    <div class="header">我是顶部导航栏</div>
    <div class="content">
        <div class="sk">秒杀模块</div>
    </div>
    <div class="backtop">
        <img src="./images/close2.png" alt="">
        <a href="javascript:;"></a>
    </div>
    <script>
        let sk = document.querySelector('.sk');
        let header = document.querySelector('.header');
        // 添加页面滚动事件
        window.addEventListener('scroll', function(){
           if(document.documentElement.scrollTop >= sk.offsetTop){
            header.style.top = 0;
           } else {
            header.style.top ='-80px';
           }
        })
    </script>
```

### 6. 电梯导航案例

需求：点击可以页面调到指定效果 

分析： 

①：点击当前 小导航，当前添加active，其余移除active 

②：得到对应 内容 的 offsetTop值 

③：让页面的 scrollTop 走到 对应 内容 的 offsetTop

```javascript
<style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            height: 3000px;
        }

        .aside {
            position: fixed;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .item {
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 10px;
            cursor: pointer;
        }

        .active {
            background-color: red;
            color: #fff;
        }

        .content {
            width: 660px;
            margin: 400px auto;
        }

        .neirong {
            height: 300px;
            margin-bottom: 20px;
            color: #fff;
        }

        .content1 {
            background-color: red;
        }

        .content2 {
            background-color: blue;
        }

        .content3 {
            background-color: orange;
        }

        .content4 {
            background-color: yellowgreen;
        }
    </style>
</head>
<body>
    <div class="aside">
        <div class="item active">男装/女装</div>
        <div class="item">儿童服装/游乐园</div>
        <div class="item">电子产品</div>
        <div class="item">电影/美食</div>
    </div>

    <div class="content">
        <div class="neirong content1">男装/女装</div>
        <div class="neirong content2">儿童服装/游乐园</div>
        <div class="neirong content3">电子产品</div>
        <div class="neirong content4">电影/美食</div>
    </div>
    <script>
        // 
        let items = document.querySelectorAll('.item');
        let neirong = document.querySelectorAll('.neirong');
        for(let i = 0; i<items.length; i++){
            items[i].addEventListener('click', function(){
                // 找到上一个active的类 去除它active类
                document.querySelector('.aside .active').classList.remove('active');
                // 点击谁，给谁添加active类
                this.classList.add('active');
                //右侧内容跟随走动   得到对应 内容 的 offsetTop值 (不需要加单位)
                document.documentElement.scrollTop = neirong[i].offsetTop;
            })
        }
    </script>
```

### 7. 轮播图案例

1. 分析： 

需求①：小图标鼠标经过事件 

鼠标经过小图片，当前高亮，其余兄弟变淡 添加类 

需求② ：大图片跟随变化 

对应的大图片跟着显示，如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入 

淡出的效果，还是添加类 

需求③：右侧按钮播放效果 

点击右侧按钮，可以自动播放下一张图片 

需要一个变化量 index 不断自增 

然后播放下一张图片 

如果到了最后一张，必须要还原为第1张图片 

教你一招： 索引号 = 索引号 % 数组长度 （放到播放前面） 

2. 分析： 

   需求④：解决一个BUG 

   点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序 

   解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号 

   需求⑤：左侧按钮播放效果 

   点击左侧按钮，可以自动播放上一张图片 

   需要一个变化量 index 不断自减 

   然后播放上一张图片 

   如果到了第一张，必须要从最后一张播放 

   教你一招： 索引号 = (数组长度 + 索引号) % 数组长度 

   需求⑥： 

   因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common

   3. 分析： 

      需求⑦：开启定时器 

      其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， right.click() 

      需求⑧： 

      鼠标经过停止定时器 （清除定时器） 

      鼠标离开开启定时器 （开启定时器）

```javascript
<style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style: none;
    }

    .main {
      width: 700px;
      margin: auto;
      background: #000;
    }

    .slides {
      height: 320px;
      position: relative;
    }

    .slides ul li {
      /* display: none; */
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      /* 这里实现淡入淡出的关键 */
      transition: all .3s;
    }


    .slides li.active {
      /* display: block; */
      opacity: 1;
    }

    .slides .extra {
      width: 700px;
      height: 53px;
      line-height: 53px;
      position: absolute;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
    }

    .slides .extra h3 {
      width: 82%;
      margin: 0;
      margin-right: 20px;
      padding-left: 20px;
      color: #98E404;
      font-size: 28px;
      float: left;
      font-weight: 500;
      font-family: "Microsoft Yahei", Tahoma, Geneva;
    }

    .slides .extra a {
      width: 30px;
      height: 29px;
      display: block;
      float: left;
      margin-top: 12px;
      margin-right: 3px;
      background-image: url(./assets/icon_focus_switch.png);
    }

    .slides .extra .prev {
      background-position: 0 0;
    }

    .slides .extra .prev:hover {
      background-position: -30px 0;
    }

    .slides .extra .next {
      background-position: -60px 0;
    }

    .slides .extra .next:hover {
      background-position: -90px 0;
    }

    .indicator {
      padding: 10px 0;
    }

    .indicator ul {
      list-style-type: none;
      margin: 0 0 0 4px;
      padding: 0;
      overflow: hidden;
    }

    .indicator ul li {
      position: relative;
      float: left;
      width: 60px;
      margin: 0 4px 0 5px;
      text-align: center;

      cursor: pointer;
    }

    .indicator li img {
      display: block;
      border: 0;
      text-align: center;
      width: 60px;
    }

    .indicator li .mask {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .indicator li .border {
      display: none;
      width: 54px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 20;
      border: 3px solid #98E404;
    }

    /* li里面的mask 和 border 刚开始都是显示的 */
    /* 我们写一个样式css */
    .indicator .active .mask {
      display: none;
    }

    .indicator .active .border {
      display: block;
    }
  </style>
</head>

<body>
  <div class="main">
    <div class="slides">
      <ul>
        <li class="active"><a href="#"><img src="./assets/b_01.jpg" alt="第1张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_02.jpg" alt="第2张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_03.jpg" alt="第3张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_04.jpg" alt="第4张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_05.jpg" alt="第5张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_06.jpg" alt="第6张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_07.jpg" alt="第7张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_08.jpg" alt="第8张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_09.jpg" alt="第9张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_10.jpg" alt="第9张图的描述信息"></a></li>
      </ul>

      <div class="extra">
        <h3>第1张图的描述信息</h3>
        <a class="prev" href="javascript:;"></a>
        <a class="next" href="javascript:;"></a>
      </div>
    </div>
    <div class="indicator">
      <ul>
        <li class="active">
          <img src="assets/s_01.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_02.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_03.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_04.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_05.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_06.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_07.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_08.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_09.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_10.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
      </ul>
    </div>
  </div>
  <script>
    // 轮播图开始啦
    // 需求①：小图标鼠标经过事件
    //   鼠标经过小图片，当前高亮，其余兄弟变淡  添加类
    let lis = document.querySelectorAll('.indicator li')
    let piclis = document.querySelectorAll('.slides ul li')
    let text = document.querySelector('.extra h3')
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    let main = document.querySelector('.main')

    // 给多个小li绑定事件
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('mouseenter', function () {
        // 选出唯一的那个active ，删除类
        document.querySelector('.indicator .active').classList.remove('active')
        // 鼠标经过谁，谁加上active 这个类
        this.classList.add('active')

        // 需求② ：大图片跟随变化  一定要放到鼠标经过事件里面
        // 对应的大图片跟着显示，如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入      淡出的效果，还是添加类
        // 选出唯一的那个active ，删除类
        document.querySelector('.slides ul .active').classList.remove('active')
        // 对应序号的那个 li，谁加上active 这个类
        piclis[i].classList.add('active')
        text.innerHTML = `第${i + 1}张图的描述信息`

        // 需求④：解决一个BUG
        // 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
        // 解决方案：  让变化量 index 重新赋值为 当前鼠标经过的索引号
        // 鼠标经过了那个小li 他的索引号就是 i 
        // 右侧按钮是通过 index 来了控制播放的
        index = i
      })
    }


    // 需求③：右侧按钮播放效果
    //   点击右侧按钮，可以自动播放下一张图片
    //   需要一个变化量  index 不断自增
    //   然后播放下一张图片
    //   如果到了最后一张，必须要还原为第1张图片
    //   教你一招： 索引号 = 索引号 % 数组长度 （放到播放前面）
    let index = 0  // 全局变量  信号量 控制器 为了给 右侧按钮和左侧按钮同时使用
    next.addEventListener('click', function () {
      index++
      // 选出 index 小图片 做操作
      // console.log(index)
      // if (index === lis.length) {
      //   index = 0
      // }
      index = index % lis.length
      common()

    })

    // 需求⑤：左侧按钮播放效果
    //   点击左侧按钮，可以自动播放上一张图片
    //   需要一个变化量  index 不断自减
    //   然后播放上一张图片
    //   如果到了第一张，必须要从最后一张播放
    //   教你一招： 索引号 = (数组长度 + 索引号) % 数组长度
    prev.addEventListener('click', function () {
      index--
      // 选出 index 小图片 做操作
      // console.log(index)
      if (index < 0) {
        index = lis.length - 1
      }
      // index = (lis.length + index) % lis.length
      common()

    })

    // 需求⑥：
    //   因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common
    function common() {
      document.querySelector('.indicator .active').classList.remove('active')
      lis[index].classList.add('active')
      // 选出 index 大图片 做操作
      document.querySelector('.slides ul .active').classList.remove('active')
      piclis[index].classList.add('active')
      text.innerHTML = `第${index + 1}张图的描述信息`
    }



    // 需求⑦：开启定时器
    //   其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， next.click()
    let timer = setInterval(function () {
      // 自动调用右侧按钮的点击事件
      next.click()
    }, 1000)
    // 需求⑧：
    //   鼠标经过停止定时器 （清除定时器）

    main.addEventListener('mouseenter', function () {
      clearInterval(timer)
    })
    //   鼠标离开开启定时器 （开启定时器）
    main.addEventListener('mouseleave', function () {
      timer = setInterval(function () {
        // 自动调用右侧按钮的点击事件
        next.click()
      }, 1000)
    })
  </script>
```

### 8. 手风琴案例

```javascript
  <style>
        ul {
          list-style: none;
        }
    
        * {
          margin: 0;
          padding: 0;
        }
    
        div {
          width: 1200px;
          height: 400px;
          margin: 50px auto;
          border: 1px solid red;
          overflow: hidden;
        }
    
        div li {
          width: 240px;
          height: 400px;
          float: left;
          transition: all 500ms;
        }
    
        div ul {
          width: 1200px;
        }
      </style>
</head>
<body>
    <div id="box">
        <ul>
          <li>
            <a href="#">
              <img src="./images/1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/2.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/3.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/4.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/5.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
      <script>
        let box = document.querySelectorAll('li');
        for(let i = 0; i<box.length; i++){
            box[i].addEventListener('mouseenter', function(){
                for(j = 0; j<box.length; j++){
                    // 鼠标进入li，让当前li变成800，其他的li变成100 
                  
                    box[j].style.width = '100px';
                }
                this.style.width = '800px';
            })
            box[i].addEventListener('mouseleave', function(){
                // 让所有的li变成240
                for(j = 0; j<box.length; j++){
                    
                    // 触发事件执行 为了让所有的li宽度变为240
                    box[j].style.width = '240px';
                }
            })
        }
      </script>
```

# BOM 案例

### 1. 本地存储学习信息案例

需求：改为本次存储版本的学习信息表

需求：改为本次存储版本的学习信息表 

分析： 

需求①：读取本地存储数据（封装函数） 

如果本地存储有数据，则返回 JSON.parse() 之后的对象 

如果本地存储没有数据，则默认写入三条数据，注意存储的利用JSON.stringify() 存 储JSON 格式的数据 

需求②：渲染模块 

先读取本地存储数据，然后渲染 

需求③：添加模块 

注意，先取的最新的本地存储数据，然后追加 

新增了数据，要把新数据存储到本地存储别，忘记转换

需求④：删除模块 

注意，先取的最新的本地存储数据，然后追加 

新增了数据，要把新数据存储到本地存储别忘记转换

# JS高级

1. 根据数据生成柱形图

   需求： 用户输入四个季度的数据，可以生成柱形图 

   分析： 

   ①：需要输入4次，所以可以把4个数据放到一个数组里面 

    利用循环，弹出4次框，同时存到数组里面 

   ②：遍历改数组，根据数据生成4个柱形图，渲染打印到页面中 

    柱形图就是div盒子，设置宽度固定，高度是用户输入的数据 

    div里面包含显示的数字和 第n季度

   ```javascript
    <style>
           * {
               margin: 0;
               padding: 0;
           }
   
           .box {
               display: flex;
               width: 700px;
               height: 300px;
               border-left: 1px solid pink;
               border-bottom: 1px solid pink;
               margin: 50px auto;
               justify-content: space-around;
               align-items: flex-end;
               text-align: center;
           }
   
           .box>div {
               display: flex;
               width: 50px;
               background-color: pink;
               flex-direction: column;
               justify-content: space-between;
           }
   
           .box div span {
   
               margin-top: -20px;
           }
   
           .box div h4 {
               margin-bottom: -35px;
               width: 70px;
               margin-left: -10px;
               font-size: 12px;
           }
       </style>
   </head>
   <body>
       <!-- <div style="height: 123px;">
           <span>123</span>
           <h4>第1季度</h4>
       </div>
       <div style="height: 156px;">
           <span>156</span>
           <h4>第2季度</h4>
       </div>
       <div style="height: 120px;">
           <span>120</span>
           <h4>第3季度</h4>
       </div>
       <div style="height: 210px;">
           <span>210</span>
           <h4>第4季度</h4>
       </div>
       <div style="height: 123px;">
           <span>123</span>
           <h4>第5季度</h4>
       </div>
       <div style="height: 156px;">
           <span>156</span>
           <h4>第6季度</h4>
       </div>
       <div style="height: 120px;">
           <span>120</span>
           <h4>第7季度</h4>
       </div>
       <div style="height: 210px;">
           <span>210</span>
           <h4>第8季度</h4>
       </div>
       <div style="height: 123px;">
           <span>123</span>
           <h4>第9季度</h4>
       </div>
       <div style="height: 156px;">
           <span>156</span>
           <h4>第10季度</h4>
       </div>
       <div style="height: 120px;">
           <span>120</span>
           <h4>第11季度</h4>
       </div>
       <div style="height: 210px;">
           <span>210</span>
           <h4>第12季度</h4>
       </div> -->
       <script>
           // 1. 利用循环弹出四次输入框 会得到4个数据 放到数组里面
           let arr = [];
           for(let i = 1; i<= 12; i++){
               arr.push(prompt(`请输入第${i}个月的体重`));
           }
           // 渲染的数据是给柱子的
           document.write(`<div class='box'>`)
               //循环四个柱子
               for(let i = 0; i<arr.length; i++){
                   document.write(`
                   <div style="height: ${arr[i]}px;">
           <span>${arr[i]}</span>
           <h4>第${i+1}季度</h4>
       </div>
       `)
        }
        document.write(`</div>`);
       </script>
   ```

   

