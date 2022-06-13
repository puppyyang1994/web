window.addEventListener('load',function(){
//   1.获取元素
var arrow_l = document.querySelector('.arrow-l');
var arrow_r = document.querySelector('.arrow-r');
var focus = document.querySelector('.focus');
var focusWidth = focus.offsetWidth;

// 鼠标经过显示小按钮 
focus.addEventListener('mouseenter', function(){
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
})
// 鼠标离开隐藏小按钮
focus.addEventListener('mouseleave', function(){
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
})

// 动态生成小圆圈 有几张图片，就生成几个小圆圈
var ul = focus.querySelector('ul');
var ol = focus.querySelector('.circle');
// console.log(ul.children.length);
for (var i = 0; i<ul.children.length; i++){
    // 创建小li
    var li = document.createElement('li');
    // 记录当前小圆圈的索引号 通过自定义属性来做
    li.setAttribute('index', i)
    // 把li插入到ol
    ol.appendChild(li);
    // 4.  在生成小圆圈的同时，就可以直接绑定这个点击事件了
    li.addEventListener('click', function(){
        //干掉所有人 
        for(var i = 0; i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        //留下自己
        this.className = 'current';

        //5.  点击小圆圈，移动图片 移动的是ul
      
        // ul的移动距离 （往左走 负值） 小圆圈的索引号 * 图片的宽度 
        // 当我们点击了某个小Li 救阿拿到了li的索引号
        var index = this.getAttribute('index');
        // 当点击了某个小li 就把索引号给num
        num = index;
        circle = index;
       

        animate(ul, -index * focusWidth );
    })
}
// ol里面第一个li加类型current
ol.children[0].className = 'current';
// 6. clone第一张图  这样小圆圈不会随着图的增加而增加
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);
//  7. 点击右侧按钮图片滚动一张
var num = 0;
// cirlce 控制小圆圈
var circle = 0;
arrow_r.addEventListener('click', function(){
    // 4张图片 ul.children.length -1
    if(num == ul.children.length -1){
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animate(ul, -num * focusWidth );

    //8.  circle控制小圆圈的变化 可跟图变化
    circle++;
 if (circle ==  ol.children.length ){
       circle = 0;
 }

 for(var i = 0; i<ol.children.length; i++){
     ol.children[i].className = '';
 }
 ol.children[circle].className = 'current';
 

})





})