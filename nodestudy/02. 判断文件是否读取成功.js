const fs = require('fs')
// 可以通过判断对象err是否为Null 从而知晓文件读取的结果
fs.readFile('./files/test.txt', 'utf-8', function(err, result){
    if(err){
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功，内容是；' + result);
})