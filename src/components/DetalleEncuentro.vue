<template>
    <div class="bg-white  rounded-xl border border-[#dbdde6]  overflow-hidden">
        <div class="bg-[#516dfb]/5 px-6 py-4 border-b border-[#dbdde6] flex items-center justify-between">
            <h2 class="text-lg font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-[#516dfb]">event_available</span>
                1. Detalles del Encuentro
            </h2>
            <button @click.prevent="actualizarPartido" type="button"
                class="cursor-pointer px-6 py-2.5 bg-[#516dfb] text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 ">Programar
                partido</button>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-gray-700">Fecha del
                    Encuentro</span>
                <div class="relative">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">calendar_month</span>
                    <input v-model="partido.fecha"
                        class="w-full pl-10 rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-12"
                        type="date" value="2024-11-20" />
                </div>
            </label>
            <label class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-gray-700">Hora de Inicio</span>
                <div class="relative">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">schedule</span>
                    <input v-model="partido.hora"
                        class="w-full pl-10 rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-12"
                        type="time" value="21:00" />
                </div>
            </label>
            <label class="flex flex-col gap-2 md:col-span-2">
                <div class="flex justify-between items-center">
                    <span class="text-sm font-semibold text-gray-700">Sede /
                        Estadio</span>
                    <span class="text-xs text-green-600 font-bold flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">check_circle</span>
                        Disponible
                    </span>
                </div>
                <div class="relative">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">stadium</span>
                    <select v-model="partido.sede"
                        class="w-full pl-10 rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-12 appearance-none">
                        <option value="1">Camp Nou, Barcelona</option>
                        <option value="2">Santiago Bernabéu, Madrid</option>
                        <option value="3">Wanda Metropolitano, Madrid</option>
                        <option value="4">Mestalla, Valencia</option>
                    </select>
                </div>
            </label>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    idPartido: Number,
    required: true
})
const partido = ref({
    fecha: '2024-11-20',
    hora: '21:00',
    sede: '1',
});
const actualizarPartido = () => {
    console.log(partido.value);
}

</script>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>