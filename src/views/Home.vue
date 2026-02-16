<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

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

// Estado
const totalJugadores = ref(0);
const totalClubes = ref(0);
const totalPartidos = ref([]);
const loading = ref(true);

const API_URL = "http://localhost:8080/api";

onMounted(async () => {
  await Promise.all([fetchJugadores(), fetchClubes(), fetchUltimaJornada()]);
  loading.value = false;
});

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`
});

const fetchJugadores = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/personas`, {
      params: { tipo: 1 },
      headers: getAuthHeaders()
    });
    totalJugadores.value = data.totalElements;
  } catch (error) {
    console.error("Error fetching jugadores:", error);
  }
};

const fetchClubes = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/club`, {
      params: { page: 0, size: 10 },
      headers: getAuthHeaders()
    });
    totalClubes.value = data.totalElements;
  } catch (error) {
    console.error("Error fetching clubes:", error);
  }
};

const fetchUltimaJornada = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/partidos/ultimos-7-dias`, {
      params: { page: pagination.value.page, size: pagination.value.size },
      headers: getAuthHeaders()
    });
    totalPartidos.value = data.content || [];
    pagination.value.totalPages = data.totalPages;
    pagination.value.totalElements = data.totalElements;
    console.log(data);

  } catch (error) {
    console.error("Error fetching partidos:", error);
  }
};

// Inicializamos la paginación
const pagination = ref({
  page: 0, // Frontend usa base 1
  size: 5, // Tamaño de página (ajústalo según prefieras)
  totalPages: 0,
  totalElements: 0,
});

// CORRECCIÓN 3: Sintaxis correcta para vigilar propiedades dentro de un ref
watch([() => pagination.value.page, () => pagination.value.size], () => {
  fetchUltimaJornada();
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
              <Pagination :page="pagination.page" :totalPages="pagination.totalPages" :totalElements="pagination.totalElements" :size="pagination.size" tipo="partidos"
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