Vue 是一套用于构建用户界面的渐进式JS框架
渐进式：vue 可以自底向上逐层应用

vue的特点：
1. 采用组件化模式 提高代码复用率 且让代码更好维护
2. 声明式编码 让编码人员无需直接操作DOM 提高开发效率  （平时我们用的是命令式编码）


学习vue之前要掌握的JS

ES6语法规范
ES6 模块化
包管理器
原型 原型链
数组常用方法
axios
promise


ES6 之前通过 构造函数+原型实现面向对象编程
ES6 通过类 实现面向对象编程
在ES6 之前 面向对象是通过构造函数实现的， 但是构造函数有一个问题 每一次创建实例都会单独开辟空间存放同一个函数 这样很浪费空间

所有想出了一个办法 把函数都放在原型对象里 这样的话 实例可以直接调用 节省了空间


constructor 主要用于记录该对象引用于哪个构造函数 他可以汤原型对象重新指向原来的构造函数

ES6 只爱去哪并没有提供extends继承  我们可以通过构造函数+原型对象模拟实现继承 并成为组合继承


call 调用函数 并且修改函数运行时的this指向

(核心原理： 通过call()把父类型的this指向子类型的this 这样可以实现子类型继承父类型的属性)


类的本质 还是一个函数 可以简单的认为 类就是构造函数的另外一种写法


ES5 中新增的方法
数组方法：
迭代（遍历）方法： forEach() map() filter()  some() every()