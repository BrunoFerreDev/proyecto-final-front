<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';

// Recibimos el ID de la competencia desde el componente padre
const props = defineProps({
    idCompetencia: {
        type: Number,
        required: true
    }
});

const posiciones = ref([]);
const loading = ref(true);
const error = ref(null);

// Función para obtener datos
const fetchTabla = async () => {
    loading.value = true;
    try {
        // Ajusta la URL a tu endpoint real de Spring Boot
        const response = await axios.get(`http://localhost:8080/api/competencias/${props.idCompetencia}/tabla-posiciones`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });
        posiciones.value = response.data;
    } catch (err) {
        console.error(err);
        error.value = "No se pudieron cargar los datos.";
    } finally {
        loading.value = false;
    }
};

// Cargar al montar
onMounted(() => {
    fetchTabla();
});

// Recargar si cambia la competencia
watch(() => props.idCompetencia, () => {
    fetchTabla();
});

// Utilidad para color de diferencia de gol
const getGoalDiffClass = (diff) => {
    if (diff > 0) return 'text-emerald-500';
    if (diff < 0) return 'text-red-500';
    return 'text-slate-400';
};
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
                <h3 class="text-lg font-bold text-slate-900">Tabla de Posiciones</h3>
                <span class="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase">
                    En Vivo
                </span>
            </div>
            <button @click="fetchTabla" class="text-xs text-blue-600 hover:underline">
                Actualizar
            </button>
        </div>

        <div v-if="loading" class="py-10 text-center text-slate-500 text-sm">
            Cargando estadísticas...
        </div>

        <div v-else-if="error" class="py-10 text-center text-red-500 text-sm">
            {{ error }}
        </div>

        <div v-else class="overflow-x-auto scrollbar-hide">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                        <th class="py-3 pl-4 w-12 text-center">Pos</th>
                        <th class="py-3">Equipo</th>
                        <th class="py-3 text-center w-12">PJ</th>
                        <th class="py-3 text-center w-12">G</th>
                        <th class="py-3 text-center w-12">E</th>
                        <th class="py-3 text-center w-12">P</th>
                        <th class="py-3 text-center w-12">GF</th>
                        <th class="py-3 text-center w-12">GC</th>
                        <th class="py-3 text-center w-12">DG</th>
                        <th class="py-3 text-center w-16 text-[#1f44f9]">PTS</th>
                        </tr>
                </thead>
                <tbody class="text-sm font-medium">
                    <tr v-for="(equipo, index) in posiciones" :key="equipo.idClub"
                        class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        
                        <td class="py-4 pl-4 text-center">
                            <div :class="[
                                'w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mx-auto',
                                index === 0 ? 'bg-emerald-500 text-white' : // Campeón
                                index >= posiciones.length - 3 ? 'bg-red-100 text-red-600' : // Descenso (ejemplo)
                                'bg-slate-100 text-slate-500' // Resto
                            ]">
                                {{ index + 1 }}
                            </div>
                        </td>

                        <td class="py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-100 p-1 flex items-center justify-center shrink-0">
                                    <img 
                                        class="w-full h-full object-contain" 
                                        :src="`https://ui-avatars.com/api/?name=${equipo.nombreClub}&background=random`" 
                                        :alt="equipo.nombreClub" 
                                    />
                                </div>
                                <span class="font-bold text-slate-900 truncate max-w-[150px] md:max-w-none">
                                    {{ equipo.nombreClub }}
                                </span>
                            </div>
                        </td>

                        <td class="py-4 text-center text-slate-600">{{ equipo.partidosJugados }}</td>
                        <td class="py-4 text-center text-slate-600">{{ equipo.partidosGanados }}</td>
                        <td class="py-4 text-center text-slate-600">{{ equipo.partidosEmpatados }}</td>
                        <td class="py-4 text-center text-slate-600">{{ equipo.partidosPerdidos }}</td>
                        <td class="py-4 text-center text-slate-600">{{ equipo.golesFavor }}</td>
                        <td class="py-4 text-center text-slate-600">{{ equipo.golesContra }}</td>
                        
                        <td class="py-4 text-center font-bold" :class="getGoalDiffClass(equipo.diferenciaGol)">
                            {{ equipo.diferenciaGol > 0 ? '+' : '' }}{{ equipo.diferenciaGol }}
                        </td>

                        <td class="py-4 text-center font-black text-[#1f44f9] text-lg">
                            {{ equipo.puntos }}
                        </td>

                        </tr>
                </tbody>
            </table>
        </div>

        <div class="flex justify-between items-center pt-4 border-t border-slate-100">
            <div class="flex gap-4">
                <div class="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    Líder
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span class="w-3 h-3 rounded-full bg-red-100 border border-red-200"></span>
                    Zona Baja
                </div>
            </div>
        </div>
    </div>
</template>