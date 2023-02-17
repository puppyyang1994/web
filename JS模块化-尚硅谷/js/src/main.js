// 引入其他模块

// import XXX from '路径'
import $ from 'jquery'

// 引入的时候必须要用对象结构赋值{对象名1， 对象名2}
import {foo, bar} from './module1'
import {fun, fun2} from './module2'
import module3 from './module3'

// console.log(module1, module2);

$('body').css('background', 'green')

foo();
bar();
fun();
fun2();
module3.foo()