<template>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            v-if="modalInscribirClub">
            <ModalInscribirClub :modalInscribirClub="modalInscribirClub" @closeModal="modalInscribirClub = false" />
        </div>
        <!-- Breadcrumbs -->
        <nav class="flex mb-6 text-sm font-medium text-slate-500 gap-2 items-center">
            <RouterLink to="/torneo"><a class="hover:text-[#1f44f9]" href="#">Mis Torneos</a></RouterLink>
            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
            <span class="hover:text-[#1f44f9]" href="#">{{ torneo.nombre }}</span>
            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
            <span class="text-slate-900 ">{{ competencia.nombre }}</span>
        </nav>
        <!-- Header Section -->
        <!-- class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8" -->
        <div class="flex flex-col md:flex-row md:items-center items-start justify-between gap-6 mb-8">
            <div class="md:col-span-2 flex flex-col gap-2">
                <div class="flex items-center gap-3 mb-2">
                    <span
                        class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1f44f9]/10 text-[#1f44f9] border border-[#1f44f9]/20 uppercase tracking-wider">Temporada
                        Oficial</span>
                    <span
                        class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 uppercase tracking-wider">{{
                            torneo.estado }}</span>
                </div>
                <h2 class="text-2xl font-black text-slate-900  tracking-tight">Competencia : {{ competencia.nombre }}
                </h2>
                <h2 class="text-xl pt-2 font-bold text-slate-600  tracking-tight">Torneo :
                    {{ torneo.nombre }}
                </h2>
                <p class="text-slate-500 mt-1 flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">stadium</span>
                    {{ competencia.categoria }}
                </p>
            </div>
            <div class="flex max-w-4xl justify-end gap-3">
                <!-- <button
                    class="inline-flex items-center gap-2 px-4 py-4 bg-white  border-slate-200  rounded-lg text-sm font-bold text-slate-700  hover:bg-slate-50 transition-colors shadow-sm">
                    <span class="material-symbols-outlined text-[20px]">download</span>
                    Reporte PDF
                </button> -->
                <button @click.prevent="showModalInscribirClub"
                    class="inline-flex items-center gap-2 px-4 py-4 bg-[#1f44f9] text-white rounded-lg text-sm font-bold hover:bg-[#1f44f9]/90 transition-colors shadow-md">
                    <span class="material-symbols-outlined text-[20px]">add</span>
                    Inscribir Equipo
                </button>
            </div>
        </div>
        <!-- Dashboard Quick Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard titulo="Partidos Jugados" :valor="stats.totalPartidos" fontSize="text-2xl" icon="sports_soccer"
                color="bg-blue-100 text-blue-700" />
            <StatsCard titulo="Goles Anotados" :valor="stats.totalGoles" fontSize="text-2xl" icon="emoji_events"
                color="bg-green-100 text-green-700" />
            <StatsCard titulo="Promedio de Goles por Partido" :valor="stats.promedioGoles.toFixed(1)"
                fontSize="text-2xl" icon="insights" color="bg-yellow-100 text-yellow-700" />
            <StatsCard titulo="Equipo Líder" :valor="stats.equipoLider" fontSize="text-2xl" icon="emoji_events"
                color="bg-purple-100 text-purple-700" />
        </div>
        <!-- Main Content Area with Tabs -->
        <div class="bg-white rounded-2xl border border-slate-200  shadow-sm overflow-hidden">
            <!-- Tabs Navigation -->
            <div class="border-b border-slate-200  px-6">
                <nav class="flex gap-8">
                    <button :class="checkActive('tabla')" @click="activeTab = 'tabla'" class="flex items-center gap-2 py-4 text-sm 
                        ">
                        <span class="material-symbols-outlined text-[20px]">leaderboard</span>
                        Clasificación
                    </button>
                    <button :class="checkActive('fixture')" @click="activeTab = 'fixture'"
                        class="flex items-center gap-2 py-4 text-sm  ">
                        <span class="material-symbols-outlined text-[20px]">calendar_month</span>
                        Fixture
                    </button>
                    <button :class="checkActive('programar')" @click="activeTab = 'programar'"
                        class="flex items-center gap-2 py-4 text-sm ">
                        <span class="material-symbols-outlined text-[20px]">schedule</span>
                        Programar Partidos
                    </button>
                </nav>
            </div>
            <div class="p-6">
                <!-- Tab Content: Clasificación (Example view shown) -->
                <TablePosiciones v-if="activeTab === 'tabla'" :idCompetencia="competenciaId" />
                <!-- Tab Content: Fixture -->
                <Fixture v-if="activeTab === 'fixture'" :competencias="competencia" />
                <!-- Tab Content: Programar Partidos -->
                <NewPartido v-if="activeTab === 'programar'" />
            </div>
        </div>
    </main>
</template>
<script setup>
import StatsCard from '@/components/StatsCard.vue'
import { onMounted, ref } from 'vue';
import TablePosiciones from '../components/tables/TablePosiciones.vue';
import Fixture from '../components/Fixture.vue';
import NewPartido from '../components/forms/NewPartido.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import ModalInscribirClub from '../components/modal/ModalInscribirClub.vue';
const activeTab = ref('tabla')
const router = useRouter()
const competenciaId = router.currentRoute.value.params.idCompetencia
const torneoId = router.currentRoute.value.params.idTorneo
const competencia = ref([])
const modalInscribirClub = ref(false)
const torneo = ref({})
const showModalInscribirClub = () => {
    modalInscribirClub.value = true;
}
const checkActive = (tab) => {
    if (tab === activeTab.value) {
        return 'border-[#1f44f9] text-[#1f44f9] font-bold border-b-2 transition-colors'
    } else {
        return 'border-transparent text-slate-500 font-medium hover:text-[#1f44f9] hover:border-[#1f44f9] transition-colors'
    }
}
const fetchCompetencia = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/competencias/traer', {
            params: {
                idCompetencia: competenciaId
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });
        const data = response.data;
        competencia.value = data;
        torneo.value = competencia.value.torneo;
        fetchStats();
    } catch (error) {
        console.error('Error fetching competencia:', error);
    }
}

const stats = ref({
    totalPartidos: 0,
    totalGoles: 0,
    promedioGoles: 0,
    equipoLider: '-'
});
const loading = ref(true);

const fetchStats = async () => {
    loading.value = true;
    try {
        const response = await axios.get(`http://localhost:8080/api/competencias/resumen`, {
            params: {
                idCompetencia: competencia.value.idCompetencia
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });
        stats.value = response.data;
        console.log(stats.value);
        
    } catch (error) {
        console.error("Error cargando stats", error);
    } finally {
        loading.value = false;
    }
};
onMounted(() => {
    fetchCompetencia();
});
</script>