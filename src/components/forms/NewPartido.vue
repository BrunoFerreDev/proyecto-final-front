<template>
    <div class="flex items-center gap-3 mb-6">
        <div class="bg-[#0d7ff2]/10 text-[#0d7ff2] p-2 rounded-lg">
            <IconPlus />
        </div>
        <h3 class="text-xl font-bold text-[#111218]">
            Programar Nuevo Encuentro
        </h3>
    </div>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="verificarGuardado">
        <!-- Team Selection -->
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Club Local</label>
            <select class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                v-model="idLocal">
                <option value="" disabled>Seleccionar club...</option>
                <option v-for="club in opcionesLocal" :key="club.idClub" :value="club.idClub">
                    {{ club.nombre }}
                </option>
            </select>
        </div>

        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Club Visitante</label>
            <select class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                v-model="idVisitante">
                <option value="" disabled>Seleccionar club...</option>
                <option v-for="club in opcionesVisitante" :key="club.idClub" :value="club.idClub">
                    {{ club.nombre }}
                </option>
            </select>
        </div>
        <!-- Date & Time -->
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Fecha del Partido</label>
            <div class="relative">
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-4"
                    type="date" />
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Hora de Inicio</label>
            <div class="relative">
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2] focus:border-[#0d7ff2] pl-4"
                    type="time" />
            </div>
        </div>
        <!-- Venue -->
        <div class="md:col-span-2 space-y-2">
            <label class="text-sm font-semibold text-gray-700">Lugar del Encuentro (Cancha/Estadio)</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <!-- <IconStadium /> -->
                </span>
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-10"
                    placeholder="Ej. Estadio Municipal, Cancha 4..." type="text" />
            </div>
        </div>
        <!-- Actions -->
        <div class="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-2">
            <button class="px-6 py-3 rounded-lg text-sm font-semibold text-gray-600 transition-colors" type="button">
                Cancelar
            </button>
            <button
                class="px-8 py-3 rounded-lg text-sm bg-[#1f44f9] text-white font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                type="button">
                <IconDeviceFloppy />
                Crear Partido
            </button>
        </div>
    </form>
</template>
<script setup>
import { IconPlus } from '@tabler/icons-vue';
import { IconDeviceFloppy } from '@tabler/icons-vue';
import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps({
    // Aquí podrías recibir props como lista de clubes, etc.
    idCompetencia: {
        type: Number,
        required: true
    }
});

const clubes = ref([]);
const idLocal = ref('');
const idVisitante = ref('');
const clubesFilter = ref('');
const fetchClubesInscriptos = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/competencias/traer-clubes`, {
            params: {
                idComptencia: props.idCompetencia,
                size: 0,
                page: 0
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });
        const data = response.data;
        clubes.value = data.content;
        console.log(clubes.value);

        return response.data;
    } catch (error) {
        console.error("Error cargando clubes inscriptos", error);
        return [];
    }
};
onMounted(() => {
    fetchClubesInscriptos();
});
// Opciones para el select LOCAL (filtramos al que ya es visitante)
const opcionesLocal = computed(() => {
    if (!idVisitante.value) return clubes.value;
    return clubes.value.filter(club => club.idClub !== idVisitante.value);
});

// Opciones para el select VISITANTE (filtramos al que ya es local)
const opcionesVisitante = computed(() => {
    if (!idLocal.value) return clubes.value;
    return clubes.value.filter(club => club.idClub !== idLocal.value);
});
const verificarGuardado = () => {
    if (confirm("¿Estas seguro de guardar el partido?")) {
        guardarPartido();
    } else {
        resetForm();
    }
}
const guardarPartido = () => {
    console.log("Partido a guardar:", partido);
    // Todo: Llamada a API
}
const resetForm = () => {
    partido.clubLocal = '';
    partido.clubVisitante = '';
    partido.fecha = '';
    partido.hora = '';
    partido.lugar = '';
}
</script>