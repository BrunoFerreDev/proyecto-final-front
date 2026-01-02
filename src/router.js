import { createWebHistory, createRouter } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
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
    {
      path: "/nueva-sancion",
      component: () => import("./views/NuevaSanciones.vue"),
    },
    {
      path: "/partido",
      component: () => import("./views/Partido.vue"),
    },
    {
      path: "/nueva-persona",
      component: () => import("./views/NuevaPersona.vue"),
    },
    {
      path: "/nuevo-club",
      component: () => import("./views/NuevoClub.vue"),
    },
    {
      path: "/competencia",
      component: () => import("./views/Competencia.vue"),
    },
  ],
});

export default router;
