# 每日作业-JavaScript第06天

## 1 - 基础作业

### 1.1  数组操作

​	题目描述：把下面数组的首尾两个元素互换

​	var arr = ["鹿晗","王俊凯","蔡徐坤","彭于晏","周杰伦","刘德华","赵本山"]；

```javascript
    
    //splice
       arr.splice(0, 1, '赵本山'); //取走第0个元素，插入赵本山
       arr.splice(6, 1, '鹿晗');
        console.log(arr);

    // 函数
    
   jachange(arr);
  function change(arr){
    var first = arr[0];
        var last = arr[arr.length-1];
        last = arr[0];
      first = arr[arr.length-1];
      console.log(arr);
  }
       
```



### 1.2 计算指定日期是今年的第几天

​	题目描述：制作一个函数，getDayNum( 年月日日期 )，可以返回指定日期是当前年的第几天

​	例：  getDayNum( “2019-1-2”)    返回值为：2

```javascript
  console.log(getDayNum('2019-1-2'));
        function getDayNum(time) {
            var thisDay = new Date(time); //当年的时间
            var getYear = thisDay.getFullYear();//获得当前时间的年份
            var firstDay = +new Date(getYear.toString()+ '-'+ '1'+'-'+'1'); //这年第一天的毫秒数
          
            var lastDay = +new Date(time); //当前时间的毫秒数
            var times = (lastDay-firstDay)/1000;
            var d = parseInt(times/60/60/24)+1;
            return d ;
        }
      
```



### 1.3 16进制随机颜色，

​	题目描述：使用Math对象，制作一个16进制的随机颜色

​	题目提示：16进制包括 “ 0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F ”

​	例： “#f23a4b” 

```javascript
  // 	题目描述：使用Math对象，制作一个16进制的随机颜色
        // 16进制包括 “ 0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F ”
        // 核心：我们想要得到两个数之间的随机整数 并且 包含这2个整数
        // Math.floor(Math.random() * (max - min + 1)) + min;
        var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        function getRandomColor() {
        var str = '#'
        for (var i = 0; i<6; i++){
            function getRandom(min, max){
            return   Math.floor(Math.random() * (max - min + 1) + min);
        }
        var re = arr[getRandom(0, arr.length-1)];
        str = str+re;
        }
        console.log(str.toUpperCase());
        }
      
        getRandomColor(); 
```



### 1.4 字符串操作

1.（字符）判断一个字符（比如”a”）是否出现在另一个字符（比如”2340sadfj2affa2”）中，如果出现，并求出现了几次。

```javascript
 // （字符）判断一个字符（比如”a”）是否出现在另一个字符（比如”2340sadfj2affa2”）中，如果出现，并求出现了几次。
        var str = '2340sadfj2affa2';
        var n = str.indexOf('a');
        if(n==-1){
            alert('没出现');
        }else{
            alert('出现了');
        }
      var count = 0;
      var arr = str.split('');//将字符串转换为数组处理
        for(var i = 0; i<arr.length; i++){
            if(arr[i]=='a'){
                count++;
            }
        }
        console.log('出现了' + count + '次');
```



2. （字符，偏难）获取一个长文件路径（比如”E:\itcast\class\php\js\day2\abc.html”）中的文件名及其后缀（结果应该为”abc”和”html”）。

   ```javascript
   // （字符，偏难）获取一个长文件路径
           // （比如”E:\itcast\class\php\js\day2\abc.html”）中的文件名及其后缀（结果应该为”abc”和”html”）。
           //注意：在js中，字符串中的特殊字符需要使用反斜杠进行转义，比如“\”要写成“\\”，换行要写成“\n”，单引号要写成“ \’ ”，双引号要写成“ \” ”
           var str = 'E:\\itcast\\class\\php\\js\\day2\\abc.html';
           var gang = str.lastIndexOf('\\');
           var dian = str.lastIndexOf('.');
           var ming = str.substring(gang+1, dian); // dian是不包含在内的   字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
           var houzhui = str.substring(dian+1);  //如果只写一个参数 substr 和 substring是一样的 都是表示这个位置开始 到结束
           console.log('文件名：'+ming+'后缀名：'+ houzhui);
   ```

   

3. （字符，偏难）利用var s1 = prompt(“请输入任意字符”,””)可以获取用户输入的字符（存到变量s1中了），试编程将用户输入的字符“反转顺序”并首尾字母转为大写，其他字母转为小写后alert出来。

   ```javascript
    // （字符，偏难）利用var s1 = prompt(“请输入任意字符”,””)可以获取用户输入的字符
           // （存到变量s1中了），试编程将用户输入的字符“反转顺序”并首尾字母转为大写，其他字母转为小写后alert出来。
           var s1 = prompt('请输入任意字符');
           var arr = s1.split('');  //先变为数组
           var newArr = arr.reverse(); //翻转顺序
           for(var i = 0; i<newArr.length-1; i++){
               if(i==0||i==newArr.length-1){
                   newArr[i] = newArr[i].toUpperCase();
               }else{
                   newArr[i]= newArr[i].toLowerCase();
               }
           }
           
          
           var str = newArr.join('');
           alert(str);
   ```

   

4.（Math，逻辑）编写一个函数，带一个参数n，在页面上输出1～n（n>1）之间所有能同时被3和5整除的偶数，并要求每行只输出6个（即超过6个后要换行再输出）。

```javascript
 getNum(1000);

        function getNum(n) {
            var count = 0;
           
            for(var i = 1; i<=n; i++){
               
                if(i%2==0 & i%3==0 && i%5==0){
                    console.log(i+'');
                    count++;
                    if(count%6==0){
                       console.log('<br />');
                    }
                }   
            
        }
    }
```



5.（Date）打开页面的时候在页面上使用中文显示当天的日期和星期（即“星期几”）。

```javascript
function getTime() {
    var nowTime = new Date(); //什么都不输入 返回的是当前的时间
        var year = nowTime.getFullYear();
        var month = nowTime.getMonth()+1;
        var date = nowTime.getDate();
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var day = nowTime.getDay();

        var h = nowTime.getHours();
        var m = nowTime.getMinutes();
        var s = nowTime.getSeconds();
        month = month < 10? '0'+month:month;
        date = date<10? '0'+date:date;
        h = h<10? '0'+h:h;
        m = m<10? '0'+m:m;
        s = s<10? '0'+s:s;

       return '今天是'+year+'年'+month +'月'+date+ '日'+ arr[day]+h+'时'+m+'分'+s+'秒';
     
 }
       
      
     console.log(getTime());
```



## 2 - 进阶作业

### 2.1  随机选学员

​	从以下学员名单中随机选出4个学员：

​	var arr = ["鹿晗","王俊凯","蔡徐坤","彭于晏","周杰伦","刘德华","赵本山"]；

​	注意：不要有重复的学员

```javascript
var arr =  ["鹿晗","王俊凯","蔡徐坤","彭于晏","周杰伦","刘德华","赵本山"];
    function getRandom(min, max) {
                return Math.floor(Math.random()*(max-min+1))+min;
            }
   
    var numArr = []; //// 存放索引的数组
    var newArr= []; // //存放筛选出来的4个学员
     // 如果真的突然出现筛选出重复的人，最多不会出现3次等
        for(var i = 0; i<11; i++){
           
           var num = getRandom(0,6);
           if(numArr.indexOf(num)==-1){
                // 如果在numArray空数组里面检测不到 随机的num,就放到数组里面
               numArr[numArr.length]=num;
               newArr[newArr.length]=arr[num];
           }
           if(numArr.length==4){
               break;
           }
        }
        console.log(newArr);
       
```



### 2.2  随机排序

​	对以下学员随机排序，生成一个新数组：

​	var arr = ["鹿晗","王俊凯","蔡徐坤","彭于晏","周杰伦","刘德华","赵本山"]；

​	

```javascript
 var arr = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"];
        // var arr = [1, 2, 3, 6, 5, 0];

        // arr.sort();
        // console.log(arr);

        // arr.sort(function(a,b){
        //     a -b;//正序
        // });

        // 接下来封装自己的计算函数
        arr.sort(function() {
            //前置知识点：Math.random 结果是：0--1之间的数字，减去0.5，这样的最后的结果是不准确的（丢失精度问题） 利用这一弱点。
            return Math.random() - 0.5;
        });
        console.log(arr);
```







