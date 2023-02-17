'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露  可以暴露任意数据类型 暴露的是什么数据 接收到的就是什么数据类型
// export default value


exports.default = {
    msg: '默认暴露',
    foo: function foo() {
        console.log('默认暴露函数');
    }
};