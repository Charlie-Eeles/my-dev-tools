import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import JsonDiffEditor from "@/pages/JsonDiffEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/jde",
      name: "json-diff-editor",
      component: JsonDiffEditor,
    },
  ],
});

export default router;
