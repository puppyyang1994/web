$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $('.checkall').change(function(){
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
        // 底部的全选和顶部的全选都选上
        
    })
    // 2.  如果小复选框被选中的个数等于3 就把全选按钮选上 否则全选按钮不选
    $('.j-checkbox').change(function(){
       if($('.j-checkbox:checked').length === $('.j-checkbox').length){
        $('.checkall').prop('checked', true);
       }else {
        $('.checkall').prop('checked', false);
       }
       
    })

    // 增减商品模块 首先声明一个变量 当点击+ （increment）
    // 就让值++ 然后赋值给文本
    $('.increment').click(function(){
        let n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);

         // 修改商品小计
    let p = $(this).parents('.p-num').siblings('.p-price').html();
    // 要先去掉后面的单位才能进行运算
     p = p.substr(1);  //从头去掉一个字符
    //  计算总价
     $(this).parents('.p-num').siblings('.p-sum').html( '￥'+ ( p*n).toFixed(2))
    //  toFixed(2)保留两位小数点
    getSum();
   
    })
    // 减号
    $('.decrement').click(function(){
        let n = $(this).siblings('.itxt').val();
        if(n==1){
            return false;//return退出程序
        }
        n--;
        $(this).siblings('.itxt').val(n);  //表单用value
// parents()选择器  可以返回指定的父级选择器
        let p = $(this).parents('.p-num').siblings('.p-price').html();
        // 要先去掉后面的单位才能进行运算
         p = p.substr(1);  //从头去掉一个字符
        //  计算总价
         $(this).parents('.p-num').siblings('.p-sum').html( '￥'+ ( p*n).toFixed(2))
         getSum();
    })

//    4. 如果用户直接改变文本内容 也要相应的修改
$('.itxt').change(function(){
    let n = $(this).val();
    let p = $(this).parents('.p-num').siblings('.p-price').html();
    p = p.substr(1); 
    $(this).parents('.p-num').siblings('.p-sum').html( '￥'+ ( p*n).toFixed(2))
    getSum();

});

// 5. 计算最后的总价（封装一个函数）
getSum();
// 页面一打开先调用一次 不管有没有操作
function getSum(){
    let count = 0;
    let money = 0;
    $('.j-checkbox:checked').parents('.p-checkbox').siblings('.p-num').children('.quantity-form').children('.itxt').each(function(i, ele){
      
        count += parseInt( $(ele).val());
      
       
    });
    $('.amount-sum em').text(count);
    
    $('.j-checkbox:checked').parents('.p-checkbox').siblings('.p-sum').each(function(i,ele){
   
            money += parseInt( $(ele).text().substr(1));
       
       
    });
    $('.price-sum em').text('￥'+ money.toFixed(2));//保留两位小数
}

})