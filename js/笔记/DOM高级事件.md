# DOM高级事件

### 1. 事件对象

#### （1）获取事件对象

##### ① 什么是事件对象

事件对象也是一个对象，这个里面有事件触发时的相关信息

比如：点击鼠标的时候，事件对象就保存了鼠标点在哪个位置等相关信息。

##### ② 如何获取

在事件绑定的回调函数的第一个参数就是事件对象

一般命名为event ev e等

```javascript
div.addEventListener('click', function(e){

});
```





#### （2）事件对象常用属性

1. type 获取当前事件类型

2. clientX 和clientY 获取光标相对于浏览器可见窗口左上角的位置

3. offsetX 和 offsetY 获取光标相对于当前DOM元素左上角的位置

4. key 用户按下的键盘键的值 现在不提倡使用keyCode(),

   e.KeyCode已经弃用 现在是e.code 不区分大小写  e.key区分大小写 

### 2.事件流

#### (1) 事件流

**事件流**指的是事件完整执行过程中的流动路径

![微信截图_20220617102609](C:\Users\ASUS\Desktop\微信截图_20220617102609.png)

假设页面有个div 当触发事件时 会经历两个阶段 ，分别是捕获阶段和冒泡阶段（捕获阶段就是从父到子，冒泡阶段就是从子到父）

#### （2）事件冒泡

1. 概念：当一个元素的事件被触发时，同样的事件将会在该元素的所有的祖先元素中依次被触发。这一过程称之为事件冒泡。

2. 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件。

3. 冒泡是默认存在的。
4. 冒泡的必要性：如果没有冒泡.给大盒子注册点击事件, 点击的是里面的小盒子,会导致大盒子的点击无法执行

#### （3）事件捕获

1. 概念：从DOM根元素开始去执行对应的事件（从外到里）

2. 事件捕获需要写对应代码才能看到效果

   ```
   DOM.addEventListener(事件类型，事件处理函数，是否使用捕获机制)
   ```

   

说明：

addEventListener第三个参数传入true代表是捕获阶段触发（很少使用）

若传入false代表冒泡阶段触发，默认就是false

若使用L0事件监听，则只有冒泡阶段，没有捕获

#### （4）阻止事件流

因为默认就有冒泡模式存在的，所以容易导致事件影响到父级元素

若想把事件就限制在当前元素内，就需要阻止事件流动

阻止事件流动需要拿到事件对象

语法：

```javascript
事件对象.stopPropagation()
// 此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效
```



#### （5) mouseover和mouseenter

mouseover和mouseout 会有冒泡效果

mouseenter和mouseleave没有冒泡效果（推荐）

#### （6）阻止默认行为

阻止默认行为，比如链接不跳转，表单域不提交

```javascript
//e.preventDefualt();
 <a href="http://www.baidu.com">跳转到百度</a>
    <script>
        let a = document.querySelector('a')
        a.addEventListener('click', function (e) {
            // 阻止默认行为 方法
            e.preventDefault()
        })
    </script>
```



### 3.两种注册事件的区别

1. 传统on注册（L0)

   同一个对象，后面注册的事件会覆盖前面注册（同一个事件）

   直接使用null覆盖偶就可以事件事件的解绑

   都是冒泡阶段执行的

   ```javascript
    let btn = document.querySelector('button')
           // 1.l0 on
           // 多次相同的事件，只执行最后一次
           // btn.onclick = function () {
           //     alert('第一次')
           // }
           // btn.onclick = function () {
           //     alert('第二次')
           // }
           // 解绑事件
           // btn.onclick = null
   ```

   

2. 事件监听注册（L2)

   ```JavaScript
   addEventListener(事件类型，事件处理函数，是否使用捕获)
   ```

   后面注册的事件不会覆盖前面注册的事件（同一个事件）

   可以通过第三个参数去确定是在冒泡或者捕获阶段执行

   必须使用removeEventListener（事件类型，事件处理函数，获取捕获或者冒泡阶段）

   匿名函数无法被解绑

   ```javascript
   // 2. addEventListener
           btn.addEventListener('click', add)
           function add() {
               alert('第一次')
           }
           // btn.addEventListener('click', function () {
           //     alert('第二次')
           // })
           btn.removeEventListener('click', add)
   ```

   

### 3.事件委托

事件委托是利用事件流的特征解决一些开发需求的知识技巧

- 优点：给父级元素加事件（可以提高性能）
- 事件委托其实是利用事件冒泡的特点， 给父元素添加事件，子元素可以触发
- 事件对象.target 可以获得真正触发事件的元素

```javascript
 <ul>
        <li>我是第1个小li</li>
        <li>我是第2个小li</li>
        <li>我是第3个小li</li>
        <li>我是第4个小li</li>
        <li>我是第5个小li</li>
    </ul>
    <script>
        // 不要每个小li注册事件了  而是把事件委托给他的爸爸 
        // 事件委托是给父级添加事件 而不是孩子添加事件
        let ul = document.querySelector('ul')
        ul.addEventListener('click', function (e) {
            // alert('我点击了')
            // 得到当前的元素
            // console.log(e.target)
            e.target.style.color = 'red'
        })
    </script>
```

# 滚动事件和加载事件

1. 滚动事件：当页面进行滚动时触发的事件

   因为：很多网页需要检测用户把页眉滚动到某个区域后做一些特殊处理，比如固定导航栏，比如返回顶部等

   事件：scroll

   监听整个滚动事件：

   ```JavaScript
   window.addEventListener('scroll', function(){
   //执行的操作
   })
   给window或者document添加滚动事件
	监听某个元素的内部滚动，直接给元素加滚动事件即可   
   ```

   

2. 加载事件（加载外部资源，如图片，外联CSS 和JS等），加载完毕时触发的事件

   因为: 有些时候需要等页面资源全部处理完毕后做一些事情

   老代码喜欢把script写在head里，这时候直接找dom元素找不到

   事件：load

   监听页面所有资源加载完毕：

   给window添加load事件

   ```
   window.addEventListener('load', function(){
   //执行的操作
   })
   ```

   注意：不光可以监听这个页面加载完毕，也可以针对某个元素绑定load事件

当初始的HTML文档被完全加载和解析之后 DOMContentLoaded事件被触发，而无需等待样式，图像等完全加载

事件名：DOMContentLoaded

监听页面DOM加载完毕

给document添加

```
document.addEventListener('DOMContentLoaded', function(){

})
```



# 元素大小和位置

### 1.scroll家族

使用场景：

获取宽高：

- 获取元素的内容总宽高（不含滚动条） 返回值不带单位
- scrollWidth和scrollHeight

获取位置：

- 获取元素内容往左 、上滚出去看不到的距离
- scrollLeft 和 scrollTop
- 这两个属性可以修改



![搜狗截图20220618114005](C:\Users\ASUS\Desktop\搜狗截图20220618114005.png)

检测页面滚动的头部距离（被卷去的头部）用那个属性？ 

document.documentElement.scrollTop

```javascript
 <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            width: 150px;
            height: 150px;
            background-color: pink;
            overflow: auto;
            padding: 10px;
            border: 10px solid red;
            margin: 100px;
        }
    </style>
</head>
<body>
    <div>
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
    </div>
    <script>
        let div = document.querySelector('div');
        // console.log(div.scrollWidth);
        // div.addEventListener('scroll', function(){
        //     console.log(this.scrollHeight);
        // })
        console.log(div.offsetLeft); //100 返回的是盒子距离左边的距离
        console.log(div.offsetTop);//100 返回的是盒子距离顶部的距离
        console.log(div.offsetWidth);//190 返回的是盒子的宽度+padding值+border值
        console.log(div.offsetHeight);//190 返回的是盒子的高度+padding值+border值
        console.log(document.documentElement.scrollTop);
    </script>
</body>
```



### 2. offset家族

使用场景： 

前面案例滚动多少距离，都是我们自己算的，最好是页面 

滚动到某个元素，就可以做某些事。 

简单说，就是通过js的方式，得到元素在页面中的位置 

这样我们可以做，页面滚动到这个位置，就可以返回 

顶部的小盒子显示

**获取宽高**： 

 获取元素的自身宽高、包含元素自身设置的宽高、padding、border 

offsetWidth和offsetHeight

**获取位置**： 

获取元素距离自己**定位父级**元素的左、上距离 

**offsetLeft和offsetTop** 注意是只读属性 

![搜狗截图20220620094814](C:\Users\ASUS\Desktop\搜狗截图20220620094814.png)

### 3. client家族

**获取宽高**： 

 获取元素的可见部分宽高（不包含边框，滚动条等） 

 clientWidth和clientHeight

 

**获取位置**： 

 获取左边框和上边框宽度 

clientLeft和clientTop 注意是只读属性

![搜狗截图20220620101516](C:\Users\ASUS\Desktop\搜狗截图20220620101516.png)

- 会在窗口尺寸改变的时候触发事件：resize

- 检测屏幕宽度

- ```javascript
  window.addEventListener('resize', function(){
  let w = document.documentElement.clientWidth;
  console.log(w);
  })
  ```

