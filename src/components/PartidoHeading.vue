<template>
    <div class="flex flex-wrap justify-between items-start gap-4 mb-8 bg-white p-6 rounded-xl  shadow-sm">
        <div class="flex flex-col gap-1">
            <div class="flex items-center gap-3 mb-2">
                <span class="px-3 py-1 bg-[#516dfb]/10 text-[#516dfb] text-xs font-bold rounded-full">ESTADO:
                    PENDIENTE</span>
                <span class="text-gray-400 text-sm">ID: #{{ partido.idPartido }}</span>
            </div>
            <h1 class="text-3xl font-black tracking-tight flex items-center gap-4">
                {{ nombreLocal }} <span class="text-gray-300 font-light">vs</span> {{ nombreVisitante }}
            </h1>
            <p class="text-gray-500 text-base">Jornada 14 - {{ categoria.replace("_", " ") }}</p>
        </div>
        <div class="flex gap-3">
            <button
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                <span class="material-symbols-outlined text-lg">history</span>
                Historial
            </button>
            <button
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                <span class="material-symbols-outlined text-lg">print</span>
                Ficha Técnica
            </button>
        </div>
    </div>
</template>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    nombreLocal: String,
    nombreVisitante: String,
    categoria: String,
    partido: {
        idPartido: 3,
        fechaHora: null,
        fechaTorneo: 1,
        estado: "PENDIENTE",
    },

})
onMounted(() => {
    console.log(props);
})
</script>