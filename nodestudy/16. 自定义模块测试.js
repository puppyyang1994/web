// 在一个自定义模块中，默认情况下, module.exports={}


const age = 20

// 向module.exports对象上挂载username属性
module.exports.username = 'zs'
// 挂载sayHello方法
module.exports.sayHello = function(){
    console.log('Hello');
}

module.exports.age = age

// 上面三个都暴露给了文件17  因为17导入了这个模块

// 让module.exports指向一个全新的对象
module.exports = {
    nickname:'little dog',
    sayHi(){
        console.log('hi');
    }
}

/* 
由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况
下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。 */

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象