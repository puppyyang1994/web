const fs = require('fs')
// 出现路径拼接错误 是因为使用了相对路径 ./  ../ 
// 如果要解决这个问题 可以直接提供一个完整的文件存放路径
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log('读取文件失败' + err.message);
//     }
//     console.log('读取文件成功！' + dataStr);
// })


// js中一个\ 代表转义  \\才代表真正的斜线
// 移植性非常差，不利于后期的维护
// fs.readFile('C:\\Users\\ASUS\\Desktop\\code\\files\\1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log('读取文件失败');
//     }
//     console.log('读取文件成功' + dataStr);
// })


 
// 使用__dirname完美解决路径动态拼接的问题  __dirname 表示当前文件所处的目录
// console.log(__dir.name);  /files 前面不能加.
fs.readFile(__dirname +'/files/1.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取文件失败');
    }
    console.log('读取文件成功' + dataStr);
})