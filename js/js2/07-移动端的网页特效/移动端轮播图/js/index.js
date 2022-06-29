window.addEventListener('load', function(){
let focus = document.querySelector('.focus');
let ul = focus.children[0];
// focus的宽度
let w = focus.offsetWidth;
let ol = focus.children[1];
let index = 0;
// 2.利用定时器自动轮播图片
let timer = setInterval(function(){
    index++;
    let translateX = -index * w;
    // 添加一个过渡的效果 引号一定不能忘记
    ul.style.transition = 'all .3s';
    ul.style.transform = 'translateX('+ translateX + 'px)';
}, 2000)

// 无缝滚动： 等着过渡完成之后再去判断  用到监听过渡完成的事件
// 切换页面会导致transitionend无法触发 而定时器中的index++一直在执行
ul.addEventListener('transitionend', function(){
    // 无缝滚动  不能写等于3
    if(index >= 3){
        index = 0;
        //去掉过渡效果 让ul快速的跳到目标位置
        ul.style.transition = 'none';
        // 利用最新的索引 继续滚动图片
        let translateX = -index * w;
        ul.style.transform = 'translateX('+ translateX + 'px)';
    }else if(index<0){
        // 如果向左边 到了第三张图 快速跳到第二张
        index = 2;
        //去掉过渡效果 让ul快速的跳到目标位置
        ul.style.transition = 'none';
        let translateX = -index * w;
        ul.style.transform = 'translateX('+ translateX + 'px)';
    }
     // 小圆点跟随变化效果
    // 把ol里面的li带有current类名的选出来去掉类名remove
    // 让当前索引号的小li加上current add
    ol.querySelector('.current').classList.remove('current');
    // 让当前索引号的小li 加上current add
    ol.children[index].classList.add('current');
   
});
// 手指滑动轮播图
let startX = 0;
let moveX = 0; //后面会使用移动距离 全局变量
let flag = false;
// 触摸元素touchstart 获取手指初始坐标
ul.addEventListener('touchstart', function(e){
    startX = e.targetTouches[0].pageX;
    // 手指触摸的时候就停止定时器
    clearInterval(timer);
});
ul.addEventListener('touchmove', function(e){
   
  //计算移动距离
    moveX = e.targetTouches[0].pageX - startX;  
      // 移动距离：盒子原来的位置 + 手指移动的距离
      let  translateX = -index * w + moveX;
    //   手指拖动的时候不需要动画效果
    ul.style.transition = 'none';
      ul.style.transform = 'translateX('+ translateX + 'px)';
      flag = true;
    //   如果用户手指移动过 我们再去判断 否则不做判断效果
    e.preventDefault();
});
// 手指离开 根据移动距离去判断是回弹还是播放上一张 下一张
ul.addEventListener('touchend', function(e){
// 如果移动距离大于50px 播放上一张
// 一定要去绝对值 因为可能向左滑 是负数
if(flag){
    if (Math.abs(moveX)>50){
   
        if(moveX > 0) {
             // 如果右滑 播放上一张
            index--;
        }else {
             // 如果左滑 播放下一张
            index++;
        }
        let translateX = -index * w;
         
          ul.style.transition = 'all .3s';
          ul.style.transform = 'translateX('+ translateX + 'px)';
      }else {
          // 小于50 就回弹
          let translateX = -index * w;
          ul.style.transition = 'all .1s';
          ul.style.transform = 'translateX('+ translateX + 'px)';
      }
}
// 开启之前 先清除定时器 保证只有一个定时器
clearInterval(timer);
// 重新开启定时器
timer = setInterval(function(){
    index++;
    let translateX = -index * w;
    // 添加一个过渡的效果 引号一定不能忘记
    ul.style.transition = 'all .3s';
    ul.style.transform = 'translateX('+ translateX + 'px)';
}, 2000)

});

// 返回顶部模块制作
//滚动某个地方显示
// 事件：scroll页面滚动事件
// 如果被卷去的头部(window.pageYoffset)大于某个数值
// 点击 window.scroll(0,0 返回顶部)
let goBack = document.querySelector('.goBack');
let nav= document.querySelector('nav');
window.addEventListener('scroll', function(){
if(window.pageYOffset >= nav.offsetTop){
    goBack.style.display = 'block';
}else {
    goBack.style.display =  'none';
}
});
goBack.addEventListener('click', function(){
    window.scroll(0,0);
})




})