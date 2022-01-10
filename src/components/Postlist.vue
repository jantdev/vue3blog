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

</style>