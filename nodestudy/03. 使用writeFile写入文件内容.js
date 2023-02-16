const fs = require('fs')
fs.writeFile('./files/test.txt', '哈哈哈我写入了', function(err){
    if(err){
        console.log(`写入文件失败${err.meassafe}`);
    }
    console.log('写入成功');
})