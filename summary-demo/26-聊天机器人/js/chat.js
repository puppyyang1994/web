$(function(){
  $('#btnSend').on('click', function(){
    // 1. 将用户输入的内容渲染到页面
    // 获取用户输入的内容
    let text = $('#ipt').val().trim();
    // 判断输入的内容是否为空
    if(text.length<= 0){
      return $('#ipt').val('');
    }else{
      // 将用户输入的内容显示到聊天窗口中
      $('#talk_list').append('<li class="right_word"><img src="./img/person02.png" alt=""><span>' + text +'</span></li>')
    }
    // 重置滚动条
    resetui();
    // 清空输入框的内容
    $('#ipt').val('');

    getMsg(text);
  })
  
  // 2. 发起请求，获取聊天信息
  function getMsg(text){
   $.ajax({
    method: 'get',
    url: 'http://www.liulongbin.top:3006/api/robot',
    data: {
      spoken: text
    },
    success: function(res){
      if(res.message !== 'success'){
        return alert('发送请求失败！')
      }else{
        let msg = res.data.info.text;
        $('#talk_list').append('<li class="left_word"><img src="./img/person01.png" alt=""><span>'+ msg +'</span></li>')
        resetui();
        // 把文字转为语音
        getVoice(msg);
      }
    }
   })
  }

  function getVoice(text){
    //  发起请求把语音转为文字
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text: text
      },
      success: function(res){
        if(res.status === 200){
          $('#voice').attr('src', res.voiceUrl);
        }
      }
    })
  }
  
  // 为文本框绑定keyup事件
  $('#ipt').on('keyup', function(e){
    if(e.key=='Enter'){
      $('#btnSend').click();
    }
  })
})