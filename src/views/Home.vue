<script setup>
import { onMounted, ref } from "vue";

// Iconos
import {
  IconBallFootball,
  IconUser,
  IconUsersGroup,
  IconTrophyFilled
} from "@tabler/icons-vue";

// Componentes
import StatCard from '../components/dashboard/StatCard.vue';
import MatchesTable from '../components/dashboard/MatchesTable.vue';
import QuickActions from '../components/dashboard/QuickActions.vue';
import ExpulsionsPanel from '../components/dashboard/ExpulsionsPanel.vue';
import Pagination from '../components/Pagination.vue';
import { watch } from "vue";
import { usePersonas } from "../composables/usePersonas";
import { useClubes } from "../composables/useClubes";
import { usePartidos } from "../composables/usePartidos";

// Estado
const loading = ref(true);

const { totalElements: totalJugadores, fetchPersonas } = usePersonas();
const { totalElements: totalClubes, fetchClubes } = useClubes();
const { 
  partidos: totalPartidos, 
  fetchUltimaJornada, 
  totalElements, 
  totalPages 
} = usePartidos();

// Inicializamos la paginación
const pagination = ref({
  page: 0, 
  size: 5, 
});

onMounted(async () => {
  await Promise.all([
    fetchPersonas(0, 1, 1), 
    fetchClubes(0, 10), 
    fetchUltimaJornada(pagination.value.page, pagination.value.size)
  ]);
  loading.value = false;
});

// CORRECCIÓN 3: Sintaxis correcta para vigilar propiedades dentro de un ref
watch([() => pagination.value.page, () => pagination.value.size], () => {
  fetchUltimaJornada(pagination.value.page, pagination.value.size);
});

// --- EVENTOS ---
const handlePageChange = (newPage) => {
  // Solo actualizamos el valor, el watcher detectará el cambio y llamará a fetchArbitros
  pagination.value.page = newPage;
};
</script>

<template>
  <div class="flex-1 overflow-hidden bg-gray-50/50">
    <main class="flex flex-col h-full overflow-hidden relative">
      <div class="overflow-y-auto p-8 pt-6">
        <div class="max-w-screen-2xl mx-auto flex flex-col gap-8">

          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Ligas Activas" value="12" trend="+2%" :iconComponent="IconTrophyFilled" />
            <StatCard title="Clubes Totales" :value="totalClubes" trend="+5%" :iconComponent="IconUsersGroup" />
            <StatCard title="Partidos Jugados" value="856" trend="+12%" :iconComponent="IconBallFootball" />
            <StatCard title="Jugadores" :value="totalJugadores" trend="+8%" :iconComponent="IconUser" />
          </section>

          <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">

            <div class="xl:col-span-2">
              <MatchesTable :matches="totalPartidos" />
              <Pagination :page="pagination.page" :totalPages="totalPages" :totalElements="totalElements" :size="pagination.size" tipo="partidos"
                @page-change="handlePageChange" />
            </div>

            <div class="flex flex-col gap-8">
              <QuickActions />
              <ExpulsionsPanel />
            </div>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>