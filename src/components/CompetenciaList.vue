<template>
    <!-- Right Content: Competition List -->
    <div class="lg:col-span-8">
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm min-h-[600px] flex flex-col">
            <div
                class="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-6 mb-6 gap-4">
                <div>
                    <h2 class="text-xl font-extrabold text-slate-900">Competencias Asociadas</h2>
                    <p class="text-slate-500 text-sm">Mostrando sub-ligas para el <span
                            class="font-bold text-[#0d7ff2]">{{ torneo.nombre }}</span></p>
                </div>
                <button @click=" navigateTo('/nueva-competencia', {
                    idTorneo: torneo.idTorneo,
                    nombre: torneo.nombre,
                })"
                    class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#0d7ff2]/10 text-[#0d7ff2] text-sm font-bold hover:bg-[#0d7ff2]/20 transition-colors">
                    <span class="material-symbols-outlined text-[18px]">add</span>
                    Añadir Competencia
                </button>
            </div>
            <!-- Metrics Summary -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div class="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Sub-ligas
                    </p>
                    <p class="text-2xl font-bold text-slate-900">{{ torneo.competenciasAsociadas }}</p>
                </div>
                <div class="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Equipos Inscritos
                    </p>
                    <p class="text-2xl font-bold text-slate-900">50</p>
                </div>
                <div class="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Próxima Fecha</p>
                    <p class="text-lg font-bold text-[#0d7ff2]">12 Mayo, 2024</p>
                </div>
            </div>
            <!-- Competitions List -->
            <div class="flex flex-col gap-4" v-for="competencia of competencias" :key="competencia.idCompetencia">
                <CompetenciaCard :competencia="{ ...competencia, idTorneo: torneo.idTorneo }" />

                <!-- Placeholder for empty state simulation -->
                <div
                    class="mt-8 flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-100 rounded-xl">
                    <div class="size-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-slate-200 text-[40px]">inventory_2</span>
                    </div>
                    <p class="text-slate-400 font-medium text-center px-6">¿No encuentras la liga que
                        buscas?<br />Crea una nueva competencia dentro de este torneo.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import CompetenciaCard from './CompetenciaCard.vue';
const router = useRouter();
defineProps({
    competencias: {
        type: Array,
        default: () => [{}]
    },
    torneo: {
        type: Object,
        default: () => ({})
    }
});
const navigateTo = (path, query) => {
    router.push({ path, query });
};
</script>