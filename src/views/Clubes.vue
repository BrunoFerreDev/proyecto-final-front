<script setup>
import { IconChevronRight } from '@tabler/icons-vue';
import FilterClubes from '../components/FilterClubes.vue';
import TableClubes from '../components/tables/TableClubes.vue';
import { IconPlus } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
}
</script>

<template>
    <!-- Main Content -->
    <main class=" flex justify-center py-6 px-4 lg:px-8">
        <div class="flex flex-col max-w-300 w-full gap-6">
            <!-- Breadcrumbs -->
            <div class="flex items-center gap-2 text-sm text-slate-500 ">
                <a class="hover:text-[#0d7ff2]" href="#">Competencias</a>
                <IconChevronRight />
                <span class="font-medium text-[#0d141c] ">Torneo Apertura 2024</span>
            </div>
            <!-- Page Heading -->
            <div class="flex flex-wrap justify-between items-end gap-4 border-b border-slate-200  pb-6">
                <div class="flex min-w-72 flex-col gap-2">
                    <h1 class="text-[#0d141c]  text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                        Gestión de Clubes</h1>
                    <p class="text-slate-500  text-base font-normal">Administra los Clubes
                        inscritos, plantillas y estados para la Primera División.</p>
                </div>
                <button
                @click.prevent="navigateTo('/nuevo-club')"
                    class="flex items-center gap-2 bg-[#4871bd] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 font-bold text-sm">
                    <IconPlus />
                    <span>Añadir Nuevo Equipo</span>
                </button>
            </div>
            <FilterClubes />
            <!-- Table Container -->
            <TableClubes />
        </div>
    </main>
</template>