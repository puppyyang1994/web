window.addEventListener('load', function(){ //页面元素加载完成后再执行JS
var preview_img = document.querySelector('.preview_img');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
// 1. 鼠标经过小图片盒子preview_img，黄色的遮挡层mask 和大图片盒子显示 big，离开隐藏2个盒子的功能

preview_img.addEventListener('mouseover', function(){
    mask.style.display = 'block';
    big.style.display = 'block';
})

preview_img.addEventListener('mouseout', function(){
    mask.style.display = 'none';
    big.style.display = 'none';
})
// 2. 黄色的遮挡层跟随鼠标功能。
preview_img.addEventListener('mousemove', function(e){
    // 父亲没有定位 直接计算
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // 盒子的高度的一半 150 =  mask.offsetWidth/2    // 保证鼠标在盒子中央
    // mask 移动的距离
    var maskX = x- mask.offsetWidth/2;
    var maskY = y- mask.offsetHeight/2;
    var maskMax = preview_img.offsetWidth-mask.offsetWidth
    // 
    if (maskX <= 0) {
        maskX = 0;
    }else if (maskX >= maskMax){
        maskX = 100;
    }
    mask.style .left = maskX + 'px';
    if (maskY<= 0) {
        maskY = 0;
    }else if (maskY >= maskMax){
        maskY= 100;
    }
    // 上面的判断 也可以用三元表达式来写
    mask.style .left = maskX + 'px';
    mask.style.top = maskY + 'px';
    //3.移动黄色遮挡层，大图片跟随移动功能。
    // 大图片的移动距离 = 遮挡层移动距离* 大图片移动距离 / 遮挡层的最大移动距离   （按照移动的比例来算 因为比例是一致的）
    var bigImg = document.querySelector('.bigImg')
    // 大图的最大移动距离
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 大图的移动距离
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
// big的定位一定不能忘记
    bigImg.style.left = - bigX  + 'px';
    bigImg.style.top = -bigY + 'px';   // 大图和小图方向相反

   
})


})