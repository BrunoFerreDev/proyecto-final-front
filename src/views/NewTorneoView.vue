<template>
    <main class="flex-1 flex flex-col max-w-7xl mx-auto w-full p-4 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 class="text-slate-900 text-3xl font-extrabold tracking-tight">Temporada {{ temporada }}</h1>
                <p class="text-slate-500 mt-1">Gestión centralizada de torneos y competencias activas.</p>
            </div>
            <div class="flex gap-3">
                <button
                    class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 text-slate-700 text-sm font-bold hover:bg-slate-200 transition-colors">
                    <span class="material-symbols-outlined text-[18px]">calendar_today</span>
                    Cambiar Temporada
                </button>
                <button @click="navigateTo('/nuevo-torneo')"
                    class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#0d7ff2] text-white text-sm font-bold hover:bg-[#0d7ff2]/90 transition-colors shadow-sm shadow-[#0d7ff2]/20">
                    <span class="material-symbols-outlined text-[18px]">add_circle</span>
                    Nuevo Torneo
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-4 flex flex-col gap-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-slate-800 text-lg font-bold">Torneos Activos ({{ torneos.length }})</h2>
                    <span class="material-symbols-outlined text-slate-400 cursor-pointer">filter_list</span>
                </div>

                <div class="flex flex-col gap-4">
                    <div v-for="torneo in torneos" :key="torneo.idTorneo" @click="seleccionarTorneo(torneo)"
                        class="cursor-pointer transition-all duration-200 rounded-xl border-2"
                        :class="selectedTorneo?.idTorneo === torneo.idTorneo ? 'border-[#0d7ff2] bg-blue-50' : 'border-transparent hover:bg-slate-50'">
                        <CardTorneo :torneo="torneo" :selected="selectedTorneo?.idTorneo === torneo.idTorneo" />
                    </div>
                </div>
            </div>

            <div v-if="selectedTorneo" class="lg:col-span-8">
                <CompetenciaList :competencias="competencias" :torneo="selectedTorneo" />
            </div>
            <div v-else class="lg:col-span-8 flex items-center justify-center text-slate-400">
                Selecciona un torneo para ver sus competencias
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import CardTorneo from './../components/CardTorneo.vue';
import axios from 'axios';
import CompetenciaList from '../components/CompetenciaList.vue';

const torneos = ref([]);
const competencias = ref([]);
// CAMBIO 3: Variable para guardar el torneo seleccionado actualmente
const selectedTorneo = ref(null);
const temporada = new Number(new Date().getFullYear());

const fetchTorneos = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/torneos", {
            params: {
                size: 10,
                page: 0,
                temporada: temporada
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        const data = response.data;
        torneos.value = data.content;

        // CAMBIO 4: Lógica de inicialización
        // Si hay torneos, seleccionamos el primero automáticamente
        if (torneos.value.length > 0) {
            seleccionarTorneo(torneos.value[0]);
        }
    } catch (error) {
        console.error("Error fetching torneos:", error);
    }
}

// CAMBIO 5: Función para manejar la selección manual
const seleccionarTorneo = (torneo) => {
    selectedTorneo.value = torneo;
    fetchCompetencias(); // Actualiza las competencias al cambiar
}

const fetchCompetencias = async () => {
    // Validación de seguridad
    if (!selectedTorneo.value) return;

    try {
        const response = await axios.get("http://localhost:8080/api/competencias", {
            params: {
                // CAMBIO 6: Usar el ID del torneo seleccionado dinámicamente
                idTorneo: selectedTorneo.value.idTorneo
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        const data = response.data;
        competencias.value = data;
        console.log("Competencias cargadas para:", selectedTorneo.value.nombre, competencias.value);

    } catch (error) {
        console.error("Error fetching competencias:", error);
        competencias.value = []; // Limpiar lista en caso de error
    }
}
const navigateTo = (path) => {
    location.href = path;
}
onMounted(() => {
    fetchTorneos();
});
</script>