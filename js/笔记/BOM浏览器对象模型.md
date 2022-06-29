### BOM浏览器对象模型

#### 1. BOM概述

1. bom(browser object model)浏览器对象模型，他提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。
2. bom有一系列相关的对象构成，并且每个对象都提供了很多方法与属性。
3. bom 缺乏标准，javascript的语法标准化组织是ECMA，dom的标准是W3C, BOM最初是Netscape浏览器标准的一部分



#### 2.BOM和DOM的区别





#### 3. window对象

window对象是是浏览器的顶级对象，它具有双重角色

- 他是JS访问浏览器窗口的一个接口
- 他是一个全局对象。定义在全局作用域中的变量，函数都会变成window对象的属性和方法

####  4. window.onload(窗口/页面加载事件)

```javascript
window.onload = function(){} //传统注册事件
或
window.addEventListener('load', function(){});
```

当文档内容加载完成了会触发该事件（包括图像、脚本文本、CSS文件等），就调用的处理函数

- 注意：
  1. 有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。
  2. window.onload**传统注册事件方式只能写一次**，如果有多个，会以最后一个为准
  3. 如果使用addEventListener则没有限制。
  4. document.addEventListener('DOMContentLoaded', function(){})事件触发，不包括样式表，图片 flash等（ie9以上浏览器才支持）。 好处：如果页面图片很多，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然影响用户体验，此时用DOMContentLoaded'更好。
  
  ####  5. 屏幕大小
  
  ```javascript
   <script>
          // 只要窗口大小发生了像素变化，就会触发这个事件
          // 经常利用这个事件完成响应式布局 window.innerWidth 当前屏幕的宽度
          
         window.addEventListener('load', function(){
          var div = document.querySelector('div');
          window.addEventListener('resize', function(){
              if(window.innerWidth<=800){
                  div.style.display = 'none';
              }else{
                  div.style.display = 'block';
              }
          })
         })
         
      </script>
   <div></div>
  
  ```
  



#### 6. 两种定时器

- setTimeout()   window.setTimeout(调用函数，[延迟的毫秒数]);   定时器到期后执行调用函数
- setInterVal() 可以调用很多次，其他的用法和setTimeout()差不多

1. setTimeout()这个调用函数我们也称为回调函数callback。 因为普通函数是按照代码的顺序直接调用的。但是这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。

   简单理解：回调，就是回头调用的意思。上一件事干完，再**回**头**调用**这个函数。

​       element.onclick = function(){}或者element.addEventListener('click', fn)里面的函数也是回调函数。









#### this指向问题

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般this的的最终指向的是那个调用它的函数。



#### JS同步与异步

JS的一大特点就是单线程，也就是同一时间只能做一件事。因为这是JS这门脚本语言诞生的使命所致：JS是为了处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除，不能同时进行。应该先添加再删除。