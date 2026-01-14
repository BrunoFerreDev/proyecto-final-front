<script setup>
import {
  IconChevronLeft,
  IconEdit,
  IconPlus,
  IconChevronRight,
  IconSettings,
  IconTrophy,
  IconNewSection,
} from "@tabler/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import CardCompetencia from "../components/CardCompetencia.vue";
import PartidoItem from "../components/PartidoItem.vue";
import SearchTorneo from "../components/forms/SearchTorneo.vue";
import TablePosiciones from "../components/tables/TablePosiciones.vue";
import NewPartido from "../components/forms/NewPartido.vue";

const router = useRouter();
const tab = ref("fixture");
const torneo = ref({});
const cargandoTorneo = ref(true);
const competencias = ref([]);
const fixture = ref([]);
const id = ref(0);
onMounted(() => { });
const navigateTo = (path, query) => {
  router.push({ path, query });
};
// Esta función recibe el texto que viene del hijo (Buscador)
const manejarBusqueda = async (termino) => {
  console.log("Buscando:", termino);
  if (!termino) {
    torneo.value = { encontrado: false }; // Limpiar si está vacío
    return;
  }
  try {
    cargandoTorneo.value = true;
    // EJEMPLO 1: Si filtras desde el Backend (Recomendado)
    const respuesta = await axios.get(
      `http://localhost:8080/api/torneos/${termino}`
    );
    torneo.value = {
      ...respuesta.data,
      encontrado: true,
    };
    fetchCompetencias(respuesta.data.idTorneo);
  } catch (error) {
    console.error("Error buscando torneos:", error);
    torneo.value = {
      encontrado: false,
    };
  } finally {
    cargandoTorneo.value = false;
  }
};
const fetchCompetencias = async (idTorneo) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/torneos/${idTorneo}/competencias`
    );
    competencias.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
const fetchPartidos = async (idCompetencia) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/partidos/competencia`,
      {
        params: {
          competencia: idCompetencia,
          page: 0,
          size: 10,
        },
      }
    );
    partidos.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="layout-container flex h-full grow flex-col">
    <div class="flex justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div class="layout-content-container flex flex-col w-full max-w-[1024px] gap-8">
        <!-- Search & Title Section -->
        <!-- Search Bar -->
        <SearchTorneo @buscar-torneo="manejarBusqueda" />
        <!-- Selected Context: Tournament Card -->
        <section class="flex flex-col justify-between items-center md:flex-row">
          <div
            class="flex flex-col md:flex-row items-stretch gap-6 rounded-2xl bg-white p-1 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] ring-1 ring-gray-100">
            <!-- Tournament Image -->
            <div class="w-full md:w-48 shrink-0 aspect-video md:aspect-auto rounded-xl bg-cover bg-center"
              data-alt="Abstract dynamic soccer pattern blue and white" style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfWzIQNlYK_6YyxcgzE0BFpjqjMxS-D5VlZXijbVJpb5zA0PbrIFIbUalBocXEttI08BGa9c3i1tmUCK-LdGXTxnckLS7fEzTjGFnfuc-za8yB2CkXGAKxuX7oQF_iStVRecZg9JfmR9gcLydyYyFyxo4upd3jVUzJ66DT0x62hG3R6fIF1rijbK59DU_XpdxFgYctPzMuAv-Ap-srSmAVX-NPlB2DH0s3aBOljhk1nQlt-YRGMAZTLY-5j_0-qQMVVyQJ3ngjiPY');
              ">
              <div class="w-full h-full bg-gradient-to-t from-black/50 to-transparent md:hidden rounded-xl"></div>
            </div>
            <!-- Tournament Info -->
            <div class="flex flex-col gap-4 p-4 md:py-6 md:pr-6 w-130">
              <div class="flex justify-between items-center">
                <div>
                  <div class="flex items-center gap-3 mb-1">
                    <span
                      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
                        torneo.estado }}</span>
                    <span class="text-xs text-[#5f668c] font-mono">#{{ torneo.idTorneo }}</span>
                  </div>
                  <h2 class="text-2xl font-bold text-[#111218]">
                    {{ torneo.nombre }}
                  </h2>
                  <p class="text-[#5f668c] text-sm mt-1">
                    Temporada - {{ torneo.temporada }}
                  </p>
                </div>
                <div class="flex flex-col md:flex-row gap-2 justify-between">
                  <button
                    class="inline-flex md:flex-none items-center justify-end gap-2 rounded-lg bg-[#0d7ff2]/10 hover:bg-[#0d7ff2]/20 px-4 py-2.5 text-sm font-semibold text-[#0d7ff2] transition-colors">
                    <IconSettings />
                    <span>Configurar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-1 md:flex-col justify-between items-center">
            <button @click.prevent="navigateTo('/nuevo-torneo')"
              class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 h-14 bg-white border border-stone-200 text-text-main text-sm font-bold hover:bg-sky-50 transition-colors shadow-sm">
              <IconPlus />
              Nuevo Torneo
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 h-14 bg-white border border-stone-200 text-text-main text-sm font-bold hover:bg-sky-50 transition-colors shadow-sm">
              <IconEdit /> Editar Torneo
            </button>
          </div>
        </section>
        <!-- Competencias -->
        <section class="flex flex-col gap-4 animate-in fade-in duration-500">
          <div class="flex items-center justify-between px-1">
            <h3 class="text-lg font-bold text-[#111218] flex items-center gap-2">
              <IconTrophy />
              Competencias Asociadas
            </h3>
            <span class="text-xs font-medium text-gray-500 uppercase tracking-wide">Seleccionar Competencia</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <template v-if="competencias.length > 0">
              <CardCompetencia v-for="competencia in competencias" :key="competencia.idCompetencia"
                :competencia="competencia" />
            </template>
            <button :disabled="!torneo.nombre" @click.prevent="
              navigateTo('/nueva-competencia', {
                idTorneo: torneo.idTorneo,
                nombre: torneo.nombre,
              })
              " :class="!torneo.nombre ? 'opacity-50 cursor-not-allowed' : ''"
              class="flex items-center rounded-xl justify-center gap-2 px-5 l bg-white border border-stone-200 text-text-main text-sm font-bold hover:bg-sky-50 transition-colors shadow-sm min-h-24">
              <IconNewSection /> Nueva Competencia
            </button>
          </div>
        </section>
        <!-- Tabs Navigation -->
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav aria-label="Tabs" class="-mb-px flex space-x-8 overflow-x-auto custom-scrollbar">
            <!-- Tab: Fixture (Active) -->
            <button @click="tab = 'fixture'" :class="[
              tab === 'fixture'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2 transition-colors',
            ]">
              Fixture
            </button>

            <button :disabled="competencias.length == 0" @click="tab = 'clasificacion'" :class="[
              tab === 'clasificacion'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2 transition-colors',
            ]">
              Clasificación
            </button>

            <button :disabled="competencias.length == 0" @click="tab = 'programar'" :class="[
              tab === 'programar'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2 transition-colors',
            ]">
              Programar Partidos
            </button>
          </nav>
        </div>
        <!-- Tab Content Area -->
        <div class="flex flex-col gap-12">
          <!-- TAB CONTENT 1: FIXTURE -->
          <div v-if="tab == 'fixture'" class="animate-in fade-in slide-in-from-bottom-2 duration-500"
            id="fixture-content">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-[#111218]">
                Partidos Recientes y Próximos
              </h3>
              <div class="flex items-center gap-2">
                <button class="p-2 rounded-lg hover:bg-gray-100">
                  <IconChevronLeft />
                </button>
                <span
                  class="text-sm font-medium text-gray-900 bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Jornada
                  5</span>
                <button class="p-2 rounded-lg hover:bg-gray-100">
                  <IconChevronRight />
                </button>
              </div>
            </div>
            <!-- Match List -->
            <div class="space-y-4">
              <template v-if="fixture.length > 0">
                <!-- Match Item: Played -->
                <PartidoItem v-for="partidoBack in fixture" :key="partidoBack.idPartido" :partido="partidoBack" />
              </template>
              <template v-else>
                <p>No hay partidos programados</p>
              </template>
            </div>
          </div>

          <!-- TAB CONTENT 2: CLASIFICACION -->
          <div v-if="tab == 'clasificacion'"
            class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            id="clasificacion-content">
            <TablePosiciones />
          </div>
          <!-- TAB CONTENT 3: PROGRAMAR PARTIDOS -->
          <div v-if="tab == 'programar'"
            class="bg-gray-50 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-gray-700 p-6 md:p-8"
            id="programar-content">
            <NewPartido />
          </div>
        </div>
        <!-- End Tab Content Area -->
      </div>
    </div>
  </div>
</template>
