<template>
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>⚙️ Nueva Configuración de Reglas</span>
        </h2>

        <form @submit.prevent="guardarConfiguracion" class="space-y-8">

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Datos Generales</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">Formato de Competencia</label>
                        <input v-model="config.formatoCompetencia" type="text"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ej: Liga, Eliminatoria, Fase de Grupos" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Jugadores por Equipo</label>
                        <input v-model.number="config.cantidadJugadoresEquipo" type="number" min="1"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Minutos por Tiempo</label>
                        <input v-model.number="config.minutosPorTiempo" type="number" min="1"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Máx. Sustituciones</label>
                        <input v-model.number="config.maxSustituciones" type="number" min="0"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 class="text-lg font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">Sistema de Puntuación
                </h3>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-blue-700 uppercase tracking-wide">Victoria</label>
                        <input v-model.number="config.puntosVictoria" type="number"
                            class="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-center font-mono text-lg" />
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-blue-700 uppercase tracking-wide">Empate</label>
                        <input v-model.number="config.puntosEmpate" type="number"
                            class="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-center font-mono text-lg" />
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-blue-700 uppercase tracking-wide">Derrota</label>
                        <input v-model.number="config.puntosDerrota" type="number"
                            class="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-center font-mono text-lg" />
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Reglas de Definición</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Tipo de Definición</label>
                        <select v-model="config.tipoDefinicion"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            <option value="" disabled>Seleccionar</option>
                            <option value="PENALES">Penales</option>
                            <option value="GOL_DE_ORO">Gol de Oro</option>
                            <option value="TIEMPO_EXTRA">Tiempo Extra</option>
                            <option value="RESULTADO_DIRECTO">Resultado Directo</option>
                        </select>
                    </div>

                    <div class="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                        <span class="text-sm font-medium text-gray-700">¿Permite Empate?</span>
                        <button type="button" @click="config.permiteEmpate = !config.permiteEmpate"
                            :class="config.permiteEmpate ? 'bg-indigo-600' : 'bg-gray-200'"
                            class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
                            <span :class="config.permiteEmpate ? 'translate-x-5' : 'translate-x-0'"
                                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                    </div>
                </div>
            </div>

            <button type="submit"
                class="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition hover:-translate-y-0.5">
                Guardar Configuración
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const config = reactive({
    formatoCompetencia: '',
    cantidadJugadoresEquipo: 11,
    minutosPorTiempo: 45,
    maxSustituciones: 5,
    puntosVictoria: 3,
    puntosEmpate: 1,
    puntosDerrota: 0,
    permiteEmpate: true,
    tipoDefinicion: '' // Enum: TipoDefinicion
});

const guardarConfiguracion = () => {
    console.log("Configuración a guardar:", config);
    // Todo: Llamada a API
};
</script>