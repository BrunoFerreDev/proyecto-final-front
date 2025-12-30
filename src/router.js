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
    {
      path: "/clubes",
      component: () => import("./views/Clubes.vue"),
    },
    {
      path: "/arbitros",
      component: () => import("./views/Arbitros.vue"),
    },
    {
      path: "/sanciones",
      component: () => import("./views/Sanciones.vue"),
    },
  ],
});

export default router;
