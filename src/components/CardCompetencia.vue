<script setup>
import { IconCheck } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';
import { IconUsersGroup } from '@tabler/icons-vue';
const props = defineProps({
    competencia: {
        type: Object,
        required: true,
        default: () => ({
            id: 1,
            nombre: "Competencia 1",
            fechaInicio: "2023-08-01",
            fechaFin: "2023-08-31",
            idTorneo: 1,
            configuracionDTO: {
                cantidadJugadoresEquipo: 0,
                minutosPorTiempo: 0,
                maxSustituciones: 0,
                formatoCompetencia: ''
            }
        })
    }
})
</script>

<template>
    <div
        class="relative cursor-pointer rounded-xl border-2 border-[#1f44f9] bg-blue-50/60  p-5 transition-all shadow-md ring-2 ring-[#1f44f9]/10">
        <div class="absolute top-4 right-4">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f44f9] text-white shadow-sm">
                <IconCheck />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <span
                    class="inline-block rounded bg-[#1f44f9]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1f44f9]">Masculino</span>
            </div>
            <h4 class="text-lg font-bold text-[#111218] ">{{ competencia.nombre }} - {{
                competencia.categoria.replace("_", " ") }}</h4>
            <div class="flex items-center gap-3 text-sm text-gray-600  mt-1">
                <span class="flex items-center gap-1 ">
                    <IconUsersGroup /> Formato de Competencia: {{ competencia.configuracionDTO.formatoCompetencia }}
                </span>
            </div>
        </div>
    </div>

</template>