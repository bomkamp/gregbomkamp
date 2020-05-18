import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home/Home.vue";

const PATHNAME_HOME = "home";

const routes: RouteConfig[] = [
  { path: "/", name: PATHNAME_HOME, component: Home },
  { path: "*", component: Home },
];

export const router: VueRouter = new VueRouter({
  routes,
  mode: "history",
});
