import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/MyWork.vue";
import Test from "../components/Project.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    props: { language: "en" }
  },
  {
    path: "/home",
    component: Home,
    props: { language: "en" }
  },
  {
    path: "/about",
    component: About,
    props: { language: "en" }
  },
  {
    path: "/projects",
    component: Projects,
    props: { language: "en" }
  },
  {
    path: "/projects/:id",
    name: "project",
    component: Test,
  }


];

const router = new VueRouter({
  routes
});

export default router;
