<template>
<h2>postlist</h2>
  <div class="postlist">
    <div class="post" v-for="post in posts" :key="post.id">
    <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  props:['posts'],
  components:{SinglePost},
 
}
</script>

<style>
.postlist{
  display:flex;
flex-wrap: wrap;
  gap:20px;
  max-width:1140px;
 margin:0 auto;
}
.post{
  background: #fff;
  width:200px;
  padding:20px;
  
}
</style>