<template>
  <div class="createblog">
    <form @submit.prevent="sendData">
      <h2>Create Blog</h2>
      <div class="formfield">
        <div class="fieldtitle">Title</div>
        <input type="text" v-model="title" placeholder="blog title" />
      </div>
      <div class="formfield">
        <div class="fieldtitle">Content</div>
        <textarea
          placeholder="blog content"
          v-model="content"
          cols="30"
          rows="10"
          maxlength="200"
        ></textarea>
      </div>
      <div class="formfield">
        <div class="fieldtitle">Tag</div>
        <input
          type="text"
          placeholder="write a tag"
          v-model="tag"
          @keyup.enter="addTag"
          ref="tagref"
        />
      </div>
      <div class="tags">
        <div class="tag" v-for="(tag,index) in tags" :key="index">
          <span>{{ tag }}</span>
          <button type="button" @click="delTag(index)">X</button>
        </div>
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CreateBlog",
  setup() {
    const router = useRouter();
    const title = ref("");
    const content = ref("");
    const tag = ref("");
    const tags = ref([]);
    async function Submit() {
      if (title.value !== "" && content.value !== "") {
        const data = { title: title.value, body: content.value, tag: ["test"] };
        const res = await fetch("api/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const results = await res.json();
        if (results.id) {
          router.push({ name: "Home" });
        }
        return;
      }
    }
    function addTag(e) {
      e.preventDefault();
      if (tag.value !== null) {
        if (!tags.value.includes(tag.value)) {
          tags.value.push(tag.value);
        }
      }
      tag.value = "";
    }
    function delTag(index) {
      tags.value.splice(index,1)
    }

    return { title, content, Submit, addTag, tag, tags, delTag };
  },
};
</script>

<style>
form {
  max-width: 800px;
  margin: 0 auto;
}
.formfield {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.fieldtitle {
  color: #fff;
}
</style>
