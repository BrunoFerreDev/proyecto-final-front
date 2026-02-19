<script setup>
import { IconEye } from "@tabler/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
    matches: {
        type: Array,
        default: () => []
    }
});

const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
};
const navigateToMatchDetails = (idPartido) => {
    router.push(`/partido/${idPartido}`);
    // Aquí puedes implementar la lógica para navegar a los detalles del partido
    console.log(`Navegar a detalles del partido con ID: ${idPartido}`);
};
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <h2 class="text-[#1c1c0d] text-2xl font-bold leading-tight">
                    Resultados Última Jornada
                </h2>
            </div>
        </div>

        <div class="overflow-hidden rounded border-gray-50 bg-white shadow-sm">
            <div class="overflow-x-auto">
                <table class="w-full min-w-175">
                    <thead class="bg-[#f8f8f5] border-b">
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-black text-sm font-semibold uppercase tracking-wider w-24">
                                Fecha</th>
                            <th class="px-6 py-4 text-center text-black text-sm font-semibold uppercase tracking-wider">
                                Encuentro</th>

                            <th
                                class="px-6 py-4 text-right text-black text-sm font-semibold uppercase tracking-wider w-32">
                                Detalles</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="partido in matches" :key="partido.idPartido"
                            @click="navigateToMatchDetails(partido.idPartido)"
                            class="group hover:bg-[#fcfcf8] transition-colors">
                            <td class="px-6 py-4 text-sm font-medium text-black">
                                {{ formatDate(partido.fecha) }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-4">
                                    <div class="flex items-center gap-3 justify-end w-[40%]">
                                        <span class="text-[#1c1c0d] font-bold text-base min-w-36 w-full">{{
                                            partido.clubLocal.nombre
                                        }}</span>
                                        <div class="size-10 rounded-full bg-gray-100 bg-center bg-cover border border-gray-200"
                                            :style="{ backgroundImage: `url('${partido.clubLocal.escudo || ''}')` }">
                                        </div>
                                    </div>
                                    <span class="text-black text-xs font-bold">VS</span>
                                    <div class="flex items-center gap-3 w-[40%]">
                                        <div class="size-10 rounded-full bg-gray-100 bg-center bg-cover border border-gray-200"
                                            :style="{ backgroundImage: `url('${partido.clubVisitante.escudo || ''}')` }">
                                        </div>
                                        <span class="text-[#1c1c0d] font-bold text-base min-w-36 w-full">{{
                                            partido.clubVisitante.nombre
                                        }}</span>
                                    </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 text-right">
                                <button class="text-black hover:text-blue-600 transition-colors">
                                    <IconEye />
                                </button>
                            </td>
                        </tr>
                        <tr v-if="matches.length === 0">
                            <td colspan="4" class="px-6 py-8 text-center text-gray-500">No hay partidos recientes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>