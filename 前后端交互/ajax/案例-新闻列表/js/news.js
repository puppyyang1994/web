$(function(){
    // 给时间补0函数
    function padZero(n){
        if(n < 10){
            return '0' + n
        }else {
            return n
        }
    }

    // 定义格式化时间过滤器

    template.defaults.imports.dateFormat = function(dtStr){
        let dt = new Date(dtStr);

        let y = dt.getFullYear();
        let m = padZero(dt.getMonth() +1);
        let d = padZero(dt.getDate());
        let hh = padZero(dt.getHours());
        let mn = padZero( dt.getMinutes());
        let sd = dt.getSeconds();

        return y + '-' + m + '-' + d + ' ' +hh + ':' + mn+ ':' + sd ;
    }
// 发起请求获取数据

function getNews(){
    $.get('http://www.liulongbin.top:3006/api/news',
    function(res){
        if(res.status !== 200){
            return alert('获取列表失败')
        }else{
            // 把每一项的tag属性 从字符串变成字符串数组
            for(let i = 0; i< res.data.length; i++){
                res.data[i].tags = res.data[i].tags.split(',');
            }
            // console.log(res);
            // 调用模板函数 渲染数据
           let htmlStr = template('tpl-news', res);
           $('#news-list').html(htmlStr)
        }
        
    })
}

getNews()

})