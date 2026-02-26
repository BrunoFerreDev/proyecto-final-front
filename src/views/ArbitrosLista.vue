<template>

    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div class="flex flex-col gap-2">
            <h1 class="text-[#0d141c] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Panel de Control
            </h1>
            <p class="text-[#49739c] text-base font-normal max-w-2xl">
                Selecciona una opción del menú superior para administrar árbitros o aranceles.
            </p>
        </div>

        <button @click.prevent="navigateTo('/nueva-persona')"
            class="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-5 bg-[#0d7ff2] hover:bg-blue-600 text-slate-50 text-sm font-bold leading-normal transition-colors shadow-sm shadow-blue-500/20">
            <IconPlus />
            <span>Añadir Registro</span>
        </button>
    </div>
    <div
        class="bg-white rounded-xl border border-[#e7edf4] p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-start">

        <Filters @on-search="handleSearch" class="w-full" />
        <div class="flex flex-col md:flex-row md:items-end md:justify-end w-full gap-2">
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-slate-700">Estado</span>
                <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <IconStack />
                    </span>
                    <select
                        class="w-full h-12 pl-11 pr-10 appearance-none rounded-lg border border-slate-200 bg-slate-50  text-slate-800  focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all cursor-pointer">
                        <option value="" disabled selected>Todos</option>
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                    </select>
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <IconChevronDown />
                    </span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-slate-700">Categoria</span>
                <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <IconUser />
                    </span>
                    <select
                        class="w-full h-12 pl-11 pr-10 appearance-none rounded-lg border border-slate-200 bg-slate-50  text-slate-800  focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all cursor-pointer">
                        <option value="" disabled selected>Todos</option>
                        <option value="true">Principales</option>
                        <option value="false">Asistentes</option>
                    </select>
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <IconChevronDown />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white rounded-xl border border-[#e7edf4] overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
            <TableArbitros :arbitros="arbitros" :page="pagination.page" :total-pages="pagination.totalPages"
                :total-elements="pagination.totalElements" :size="pagination.size" @page-change="handlePageChange" />
        </div>
    </div>
</template>
<script setup>
import TableArbitros from "../components/tables/TableArbitros.vue";
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import apiClient from "../api/axios";
import { IconPlus } from "@tabler/icons-vue";
import { IconUser } from "@tabler/icons-vue";
import { IconChevronDown } from "@tabler/icons-vue";
import { IconStack } from "@tabler/icons-vue";
import axios from "axios";
import Filters from "../components/Filters.vue";


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
        console.log(arbitros.value);
    } catch (error) {
        console.error("Error fetching arbitros:", error);
    }
};
const handleSearch = async (query) => {
    console.log(query);
    if (!query.trim()) {
        fetchArbitros();
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
        pagination.value.totalPages = response.data.totalPages;
        pagination.value.totalElements = response.data.totalElements;
    } catch (error) {
        console.error('Error al buscar arbitros:', error)
        arbitros.value = [];
    }
}

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
</script>