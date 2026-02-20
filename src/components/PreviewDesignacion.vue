<script setup>
import { onMounted, ref, watch } from 'vue';
import ClubDesignacionHeader from './ClubDesignacionHeader.vue';
import ItemArbitroDesignacion from './ItemArbitroDesignacion.vue';
import axios from 'axios';
import TableDesignacion from './tables/TableDesignacion.vue';
import CompetenciaInfo from './CompetenciaInfo.vue';
const props = defineProps({
    partido: {
        type: Object,
        required: true
    }
})
const designados = ref([]);
const formatearFechaCompleta = (fechaString) => {
    if (!fechaString) return "";

    const fecha = new Date(fechaString);

    // Formato de la fecha: "jueves 19 de febrero"
    const fechaParte = fecha.toLocaleDateString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    // Formato de la hora: "15:41"
    const horaParte = fecha.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Formato 24hs usado en Argentina
    });

    return `${fechaParte} a las ${horaParte} hs`;
};
const fetchArbitros = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/designaciones/traer", {
            params: {
                idPartido: props.partido.idPartido
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = response.data;
        console.log("Designados:", data);
        designados.value = data;
    } catch (error) {
        console.error("Error fetching arbitros:", error);
    }
}
// 2. Vigilamos la prop. Si cambia o se carga tarde, se dispara.
watch(() => props.partido?.idPartido, (newId) => {
    if (newId) {
        fetchArbitros();
    }
}, { immediate: true });
</script>

<template>
    <div
        class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <!-- Card Header: Tournament & Matchday -->
        <CompetenciaInfo :partido="partido" />
        <div class="p-6 lg:p-10">
            <!-- Matchup Section -->
            <ClubDesignacionHeader :local="partido.clubLocal" :visitante="partido.clubVisitante" />
            <!-- Logistics Row -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-xl p-6 border border-slate-100">
                <!-- Date & Time -->
                <div class="flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0">
                    <div class="w-12 h-12 rounded-lg bg-[#1f44f9]/10 flex items-center justify-center text-[#1f44f9]">
                        <span class="material-symbols-outlined">calendar_today</span>
                    </div>
                    <div>
                        <p class="text-xs text-slate-500 font-medium">Fecha y Hora</p>
                        <p class="text-[#1f44f9] font-black text-md uppercase tracking-wider">{{ formatearFechaCompleta(partido.hora) }}</p>
                    </div>
                </div>
                <!-- Venue -->
                <div class="flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0">
                    <div class="w-12 h-12 rounded-lg bg-[#1f44f9]/10 flex items-center justify-center text-[#1f44f9]">
                        <span class="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                        <p class="text-xs text-slate-500 font-medium">Estadio</p>
                        <p class="text-slate-900 font-bold truncate">Estadio Municipal El Fortín</p>
                        <a class="text-[#1f44f9] text-xs font-semibold hover:underline flex items-center gap-1"
                            href="#">
                            Ver ubicación <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                    </div>
                </div>
                <!-- Match Type -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-lg bg-[#1f44f9]/10 flex items-center justify-center text-[#1f44f9]">
                        <span class="material-symbols-outlined">groups</span>
                    </div>
                    <div>
                        <p class="text-xs text-slate-500 font-medium">Categoría</p>
                        <p class="text-slate-900 font-bold italic">Fútbol 11 - Primera</p>
                        <p class="text-slate-400 text-xs">Reglamento Oficial AFA</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="designados.length > 0" class="px-6 pb-6">
            <!-- Footer: Referee Assignment -->
            <TableDesignacion :designaciones="designados" />
        </div>
    </div>
</template>