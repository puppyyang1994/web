function getCommentList(){
    $.ajax({
        method: 'GET',
        url: ' http://www.liulongbin.top:3006/api/cmtlist',
        // data: {},
        success: function(res){
            if(res.status !== 200) return alert('获取评论列表失败');   

            // 进行渲染 先创建一个空数组
            let rows = [];
            $.each(res.data, function(i, item){
                // 每循环一次 生成一个li的字符串
            let str = ` <li class="list-group-item">
            <span class="badge" style="background-color: #F0AD4E;">评论时间 + ${item.time} + </span>
            <span class="badge" style="background-color:#5BC0DE; ">评论人 + ${item.username}+</span>
            Item 1 </li>`
            rows.push(str);
        })

        $('#cmt-list').empty().append(rows.join(''))
        }
    })
}

getCommentList();

$(function(){
    $('#formAddCmt').submit(function(e){
        // 阻止表单的默认行文
        e.preventDefault();
        let data = $(this).serialize();
        // 发起post请求
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, 
        function(res){
            if(res.status !== 201) {
                return alert('发表评论失败')
            }
             //  发完请求后 刷新评论列表 调用getCommentList
            getCommentList();
            // 把jQuery对象先转换为原生DOM对象 在调动reset 清空内容
            $('#formAddCmt')[0].reset();
        
        })
       
      
    })
})