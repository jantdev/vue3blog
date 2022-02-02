<template>
  <TagSorter :post="posts" @sorting="sortpost" />
  <div class="postlist">
    <SinglePost
      v-for="post in sortedPosts"
      :key="post.id"
      :post="post"
      @sorting="sortpost"
    />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import TagSorter from "./TagSorter.vue";
import { ref, onMounted } from "vue";

export default {
  props: ["posts"],
  components: { SinglePost, TagSorter },
  setup(props) {
    const theposts = ref([]);
    const sortedPosts = ref([]);
    function sortpost(v) {
      if (v == "all") {
        sortedPosts.value = theposts.value;
        return;
      }
      sortedPosts.value = theposts.value;
      sortedPosts.value = sortedPosts.value.filter((e) => {
        if (e.tags.includes(v)) {
          return e;
        }
      });
    }

    onMounted(async () => {
      theposts.value = await props.posts;
      sortedPosts.value = theposts.value;
    });

    return {
      theposts,
      sortpost,
      sortedPosts,
    };
  },
};
</script>

<style scoped>
.postlist {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  justify-content: center;
  flex-direction: row;
}
@media only screen and (max-width: 763px) {
  .postlist {
    flex-direction: column;
  }
}

</style>
