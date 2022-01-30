<template>
  <div class="home">
   <h1>Home</h1>
   <div v-if="error">{{error}}</div>
   <div v-if="loading">loading...</div>
   <PostList :posts="posts"/> 
  </div>
</template>

<script>
import PostList from '../components/Postlist'
import getPosts from '../composables/getPosts'
export default {
  name: 'Home',
  components:{PostList},
  setup(){
  
  const {posts,error,loading,loadData} = getPosts()
  loadData()
    return {posts,error,loading}
  }
  
}
</script>