export default {
    install(vue){
     
        // console.log('@@@install',Vue);
        // 全局过滤器
       Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })
        // 定义全局指令
        Vue.directive('fbind', {})

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })
        // 给Vue原型上添加方法

        Vue.prototype.hello = ()=>{alert('hahah')}

        
    } 
}