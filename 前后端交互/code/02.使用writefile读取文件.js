const fs = require('fs');

// 调用fs.writefle()


// fs.writeFile('f:/files/2.txt', 'abcd', function(err){
//     console.log(err);
//     // 如果文件写入成功，err为null
//     // 如果文件写入失败 则err为一个错误对象
// })



// 判断文件是否写入成功
fs.writeFile('f:/files/3.txt', 'bfhg', function(err){
    if(err){
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功');
})