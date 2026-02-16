import { createWebHistory, createRouter } from "vue-router";

// 1. Definimos las rutas
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("./views/Login.vue"),
    meta: {
      hideHeader: true,
      hideFooter: true,
      requiresAuth: false, // Esta ruta es pública
    },
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: () => import("./views/Home.vue"),
    meta: { requiresAuth: true }, // Marcamos que requiere token
  },
  {
    path: "/clubes",
    component: () => import("./views/Clubes.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/torneo",
    component: () => import("./views/NewTorneoView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/torneo/:idTorneo/competencia/:idCompetencia",
    name: "detalle-competencia",
    component: () => import("./views/CompetenciaView.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      idTorneo: route.params.idTorneo,
      idCompetencia: route.params.idCompetencia,
    }),
  },
  {
    path: "/arbitros",
    component: () => import("./views/ArbitrosLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: () => import("./views/ArbitrosLista.vue"),
      },
      {
        path: "costos",
        component: () => import("./components/CostosEncuentro.vue"),
      },
      {
        path: "aranceles",
        component: () => import("./components/Aranceles.vue"),
      },
    ],
  },
  {
    path: "/sanciones",
    component: () => import("./views/Sanciones.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/partido/:idPartido",
    component: () => import("./views/Partido.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      idPartido: route.params.idPartido,
    }),
  },
  {
    path: "/competencia",
    component: () => import("./views/Competencia.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nuevo-torneo",
    component: () => import("./views/CreateTorneo.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nueva-sancion",
    component: () => import("./views/NuevaSanciones.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nueva-persona",
    component: () => import("./views/NuevaPersona.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nuevo-club",
    component: () => import("./views/NuevoClub.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nueva-competencia",
    component: () => import("./views/CrearCompetencia.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      torneoPadre: route.params.nombre,
      idTorneo: route.params.idTorneo,
    }),
  },
  {
    path: "/nuevo-partido",
    component: () => import("./views/ProgramarPartido.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/club/plantilla/:idClub",
    component: () => import("./views/Plantilla.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/club/editar/:idClub",
    component: () => import("./views/EditClubView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/club/:idClub/ficha",
    component: () => import("./views/FichaClub.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/arbitro/:idPersona/ficha",
    name: "ficha-arbitro",
    component: () => import("./views/FichaPersona.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      idPersona: route.params.idPersona,
      tipo: "arbitro",
    }),
  },
  {
    path: "/jugador/:idPersona/ficha",
    name: "ficha-jugador",
    component: () => import("./views/FichaPersona.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      idPersona: route.params.idPersona,
      tipo: "jugador",
    }),
  },
  {
    path: "/cuerpo-tecnico/:idPersona/ficha",
    name: "ficha-cuerpo-tecnico",
    component: () => import("./views/FichaPersona.vue"),
    meta: { requiresAuth: true },
    props: (route) => ({
      idPersona: route.params.idPersona,
      tipo: "cuerpo-tecnico",
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 2. Función auxiliar para decodificar JWT (necesaria para validar expiración)
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

// 3. Función para verificar validez del token
const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const decoded = parseJwt(token);
  if (!decoded || !decoded.exp) return false;

  const currentTime = Date.now() / 1000;
  // Si la fecha de expiración es menor al tiempo actual, expiró
  if (decoded.exp < currentTime) {
    return false;
  }
  return true;
};

// 4. GUARDIÁN GLOBAL (Reemplaza los 'beforeEnter' individuales)
router.beforeEach((to, from, next) => {
  const isAuthenticated = isTokenValid();

  // Caso A: La ruta requiere autenticación y NO estamos logueados
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si el token expiró o no existe, limpiar storage y mandar al Login
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    return next({ path: "/" });
  }

  // Caso B: Estamos intentando ir al Login ('/') pero YA estamos logueados
  if (to.path === "/" && isAuthenticated) {
    return next({ path: "/inicio" }); // Redirigir al dashboard
  }

  // Caso C: Todo correcto, continuar
  next();
});

export default router;
