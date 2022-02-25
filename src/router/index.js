import { createWebHistory, createRouter } from "vue-router";
import ChartView from "../views/ChartView.vue";
import TableView from "../views/TableView.vue";
import MethodologyView from "../views/MethodologyView.vue";

const routes = [
  { path: "/", name: "chart", component: ChartView },
  { path: "/table", name: "table", component: TableView },
  { path: "/methodology", name: "methodology", component: MethodologyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
