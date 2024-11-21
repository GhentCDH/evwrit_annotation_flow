import { createRouter, createWebHistory } from "vue-router";

import AnnotationView from "./views/AnnotationView.vue";
import SearchView from "./views/SearchView.vue";
import DocsView from "./views/DocsView.vue";

const routes = [
  { path: "/", name: "search", component: SearchView, meta: { title: "Zoeken" } },
  { path: "/docs", name: "docs", component: () => DocsView, meta: { title: "Docs" } },
  { path: "/detail/:id", name: "annotation", component: AnnotationView, meta: { title: `Annotatie: {id}` } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  let title = (to.meta.title as string) ?? "";

  Object.entries(to.params ?? {}).forEach(([key, value]) => {
    title = title.replace(`{${key}}`, value.toString());
  });

  const defaultTitle = "Evwrite Annotation Flow";

  window.document.title = `${defaultTitle} - ${title}`;
});
export default router;
