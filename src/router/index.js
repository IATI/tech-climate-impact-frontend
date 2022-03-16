import { createWebHistory, createRouter } from "vue-router";
import DataView from "../views/DataView.vue";
import MethodologyView from "../views/MethodologyView.vue";

const routes = [
  { path: "/", name: "chart", component: DataView },
  { path: "/table", name: "table", component: DataView },
  { path: "/methodology", name: "methodology", component: MethodologyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
