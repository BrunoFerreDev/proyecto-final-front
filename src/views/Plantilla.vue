<script setup>
import TableJugadores from "../components/tables/TableJugadores.vue";
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import StatsCard from "../components/StatsCard.vue";
import axios from "axios";
const categoria = ref("PRIMERA DIVISION");
const selectedCategoaria = ref("asc");
const router = useRouter();
const idClub = router.currentRoute.value.params.idClub;
const API_BASE_URL = `http://localhost:8080/api`;
const club = ref({});
const jugadores = ref([]);
const pagination = ref({
  page: 0,
  size: 10,
  totalPages: 0,
  totalElements: 0,
});
const cuerpoTecnico = ref({
  nombre: "No asignado",
  apellido: "No asignado",
});
const fetchClub = async () => {
  // TODO: Implementar llamada a API para obtener club
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/club/informacion`, {
      params: {
        idClub: idClub
      }
    }
    );
    club.value = data;
  } catch (error) {
    console.error(error);
  }
};

const fetchJugadores = async () => {
  // TODO: Implementar llamada a API para obtener jugadores
  try {
    const { data } = await axios.get(`${API_BASE_URL}/club/${idClub}/plantilla`, {
      params: {
        page: pagination.value.page,
        size: pagination.value.size,
        sort: "categoriaMaxima," + selectedCategoaria.value,
      },
    });
    jugadores.value = data.content;
    pagination.value.totalPages = data.totalPages;
    pagination.value.totalElements = data.totalElements;
    console.log(jugadores.value);

  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchClub();
  fetchJugadores();
});
// --- WATCHERS ---
// CORRECCIÓN 3: Sintaxis correcta para vigilar propiedades dentro de un ref
watch([() => pagination.value.page, () => pagination.value.size], () => {
  fetchJugadores();
});
watch(
  () => categoria.value,
  () => {
    if (categoria.value === "PRIMERA DIVISION") {
      resetPagination();
      selectedCategoaria.value = "asc";
    } else {
      selectedCategoaria.value = "desc";
    }
    fetchJugadores();
  }
);

// --- EVENTOS ---
const handlePageChange = (newPage) => {
  // Solo actualizamos el valor, el watcher detectará el cambio y llamará a fetchArbitros
  pagination.value.page = newPage;
};

const resetPagination = () => {
  pagination.value.page = 0;
  pagination.value.size = 10;
};
</script>

<template>
  <div class="flex flex-col max-w-[1200px] py-4 px-4 mx-auto w-full gap-6">
    <!-- PageHeading -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="flex gap-4 items-center">
        <div
          class="size-16 rounded-xl bg-white border border-slate-200 p-2 shadow-sm flex items-center justify-center shrink-0">
          <!-- Placeholder Team Logo -->
          <span class="material-symbols-outlined text-4xl text-[#0d7ff2]">shield</span>
        </div>
        <div>
          <h1 class="text-3xl font-black leading-tight tracking-tight text-slate-900">
            Plantilla: {{ club?.nombre }}
          </h1>
          <p class="text-slate-500 text-base mt-1">
            Temporada 2024 - Primera División y Sub 21
          </p>
        </div>
      </div>
      <button
        class="bg-[#0d7ff2] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 h-11 px-5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
        <span class="material-symbols-outlined text-lg">person_add</span>
        Añadir Jugador
      </button>
    </div>
    <!-- Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard :valor="pagination.totalElements" titulo="Total Jugadores" fontSize="text-2xl" />
      <StatsCard titulo="D.T Primera División" :valor="cuerpoTecnico.nombre + ' ' + cuerpoTecnico.apellido"
        fontSize="text-lg" />
    </div>
    <!-- Filters & Actions -->
    <div
      class="flex flex-col lg:flex-row gap-4 items-end lg:items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div class="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="relative group">
          <span class="absolute left-3 top-3.5 text-slate-400 material-symbols-outlined">search</span>
          <input
            class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/50 focus:border-[#0d7ff2] transition-all text-slate-900 placeholder:text-slate-400"
            placeholder="Buscar por nombre o dorsal..." type="text" />
        </div>
        <div class="relative">
          <select
            class="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/50 focus:border-[#0d7ff2] appearance-none text-slate-700 cursor-pointer">
            <option value="">Todos los estados</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="injured">Lesionado</option>
          </select>
          <span
            class="absolute right-3 top-3.5 text-slate-400 pointer-events-none material-symbols-outlined">expand_more</span>
        </div>
        <div class="relative">
          <select v-model="categoria"
            class="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/50 focus:border-[#0d7ff2] appearance-none text-slate-700 cursor-pointer">
            <option value="" disabled selected>Categorías</option>
            <option value="PRIMERA DIVISION">Primera División</option>
            <option value="SUB-21">Sub 21</option>
          </select>
          <span
            class="absolute right-3 top-3.5 text-slate-400 pointer-events-none material-symbols-outlined">expand_more</span>
        </div>
      </div>
      <!-- <div class="flex gap-2 w-full lg:w-auto justify-end">
        <button
          class="flex items-center justify-center size-11 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          title="Exportar CSV"
        >
          <span class="material-symbols-outlined">download</span>
        </button>
        <button
          class="flex items-center justify-center size-11 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          title="Vista de lista"
        >
          <span class="material-symbols-outlined">view_list</span>
        </button>
      </div> -->
    </div>
    <!-- Players Table -->
    <TableJugadores :jugadores="jugadores" :page="pagination.page" :total-pages="pagination.totalPages"
      :total-elements="pagination.totalElements" :size="pagination.size" :categoria="categoria"
      @page-change="handlePageChange" />
  </div>
</template>
