<template>
  <div class="singlepost">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      {{ post.title }}
    </router-link>
    <p>{{ snippet }}</p>
    <div class="tags">
      <span v-for="(tag,index) in post.tags" :key="index" @click="sortPosts(tag)" class="tag"> #{{ tag }} </span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props,{emit}) {
      function sortPosts(tag){
        emit('sorting',tag)  
        
    }
    const snippet = computed(() => {
      if (props.post.body.length > 100) {
        return props.post.body.substring(0, 100) + "...";
      } else {
        return props.post.body;
      }
    });
    return { snippet,sortPosts };
  },
};
</script>

<style scoped>
.singlepost {
  display: flex;
  flex-direction: column;
  background: #fff;
width:240px;

  padding: 0px 5px;
  height: 290px;
  align-items: center;

}
.singlepost a {
  margin: 20px 0px;
  text-decoration: none;
  font-size: 1.17em;
  font-weight: bold;
  color: #459571;
  
}

.singlepost p {
  height: 190px;
  color: #333;
}
.singlepost .tags {
  color:#333;
}
.singlepost .tags .tag{
  cursor: pointer;
}

@media only screen and (max-width: 763px) {
  .singlepost {
    width:initial;
  }
}

</style>
