<template>
    <div>
        <h2>学生:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return {
            name:'张珊',
            age:18
        }
    }

}
</script>


