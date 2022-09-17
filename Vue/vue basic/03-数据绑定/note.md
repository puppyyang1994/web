Vue中有2种绑定方式：
1. 单向绑定(v-bind):数据只能从data流向页面
2. 双向绑定（v-model): 数据不仅能从data流向页面，还可以从页面流向data
   备注：双向绑定一般都应用在表单类元素上（如：input， select等）
   v-model:value 可以省略value， 因为v-model默认收集的是value的值


el 和data的两种写法

1. el有两种写法：
    （1）new Vue时候配置el属性
    (2) 先创建Vue实例，随后再通过v.$mount('#root)指定el的值

   data有2种写法
    （1） 对象式
    （2） 函数式
    如何选择：目前两种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错

    重要的原则：
    由Vue管理的函数，一定不要写箭头函数，一旦写箭头函数，this就不再是Vue实例了
    
