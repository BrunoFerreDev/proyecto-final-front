<template>
    <div @click="router.push(`/partido/${partido.idPartido}`)"
        class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:border-[#0d7ff2]/30 transition-colors cursor-pointer group">
        <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs font-medium min-w-[140px]">
            <div class="flex flex-col">
                <span class="text-green-600 font-bold">{{ partido.estado }}</span>
                <span>{{ new Date(partido.fecha).toLocaleDateString() ? new Date(partido.fecha).toLocaleDateString() : 'Fecha no disponible' }}</span>
                <span>{{ new Date(partido.hora).toLocaleTimeString() ? new Date(partido.hora).toLocaleTimeString() : 'Hora no disponible' }}</span>
                <span class="truncate max-w-[100px]">Estadio No asignado</span>
            </div>
        </div>
        <div class="flex items-center justify-center gap-4 md:gap-8 w-full">
            <div class="flex items-center gap-3 justify-end text-right w-full max-w-[180px]">
                <span class="font-bold text-gray-900 md:text-md text-base uppercase">{{ partido.clubLocal.nombre
                }}</span>

            </div>
            <div class="flex items-center justify-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
                <span v-if="partido.estado != 'PENDIENTE'"
                    class="text-md font-black text-gray-900 tracking-widest">VS</span>
                <span v-else class="text-md font-black text-gray-900 tracking-widest">3 - 1</span>
            </div>
            <div class="flex items-center gap-3 justify-start text-left w-full max-w-[180px]">
                <span class="font-bold text-gray-900 md:text-md text-base uppercase">{{ partido.clubVisitante.nombre
                }}</span>
            </div>
        </div>
        <div class="hidden md:flex min-w-[100px] justify-end" @click="router.push(`/partido/${partido.idPartido}`)">
            <IconChevronRight />
        </div>
    </div>
</template>
<script setup>
import { IconChevronRight } from '@tabler/icons-vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    partido: {
        idPartido: Number,
        clubLocal: {
            idClub: Number,
            nombre: String,
            escudo: String,
            ciudad: String,
            fundacion: String,
            isActivo: Boolean,
            estado: String,
        },
        clubVisitante: {
            idClub: Number,
            nombre: String,
            escudo: String,
            ciudad: String,
            fundacion: String,
            isActivo: Boolean,
            estado: String,
        },
        fecha: String,
        fechaTorneo: Number,
        hora: String,
    }
})
onMounted(() => {
    console.log(props.partido)
})
</script>