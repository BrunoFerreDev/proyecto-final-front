import { createWebHistory, createRouter } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/clubes",
      component: () => import("./views/Clubes.vue"),
    },
    {
      path: "/torneo",
      component: () => import("./views/Torneo.vue"),
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
      path: "/partido",
      component: () => import("./views/Partido.vue"),
    },
    {
      path: "/competencia",
      component: () => import("./views/Competencia.vue"),
    },
    {
      path: "/nuevo-torneo",
      component: () => import("./views/CreateTorneo.vue"),
    },
    {
      path: "/nueva-sancion",
      component: () => import("./views/NuevaSanciones.vue"),
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
      path: "/nueva-competencia",
      component: () => import("./views/CrearCompetencia.vue"),
    },
    {
      path: "/nuevo-partido",
      component: () => import("./views/ProgramarPartido.vue"),
    },
  ],
  // Esta función se ejecuta en cada navegación
  scrollBehavior(to, from, savedPosition) {
    // Si el usuario le dio a "atrás", mantenemos su posición
    if (savedPosition) {
      return savedPosition;
    } else {
      // De lo contrario, siempre ir al inicio (x: 0, y: 0)
      return { top: 0 };
    }
  },
});

export default router;
