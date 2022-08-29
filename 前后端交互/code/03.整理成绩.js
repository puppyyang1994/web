const fs = require('fs');

// 调用fs.readFile() 读取文件

fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr){
    // 判断是否读取成功
    if(err){
        return console.log('读取失败');
    }
    // console.log('读取文件成功' + dataStr);
    // 处理数据
    // 先把成绩的数据 按照空格进行分割，变成了一个数组
    // 循环分割后的数组 对每一项数据 进行字符串的替换操作
    // 把新数组中的每一项 进行合并,得到一个新的字符串
    const arrOld = dataStr.split(' ');
    const arrNew = [];
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=', ':'))
    })
    // \r\n 换行
    const newStr = arrNew.join('\r\n');
    // console.log(newStr);
    // 将整理好的数据调用fs.writeFile()写入文件
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err){
        if(err){
            return console.log('写入文件失败'+ err.message) ;

        }
        console.log('写入成功');
    })

})




