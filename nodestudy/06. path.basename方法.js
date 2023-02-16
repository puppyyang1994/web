
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);

// path.basename(path[,ext]) path 必选参数，表示一个路径的字符串； ext可选参数 表示文件的扩展名 返回路径中的最后一部分