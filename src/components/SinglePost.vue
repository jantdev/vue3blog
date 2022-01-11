<template>
  <div class="singlepost">
      <router-link :to="{name:'details',params:{id:post.id}}">
      <h3>{{post.title}} - {{post.id}}</h3>
      </router-link>
      <p>{{snippet}}</p>
      <span v-for="tag in post.tags" :key="tag">
          #{{ tag }}
        </span>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],
    setup(props){
        const snippet = computed(()=>{
            if(props.post.body.length>100){
                return props.post.body.substring(0,100)+'...'
            }else{
                return props.post.body
            }
        })
        return {snippet}
    }

}
</script>

<style>

</style>