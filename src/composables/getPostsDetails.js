import { ref } from "@vue/reactivity";

const getPostsDetails = (id) => {
  const post = ref(null);
  const error = ref(null);
  const loading = ref(true);
  const loadPost = async () => {
    try {
      let data = await fetch(`http://localhost:5000/posts/${id}`);
      console.log(`api/posts/${id}`);
      if (!data.ok) {
        throw Error("No post");
      }
      post.value = await data.json();

      loading.value = false;
    } catch (err) {
      loading.value = false;
      error.value = err.message;
    }
  };
  return { post, error, loading, loadPost };
};

export default getPostsDetails;
