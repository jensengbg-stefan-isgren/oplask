import Vue from "vue";
import VueRouter from "vue-router";
import overlay from "../views/overlay";
import search from "../views/search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: search
  },
  {
    path: "/overlay",
    name: "overlay",
    component: overlay
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
