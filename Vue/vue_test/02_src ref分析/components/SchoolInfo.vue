<template>
  <div>
    <h2>学校名称:{{ SchoolName }}</h2>
    <h2>学校地址:{{ Address }}</h2>
  </div>
</template>

<script>

export default {
    name:'SchoolInfo',
    data(){
        return {
            SchoolName:'上规格',
            Address:'北京'
        }
    }
}
</script>

<style>
  
</style>