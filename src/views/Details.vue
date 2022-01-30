<template>
  <h1>details</h1>
    <div v-if="error">{{error}}</div>
      <div v-if="loading">loading...</div>
      <div class="post" v-if="post">
        <h3>{{post.title}}</h3>
        <p class="pre">{{post.body}}</p>
        <span v-for="tag in post.tags" :key="tag">
          #{{tag}}
        </span>
      </div>
 
</template>

<script>
import getPostsDetails from "../composables/getPostsDetails"
export default {
  name:'Details',
  props:['id'],
  setup(props){
    
     const {post,error,loading,loadPost} = getPostsDetails(props.id)

  loadPost()

    return {post,error,loading}
  }
}
</script>

<style>
.post{
  max-width:1200px;
  margin:0 auto;
}
.post p{
  color:#999;
  line-height: 1.5rem;
  margin-top:40px;
}
.post .pre{
  white-space: pre-wrap;
}
</style>