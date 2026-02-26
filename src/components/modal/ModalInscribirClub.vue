<template>
    <div class="bg-white w-full max-w-[720px] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        v-if="modalInscribirClub">
        <!-- PageHeading (Modal Header) -->
        <div class="flex flex-wrap justify-between items-start gap-3 p-6 border-b border-gray-100 ">
            <div class="flex min-w-72 flex-col gap-1">
                <p class="text-[#111218]  tracking-light text-2xl font-bold leading-tight">Inscripción de
                    Clubes</p>
                <p class="text-[#5f668c]  text-sm font-normal">Torneo Apertura 2024 - Liga Fútbol 11
                </p>
            </div>
            <button @click="closeModal"
                class="flex size-10 items-center justify-center rounded-full hover:bg-gray-100  text-gray-500 transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <!-- Modal Content - Scrollable -->
        <div class="flex-1 overflow-y-auto custom-scrollbar">
            <!-- Search Bar Section -->
            <div class="p-6 pb-2">
                <p class="text-sm font-medium text-gray-700  mb-2">Buscar clubes existentes</p>
                <label class="flex flex-col w-full">
                    <div
                        class="flex w-full items-stretch rounded-lg h-12 bg-background-light  border border-gray-200 focus-within:border-[#516dfb] transition-all">
                        <div class="text-[#5f668c] flex items-center justify-center pl-4 rounded-l-lg">
                            <span class="material-symbols-outlined">search</span>
                        </div>
                        <input
                            class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#111218]  placeholder:text-[#5f668c] px-4 text-base font-normal"
                            placeholder="Buscar por nombre, ciudad o código..." v-model="inputBusqueda"
                            @keyup.enter.prevent="buscarClubes" />
                    </div>
                </label>
            </div>
            <!-- SectionHeader: Results -->
            <div class="px-6 flex justify-between items-end">
                <h3 class="text-[#111218]  text-md font-bold leading-tight tracking-[-0.015em] pt-4">
                    Resultados de búsqueda</h3>
                <p class="text-xs text-[#5f668c] ">{{ clubEncontrado.length }} clubes encontrados</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" v-if="clubEncontrado.length > 0">

                <ClubGrid v-for="club in clubEncontrado" :key="club.idClub" :club="club" @selectClub="selectClub"
                    :selected="clubesParaInscribir.some(c => c.idClub === club.idClub)" />

            </div>
            <!-- Selected Section -->
            <div class="bg-[#516dfb]/5  p-6 mx-6 rounded-xl mb-6 mt-2">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="text-sm font-bold text-gray-800 flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#516dfb] scale-90">verified</span>
                        Clubes seleccionados para inscribir ({{ clubesParaInscribir.length }})
                    </h4>
                    <button @click="clubesParaInscribir = []"
                        class="text-xs text-[#516dfb] font-semibold hover:underline">Limpiar todos</button>
                </div>
                <div class="inline-flex flex-wrap gap-5 justify-around" v-if="clubesParaInscribir.length > 0"
                    v-for="club in clubesParaInscribir" :key="club.idClub">
                    <!-- Selection Chip 1 -->
                    <ClubItem :club="club" @removeClub="removeClub" />
                </div>
            </div>
        </div>
        <!-- Footer Actions -->
        <div class="p-6 border-t border-gray-100  flex items-center justify-end gap-3 bg-white">
            <button @click="closeModal"
                class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-gray-100  text-gray-700  text-sm font-semibold transition-colors hover:bg-gray-200">
                Cancelar
            </button>
            <button @click="inscribirClubes"
                class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-[#516dfb] text-white text-sm font-bold shadow-lg shadow-[#516dfb]/25 hover:bg-blue-600 transition-all">
                Inscribir Clubes
            </button>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import ClubItem from './ClubItem.vue';
import ClubGrid from './ClubGrid.vue';
import axios from 'axios';
const clubEncontrado = ref({})
const props = defineProps({
    modalInscribirClub: {
        type: Boolean,
        default: false
    },
    idCompetencia: {
        type: Number,
        required: true
    }
});
const emit = defineEmits('closeModal');
const inputBusqueda = ref('');
const closeModal = () => {
    emit('closeModal');
}
const clubesParaInscribir = ref([]);
const selectClub = (club) => {
    // Buscamos si el club ya existe en el array por su ID (o nombre si no tiene ID)
    const index = clubesParaInscribir.value.findIndex(c => c.idClub === club.idClub);

    if (index === -1) {
        // Si no existe, lo agregamos
        clubesParaInscribir.value.push(club);
        console.log("Club agregado:", club.nombre);
        console.log(clubesParaInscribir.value);

    } else {
        // Opcional: Si el usuario hace click de nuevo, lo removemos (toggle)
        clubesParaInscribir.value.splice(index, 1);
        console.log("Club removido:", club);
    }
}
const removeClub = (club) => {
    const index = clubesParaInscribir.value.findIndex(c => c.idClub === club.idClub);
    if (index !== -1) {
        clubesParaInscribir.value.splice(index, 1);
        console.log("Club removido desde chip:", club.nombre);
    }
}
const buscarClubes = async () => {
    // Lógica para buscar clubes según el inputBusqueda.value
    if (!inputBusqueda.value.trim()) {
        clubEncontrado.value = {};
        return;
    }
    try {
        const response = await axios.get(`http://localhost:8080/api/clubes/buscar`, {
            params: {
                nombre: inputBusqueda.value
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        clubEncontrado.value = response.data.content;
        console.log(clubEncontrado.value);
    } catch (error) {
        console.error('Error al buscar clubes:', error)
        clubEncontrado.value = {};
    }
}
const inscribirClubes = async () => {
    try {
        // Convertimos el Set a Array para que Axios pueda repetir el parámetro (clubes=1&clubes=2...)
        const listaClubes = [...new Set(clubesParaInscribir.value.map(c => c.idClub))];

        // Fíjate que corregí 'comptencias' por 'competencias' en la URL también
        const response = await axios.post(
            'http://localhost:8080/api/competencias/inscribir-club',
            null, // <--- IMPORTANTE: El cuerpo va como null porque usas @RequestParam
            {
                params: {
                    clubes: listaClubes,
                    idCompetencia: props.idCompetencia,
                },
                // Esto asegura que se envíe como ?clubes=1&clubes=2 (sin corchetes [])
                paramsSerializer: {
                    indexes: null
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        );

        const data = response.data;
        alert(data.message || 'Clubes inscritos exitosamente');
        console.log('Respuesta del servidor:', data);
        closeModal(); // Cerramos el modal después de inscribir
    } catch (error) {
        console.error("Error al inscribir clubes:", error);
    }
}
onMounted(() => {
    console.log("Modal abierto para competencia ID:", props.idCompetencia);
});
</script>