<script setup>
import { IconBallFootball } from '@tabler/icons-vue';
import { IconSitemap } from '@tabler/icons-vue';
import { IconList } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { IconTrophy } from '@tabler/icons-vue';
import { IconRocket } from '@tabler/icons-vue';
import { IconScoreboard } from '@tabler/icons-vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { IconDeviceFloppy } from '@tabler/icons-vue';
import { onMounted, ref } from 'vue';
import Participantes from '../components/Participantes.vue';
import CompetenciaForm from '../components/forms/CompetenciaForm.vue';
const tabs = ref(['info', 'participantes']);
const activeTab = ref('info');
const crearCompetencia = ref({
    nombre: '',
    categoria: '',
    idTorneo: 0,
})
const cargarConfiguracion = ref({
    cantJugadoresclub: 0,
    minutosPorTiempo: 0,
    maxSustituciones: 0,
    formatoCompetencia: '',
});

</script>

<template>
    <div class="container max-w-5xl mx-auto py-4 flex h-full flex-col group/design-root overflow-x-hidden">
        <div class="flex flex-col gap-2 p-4 mb-4">
            <h1 class="text-[#111218]  text-4xl font-black leading-tight tracking-[-0.033em]">Registro de
                Competencia</h1>
            <p class="text-[#5f668c]  text-base font-normal leading-normal">Configure los detalles
                básicos y reglas técnicas para la nueva competencia de fútbol 11.</p>
        </div>
        <CompetenciaForm />
    </div>
</template>