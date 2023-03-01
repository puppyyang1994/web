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
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo'],
    methods:{
      handleCheck(id){
       
      
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)


      },
      handleDelete(id){
        
        if(confirm('确定删除吗？')){
         
          // this.deleteTodo(id) 函数
          // this.$bus.$emit('deleteTodo', id) 全局总线
          pubsub.publish('deleteTodo', id)
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