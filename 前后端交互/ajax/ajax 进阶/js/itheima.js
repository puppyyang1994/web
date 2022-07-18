// 处理data参数  把data对象 转化为查询字符串的格式，从而提交给服务器
function resolveData(data){
let arr = [];
for(let k in data){
    let str = k + '=' + data[k]
    arr.push(str)
}
return arr.join('&')
}



// let m = resolveData({name: 'zs', age: '20'})
// console.log(m);//name=zs&age=20

function itheima(options){
    let xhr = new XMLHttpRequest();
// 把外界传递过来的参数对象转换为查询字符串
   let qs = resolveData(options.data);
if(options.method.toUpperCase() === 'GET'){
    // 发起get请求 在url后面加上参数
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
}else if(options.method.toUpperCase() === 'POST'){
    // post请求需要在send里放参数
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
}
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status ===200 ){
          let res =  JSON.parse(xhr.responseText)
          options.success(res)
        }
    }
}

// 不同类型的请求 对应xhr对象的不同操作 