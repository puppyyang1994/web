'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(module1, module2);

(0, _module.foo)(); // 引入其他模块

// import XXX from '路径'


// 引入的时候必须要用对象结构赋值{对象名1， 对象名2}

(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();
_module4.default.foo();