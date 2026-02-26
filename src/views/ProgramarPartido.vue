<script setup>
import axios from 'axios';
import { computed, ref, watch } from 'vue';
import ItemCompetencia from '../components/ItemCompetencia.vue';
const buscador = ref('')
const competencia = ref([])
const clubesInscriptos = ref([])
const idLocal = ref('')
const idVisitante = ref('')
const fetchCompetencia = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/competencias/traer', {
            params: { idCompetencia: buscador.value },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        // Axios guarda la respuesta del servidor en .data
        competencia.value = response.data;
    } catch (error) {
        console.error('Error fetching competencia:', error);
    }
}

const fetchClubesInscriptos = async (id) => {
    try {
        const response = await axios.get('http://localhost:8080/api/competencias/traer-clubes', {
            params: {
                idCompetencia: id,
                page: 0,
                size: 15
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        // 2. CORRECCIÓN AQUÍ: Accedemos a response.data.content
        // Añadimos un fallback de array vacío por seguridad
        clubesInscriptos.value = response.data?.content || [];
        console.log('Clubes inscriptos cargados:', clubesInscriptos.value);
    } catch (error) {
        console.error('Error fetching clubes inscriptos:', error);
        clubesInscriptos.value = [];
    }
}
const clubLocal = computed(() => {
    return clubesInscriptos.value.find(club => club.idClub === idLocal.value)
})
const clubVisitante = computed(() => {
    return clubesInscriptos.value.find(club => club.idClub === idVisitante.value)
})
const opcionesLocal = computed(() => {
    if (!clubesInscriptos.value) return [];
    if (!idVisitante.value) return clubesInscriptos.value;
    return clubesInscriptos.value.filter(club => club.idClub !== idVisitante.value);
});

const opcionesVisitante = computed(() => {
    if (!clubesInscriptos.value) return [];
    if (!idLocal.value) return clubesInscriptos.value;
    return clubesInscriptos.value.filter(club => club.idClub !== idLocal.value);
});

// 3. Observar cambios en el objeto competencia
watch(competencia, (newVal) => {
    if (newVal && newVal.idCompetencia) {
        fetchClubesInscriptos(newVal.idCompetencia);
    }
}, { deep: true }); // deep: true por si cambian propiedades internas

const arbitroPrincipal = ref(null);
const buscadorArbitroPrincipal = ref('');
const buscarArbitro = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/arbitros/buscar', {
            params: { dni: buscadorArbitroPrincipal.value },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        const data = response.data;
        arbitroPrincipal.value = data.nombre + ' ' + data.apellido + ' / ' + data.dni;
        return response.data; // Devolver datos del árbitro encontrado
    } catch (error) {
        console.error('Error buscando árbitro:', error);
        return null; // Devolver null en caso de error
    }
}
watch(arbitroPrincipal, async (newDni) => {
    if (newDni) {
        const arbitroData = await buscarArbitro(newDni);
        if (arbitroData) {
            console.log('Árbitro encontrado:', arbitroData);
            // Aquí podrías asignar arbitroData a una variable para mostrar en la UI
        } else {
            console.log('No se encontró ningún árbitro con ese DNI.');
        }
    }
});
</script>

<template>
    <div class="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20">
        <div class="flex flex-col max-w-270 w-full gap-6">

            <!-- Page Heading -->
            <div class="flex flex-wrap justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <h1 class="text-[#111218]  text-4xl font-black leading-tight tracking-[-0.033em]">
                        Programar Partido</h1>
                    <p class="text-[#5f668c] text-base font-normal leading-normal">Configura los
                        detalles del encuentro: torneo, clubs y logística.</p>
                </div>
            </div>
            <!-- Main Form Container -->
            <div class="flex flex-col gap-8">
                <!-- Step 1: Select Tournament & Competition -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50 flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            1</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Selección de Torneo</h2>
                    </div>
                    <div class="p-6 grid gap-6">
                        <!-- Search Bar for Tournament -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Buscar
                                Torneo</label>
                            <div class="relative w-full max-w-2xl">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">search</span>
                                </div>
                                <input @keyup.enter="fetchCompetencia" v-model="buscador"
                                    class="w-full pl-10 pr-4 py-3 rounded-lg bg-[#f8f9fc]  border-none focus:ring-2 focus:ring-[#0d7ff2] text-[#111218]  placeholder-[#5f668c]"
                                    placeholder="Buscar por nombre, temporada o categoría (ej. Liga Mayor 2024)..."
                                    type="text" />
                                <div class="absolute inset-y-0 right-3 flex items-center">
                                    <span class="material-symbols-outlined text-green-500">check_circle</span>
                                </div>
                            </div>
                        </div>
                        <!-- Competitions List -->
                        <div class="flex flex-col gap-3 animate-fade-in">
                            <label class="block text-sm font-semibold text-[#111218] ">Seleccionar
                                Competencia</label>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <!-- Active Card -->
                                <ItemCompetencia v-if="competencia.idCompetencia" :competencia="competencia" />
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Step 2: Select Teams -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50  flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            2</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Definir Encuentro</h2>
                    </div>
                    <div class="p-6">
                        <div class="flex flex-col md:flex-row items-center gap-8 justify-between">
                            <!-- Local Team -->
                            <div class="flex-1 w-full">
                                <label class="flex items-center gap-2 text-sm font-bold text-[#0d7ff2] mb-2">
                                    <span class="material-symbols-outlined text-lg">home</span>
                                    Club Local
                                </label>
                                <div class="relative">
                                    <select v-model="idLocal"
                                        class="w-full appearance-none rounded-lg border border-[#e5e7eb]  bg-white  px-4 py-3 pr-8 text-[#111218]  focus:border-[#0d7ff2] focus:outline-none focus:ring-1 focus:ring-[#0d7ff2]">
                                        <option value="">Seleccionar club...</option>
                                        <option v-for="club in opcionesLocal" :key="club.idClub" :value="club.idClub">
                                            {{ club.nombre }}
                                        </option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                                <!-- Selected Team Preview Small -->
                                <div
                                    class="mt-4 flex items-center gap-3 p-3 bg-blue-50  rounded-lg border border-blue-100">
                                    <div
                                        class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                                        <img alt="Logo" class="w-full h-full object-cover opacity-80"
                                            data-alt="Blue soccer team logo abstract" :src="clubLocal?.escudo || ''" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-[#111218] ">{{ clubLocal?.nombre }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- VS Badge -->
                            <div class="flex flex-col items-center justify-center shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#111218] text-white flex items-center justify-center font-black text-lg shadow-lg z-10">
                                    VS
                                </div>
                            </div>
                            <!-- Visiting Team -->
                            <div class="flex-1 w-full">
                                <label class="flex items-center gap-2 text-sm font-bold text-[#ef4444] mb-2">
                                    <span class="material-symbols-outlined text-lg">flight</span>
                                    Club Visitante
                                </label>
                                <div class="relative">
                                    <select v-model="idVisitante"
                                        class="w-full appearance-none rounded-lg border border-[#e5e7eb]  bg-white  px-4 py-3 pr-8 text-[#111218]  focus:border-[#0d7ff2] focus:outline-none focus:ring-1 focus:ring-[#0d7ff2]">
                                        <option value="">Seleccionar club...</option>
                                        <option v-for="club in opcionesVisitante" :key="club.idClub"
                                            :value="club.idClub">
                                            {{ club.nombre }}
                                        </option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                                <!-- Selected Team Preview Small -->
                                <div
                                    class="mt-4 flex items-center gap-3 p-3 bg-red-50  rounded-lg border border-red-100 ">
                                    <div
                                        class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                                        <img alt="Logo" class="w-full h-full object-cover opacity-80"
                                            data-alt="Red soccer team logo abstract"
                                            :src="clubVisitante?.escudo || ''" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-[#111218] ">{{ clubVisitante?.nombre }}</p>
                                        <p class="text-xs text-[#5f668c]">Posición: {{ clubVisitante?.posicion }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Step 3: Logistics -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50  flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            3</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Logística y Árbitros</h2>
                    </div>
                    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Date -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Fecha del
                                Partido</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">calendar_today</span>
                                </div>
                                <input
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb] bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                                    type="date" />
                            </div>
                        </div>
                        <!-- Time -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Hora de
                                Inicio</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">schedule</span>
                                </div>
                                <input
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                                    type="time" />
                            </div>
                        </div>
                        <!-- Stadium -->
                        <div class="md:col-span-2">
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Estadio /
                                Sede</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">stadium</span>
                                </div>
                                <select
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  appearance-none focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option value="">Seleccionar sede...</option>
                                    <option value="estadio_municipal">Estadio Municipal (Local)</option>
                                    <option value="campo_deportivo">Campo Deportivo Central</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <div class="h-px bg-gray-100 md:col-span-2 my-2"></div>
                        <!-- Referee Main -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Buscar Árbitro
                                principal</label>
                            <div class="relative">
                                <span
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]"><span
                                        class="material-symbols-outlined">search</span></span>
                                <input type="search" @keyup.enter="buscarArbitro" v-model="buscadorArbitroPrincipal"
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                                    placeholder="Buscar por DNI...">
                            </div>
                        </div>
                        <!-- Referee Assistant -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Nombre Completo / DNI
                            </label>
                            <div class="relative">
                                <span
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]"><span
                                        class="material-symbols-outlined">sports</span></span>
                                <input type="text" placeholder="Resultado" disabled="" :value="arbitroPrincipal ?? ''"
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Action Bar -->
                <div class="flex items-center justify-end gap-4 py-6">
                    <button
                        class="px-8 py-3 rounded-lg bg-white border border-[#e5e7eb] text-[#111218] font-bold text-sm shadow-lg shadow-gray-500/30 hover:bg-gray-100 hover:shadow-gray-500/50 transition-all">
                        Cancelar
                    </button>
                    <button
                        class="px-8 py-3 rounded-lg bg-[#0d7ff2] text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg">save</span>
                        Guardar Partido
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>