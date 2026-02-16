<template>
    <div class="animate-in fade-in slide-in-from-bottom-2 duration-500" id="fixture-content">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-[#111218]">
                Partidos Recientes y Próximos
            </h3>
            <div class="flex items-center gap-2">

                <button :disabled="fechaTorneo == 1" @click.prevent="() => {
                    fechaTorneo--;
                    fetchPartidos();
                }" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <span
                    class="text-sm font-medium text-gray-900 bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Fecha
                    :
                    {{ fechaTorneo }}</span>
                <button :disabled="fechaTorneo == partidos.length" @click.prevent="() => {
                    fechaTorneo++;
                    fetchPartidos();
                }" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
        <!-- Match List -->
        <div class="space-y-4" v-if="partidos.length > 0">
            <IconLoader v-if="cargandoPartidos" class="animate-spin size-8 mx-auto" />
            <!-- Match Item: Played -->
            <PartidoItem v-if="!cargandoPartidos" v-for="partido in partidos" :key="partido.idPartido"
                :partido="partido" />
        </div>
        <div v-if="partidos.length == 0" class="flex items-center justify-center flex-col gap-2">
            <p>No hay partidos programados para esta competencia</p>
            <strong>Desea generar un fixture automatico?</strong>
            <button @click.prevent="crearFixtureAutomatico"
                class="bg-blue-500 text-white px-4 py-2 rounded">Generar</button>
        </div>
    </div>
</template>
<script setup>
import { IconLoader } from '@tabler/icons-vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import PartidoItem from './PartidoItem.vue';
const props = defineProps({
    competencias: {
        type: Object,
        required: true
    }
})
const partidos = ref([]);
const fechaTorneo = ref(1);
const cargandoPartidos = ref(true);
const fetchPartidos = async () => {
    cargandoPartidos.value = true;
    try {
        const response = await axios.get(
            'http://localhost:8080/api/partidos', {
            params: {
                idCompetencia: props.competencias.idCompetencia,
                fecha: fechaTorneo.value,
                page: 0,
                size: 10,
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        );
        partidos.value = response.data.content;
    } catch (error) {
        console.log(error);
    } finally {
        setTimeout(() => {
            cargandoPartidos.value = false;
        }, 1000);
    }
};
onMounted(() => {
    fetchPartidos();
});
</script>