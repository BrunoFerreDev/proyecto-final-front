<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
// Importa tu componente hijo
import TableClubes from "../components/tables/TableClubes.vue";
import { IconPlus } from "@tabler/icons-vue";
import { useClubes } from "../composables/useClubes";
import axios from "axios";
import Filters from "../components/Filters.vue";
import { IconStack } from "@tabler/icons-vue";
import { IconChevronDown } from "@tabler/icons-vue";

const router = useRouter();

// --- ESTADO ---


const { clubes, loading, totalElements, totalPages, page, size, fetchClubes } = useClubes();

// --- PETICIÓN AL BACKEND ---
// Usando el hook useClubes para obtener datos paginados
// --- WATCHERS ---
// Esto es la magia: cada vez que 'page' cambie, se ejecuta fetchClubes automáticamente.
watch([page, size], () => {
  fetchClubes(page.value, size.value);
});

// --- EVENTOS ---
// Esta función recibe el evento del hijo (TableClubes)
const handlePageChange = (newPage) => {
  page.value = newPage;
  // No hace falta llamar a fetchClubes aquí, el 'watch' lo hará.
};

// Carga inicial
onMounted(() => {
  fetchClubes();
});
const navigateTo = (path) => {
  router.push(path);
}
const handleSearch = async (query) => {
  if (!query.trim()) {
    fetchClubes();
    return;
  }
  try {
    const response = await axios.get(`http://localhost:8080/api/clubes/buscar`, {
      params: {
        nombre: query
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    clubes.value = response.data.content;
    totalElements.value = response.data.totalElements;
    totalPages.value = response.data.totalPages;
  } catch (error) {
    console.error('Error al buscar clubes:', error)
    clubes.value = [];
  }
}
const handleEstadoChange = async (event) => {
  const estado = event.target.value;
  if (estado === 'true') {
    fetchClubes();
    return;
  }
  try {
    const response = await axios.get(`http://localhost:8080/api/clubes/inactivos`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    clubes.value = response.data.content;
    totalElements.value = response.data.totalElements;
    totalPages.value = response.data.totalPages;
    page.value = 0;
  } catch (error) {
    console.error('Error al buscar clubes:', error)
    clubes.value = [];
  }
}
</script>
<template>
  <!-- Main Content -->
  <main class="flex justify-center py-6 px-4 lg:px-8">
    <div class="flex flex-col max-w-300 w-full gap-6">

      <!-- Page Heading -->
      <div class="flex flex-wrap justify-between items-end gap-4 border-b border-slate-200 pb-6">
        <div class="flex min-w-72 flex-col gap-2">
          <h1 class="text-[#0d141c] text-3xl lg:text-4xl font-black leading-tight tracking-tight">
            Gestión de Clubes
          </h1>
          <p class="text-slate-500 text-base font-normal">
            Administra los Clubes inscritos, plantillas y estados para la
            Primera División.
          </p>
        </div>
        <button @click.prevent="navigateTo('/nuevo-club')"
          class="flex items-center gap-2 bg-[#4871bd] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 font-bold text-sm">
          <IconPlus />
          <span>Añadir Nuevo club</span>
        </button>
      </div>
      <div
        class="bg-white rounded-xl border border-[#e7edf4] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-start px-4">

        <Filters @on-search="handleSearch" class="w-full" />
        <div class="flex flex-col md:flex-row md:items-end md:justify-end w-full gap-2">
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-slate-700">Estado</span>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <IconStack />
              </span>
              <select @change="handleEstadoChange"
                class="w-full h-10 pl-11 pr-10 appearance-none rounded-lg border border-slate-200 bg-slate-50  text-slate-800  focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all cursor-pointer">
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <IconChevronDown />
              </span>
            </div>
          </div>

        </div>
      </div>
      <!-- Table Container -->
      <TableClubes :clubs="clubes" :page="page" :total-pages="totalPages" :total-elements="totalElements" :size="size"
        @page-change="handlePageChange" />
    </div>
  </main>
</template>
