<template>
  <div class="createblog">
    <form>
      <h2>Create Blog</h2>
      <div class="formfield">
        <div class="fieldtitle">Title</div>
        <input type="text" v-model="title" placeholder="blog title" />
      </div>
      <div class="formfiel">
        <div class="fieldtitle">Content</div>
        <textarea
          placeholder="blog content"
          v-model="content"
          cols="30"
          rows="10"
          maxlength="200"
        ></textarea>
      </div>
      <button type="submit" @click.prevent="Submit">submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {useRouter} from "vue-router"
export default {
  name: "CreateBlog",
  setup() {
      const router = useRouter()
    const title = ref("");
    const content = ref("");

    async function Submit() {
      
      if (title.value !== "" && content.value !== "") {
          const data= {title:title.value,body:content.value,tag:['test']}
        const res = await fetch("api/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const results = await res.json();
       if(results.id){
           router.push({name: 'Home'})
       }
       return
        
        
      }
    }

    return { title, content, Submit };
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
