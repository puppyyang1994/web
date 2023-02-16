const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf-8', function(err, dataStr){
    if(err){
        console.log(`读取成绩失败+${err.message}`);
    }
    // 将成绩写入到成绩-ok文件中
fs.writeFile('./files/成绩-ok.txt', dataStr, function(err){
    if(err){
        console.log(`写入失败${err.message}`);
    }
    console.log(`写入成功`);
})
    
})

