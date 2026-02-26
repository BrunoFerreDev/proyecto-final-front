<script setup>
import { IconSearch, IconPlus } from "@tabler/icons-vue";
import TableArbitros from "../components/tables/TableArbitros.vue";
import FilterClubes from "../components/FilterClubes.vue";
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import apiClient from "../api/axios";
import { IconChevronRight } from "@tabler/icons-vue";
import axios from "axios";


const arbitros = ref([]);
const router = useRouter();

// Inicializamos la paginación
const pagination = ref({
  page: 0, // Frontend usa base 1
  size: 5, // Tamaño de página (ajústalo según prefieras)
  totalPages: 0,
  totalElements: 0,
});

const navigateTo = (path) => {
  router.push(path);
};

const fetchArbitros = async () => {
  try {
    // CORRECCIÓN 1: Usar los valores dinámicos de pagination.
    // CORRECCIÓN 2: Restar 1 a la página porque el Backend empieza en 0, pero el Frontend en 1.
    const params = {
      page: pagination.value.page,
      size: pagination.value.size,
      tipo: 2,
    };

    const response = await apiClient.get(`/personas`, {
      params,
    });

    arbitros.value = response.data.content;

    // Solo actualizamos totales. NO actualizamos 'page' ni 'size' aquí
    // para evitar conflictos con el watcher o bucles infinitos.
    pagination.value.totalPages = response.data.totalPages;
    pagination.value.totalElements = response.data.totalElements;
  } catch (error) {
    console.error("Error fetching arbitros:", error);
  }
};

onMounted(() => {
  fetchArbitros();
});

// --- WATCHERS ---
// CORRECCIÓN 3: Sintaxis correcta para vigilar propiedades dentro de un ref
watch([() => pagination.value.page, () => pagination.value.size], () => {
  fetchArbitros();
});

// --- EVENTOS ---
const handlePageChange = (newPage) => {
  // Solo actualizamos el valor, el watcher detectará el cambio y llamará a fetchArbitros
  pagination.value.page = newPage;
};
const handleSearch = async (query) => {
  console.log(query);
  if (!query.trim()) {
    fetchArbitros(page.value, size.value);
    return;
  }
  try {
    const response = await axios.get(`http://localhost:8080/api/arbitros/buscar-nombre`, {
      params: {
        nombre: query
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
      arbitros.value = response.data.content;
  } catch (error) {
    console.error('Error al buscar arbitros:', error)
    arbitros.value = [];
  }
}

</script>
<template>
  <main class="flex flex-col items-center py-8 px-4 md:px-10">
    <div class="max-w-300 w-full flex flex-col gap-6">
      <!-- Breadcrumbs -->
      <nav class="flex flex-wrap gap-2 items-center text-sm">
        <a class="text-[#49739c] font-medium hover:underline" href="#">Inicio</a>
        <span class="text-[#49739c] font-medium">/</span>
        <a class="text-[#49739c] font-medium hover:underline" href="#">Gestión de Liga</a>
        <span class="text-[#49739c] font-medium">/</span>
        <span class="text-[#0d141c] font-medium">Árbitros</span>
        <span class="text-[#49739c] font-medium">
          <IconChevronRight size="14" />
        </span>
        <select name="nav" id="nav">
          <RouterLink to="aranceles" v-slot="{ isActive }">
            <option :class="[isActive && 'bg-[#0d7ff2] text-slate-50']">Aranceles</option>
          </RouterLink>
        </select>

      </nav>
      <!-- Page Heading & [#0d7ff2] Action -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div class="flex flex-col gap-2">
          <h1 class="text-[#0d141c] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
            Gestión de Árbitros
          </h1>
          <p class="text-[#49739c] text-base font-normal max-w-2xl">
            Administra el panel de árbitros, sus licencias, información de
            contacto y disponibilidad para la temporada actual.
          </p>
        </div>
        <div>

        </div>
        <button @click.prevent="navigateTo('/nueva-persona')"
          class="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-5 bg-[#0d7ff2] hover:bg-blue-600 text-slate-50 text-sm font-bold leading-normal transition-colors shadow-sm shadow-blue-500/20">
          <IconPlus />
          <span>Añadir Árbitro</span>
        </button>
      </div>
      <!-- Toolbar (Search & Filters) -->
      <FilterClubes @on-search="handleSearch" />
      <!-- Data Table -->
      <div class="bg-white rounded-xl border border-[#e7edf4] overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <TableArbitros :arbitros="arbitros" :page="pagination.page" :total-pages="pagination.totalPages"
            :total-elements="pagination.totalElements" :size="pagination.size" @page-change="handlePageChange" />
        </div>
      </div>
    </div>
  </main>
</template>
<!-- 
40589021
24606243
33675873
39881070
42057304
25621304
-->