<template>
  
    <div class="todo-header">
      <!-- input框enter 用v-model=title 也可以  或者add函数也行 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
      </div>
  
</template>
<!-- 儿子给父亲传递数据：父亲需要提前给儿子一个函数 这个函数是定义在父亲里的  儿子调用函数 父亲就收到参数了 -->
<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    
    data(){
        return {
          title:''
        }
    },
    methods:{
      add(){
        // this.title 是空 name说明没有输入  让他进if语句就必须!this.title 才会执行
        if(!this.title.trim()) return alert('输入不能为空')
        // 将用户的输入包装成一个todo对象
        // uuid 专门用于生产全球唯一的字符串编码 nanoid
        const todoObj = {id:nanoid(),title:this.title, done:false}
        // 通知APP组件去添加一个todo对象
        this.$emit('addTodo', todoObj)
       
        this.title=''
      }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>