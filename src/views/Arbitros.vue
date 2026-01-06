<script setup>
import { IconSearch } from '@tabler/icons-vue';
import TableArbitros from '../components/tables/TableArbitros.vue';
import { IconPlus } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
import { usePersonaStore } from '../stores/personaStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const router = useRouter();
const navigateTo = (path) => {
    router.push(path);
}

const personaStore = usePersonaStore();
const {
    personas,
    loading,
    // FALTABAN ESTOS:
    page,
    totalPages,
    totalElements,
    size,
    tipo
} = storeToRefs(personaStore);
const { fetchPersonas, nextPage, prevPage } = personaStore;

onMounted(() => {
    tipo.value = 2
    fetchPersonas();
})
const handlePageChange = (newPage) => {
    console.log("¡Click recibido en el padre! Pagina:", newPage);
    personaStore.setPage(newPage);
};
</script>

<template>
    <main class=" flex flex-col items-center py-8 px-4 md:px-10">
        <div class="max-w-300 w-full flex flex-col gap-6">
            <!-- Breadcrumbs -->
            <nav class="flex flex-wrap gap-2 items-center text-sm">
                <a class="text-[#49739c] font-medium hover:underline" href="#">Inicio</a>
                <span class="text-[#49739c] font-medium">/</span>
                <a class="text-[#49739c] font-medium hover:underline" href="#">Gestión de Liga</a>
                <span class="text-[#49739c] font-medium">/</span>
                <span class="text-[#0d141c] font-medium">Árbitros</span>
            </nav>
            <!-- Page Heading & [#0d7ff2] Action -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <h1 class="text-[#0d141c] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                        Gestión de Árbitros</h1>
                    <p class="text-[#49739c]  text-base font-normal max-w-2xl">
                        Administra el panel de árbitros, sus licencias, información de contacto y disponibilidad para la
                        temporada actual.
                    </p>
                </div>
                <button @click.prevent="navigateTo('/nueva-persona')"
                    class="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-5 bg-[#0d7ff2] hover:bg-blue-600 text-slate-50 text-sm font-bold leading-normal transition-colors shadow-sm shadow-blue-500/20">
                    <IconPlus />
                    <span>Añadir Árbitro</span>
                </button>
            </div>
            <!-- Toolbar (Search & Filters) -->
            <div
                class="bg-white  rounded-xl border border-[#e7edf4] p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <!-- Search Input -->
                <div class="w-full md:max-w-md relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#49739c] ">
                        <IconSearch />
                    </div>
                    <input
                        class="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-[#f0f4f8] text-[#0d141c] placeholder-[#49739c]  focus:ring-2 focus:ring-[#0d7ff2] focus:bg-white transition-all text-sm"
                        placeholder="Buscar por nombre, licencia o email..." type="text" />
                </div>

            </div>
            <!-- Data Table -->
            <div class="bg-white  rounded-xl border border-[#e7edf4] overflow-hidden shadow-sm">
                <div class="overflow-x-auto">
                    <TableArbitros :arbitros="personas" :page="page" :total-pages="totalPages"
                        :total-elements="totalElements" :size="size" @page-change="handlePageChange" />
                </div>
            </div>
        </div>
    </main>
</template>