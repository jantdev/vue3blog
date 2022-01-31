<template>
  <div class="singlepost">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      if (props.post.body.length > 100) {
        return props.post.body.substring(0, 100) + "...";
      } else {
        return props.post.body;
      }
    });
    return { snippet };
  },
};
</script>

<style scoped>
.singlepost {
  display: flex;
  flex-direction: column;
   background: #fff;
  width:240px;
  padding:0px 5px;
  height: 300px;
  align-items: center;
}
.singlepost a{
  flex:1;
  text-decoration: none;
  color:#459571;
  align-self: center;
}
.singlepost p{
  flex:4;
  color:#333;
  
}
.singlepost .tags{
  flex:1
}
</style>
