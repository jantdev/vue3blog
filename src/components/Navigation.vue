<template>
<header>
  <nav>
  
   <div class="logo">
      <img :src="require('../assets/logo.png')"/>
   </div>
    <div class="laptop-menu">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'CreateBlog' }">Create Blog</router-link>
    </div>
      <div class="nav-icon">
      <button class="nav-icon-link">
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  </nav>
  </header>
</template>

<script>

export default {};
</script>

<style scoped>
header{
background: #fff;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 20%);
}

nav{
  
  padding: 30px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1140px;
  margin:0 auto;
}

.nav-icon-link {
  height: 30px;
  width: 30px;
  border: 0;
  background: none;

}
@media only screen and (min-width: 764px) {
  .nav-icon-link {
    display: none;
  }
  nav{
   
    flex-wrap: nowrap;
  }
  .logo{
  order:0;
  }
   .laptop-menu {
  order:1;

   }
  
}
@media only screen and (max-width: 763px) {
  .nav-icon-link {
    display: block;
  }
  .laptop-menu {
    display:none;
  }
   nav{
   
    padding:10px;
  }
}


.nav-icon-link div {
  width: 100%;
  height: 4px;
  margin-bottom: 3px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
}
.logo img{
  width:30px;
  
}

.laptop-menu a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  padding: 5px 10px;
}

.laptop-menu a.router-link-exact-active {
  text-decoration: underline;
}
</style>
