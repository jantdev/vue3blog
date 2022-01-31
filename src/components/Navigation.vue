<template>
   <div id="nav">
    <router-link :to="{name:'Home'}">Home</router-link> |
    <router-link :to="{name:'CreateBlog'}">Create Blog</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  padding:5px 10px;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>