//在自定义模块中 导入的是module.exports 空对象
module.exports.username = 'zs'
module.exports.sayHello = function(){
    console.log('Hello');
}

// 分别挂载username属性 和sayHello方法

const age = 20
// 把常量暴露出去 共享
module.exports.age = age

module.exports = {
    nickname : 'xiaohei',
    sayHi() {
        console.log('hi');
    }
}