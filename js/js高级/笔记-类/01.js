// 1. 语法
class User{
    constructor(name){
        this.name = name;
    }
/* function省略了 */
    sayHi(){
        alert(this.name);
    }
}
// 2. 用法：
let user = new User('John');
user.sayHi();//John
console.log(typeof User); //function   类是一种函数
// 类的方法之间没有逗号 这个需要注意


