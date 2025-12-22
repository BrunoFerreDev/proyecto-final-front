import { createWebHistory, createRouter } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   component: () => import("./views/Home.vue"),
    // },
    {
      path: "/nuevo-torneo",
      component: () => import("./views/CreateTorneo.vue"),
    },
    {
      path: "/torneo",
      component: () => import("./views/Torneo.vue"),
    },
  ],
});

export default router;
