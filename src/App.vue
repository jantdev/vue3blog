<template>
 <Navigation/>
<div class="container">

  <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"

export default {
 name:'App',
 components:{
   Navigation
 }
}
</script>

<style>
*{
  margin:0;
  padding:0;
   box-sizing: border-box;
}
body{
  background:#eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d5dce4;
  
}
.container{
  max-width: 1140px;
  margin:0 auto;
}
h1{
  margin-bottom: 40px;
}
</style>
