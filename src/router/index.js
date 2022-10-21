import { createWebHistory, createRouter } from "vue-router";
import DataView from "../views/DataView.vue";
import DocEmbedView from "../views/DocEmbedView.vue";

const routes = [
  { path: "/", name: "chart", component: DataView },
  { path: "/table", name: "table", component: DataView },
  { path: "/methodology", name: "methodology", component: DocEmbedView },
  { path: "/outcomes", name: "outcomes", component: DocEmbedView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
