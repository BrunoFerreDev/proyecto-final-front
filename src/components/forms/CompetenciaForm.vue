<template>
    <form @submit.prevent="guardarCompetencia" class="space-y-6">
        <div class="bg-white  border border-gray-200  rounded-xl overflow-hidden shadow-sm">
            <div class="bg-blue-50 px-6 py-4 border-b border-gray-200 ">
                <h2 class="text-gray-800 text-lg font-bold">Información Básica</h2>
            </div>

            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label class="text-gray-800  text-sm font-semibold">Nombre de la Competencia <span
                            class="text-red-500">*</span></label>
                    <input v-model="competencia.nombre" required type="text"
                        class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 text-base"
                        placeholder="Ej: Apertura 2024 - Primera División" />
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-gray-800  text-sm font-semibold">Categoría <span
                            class="text-red-500">*</span></label>
                    <select v-model="competencia.categoria" required
                        class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 text-base">
                        <option value="" disabled>Seleccione Categoría...</option>
                        <option value="PRIMERA_DIVISION">Primera División</option>
                        <option value="SUB_21">Sub 21</option>
                        <option value="SUB_16">Sub 16</option>
                        <option value="SUB_13">Sub 13</option>
                        <option value="SUB_11">Sub 11</option>
                        <option value="SUB_9">Sub 9</option>
                        <option value="SUB_7">Sub 7</option>
                        <option value="SUB_5">Sub 5</option>
                        <option value="SUB_3">Sub 3</option>
                        <option value="SUB_1">Sub 1</option>
                    </select>
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                    <label class="text-gray-800  text-sm font-semibold">Torneo Padre <span
                            class="text-red-500">*</span></label>
                    <div class="relative">
                        <input type="text" v-model="torneo.nombre" disabled
                            class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 text-base">
                    </div>
                    <div class="relative">
                        <label class="text-gray-800  text-sm font-semibold">Tipo de Definición</label>
                        <select name="tipoDefinicion" id="" v-model="configuracion.tipoDefinicion"
                            class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 text-base">
                            <option value="">Seleccione...</option>
                            <option value="TIEMPO_REGULAR">Tiempo Regular</option>
                            <option value="PENALTI">Tiempo Regular + Penalti</option>
                            <option value="TIEMPO_REGULAR_ALARGUE">Tiempo Regular + Alargue + Penalti</option>

                        </select>
                    </div>
                </div>

                <div class="flex flex-col gap-4 col-span-full mt-2">
                    <label class="text-gray-800  text-sm font-semibold">Formato de Competencia</label>
                    <div class="flex gap-6">
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input v-model="configuracion.formatoCompetencia" type="radio" value="LIGA"
                                class="size-5 text-blue-600 focus:ring-blue-600 border-gray-300  " />
                            <span class="text-base text-gray-800">Liga (Todos contra todos)</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input v-model="configuracion.formatoCompetencia" type="radio" value="ELIMINATORIA"
                                class="size-5 text-blue-600 focus:ring-blue-600 border-gray-300  " />
                            <span class="text-base text-gray-800">Copa (Eliminación directa)</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-end gap-4 py-6  ">
                        <button type="button" @click="resetForm"
                            class="px-6 py-3 rounded-lg text-gray-500 font-bold hover:bg-gray-100  transition-all">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="bg-blue-600 px-8 py-3 rounded-lg text-white font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">save</span>
                            Guardar Competencia
                        </button>
                    </div>
                </div>
            </div>


        </div>
    </form>
    <form action="POST" @submit.prevent="guardarConfiguraciones" class="mt-5">
        <!-- Configuración de Juego -->
        <div class="bg-white  border border-gray-200 overflow-hidden shadow-sm">
            <div class="bg-blue-50 px-6 py-4 border-b border-gray-200  flex items-center gap-2">
                <span class="material-symbols-outlined text-blue-600">sports_soccer</span>
                <h2 class="text-gray-800 text-lg font-bold">Configuración de Juego</h2>
            </div>

            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-gray-800  text-sm font-semibold">Tiempos de Juego
                            (Minutos)</label>
                        <div class="flex items-center gap-4">
                            <div class="flex-1">
                                <p class="text-xs text-gray-500 mb-1">Por Tiempo</p>
                                <input v-model.number="configuracion.minutosPorTiempo" type="number"
                                    class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-11 px-4" />
                            </div>
                            <div class="flex-1">
                                <p class="text-xs text-gray-500 mb-1">Total Partido (Ref)</p>
                                <input :value="configuracion.minutosPorTiempo * 2" disabled
                                    class="w-full rounded-lg border-gray-200 bg-gray-50 text-gray-500 h-11 px-4 cursor-not-allowed" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-gray-800  text-sm font-semibold">Entretiempo
                            (Minutos)</label>
                        <input v-model.number="uiState.entretiempo" type="number"
                            class="w-full max-w-[200px] rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-11 px-4" />
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-gray-800  text-sm font-semibold">Sustituciones</label>
                        <div class="flex items-center gap-4">
                            <div class="flex-1">
                                <p class="text-xs text-gray-500 mb-1">Máx. Cambios</p>
                                <input v-model.number="configuracion.maxSustituciones" type="number"
                                    class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-11 px-4" />
                            </div>
                            <div class="flex-1">
                                <p class="text-xs text-gray-500 mb-1">Jugadores en Campo</p>
                                <input v-model.number="configuracion.cantidadJugadoresEquipo" type="number"
                                    class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-11 px-4" />
                            </div>
                        </div>
                        <p class="text-xs text-blue-600 mt-1 font-medium">Define el reglamento base del partido.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white  border border-gray-200 overflow-hidden shadow-sm">
            <div class="bg-blue-50 px-6 py-4 border-b border-gray-200  flex items-center gap-2">
                <span class="material-symbols-outlined text-blue-600">scoreboard</span>
                <h2 class="text-gray-800 text-lg font-bold">Sistema de Puntuación</h2>
            </div>
            <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-4 bg-green-50  rounded-lg border border-green-100 ">
                        <label
                            class="text-green-800  text-xs font-bold uppercase tracking-wider mb-2 block">Victoria</label>
                        <div class="flex items-center gap-3">
                            <input v-model.number="configuracion.puntosVictoria" type="number" min="1" max=5
                                class="w-20 rounded border-green-200   focus:ring-green-500 font-bold text-center h-10" />
                            <span class="text-green-700  text-sm">puntos</span>
                        </div>
                    </div>

                    <div class="p-4 bg-blue-50 rounded-lg border border-blue-100 ">
                        <label
                            class="text-blue-800  text-xs font-bold uppercase tracking-wider mb-2 block">Empate</label>
                        <div class="flex items-center gap-3">
                            <input v-model.number="configuracion.puntosEmpate" type="number" min="0" max=5
                                class="w-20 rounded border-blue-200 focus:ring-blue-500 font-bold text-center h-10" />
                            <span class="text-blue-700  text-sm">punto</span>
                        </div>
                    </div>

                    <div class="p-4 bg-red-50  rounded-lg border border-red-100 ">
                        <label
                            class="text-red-800 text-xs font-bold uppercase tracking-wider mb-2 block">Derrota</label>
                        <div class="flex items-center gap-3">
                            <input v-model.number="configuracion.puntosDerrota" type="number" min="0" max=5
                                class="w-20 rounded border-red-200  focus:ring-red-500 font-bold text-center h-10" />
                            <span class="text-red-700  text-sm">puntos</span>
                        </div>
                    </div>

                </div>
                <div class="flex items-center justify-end gap-4 py-6  mt-2">
                    <button type="button" @click="resetForm"
                        class="px-6 py-3 rounded-lg text-gray-500 font-bold hover:bg-gray-100  transition-all">
                        Cancelar
                    </button>
                    <button type="button" @click="guardarConfiguraciones" :disabled="!configuracion.idCompetencia"
                        :class="[
                            !configuracion.idCompetencia
                                ? 'bg-gray-400 cursor-not-allowed opacity-50'
                                : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                        ]" class="px-8 py-3 rounded-lg text-white font-bold transition-all flex items-center gap-2">

                        <span class="material-symbols-outlined text-lg">save</span>
                        Guardar Configuración
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import axios from 'axios';
import { reactive, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const torneo = ref({});
onMounted(() => {
    // Asignar datos del torneo
    const query = router.currentRoute.value.query;
    torneo.value = {
        idTorneo: query.idTorneo,
        nombre: query.nombre
    };

    // Asignar directamente a la competencia sin esperar al watch
    if (query.idTorneo) {
        competencia.idTorneo = query.idTorneo;
    }
});
// Estado de la UI para campos que no van a la DB       
const uiState = reactive({
    entretiempo: 15
});

// Entidad Competencia (Java)
const competencia = reactive({
    nombre: '',
    categoria: '', // Obligatorio (Enum)
    idTorneo: 0,   // Relación
});

// Entidad Configuraciones (Java) - Se guardará en cascada o vinculada
const configuracion = reactive({
    idCompetencia: null, // Recuerda agregar esto para que funcione la lógica de IDs
    formatoCompetencia: 'LIGA',
    minutosPorTiempo: 45,
    maxSustituciones: 5,
    // CORRECCIÓN AQUÍ:
    cantJugadoresEquipo: 11, // Antes tenías "cantidadJugadoresEquipo"
    puntosVictoria: 3,
    puntosEmpate: 1,
    puntosDerrota: 0,
    permiteEmpate: true,
    tipoDefinicion: null
});
const guardarCompetencia = async () => {
    try {
        // 1. Guardamos la competencia
        const response = await axios.post('http://localhost:8080/api/torneos/competencia', competencia);
        console.log("Respuesta del Backend:", response.data); // <--- MIRA ESTO EN CONSOLA
        const nuevaCompetencia = response.data;

        // VERIFICACIÓN: Si aquí response.data.idCompetencia es undefined, el problema está en tu Java DTO.
        if (!nuevaCompetencia.idCompetencia) {
            console.error("¡ALERTA! El backend no devolvió el ID");
            return;
        }
        // 2. ACTUALIZACIÓN MANUAL (Aquí es donde fallaba)
        // Actualizamos el ID en el objeto competencia local
        competencia.value = { ...nuevaCompetencia };
        // ¡ESTA ES LA LÍNEA CLAVE QUE TE FALTA! 
        // Pasamos el ID recién creado a la configuración
        configuracion.idCompetencia = nuevaCompetencia.idCompetencia;
    } catch (error) {
        console.error("Error fatal:", error);
    }
};
const guardarConfiguraciones = async () => {
    // Ahora competencia.idCompetencia ya tiene valor real
    try {
        const response = await axios.post(`http://localhost:8080/api/torneos/competencia/${competencia.idCompetencia}/cargar-configuracion`, configuracion);
        console.log("Configuraciones guardadas:", response.data);
        alert("Configuraciones guardadas");
    } catch (error) {
        console.error("Error guardando configuración:", error);
    }
};
const resetForm = () => {
    competencia.nombre = '';
    competencia.categoria = '';
    competencia.idTorneo = 0;
    // Reset configs a default...
};
</script>
<style scoped>
input {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
}

select {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
}
</style>