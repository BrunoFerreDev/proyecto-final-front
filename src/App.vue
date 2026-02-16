<script setup>
import Header from "./components/Header.vue";
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Configuración: 30 minutos en milisegundos
const TIMEOUT_DURATION = 45 * 60 * 1000;
let logoutTimer = null;

// Eventos que detectan actividad del usuario
const activityEvents = [
  'mousedown',
  'mousemove',
  'keydown',
  'scroll',
  'touchstart'
];

// Función para cerrar sesión
const logoutUser = () => {
  // 1. Verificar si hay sesión activa para no redirigir innecesariamente
  const token = localStorage.getItem('token');

  if (token) {
    console.log("Sesión expirada por inactividad.");
    // 2. Limpiar token
    localStorage.removeItem('token');

    // 3. Redirigir al login
    router.push('/');

    // Opcional: Mostrar una alerta
    alert("Tu sesión ha expirado por inactividad.");
  }
};

// Función para reiniciar el contador
const resetTimer = () => {
  // Solo activamos el timer si el usuario está logueado
  if (!localStorage.getItem('token')) {
    return;
  }

  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(logoutUser, TIMEOUT_DURATION);
};

onMounted(() => {
  // 1. Iniciar el timer apenas carga la app
  resetTimer();

  // 2. Escuchar cualquier movimiento o tecla para reiniciar el timer
  activityEvents.forEach(event => {
    window.addEventListener(event, resetTimer);
  });
});

onUnmounted(() => {
  // Limpieza de eventos (buenas prácticas para evitar fugas de memoria)
  activityEvents.forEach(event => {
    window.removeEventListener(event, resetTimer);
  });
  clearTimeout(logoutTimer);
});
</script>

<template>
  <Header v-if="!$route.meta.hideHeader" />
  <main class="w-full overflow-y-auto">
    <RouterView />
  </main>
</template>
