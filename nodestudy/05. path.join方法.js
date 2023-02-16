const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './files/成绩-ok.txt'), "utf-8", function(err, dataStr){
    if(err){
        console.log('读取失败');
    }
    console.log(`读取成功${dataStr}`);
})