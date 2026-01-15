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
      path: "/partido/:idPartido",
      component: () => import("./views/Partido.vue"),
      props: (route) => ({
        idPartido: route.params.idPartido
      })
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
      props: (route) => ({
        torneoPadre: route.params.nombre,
        idTorneo: route.params.idTorneo
      })
    },
    {
      path: "/nuevo-partido",
      component: () => import("./views/ProgramarPartido.vue"),
    },
    {
      path: "/club/plantilla/:idClub",
      component: () => import("./views/Plantilla.vue"),
    },
    {
      path: "/club/:idClub/ficha",
      component: () => import("./views/FichaClub.vue"),
    },
    {
      path: "/arbitro/:idPersona/ficha",
      name: "ficha-arbitro",
      component: () => import("./views/FichaPersona.vue"),
      // Pasamos 'tipo' como una prop estática y activamos params como props
      props: (route) => ({
        idPersona: route.redirectedFrom.params.idPersona,
        tipo: "arbitro",
      }),
    },
    {
      path: "/jugador/:idPersona/ficha",
      name: "ficha-jugador",
      component: () => import("./views/FichaPersona.vue"),
      // Pasamos 'tipo' como una prop estática y activamos params como props
      props: (route) => ({
        idPersona: route.params.idPersona,
        tipo: "jugador",
      }),
    },
    {
      path: "/cuerpo-tecnico/:idPersona/ficha",
      name: "ficha-cuerpo-tecnico",
      component: () => import("./views/FichaPersona.vue"),
      // Pasamos 'tipo' como una prop estática y activamos params como props
      props: (route) => ({
        idPersona: route.params.idPersona,
        tipo: "cuerpo-tecnico",
      }),
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
