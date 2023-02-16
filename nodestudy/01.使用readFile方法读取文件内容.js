
let fs = require('fs')

fs.readFile('./files/test.txt', 'utf-8', function(err, dataStr){
    console.log(err);//null  读取成功则是null
    console.log('--------');
    console.log(dataStr); //"你好呀"
})