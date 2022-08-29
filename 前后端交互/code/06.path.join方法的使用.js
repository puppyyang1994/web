const path =require('path')
// // ./会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../../', './d', '/e');
// console.log(pathStr);


const fs = require('fs')
// 使用了path.join files前面的/即使没有加. 也不会有问题
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr){
    if(err){
      return  console.log(err.message);
    }
    console.log(dataStr);
})
        