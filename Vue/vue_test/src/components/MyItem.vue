<template>
   <li>
    <label>
        <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
        <!-- :checked的作用是 初始化列表的时候决定谁勾选谁不勾选 -->
        <!-- 或者用v-model="todo.done "  props只读 -->
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo', 'checkTodo', 'deleteTodo'],
    methods:{
      handleCheck(id){
        // console.log(id);
        // 通知APP组件要取反  数据在哪里 对数据的操作就在那里
        this.checkTodo(id)

      },
      handleDelete(id){
        
        if(confirm('确定删除吗？')){
          // 通知APP删除对应的项
          console.log(1);
          this.deleteTodo(id)
        }

      }
    }
    
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: gray;
}
li:hover button{
 display: block;
}
</style>