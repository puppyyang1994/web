### Vue学习笔记（一）

#### 1. 初识

- 引入`vue.js`

  ```javascript
  <script src="./vue.js"></script>
  ```

- 准备好一个容器

  ```javascript
  <div id="root">
      <h1>Hello {{name.toUpperCase()}}</h1>
  </div>
  ```

- 创建`vue`实例

  ```javascript
   <script>
     Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
   new Vue({
       el: '#root',
       data: {
       name: 'Shang'
       }
   })
   </script>
  ```

  1. 用`el`指定当前`Vue`实例为哪个容器服务，通常值为`css`选择器
  2. `data`中用于存储数据，数据供`el`所指定的容器去使用，值暂时先写成一个对象
  3. 容器和实例之间是一一对应的关系
  4. `js表达式`和`js代码`不是同一概念，前者会生成一个值，可以放在任何需要值的地方；后者是语句

#### 2.  模板语法

`html`中包含了一些`js`语法代码，语法分为两种：`插值语法`和`指令（以v-开头）`

##### 2.1 插值语法

```javascript
<div id="root">
    <h1>插值语法</h1>
    <h3>你好， {{name}}</h3>
    <hr>
    <h1>指向语法</h1>
    <a :href='url'>去尚硅谷学习</a>
//url 在这里是表达式
    </div>
<script>
    new Vue({
    el: '#root',
    data: {
    name: 'Jack',
    url: 'http://www.atguigu.com'
    }
    })
    </script>
```

1. 插值语法：用于解析标签体内容， 写法`{{**}}` **是`js`表达式，且可以直接读取到`data`中的所有属性
2. 指令语法：用于解析标签内容（包括：标签属性，标签体内容，绑定事件等），如`v-bind:href='xxx'`或者简写`:href='xxx'`,`xxx`要为表达式，且可以直接读取到`data`中的所有属性。vue中有很多的指令。

#### 3. 数据绑定

`Vue`中有两种数据绑定方式：

##### 3.1 单向数据绑定

`单向绑定（v-bind）`:数据只能从`data`流向页面。

```javascript
 <div id="root">
     <input type="text" v-bind:value="name">
         //简写  <input type="text" :value="name">
     </div>
     <script>
     new Vue({
     el: '#root',
     data: {
     name: '尚硅谷'
     }
     })
  </script>
```

##### 3.2 双向数据绑定

`双向绑定（v-model）`:数据不仅能从`data`流向页面，还能从页面流向`data`。一般应用在表单类元素上，如`input``select`等；`v-model:value`可以简写成`v-model`，因为`v-model`默认收集的就是`value`值.

```javascript
 <div id="root">
     <input type="text" v-model:value="name">
         //简写： <input type="text" v-model="name">
     </div>
     <script>
     new Vue({
     el: '#root',
     data: {
     name: '尚硅谷'
     }
     })
    </script>
```

需要注意的是，并不是所有的元素类型都支持`v-model`，比如下面代码就会报错

```JavaScript
 <h2 v-model:x="name">你好啊</h2> 
 //因为v-model只支持表单类元素(输入类元素上)
```

#### 4. `el`和`data`的两种写法

##### 4.1 `el`的两种写法：

1. `new Vue()`的时候配置`el`

   ```javascript
    <div id="root">
    <h1>你好, {{name}}</h1>
    </div>
   
   <script>
   const v = new Vue({
   el: '#root',
   data: {
   name: 'Shang'
   }
   })
   console.log(v);
   ```

   

2. 先创建`Vue`实例，随后再通过`v.$mout('#root')`指定`el`的值

   ```javascript
   <script>
   const v = new Vue({
   data: {
   name: 'Hai'
   }
   })
   v.$mount('#root')
   </script>
   ```

   

##### 4.2 `data`的两种写法

1. 对象式

   ```javascript
    <script>
    const v = new Vue({
    el: '#root',
    data: {
    name: 'Hai'
    }
    })
   </script>
   ```

   

2. 函数式

   ```javascript
   const v = new Vue({
   el: '#root',
   data() {
   console.log('###', this);
       //此处的this 是Vue的实例对象
   return {
   name: 'Shanghai'
   }
   }
   })
   ```

   

   如何选择? 目前两种写法都可以，以后学习到组件以后，`data`必须用函数式，否则会报错

3. 一个重要原则：由`Vue`管理的函数，一定不要写箭头函数，因为一旦写了箭头函数`this`就不再是`Vue`的实例了。

#### 5. MVVM模型

- 概念

`MVVM`模型就是把一堆数据和页面的`DOM`结构联系起来

`m`是模型(model),是`data`中的数据;

`v`是视图(view), 是模板代码;

`vm`是视图模型(viewmodel): `Vue`实例;

`data`中的所有属性，随后都出现在了`vm`身上；`vm`身上的所有属性以及`Vue`原型上所有属性, 在`Vue`模板中都可以直接使用;

- 代码

  ```html
  <div id="root">
  	<h1>学校名称{{name}}</h1>
  	<h1>学校地址{{address}}</h1>
  	<h1>{{2+2}}</h1>
  	<h1>测试一下：{{$options}}</h1>
  </div>
  ```

  ```javascript
  const vm = new Vue({
      el:'#root',
      data: {
          name: '尚硅谷',
          address: '北京',
          a:1
      }
  })
  console.log(vm)
  ```

#### 6. 数据代理

##### 6.1 回顾`Object.defineProperty`

1. `Object.defineProperty`是用来给对象添加新属性或者修改一个对象的属性，并返回该对象。参数依次为**需要添加属性的对象**, **需要定义或修改的属性名**,**属性描述符**。

2. 使用`Object.defineProperty`定义的属性默认是**不可被枚举（遍历）的**。下列代码中通过使用`(for...in)`和`(Object.keys())`方法遍历属性时，不会出现新增的`age`属性。

   ```javascript
   //代码1
   let number = 18
       let person = {
           name: '张三',
           sex: 'nan'
       }
   Object.defineProperty(person, 'age', {
       value:18
   })
   ```

3. 数据描述符的可选键值

   ```javascript
   //enumerable 控制属性是否可枚举的，默认值为false
   Object.defineProperty(person, 'age', {
       enumerable: true
   })
   ```

   ```JavaScript
   // writable 控制属性是否可以被修改
   Object.defineProperty(person, 'age', {
       writable: true
   })
   ```

   ```javascript
   // configurable 控制属性是否可以被删除
   Object.defineProperty(person, 'age', {
       configurable: true
   })
   ```

   除了上面四个基本配置项，还有高级配置项

   ```javascript
   //getter  当有人读取person的age属性时，就会触发get函数,返回值就是age的值
   Object.defineProperty(person, 'age', {
       console.log('有人读取了age属性')
       get(){
           //以后就可以通过number来更改age的值
       return number
       }
   })
   ```

   ```javascript
   //setter 当修改了person的age属性时,set函数会被调用，且会收到修改的具体值
   Object.defineProperty(person, 'age', {
       set(value){
       console.log('有人修改了age的属性， 且值是' + value);
       //只有把value给number才是真正的修改成功   
       number = value
       }
   })
   ```

   ```javascript
   //遍历对象属性，属性数组里不会出现'age'
   console.log(Object.keys(person))
   ```

   ```javascript
   //遍历属性值，不会有age的属性18
   for(let k in person){
   console.log(person[k])
   }
   ```

   

##### 6.2 什么是数据代理

数据代理简而言之就是：通过一个对象代理对另一个对象中属性的操作（读，写）

```javascript
let obj = {x: 100}
let obj2 = {y: 200}

Object.defineProperty(obj, 'x', {
get(){
return obj.x
},
set(value){
obj.x = value
}
})
```



##### 6.3 `Vue`中的数据代理

1. 定义：通过`vm`对象来代理`data`对象中属性的操作（读、写）
2. 数据代理的好处：更加方便的操作`data`中的数据
3. 基本原理：
   - 通过`Object.defineProperty()`把`data`对象中所有属性添加到`vm`身上
   - 为每一个添加到`vm`上的属性都指定一个`getter/setter`
   - 在getter/setter内部去操作（读、写）data中对应的属性

```html
<div id="root">
    <h2>
        学习名称：{{name}}
        // {{_data.name}}
    </h2>
    <h2>
        学习地址：{{address}}
        //{{_data.address}}
    </h2>
</div>
```

```javascript
const vm = new Vue({
    el: '#root',
    data: {
        name: '尚硅谷',
        address: '北京'
    }
})
```



