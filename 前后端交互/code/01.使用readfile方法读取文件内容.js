// 导入fs模块，来操作文件
const fs = require('fs');

// 调用fs.readFile()

// 参数1：读取文件的存放路径
// 参数2： 读取文件的时候采用的编码格式，一般默认指定utf8，
// 参数3： 回调函数， 拿到读取失败和成功的结构  err, dataStr
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){

//     // 1. 打印失败的结果
// // 如果读取成功 err为null
// // 如果读取失败 err为 错误对象 dataStr的值为 undefined
//     console.log(err);
//     console.log('............');

//     // 打印成功的结果
//     console.log(dataStr);
// })


// 判断文件是否读取成功
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){
    // 如果err为true说明他不为空 说明读取失败
    if(err){
        return console.log('文件读取失败'+ err.message);
    }
    console.log('文件读取成功，内容是'+ dataStr);
})