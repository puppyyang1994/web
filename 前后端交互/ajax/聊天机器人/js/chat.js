$(function() {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  // 为发送按钮绑定鼠标点击事件
 $('#btnSend').on('click', function(){
  let text = $('#ipt').val().trim();
  // 判断输入的内容是否为空
  if(text.length <= 0){
    // 清空
    return $('#ipt').val('');
  }
  // 如果输入了聊天内容 则追加内容
  // 注意字符串不允许换行 所以要一行显示
  $('#talk_list').append('<li class="right_word"><img src="./img/person02.png" alt=""><span>'+ text +'</span></li>');
  $('#ipt').val('');
  // 追加完成后要重置滚动条的位置
  resetui();
  // 发起请求
  getMsg(text);
 })

//  获取聊天机器人发送回来的消息

function getMsg(text){
  $.ajax({
    type: 'GET',
    url: 'http://www.liulongbin.top:3006/api/robot',
    data: {
      spoken:text
    },
    success: function(res){
      // console.log(res);
      if(res.message === 'success'){
        // 接受聊天消息
        let msg = res.data.info.text;
        $('#talk_list').append('<li class="left_word"><img src="./img/person01.png" alt=""><span>'+ msg +'</span></li>')
        // 重置滚动条
        resetui();
        // 调用getVoice函数  把文本转化为语音
        getVoice();
      }
    }
  })
}

// 将机器人的聊天内容转换为语音
function getVoice(text){
  $.ajax({
    type: 'GET',
    url: 'http://www.liulongbin.top:3006/api/synthesize',
    data: {
      text: text
    },
    success: function(res){
  if(res.status === 200){
    // 语音播放
    console.log(res);
    $('#voice').attr('src', src.voiceUrl)
    }
    }
})
}

// 为文本输入框绑定keyup
$('#ipt').on('keyup', function(e){
  
  if(e.key == 'Enter'){
    // 调用按钮元素的click事件
   $('#btnSend').click();
  }
})
})
