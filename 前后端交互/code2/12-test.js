// 在外界使用require 方法，导入自定义模块的时候，得到的成员
// 就是 那个模块中， module.exports 所指向的默认的空对象
// 可以省略js后缀名
const m = require('./11-自定义模块')

console.log(m);