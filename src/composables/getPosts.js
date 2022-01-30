import { ref } from "@vue/reactivity";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const loading = ref(true);
  const loadData = async () => {
    try {
      let res = await fetch("api/posts");
      if (!res.ok) {
        throw Error("No data");
      }
      posts.value = await res.json();
      if (posts.value.length > 0) {
        loading.value = false;
      }
    } catch (err) {
      loading.value = false;
      error.value = err.message;
    }
  };
  return { posts, error, loading, loadData };
};

export default getPosts;