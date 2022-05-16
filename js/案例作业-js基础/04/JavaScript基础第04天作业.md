# 每日作业-JavaScript第04天

## 1 - 函数编写

1. 写一个函数，能返回传入的任意两个数字的最大值。

   ```javascript
   function getMax(num1, num2){
           return num1>num2?num1: num2;
       }
   
       var re = getMax(1,2);
       console.log(re);
   ```

   

2. 写一个函数，能返回传入的任意三个数字的最大值。

   ```javascript
    function getMax(num1, num2, num3){
           if(num1>num2&&num1>num3){
               return num1;
           }else if(num2>num1&&num2>num3){
               return num2;
           }else{
               return num3;
           }
       }
       
       var re = getMax(11,56,9);
       console.log(re);
   ```

   

3. 写一个函数，能判断传入的一个数值是否是质数，如果是质数返回true，如果不是质数返回false，(质数：从2开始只能被1和自身整数的数)

   ```javascript
    function isPrimeNum(num){
          if(num==1){
              return true;
          }else {
           for(var i = 2; i<num; i++){
              if(num%i==0){
                  return false;
              }
          } 
          return true;
       }
       }
      var re= isPrimeNum(3);
      console.log(re);
   ```

   

   

4. 写一个函数，能翻转传入的数组`['red', 'green', 'blue', 'pink', 'purple']`，并把翻转结果通过返回值返回。

   ```javascript
   
       function reverseArr(arr){
           var newArr = [];
               for(var j = arr.length-1; j>=0; j--){
                   newArr[newArr.length]= arr[j];
                     // 还要判断一下输入的是不是数组元素
                   if(arr[j] instanceof Array){
                       reverseArr(arr[j]);
                   }
               }  
           return newArr;
       }
   
      var res = reverseArr(['red', 'green', 'blue', 'pink', 'purple']);
      console.log(res);
   ```

   

   

5. 写一个函数，能对传入的数组`[10,32,41,8,9,18]`按照从小到大进行排序，并把排序结果通过返回值返回

   ```javascript
   //写一个函数，能对传入的数组`[10,32,41,8,9,18]`按照从大到小进行排序，并把排序结果通过返回值返回
       
       function revArr(arr){
           for(var i = 1; i<=arr.length; i++){
               for(var j =0; j<=arr.length-i-1; j++){
                   if(arr[j]<arr[j+1]){
                       var temp = arr[j];
                       arr[j]= arr[j+1];
                       arr[j+1]= temp;
                   }
               }
           }
           return arr;
       }
       var arr = [10,32,41,8,9,18];
       console.log(revArr(arr));
   ```

   

## 2 - 简易计算器

- 题目描述：

  - 用户在弹出的输入框中选择要做的运算

  - 用户选择后弹出两个输入框，让用户输入数据 

  - 根据用户选择的操作和输入的数据，计算出最后结果并弹出提示框显示结果

  - 操作界面如下：

    ![](images\4.gif)

- 题目提示：

  - 用户通过在弹出的输入框输入操作对应的数值选择需要的计算
  - 弹出另外两个输入框，收集用户输入的参与运算的数据
  - 把计算结果通过提示框显示出来

```javascript
 // 简易计算器
    // 用户在弹出的输入框中选择要做的运算
    var choice = prompt('欢迎使用建议计算器：\n 1: 加法运算\n 2: 减法运算\n 3: 乘法运算\n 4: 除法运算\n 5:退出\n 请输入您的选项：');
    var num1 = parseInt(prompt('请输入第一个数字：')); 
    var num2 = parseInt(prompt('请输入第二个数字：'));

    switch (choice) {
        case '1':
            var res = plusNum(num1, num2);
            alert('您的结果为:' + res);
            //或者也可以直接用return
            break;
        case '2':
            var res = minusNum(num1, num2);
            alert('您的结果为:' + res);
            break;
        case '3':
            var res = multipleNum(num1,num2);
            alert('您的结果为:' + res);
            break;
        case '4':
            var res = divideNum(num1, num2); 
            alert('您的结果为:' + res);
            break;
        case '5':
            alert('退出');
            break;
    
        default:
            break;
    }

    function plusNum(num1, num2){
        return num1+num2;
    }
    function minusNum(num1, num2){
        return num1-num2;
    }
    function multipleNum(num1,num2){
        return num1*num2;
    }
    function divideNum(num1, num2) {
        return num1/num2;
    }
```

