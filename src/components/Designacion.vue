<template>
    <div class="bg-white rounded-xl border border-[#dbdde6] overflow-hidden">
        <div class="bg-[#516dfb]/5 px-6 py-4 border-b border-[#dbdde6]">
            <h2 class="text-lg font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-[#516dfb]">sports</span>
                2. Designación Arbitral
            </h2>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-lg border-2 border-[#516dfb]/20 bg-[#516dfb]/5">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-[#516dfb] flex items-center justify-center text-white text-xs font-bold">AP</span>
                    <p class="text-sm font-bold">Árbitro Principal</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option v-for="arbitro in arbitrosPrimera" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A1</span>
                    <p class="text-sm font-bold">Asistente 1</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option v-for="arbitro in arbitrosSegunda" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A2</span>
                    <p class="text-sm font-bold">Asistente 2</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option v-for="arbitro in arbitrosAsistentes" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">4A</span>
                    <p class="text-sm font-bold">Cuarto Árbitro</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option v-for="arbitro in cuartoArbitros" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
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
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

// 1. Definición de la función de búsqueda
const fetchArbitros = async (page, size) => {
    try {
        const response = await axios.get('http://localhost:8080/api/personas', {
            params: {
                page: page,
                size: size,
                tipo: 2
            }
        });
        console.log(response.data.content);

        // Retornamos el contenido o un array vacío por seguridad
        return response.data.content || [];
    } catch (error) {
        console.error(`Error cargando página ${page}:`, error);
        return []; // Retorna array vacío en caso de error para no romper la UI
    }
}

// 2. Variables reactivas
const arbitrosPrimera = ref([]);
const arbitrosSegunda = ref([]);
const arbitrosAsistentes = ref([]);
const cuartoArbitros = ref([]);
// 3. Ejecución al montar el componente
onMounted(async () => {
    // Opción A: Ejecución secuencial (una tras otra)
    arbitrosPrimera.value = await fetchArbitros(0, 10);
    arbitrosSegunda.value = await fetchArbitros(1, 10);
    arbitrosAsistentes.value = await fetchArbitros(2, 10);
    cuartoArbitros.value = await fetchArbitros(3, 10);

    // NOTA: Ver la opción optimizada abajo si quieres que carguen más rápido
});
</script>