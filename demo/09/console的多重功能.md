## Console控制台

平时一般只用console的打印功能，今天的训练学习到了关于console的更多功能

### 1.log

这个是最常用的，但它还有一些更多功能：比如参数支持类似 C 语言的字符串替换模式。

- `%s` 字符串
- `%d` 整数
- `%f` 浮点值
- `%o` Object
- `%c` 设定输出的样式，在之后的文字将按照第二个参数里的值进行显示

```JavaScript
console.log("输出一个字符串 %s ", "log");
console.log("输出一个整数是 %d ", 1.23); //1
console.log("输出一个小数是 %f ", 1.23); //1.23
console.log("%c不同样式的输出效果", "color: #00fdff; font-size: 2em;");
```

### 2.不同样式的输出

除了常规的 `log` 之外，还有一些其他已设定好的样式，区别在于图标或者颜色不一样：

```javascript
// warning!
console.warn("三角感叹号图标，淡黄色背景")
// Error :|
console.error("红叉图标，红字红色背景");
// Info
console.info("蓝色圆形感叹号图标");
```

### 3.打印输出

获取 DOM 元素之后，也可以打印输出。

```javascript
const p = document.querySelector('p');
console.log(p);
console.dir(p);
```

不同的地方在于，`log` 输出这个 DOM 的 HTML 标签，而 `dir` 则会输出这个 DOM 元素的属性列表。

### 4. clear

```javascript
 console.clear()//Console was cleared
 //快捷键ctrl+L
```

### 5.assert方法进行测试

 接受一个表达式作为参数，如果参数返回值是 false，则会输出第二个参数中的内容。 

```javascript
 // p.classList.contians()返回布尔类型；若传入的参数token包含在列表中时则返回true ，否则返回 false。
console.assert(p.classList.contains('ouch'), 'That is wrong')
```

### 6.清晰呈现数据

1. console.table()  可以将数组、对象以表格的形式打印输出，如果只输出其中的某一列，可以加上第二个参数，示例如下。 

   ```javascript
   console.table(dogs);
   console.table(dogs, ["age"]);
   ```

2. 将数据分组展示

   ```JavaScript
   const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
   dogs.forEach(dog => {
   	console.group();		
   //	console.groupCollapsed();  // 收起列表
   	console.log(`${dog.name}`);
   	console.log(`${dog.age}`);
   	console.log(`${dog.name} 有 ${dog.age} 岁了`);
   	console.groupEnd();
   });
   // group/groupCollapsed 和 groupEnd之间的内容会自动分组
   ```

### 7.count计数

```javascript
 console.count('Wes')
        console.count('Wes')
        console.count('puppy')
        console.count('puppy')
        console.count('puppy')
Wes: 1
Wes: 2
puppy: 1
puppy: 2
puppy: 3
Wes: 3
```

### 8.timing 计时

```javascript
//异步数据的获取花费了多久时间
console.time('fetching data')
        fetch('https://api.github.com/users/wesbos')
            .then(data => data.json())
            .then(data => {
                console.timeEnd('fetching data')
                console.log(data);
            })
// time('')和timeEnd('')分别控制开始计时和结束计时,里面参数的name要保持一致
```

