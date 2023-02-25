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



#### 7. 事件处理

##### 7.1 事件的基本使用

1. 使用`v-on:xxx`或者`@xxx`绑定事件，其中`xxx`是事件名。
2. 事件的回调需要配置在`methods`对象中,最终会在`vm`上。
3. `methods`中配置的函数，不要用箭头函数，否则`this`就不是`vm`了。
4. `methods`中配置的函数，都是被`Vue`所管理的函数，`this`的指向是`vm`或者组件实例对象。
5. `@ckick="demo"`和`@click="demo($event)"`效果一致，但后者可以传参。

```html
 <div id="root">
        <h2>欢迎你{{name}}</h2>
        <button v-on:click="showInfo">点我提示信息（不传参数）</button>
        <button @click="showInfo2(66, $event)">点我提示信息2（传递参数）</button>
    </div>
```

```javascript
<script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el: '#root',
            data: {
                  // 只有放在data里面的内容才会做数据劫持和数据代理
                // 不要把函数方法写在data里，因为这样会变成数据代理
                name: 'Puppy'
            },
            methods: {
                showInfo() {
                    alert('第一次提示')
                    alert(event)
                },
                showInfo2(number, a) {
                    alert(number)
                    alert('第二次提示')
                }
            }
        })
    </script>
```



##### 7.2 事件修饰符

`Vue`中的事件修饰符：

1. `prevent`阻止默认事件（比如`a标签`的默认跳转）

   ```javascript
    // HTML
   <div id="root">
        <a href="http://www.atguigu.com" @click.prevent="showInfo">点击提示信息</a>
       </div>
   //JS
   new Vue({
       el: '#root',
       methods: {
       showInfo() {
       alert('Hi')
       }
       }
   })
   ```

   

2. `stop`阻止事件冒泡

   ```html
    <div id="root" @click="showInfo">
           <div>
               <button @click.stop="showInfo">我是按钮</button>
           </div>
       </div>
   ```

   

3. `once`事件只触发一次

   ```html
     <div id="root">
           <button @click.once="showInfo">我是按钮</button>
       </div>
   ```

   

4. `capture`使用事件的捕获模式

   ```html
   <div id="root">
       <div class="class1" style="padding: 5px; background: skyblue; " @click.capture="showInfo">
       div1
       <div class="class2" style="padding: 5px; background: skyblue; " @click="showInfo2">
       div2
       </div>
           </div>
    //点击div2之后会先触发showInfo,之后才是showInfo2
   ```

   ```javascript
    Vue.config.productionTip = false
           new Vue({
               el: '#root',
               methods: {
                   showInfo() {
                       alert('盒子1')
                   },
                   showInfo2() {
                       alert('盒子2')
                   }
               }
           })
   ```

   

5. `self`只有`event.target`是当前操作的元素时才触发事件

   ```javascript
    <div class="demo1" @click.self="showInfo">
               <button @click="showInfo">点我提示信息</button>
           </div>
   new Vue({
               el: '#root',
               methods: {
                   showInfo(e) {
                       console.log(e.target);
                   },
   
               }
           })
   //这样的执行结果是(冒泡的结果)
   //<button>点我提示信息</button>
   //<button>点我提示信息</button>
   
   //加上self之后，只执行了btn里的，所以其实这样也可以阻止冒泡
   //<button>点我提示信息</button>
   
   ```

   

6. `passive`事件的默认行为立即执行，无需等待事件回调执行完毕（比如`wheel`事件）

   ```javascript
    <ul style="height: 200px; background-color: aqua; overflow: auto;" @wheel.passive="showInfo">
               <li style="height: 100px; ">1</li>
               <li style="height: 100px; ">2</li>
               <li style="height: 100px; ">3</li>
               <li style="height: 100px; ">4</li>
           </ul>
   showInfo() {
   for (let i = 0; i < 100000; i++) 
   {
       console.log('#');
   }
        console.log('累坏了');
        // 整个函数执行完之后 wheel才会真的动滚动条
        // 给wheel事件加上passive之后 就会立即执行滚动条 
    }
   
   ```

   

##### 7.3 键盘事件

1. `Vue`中常用的按键别名：

- 回车 `enter`

- 删除`delete`(捕获删除和退格键)

- 退出`esc`

- 空格`space`

- 换行`tab`(特殊，必须配合`keydown`去使用)

- 上`up`

- 下`down`

- 左`left`

- 右`right`

  ```html
   <div id="root">
          <input type="text" placeholder="按下回车键提示输入" @keyup.delete="showInfo">
  
      </div>
  ```

  

2. `Vue`未提供别名的按键，可以使用按键原始的`key`值去绑定，但要注意转为`keytab-case`(短横线命名)

3. 系统修饰键(用法特殊):ctrl, alt, shift, meta

   - 配合`keyup`使用：按下键修饰的同时，再按下其他键，随后释放其他键，事件才被触发。
   - 配合`keydown`使用：正常触发事件。

4. `Vue.config.keyCodes.`自定义健名 = 键码， 可以去定制按键别名

   ```html
    <div id="root">
           <input type="text" placeholder="按下回车键提示输入" @keyup.huichen="showInfo">
   
       </div>
   ```

   ```javascript
   <script>
           Vue.config.productionTip = false
           Vue.config.keyCodes.huichen = 13
           //输入huichen后按回车 打印的是13
           new Vue({
               el: '#root',
               methods: {
                   showInfo(e) {
                       console.log(e.keyCode);
   
                   }
               }
           })
   ```

   

#### 8. 计算属性

##### 8.1 姓名案例

1. 插值语法实现

   ```html
    <div id="root">
           姓：<input type="text" v-model="firstName"><br><br>
           名：<input type="text" v-model="lastName"><br><br>
   // 从0开始截取三位 不包括第三位
           姓名：<span>{{firstName.slice(0,3)}}-{{lastName}}</span>
       </div>
   ```

   ```javascript
    <script>
           new Vue({
               el: '#root',
               data: {
                   firstName: '张',
                   lastName: '三'
               }
           })
       </script>
   ```

   2. `methods`实现

      ```html
       <div id="root">
              姓：<input type="text" v-model="firstName"><br><br>
              名：<input type="text" v-model="lastName"><br><br>
              <!-- 展示的是函数调用返回的结果，所以（）一定要加上 -->
              姓名：<span>{{fullName()}}</span>
          </div>
      ```

      ```javascript
       <script>
              new Vue({
                  el: '#root',
                  data: {
                      //只要data中的值发生改变Vue一定会重新解析模板
                      firstName: '张',
                      lastName: '三'
                  },
                  methods: {
                      fullName() {
                          return this.firstName + '-' + this.lastName
                      }
                  }
              })
          </script>
      ```

   ##### 8.2 姓名案例__计算属性实现

   - 定义：要用的属性不存在，要通过已有属性计算得来。
   - 原理：底层借助了Object.defineproperty方法提供的`getter`和`setter`.
   - `get函数什么时候执行`：
     1. 初次读取时会执行一次
     2. 当依赖的数据发生改变时会被再次调用
   - 优势：与`methods`实现相比，内部有缓存机制（复用），效率更高，调试方便
   - 备注：
     1. 计算属性最终会出现在`vm`上，直接读取即可使用。
     2. 如果计算属性要被修改，那必须写`set`函数去响应修改，且`set`中要引起计算时依赖的数据发生改变。

   ```html
    <div id="root">
           姓：<input type="text" v-model="firstName"><br><br>
           名：<input type="text" v-model="lastName"><br><br>
   //fullName调用一次后就缓存了，而methods要多次调用     
           姓名: <span>{{fullName}}</span><br><br>
   
       </div>
   ```

   ```javascript
    <script>
           const vm = new Vue({
               el: '#root',
               data: {
                   firstName: '张',
                   lastName: '三'
               },
               computed: {
                   //fullName这里不能当成函数看待
                   fullName: {
                       //初次读取fullName时，get函数会被调用，且返回值就作为fullName的值
                       // 当fullName所依赖的数据（这里是firstName或lastName)发生改变时，get函数会被调用(比如往input框里输入文字)
                       get() {
                           // 这个时候get的指向Vue已经调成了vm
                           console.log('get被调用了');
                           return this.firstName + '-' + this.lastName
                       },
                       // 当fullName被修改的时候，set函数会被调用
   
                       set(val) {
                           console.log('set函数被调用了');
                           // 把名字字符串变成数组
                           const arr = val.split('-')
                           this.firstName = arr[0]
                           this.lastName = arr[1]
                       }
                   }
               }
           })
       </script>
   ```

   - 计算属性简写：

     ```javascript
      computed: {
                     fullName() {
                         return this.firstName + '-' + this.lastName
                     }
                 }
     ```

#### 9. 监视属性

##### 9.1 监视属性`watch`:

1. 当被监视的属性变化时，回调函数自动调用进行相关操作。
2. 监视的属性必须存在，才能进行监视。
3. 监视的两种写法：
   - `new Vue`时传入`watch配置`
   - 通过`vm.$watch`监视

##### 9.2 天气案例

```html
<div id="root">
        <h2>今天天气很{{info}}</h2>
     <!--绑定事件的时候 @xxx='yyy', yyy可以写一些简单的语句 -->
        <button @click="changeWeather">切换天气</button>
    </div>
```

```javascript
const vm = new Vue({
            el: '#root',
            data: {
                isHot: true
            },
            computed: {
                info() {
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather() {
                    this.isHot = !this.isHot
                }
            },
        })
```

监视属性

```javascript
watch: {
isHot: {
immediate: true,//初始化时让handler调用一下
// 什么时候调用handler？当isHot发生改变时
handler(newVal, oldVal) {
console.log('isHot被修改了', newVal, oldVal);
}
}
}
```

另一种写法

```javascript
vm.$watch('isHot', {
            immediate: true,
            handler(newVal, oldVal) {
                console.log('isHot被修改了');
            }
        })
```

计算属性`info`也可以被监视

监视属性-简写（只有当配置项只有handler的时候才可以简写）

```JavaScript
watch：{
isHot(newVal, oldVal){
console.log('isHot被修改了')
}
}
```

```JavaScript
vm.$watch('isHot',function(newVal, oldVal){
console.log('isHot被修改了', newVal, oldVal)
})
//不要写成箭头函数
```



##### 9.3 深度监视

1. Vue中的watch默认不监测对象内部值的改变（一层）
2. 配置deep:true 可以监测对象内部值改变（多层）
3. Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以
4. 使用watch时根据数据的具体结构，决定是否采用深度监测

```html
<div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
        <hr>
        <h3>a的值是:{{numbers.a}}</h3>
        <button @click="numbers.a++">点我让a+1</button>
        <h3>b的值是:{{numbers.b}}</h3>
        <button @click="numbers.b++">点我让b+1</button>
        <button>彻底替换掉numbers</button>
    </div>
```

```javascript
 const vm = new Vue({
            el: '#root',
            data: {
                isHot: true,
                numbers: {
                    a: 1,
                    b: 1,
                    c: 1
                }
            },
            computed: {
                // 计算属性的简写
                info() {
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather() {
                    this.isHot = !this.isHot
                }
            },
            watch: {
                isHot: {
                    immediate: true,//初始化时让handler调用一下
                    // 什么时候调用handler？当isHot发生改变时
                    handler(newVal, oldVal) {
                        console.log('isHot被修改了', newVal, oldVal);
                    }
                },
                // 监视多级结构中某个属性的变化
                'numbers.a': {
                    handler() {
                        console.log('a变化了');
                    }
                },
                numbers: {
                    deep: true,
                    handler() {
                        console.log('numbers变化了');
                    }
                }
            }
        })
```

##### 9.4 姓名案例_`watch`实现_

```html
<div id="root">
        姓：<input type="text" v-model="firstName"><br><br>
        名：<input type="text" v-model="lastName"><br><br>
        全名: <span>{{fullName}}</span>
    </div>
```

```javascript
 const vm = new Vue({
            el: '#root',
            data: {
                firstName: '张',
                lastName: '三',
                fullName: '张-三'
            },
            watch: {
                firstName(val) {
                    //watch能开启异步任务但是computed不能
                    setTimeout(() => {
   //箭头函数没有自己的this,所以往外找，找到vm                     console.log(this);
                        this.fullName = val + '-' + this.lastName
                    }，1000)
                },
                lastName(val) {
                    this.fullName = this.firstName + '-' + val
                }
            }
        })

```

##### 9.5 计算属性与监视属性的区别

1. `computed`能完成的功能，`watch`都能完成。
2. `watch`能完成的功能，`computed`不一定能完成，比如`watch`可以进行异步操作。
3. 原则：
   - 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或者组件实例对象。



#### 10. 绑定样式

##### 10.1 class样式

- 写法:`class='xxx'`, xxx可以是字符串，对象，数组。
  - 字符串写法适用于：类名不确定，要动态获取。
  - 对象写法适用于：要绑定的样式个数不确定，名字也不确定。
  - 对象写法适用于：要绑定的样式个数不确定，但名字确定，不确定用不用。

##### 10.2 style样式

- `:style="{fontSize:xxx}"`其中xxx是动态值
- `:style="[a,b]"`其中a,b是样式对象

##### 10.3 代码实现

- class样式

  ```html
   <div id="root">
          <!-- 字符串写法，适用于：样式的类名不确定，需要动态指定 -->
          <div class="basic" :class="mood" @click="changeMood">{{name}}</div><br><br>
          <!-- 数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
          <div class="basic" :class="classArr">{{name}}</div><br><br>
          <!--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用  -->
          <div class="basic" :class="classObj">{{name}}</div>
      </div>
  ```

  ```javascript
  const vm = new Vue({
              el: '#root',
              data: {
                  name: 'shangguige',
                  mood: 'normal',
                  classArr: ['atguigu1', 'atguigu2', 'atguigu3'],
                  // 可以通过vm.arr.splice()或者push()来操作数组
                  classObj: {
                      atguigu1: false,
                      atguigu2: false,
                  }
              },
              methods: {
                  changeMood() {
                      const arr = ['happy', 'sad', 'normal']
                      const index = Math.floor(Math.random() * 3)
                      this.mood = arr[index]
                  }
              },
          })
  ```

- style样式

```html
<div class="basic" :style="styleObj"> {{name}}</div><br><br>
        <!-- 绑定style样式--数组写法  -->
        <div class="basic" :style="styleArr">{{name}}</div>
```

```javascript
 styleObj: {
     fontSize: '40px',
         color: 'red'
 },
     styleArr: [{
         fontSize: '40px',
         color: 'blue'
     }, {
         backgroundColor: 'gray'
     }]
```


##### 组件
1. 组件的几个注意点


2. 单文件组件
Vue文件的写法：  MySchool.vue / School.vue
- 插件 Vetur



#### Vue脚手架
没有脚手架， vue的代码浏览器是无法识别的
选择最新的脚手架  command line interface 命令行接口工具
