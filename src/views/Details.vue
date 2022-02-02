<template>
  <h1>details</h1>
    <div v-if="error">{{error}}</div>
      <div v-if="loading">loading...</div>
      <div class="post" v-if="post">
        <div class="postheader">
          <div class="date">Posted on: {{ new Date(post.date).toLocaleString('da-DK',{dateStyle:'long'})}}</div>
        <h3>{{post.title}}</h3>
        </div>
        <p class="pre">{{post.body}}</p>
        <span v-for="tag in post.tags" :key="tag">
          #{{tag}}
        </span>
      </div>
 <button @click="back">Back</button>
</template>

<script>
import getPostsDetails from "../composables/getPostsDetails"
import {useRouter} from "vue-router"
export default {
  name:'Details',
  props:['id'],
  setup(props){
     const router = useRouter();
    function back(){
       router.push({ name: "Home" });
    }
     const {post,error,loading,loadPost} = getPostsDetails(props.id)

  loadPost()

    return {post,error,loading,back}
  }
}
</script>

<style scoped>
.post{
 
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