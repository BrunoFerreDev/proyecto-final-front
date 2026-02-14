<script setup>
import { useRouter } from 'vue-router';
import CostosEncuentro from '../components/CostosEncuentro.vue';
import Designacion from '../components/Designacion.vue';
import DetalleEncuentro from '../components/DetalleEncuentro.vue';
import PartidoHeading from '../components/PartidoHeading.vue';
import PreviewDesignacion from '../components/PreviewDesignacion.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const router = useRouter();
const idPartido = router.currentRoute.value.params.idPartido;
const competencia = ref({});
const partido = ref({});
const torneo = ref({});
const nombreLocal = ref('');
const nombreVisitante = ref('');
const categoria = ref('');
const fetchPartido = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/partidos/${idPartido}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        partido.value = response.data;
        nombreLocal.value = partido.value.clubLocal.nombre;
        nombreVisitante.value = partido.value.clubVisitante.nombre;
        categoria.value = partido.value.competenciaDTO.categoria;
        console.log(partido.value);
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    fetchPartido();
})
</script>

<template>
    <main class="max-w-[1200px] mx-auto px-6 py-8">
        <div class="flex items-center gap-2 mb-6 text-sm">
            <a disabled class="text-gray-500 hover:text-[#516dfb]" href="/torneo">Torneos</a>
            <span class="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <a disabled class="text-gray-500 hover:text-[#516dfb]" href="#">
                {{ competencia.categoria }}
            </a>
            <span class="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <a disabled class="text-gray-500 hover:text-[#516dfb]" href="#">Temporada {{ torneo.temporada }}</a>
            <span class="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <span class="text-[#516dfb] font-semibold">Programación Partido #{{ partido.idPartido }}</span>
        </div>
        <PartidoHeading :partido="partido" :nombreLocal="nombreLocal" :nombreVisitante="nombreVisitante"
            :categoria="categoria" />
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8 space-y-8">
                <DetalleEncuentro :partido="partido" />
                <Designacion :idPartido="partido.idPartido" />
                <!-- <CostosEncuentro /> -->
            </div>
            <PreviewDesignacion />
        </div>
    </main>
</template>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>