### HTML5 Canvas

之前没有做过和canvas相关的案例，今天做了一个画板的demo，所以梳理一下做法：



1. 在页面中放置一个canvas元素(HTML)

```javascript
<canvas></canvas>
```

2. 获取canvas元素和canvas元素的getContext(图像会在此被渲染)（JS）

```javascript
const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d') //以2d方式渲染
//getContext()方法用来获得渲染上下文和它的绘画功能。
```

3. 让画布的大小和浏览器窗口的视口（viewport)的高度和宽度一致(JS)

```javascript
canvas.height = windows.innerHeight
canvas.width = windows.innerWidth
```

4. 设置图形轮廓的颜色strokeStyle

   ```javascript
   ctx.strokeStyle = '#BADA55'
   ```

5. 设置线条

   ```javascript
   ctx.lineJoin = 'round'// lineJoin设置线条与线条间结合处的样式
   ctx.lineCap = 'round'// lineCap 设置线条末端样式
   ctx.lineWidth = 50 //设置线条宽度
   ```

6. 绘制路径

   补充：HSL色彩模式是工业界的一种颜色标准，是通过对色相(H)、饱和度(S)、明度(L)三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色的，HSL即是代表色相，饱和度，明度三个通道的颜色，这个标准几乎包括了人类视力所能感知的所有颜色，是目前运用最广的颜色系统之一。为了颜色保持变化，在hue超过360时，将其变为0

   ```javascript
   //1. 首先，你需要创建路径起始点。
   //2.然后你使用画图命令去画出路径。
   //3.通过线条来绘制图形轮廓。
   //定义两个全局变量： lastX 和lastY 初识为0
   let lastX = 0
   let lasY = 0
   let hue = 0
   //让direction控制线条大小渐变， 设置初始值为true
   let direction = true
   let isDrawing = false
   
   
   function draw(e) {
   if(!isDrawing) return;
     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   
       ctx.beginPath(); //调用beginPath()准备绘制一个新的形状路径
       //绘制路径 此时还没有线条
       ctx.moveTo(lastX, lastY); //使用moveTo()函数移动到目标位置
       //绘制线条
       ctx.lineTo(e.offsetX, e.offsetY); //lineTo(x, y)绘制一条从当前位置到指定xy位置的直线。
       ctx.stroke();//通过线条来绘制图形轮廓。
       //ctx.fill()通过填充路径的内容区域生成实心的图形。
       //使用数组解构，将解构出来的值赋值给x y
       [lastX, lastY] = [e.offsetX, e.offsetY]//把当前的坐标当做起点
       hue++
         if(hue>=360){
             hue = 0
         }
         //当线条大于100或者小于1时，线条变化，direction控制线条的减少和增加
         if(ctx.lineWidth >=100 ||ctx.lineWidth)  {
             direction = !direction
         }  
         if(direction){
             ctx.lineWidth++
         }else{
             ctx.lineWidth--
         }
     }
   }
   
   ```

   7. 事件监听部分

      ```javascript
      //按下鼠标画出图像
      canvas.addEventListener('mousedown', (e) => {
      isDrawing = true
      [lastX, lastY] = [e.offsetX, e.offsetY]
      })
      
      canvas.addEventListener('mousemove', draw)
      canvas.addEventListener('mouseup', ()=> isDrawing = false)
      canvas.addEventListener('mouseuot', ()=> isDrawing = false)
      ```

      