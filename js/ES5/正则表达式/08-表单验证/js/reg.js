window.onload = function() {
   let regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
   let regqq = /^[1-9]\d{4,}$/; //QQ 号正则表达式  (1-9开头)后面四位以上
   let regnc = /^[\u4e00-\u9fa5]{2,8}$/; //汉字正则表达式
   let regmsg = /^\d{6}$/; //短信验证码
   let regpwd = /^[a-zA-Z0-9_-]{6,16}$/; //密码正则
   let tel = document.querySelector('#tel');
   let qq = document.querySelector('#qq');
   let nc = document.querySelector('#nc');
   let msg = document.querySelector('#msg');
   let pwd=  document.querySelector('#pwd');
  let surepwd =  document.querySelector('#surepwd');
   regexp(tel, regtel);
   regexp(qq, regqq);
   regexp(nc, regnc);
   regexp(msg, regmsg);
   regexp(pwd, regpwd);

  
//   把功能封装成一个函数
  function regexp(ele, reg){

    ele.addEventListener('blur', function(){
        if(reg.test(this.value)){
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ' <i class="success_icon"></i> 恭喜您输入正确 '
        }else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error_icon"></i> 您输入有误,请重新输入'
        }
    });
   
  }
   
 
surepwd.addEventListener('blur', function(){
    if(this.value == pwd.value){
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = ' <i class="success_icon"></i> 恭喜您输入正确 '
    }else {
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = ' <i class="error_icon"></i> 两次密码不一致 请重新输入 '
    }
})
   
}