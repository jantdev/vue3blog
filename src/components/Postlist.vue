<template>

  <div class="postlist">
  
    <SinglePost  v-for="post in posts" :key="post.id" :post="post"/>
 
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  props:['posts'],
  components:{SinglePost},
 
}
</script>

<style scoped>
.postlist{
  display:flex;
flex-wrap: wrap;


gap:10px;
justify-content: center;
}

</style>