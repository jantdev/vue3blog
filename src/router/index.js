import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import CreateBlog from "../views/CreateBlog.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:'/createblog',
    name:'CreateBlog',
    component:CreateBlog
  },
  {
    path: "/postsdetails/:id",
    name: "details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;