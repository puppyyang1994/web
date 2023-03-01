<template>
  <!-- 给整体li -->
   <transition name="todo" appear>
    <li>
    <label>
        <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
        <!-- :checked的作用是 初始化列表的时候决定谁勾选谁不勾选 -->
        <!-- 或者用v-model="todo.done "  props只读 -->
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit" >{{todo.title}}</span>
        <input 
        v-show="todo.isEdit" 
        type="text" 
        :value="todo.title"
         @blur="handleBlur(todo,$event)"
         ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
   </transition>
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

      },
      handleEdit(todo){
        // todo.isEdit = true
        // Vue没有检测到todo.isEdit  没有对应的getter和setter 不会引起vue重新解析模板 所以页面不会呈现

        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          console.log('@');
          this.$set(todo, 'isEdit', true)
        }
        // console.log(todo);
        // 给对象todo身上添加isEdit属性 属性值为true
        // this.$refs.inputTitle.focus()  时机不对  页面还没有渲染input框
        // nextTick指定的回调函数会在DOM节点更新完毕后执行  所以重新解析完模板之后 才会调用函数里的东西
        // 实际开发中用的特别多
        // 作用：在下一次DOM更新结束后执行器指定的回调
        // 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所
        // 指定的回调函数中执行
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
        // 有些人用定时器来实现这个功能 但是不推荐
        // setTimeout(()=>{
        //   this.$refs.inputTitle.focus()
        // })
      },
      // 失去焦点 真正执行修改逻辑
      handleBlur(todo, $event){
        todo.isEdit = false
        // 如果输入为空
        if(!$event.target.value.trim()) return alert('输入不能为空')
        this.$bus.$emit('updateTodo', todo.id, $event.target.value)
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

    .todo-enter-active {
        animation: atguigu 1.5s linear;
    }
    .todo-leave-active {
        animation: atguigu 1.5s linear reverse;
    }
    /* 通过动画实现 */
    @keyframes atguigu{
        from{
            transform: translateX(100%);
        }
        to {
            transform: translateX(0px);
        }
    }

</style>