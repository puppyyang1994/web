<template>
   <div class="todo-footer" v-show="total">
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{toCount}}</span> / 全部 {{total}}
        </span>
        <button class="btn btn-danger"  @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos', 'checkAllTodo', 'clearAllTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      toCount(){
        // 这个地方有问题
        // console.log(this.todos.reduce((pre,todo)=> pre+ (todo.done ? 1: 0),0));
        return this.todos.reduce((pre,todo)=> pre+ (todo.done ? 1: 0),0)
      },
      // 简写只有getter
     /*  isAll(){
        return this.toCount === this.total && this.total>0
      } */
      isAll:{
        get(){
          return this.toCount === this.toatal && this.total>0
        },
        set(value){
         this.checkAllTodo(value)
        }
      }
    },
    methods:{
      clearAll(){
        this.clearAllTodo()
      }
     /*  checkAll(e){
        this.checkAllTodo(e.target.checked)
      } */
    }
  /*   computed:{
      // doneTotal(){
      //   let i = 0
      //   this.todos.forEach((todo)=>{
      //     if(todo.done){
      //       i++
      //     }
      //   })
      //   return i
      // }
      // 用 reduce
      doneTotal(){
        // current 是当前正在处理的元素  pre是累加的值 0 是指初始值 
       return  this.todos.reduce((pre,todos)=>pre+(todos.done?1:0),0)
       
         
       
      }
    } */
    
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>