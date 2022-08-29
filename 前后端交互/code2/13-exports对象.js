// console.log(exports);
// console.log(module.exports);
// console.log(exports===module.exports);//指向的是同一个对象


const username = 'zs'

module.exports.username = username

exports.age = 20

exports.sayHello = function(){
    console.log('你好');
}


// 最终向外共享的结果，是module.exports所指向的对象