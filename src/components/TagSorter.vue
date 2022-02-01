<template>
  <div class="tagsorter">
    <div class="sortertext">Sort by tags:</div>
    <select class="sorter" v-model="selected" @change="sortPosts">
       
      <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
       <option value="all">Remove filter</option>
    </select>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "TagSorter",
  props: ["post"],
  setup(props,{emit}) {
    const selected = ref('')
    const tags = ref();
    function sortPosts(){
        emit('sorting',selected.value)  
        
    }
    onMounted(() => {
      let tagArr = [];
      props.post.forEach((post) => {
        tagArr.push(...post.tags);
      });
      tagArr = tagArr.filter((element, index) => {
        return tagArr.indexOf(element) === index;
      });
      tags.value = tagArr.sort()
    });
    

    return {
      tags,
      selected,
      sortPosts
    };

  },
};
</script>

<style scoped>
.tagsorter{
  display:flex;
 flex-direction: row;
 justify-content: right;
 align-items: center;
 padding:0rem 1rem 2rem 1rem;
}
.sortertext{
  margin-right:20px;
}
.sorter{
  height:20px;
  font-size: 1rem;
}

</style>
