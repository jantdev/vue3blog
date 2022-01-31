<template>
  <div class="createblog">
    <h1>Create Blog</h1>
    <form >
      <div class="formfield">
        <div class="fieldtitle">Title</div>
        <input
          type="text"
          v-model="title"
          placeholder="blog title"
          class="fieldinput"
        />
      </div>
      <div class="formfield">
        <div class="fieldtitle">Content</div>
        <textarea
          placeholder="blog content"
          v-model="content"
          cols="21"
          rows="10"
          maxlength="200"
          class="fieldinput"
        ></textarea>
      </div>
      <div class="formfield">
        <div class="fieldtitle">Tag</div>
        <input
          type="text"
          placeholder="Write your tag and hit enter"
          v-model="tag"
          @keyup.enter="addTag"
          ref="tagref"
          class="fieldinput"
        />
      </div>
      <div class="formfield">
        <div class="tagField">Your tags-></div>
        <div class="tags">
          <div class="tag" v-for="(tag, index) in tags" :key="index">
            <span>{{ tag }}</span>
            <button type="button" @click="delTag(index)">X</button>
          </div>
        </div>
      </div>
      <div class="formSubmit">
       
        <button type="button" @click="sendData" class="btn submit">Submit</button>
      </div>
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
    async function sendData() {
      if (title.value !== "" && content.value !== "") {
        const data = {
          title: title.value,
          body: content.value,
          tags: tags.value,
        };
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
      tags.value.splice(index, 1);
    }

    return { title, content, sendData, addTag, tag, tags, delTag };
  },
};
</script>

<style scoped>
form {
  max-width: 800px;
  margin: 0 auto;
}
.formfield {
  display: flex;
  padding: 10px;
  gap: 20px;
  
}
.fieldtitle {
  color: #fff;
  flex: 1;
  text-align: right;
  font-size: 20px;
  padding-top: 4px;
}
.fieldinput {
  flex: 2;
  font-size: 20px;
}
input{
  padding:6px 0px 5px 5px;

}
.btn {
  padding: 12px 24px;
  color: #fff;
  background-color: #4c9025;
  text-decoration: none;
}
.tagField {
  flex: 1;
  text-align: right;
  font-size: 20px;
}
.tags {
  flex: 2;
  display: flex;
  border: 2px solid #fff;
  min-height: 3rem;
}
.tag {
  padding: 5px 12px;
  background: royalblue;
  width: 70px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #333;
}
.tag span {
  flex: 3;
  text-align: left;
  align-self:center;
}
.tag button {
  flex: 1;
}
.formSubmit{
  display:flex;
  justify-content: right;
  padding:20px 10px;
}
.submit{
width:130px;

}
</style>
