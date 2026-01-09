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
                        <option value="RESERVA">Reserva</option>
                        <option value="JUVENIL">Juvenil</option>
                        <option value="AMATEUR">Amateur</option>
                    </select>
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                    <label class="text-gray-800  text-sm font-semibold">Torneo Padre <span
                            class="text-red-500">*</span></label>
                    <div class="relative">
                        <select v-model="competencia.torneoId" required
                            class="w-full rounded-lg border-gray-300  bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 text-base appearance-none">
                            <option value="" disabled>Seleccione un Torneo...</option>
                            <option v-for="t in torneos" :key="t.idTorneo" :value="t.idTorneo">
                                {{ t.nombre }} ({{ t.temporada }})
                            </option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
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
                </div>
            </div>
        </div>

        <div class="bg-white  border border-gray-200  rounded-xl overflow-hidden shadow-sm">
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

        <div class="bg-white  border border-gray-200  rounded-xl overflow-hidden shadow-sm">
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
            </div>
        </div>

        <div class="flex items-center justify-end gap-4 py-6 border-t border-gray-200  mt-4">
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
    </form>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';

// Estado de la UI para campos que no van a la DB
const uiState = reactive({
    entretiempo: 15
});

// Entidad Competencia (Java)
const competencia = reactive({
    nombre: '',
    categoria: '', // Obligatorio (Enum)
    torneoId: '',  // Relación
});

// Entidad Configuraciones (Java) - Se guardará en cascada o vinculada
const configuracion = reactive({
    formatoCompetencia: 'LIGA',
    minutosPorTiempo: 45,
    maxSustituciones: 5,
    cantidadJugadoresEquipo: 11,
    puntosVictoria: 3,
    puntosEmpate: 1,
    puntosDerrota: 0,
    permiteEmpate: true,
    tipoDefinicion: 'RESULTADO_DIRECTO' // Valor por defecto
});

// Datos simulados para el select de Torneos
const torneos = ref([]);

onMounted(() => {
    // Aquí cargarías desde tu API: await torneoApi.getAll()
    torneos.value = [
        { idTorneo: 1, nombre: 'Liga Nacional', temporada: 2024 },
        { idTorneo: 2, nombre: 'Copa Regional', temporada: 2024 },
    ];
});

const guardarCompetencia = async () => {
    // Construcción del Payload para Spring Boot
    // Asumiendo que envías un objeto compuesto o DTO
    const payload = {
        ...competencia,
        torneo: { idTorneo: competencia.torneoId }, // Relación objeto
        configuracion: { ...configuracion }         // Relación objeto (Cascade)
    };

    console.log("Enviando JSON:", JSON.stringify(payload, null, 2));

    try {
        // await competenciaApi.create(payload);
        alert("Competencia creada (Simulación)");
    } catch (error) {
        console.error(error);
    }
};

const resetForm = () => {
    competencia.nombre = '';
    competencia.categoria = '';
    competencia.torneoId = '';
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