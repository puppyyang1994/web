<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 头部 -->
     <MyHeader @addTodo="addTodo"></MyHeader>
     <!-- 列表 -->
     <MyList :todos="todos"></MyList>
     <!-- 底部 -->
     <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
// 删除-- 利用消息订阅 App需要数据 item提供数据
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name:'App',
  components:{
    MyHeader,
    MyFooter,
    MyList
  },
  data(){
    return {
      todos:[
                {id:'001', title:'抽烟', done:true},
                {id:'002', title:'喝酒', done:false},
                {id:'003', title:'开车', done:true}
            ]
    }
  },
  methods:{
    // 添加一个todo
    addTodo(todoObj){
      // console.log('我是APP组件，我收到了数据', x);
      this.todos.unshift(todoObj)
    },
    // 取消勾选todo
    checkTodo(id){
      // 注意这里的逻辑
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // 用下划线占位
    deleteTodo(_,id){
      // filter不会改变原数组 注意这里的逻辑
      this.todos = this.todos.filter((todo)=>{
        return  todo.id !==id
      })
    },
    // 更新一个todo
    updateTodo(id, title){
      this.todos.forEach((todo)=>{
        if(todo.id=== id) todo.title = title
      })
    },
    // 全选或者取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    // 
    clearAllTodo(){
      // filter不影响原数组 所以这里要赋值
     this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  // 给收数据的绑定事件  回调函数 拿回数据
  mounted(){
    // app 和item 把item的数据传给APP
    // checkTodo被触发了就会上methods里面找对应的函数
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.pubId= pubsub.subscribe('deleteTodo', this.deleteTodo)
    
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    // this.$bus.$off('deleteTodo')
    // 注意这里是ID
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
/* 添加一个按钮 */
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid #25aade;
  margin-right: 5px;
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>