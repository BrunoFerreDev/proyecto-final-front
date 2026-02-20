<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
// Importa tu componente hijo
import TableClubes from "../components/tables/TableClubes.vue";
import FilterClubes from "../components/FilterClubes.vue";
import { IconPlus } from "@tabler/icons-vue";
import { useClubes } from "../composables/useClubes";

const router = useRouter();

// --- ESTADO ---
const page = ref(0); // Spring Boot usa 0-indexed por defecto
const size = ref(5); // Cantidad de items por página

const { clubes, loading, totalElements, totalPages, fetchClubes } = useClubes();

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
  fetchClubes(page.value, size.value);
});
const navigateTo = (path) => {
  router.push(path);
}
</script>
<template>
  <!-- Main Content -->
  <main class="flex justify-center py-6 px-4 lg:px-8">
    <div class="flex flex-col max-w-300 w-full gap-6">
   
      <!-- Page Heading -->
      <div
        class="flex flex-wrap justify-between items-end gap-4 border-b border-slate-200 pb-6"
      >
        <div class="flex min-w-72 flex-col gap-2">
          <h1
            class="text-[#0d141c] text-3xl lg:text-4xl font-black leading-tight tracking-tight"
          >
            Gestión de Clubes
          </h1>
          <p class="text-slate-500 text-base font-normal">
            Administra los Clubes inscritos, plantillas y estados para la
            Primera División.
          </p>
        </div>
        <button
          @click.prevent="navigateTo('/nuevo-club')"
          class="flex items-center gap-2 bg-[#4871bd] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 font-bold text-sm"
        >
          <IconPlus />
          <span>Añadir Nuevo club</span>
        </button>
      </div>
      <!-- <FilterClubes /> -->
      <!-- Table Container -->
      <TableClubes
        :clubs="clubes"
        :page="page"
        :total-pages="totalPages"
        :total-elements="totalElements"
        :size="size"
        @page-change="handlePageChange"
      />
    </div>
  </main>
</template>
