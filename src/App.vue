<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){
    // this.$message.error("elementui弹出框")
  }
}
</script>

<style>
    html,body{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
        background: rgb(222,222,222);
    }
    #app {
        width:100%;
        height:100%;

    }
    a{
        text-decoration: none;
    }
</style>
