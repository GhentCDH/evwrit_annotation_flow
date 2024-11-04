import { createRouter, createWebHistory } from "vue-router";

import AnnotationView from "./views/AnnotationView.vue";
import SearchView from "./views/SearchView.vue";

const routes = [
  { path: "/", name: "search", component: SearchView },
  { path: "/detail/:id", name: "annotation", component: AnnotationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
