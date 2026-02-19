<template>
    <div class="flex flex-col h-full overflow-y-auto bg-background-light relative">
        <div class="max-w-[1200px] w-full mx-auto px-6 py-8 md:px-12 flex flex-col">

            <div class="flex flex-col gap-2 mb-8">
                <h1 class="text-[#0d141c] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    Registrar Nueva Sanción
                </h1>
                <p class="text-[#49739c] text-base font-normal leading-normal max-w-2xl">
                    Complete el formulario para registrar una infracción disciplinaria.
                    <span v-if="activeTab === 'CLUB'" class="font-bold text-blue-600">
                        Editando sanción Institucional (Club).
                    </span>
                </p>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-[#e7edf4] flex flex-col overflow-hidden">

                <div class="border-b border-[#cedbe8] px-6">
                    <div class="flex gap-8 overflow-x-auto">
                        <button @click="() => {
                            activeTab = 'JUGADOR'
                            entidad = {}
                        }" :class="activeTab === 'JUGADOR' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">person</span>
                            <span class="text-sm font-bold tracking-wide">Jugador</span>
                        </button>

                        <button @click="() => {
                            activeTab = 'CUERPO_TECNICO'
                            entidad = {}
                        }" :class="activeTab === 'CUERPO_TECNICO' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">group</span>
                            <span class="text-sm font-bold tracking-wide">Cuerpo Técnico</span>
                        </button>

                        <button @click="() => {
                            activeTab = 'ARBITRO'
                            entidad = {}
                        }" :class="activeTab === 'ARBITRO' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">sports</span>
                            <span class="text-sm font-bold tracking-wide">Árbitro</span>
                        </button>

                        <button @click="() => {
                            activeTab = 'CLUB'
                            entidad = {}
                        }" :class="activeTab === 'CLUB' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">shield</span>
                            <span class="text-sm font-bold tracking-wide">Club</span>
                        </button>

                    </div>
                </div>

                <form class="p-6 md:p-8 flex flex-col gap-6" @submit.prevent="guardarSancion">
                    <!-- @submit.prevent="guardarSancion" -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold capitalize">
                                Buscar {{ activeTab.toLowerCase() }}
                            </span>
                            <div class="relative group">
                                <input @keydown.enter.prevent="buscarEntidad"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg pl-4 pr-12 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all placeholder:text-[#49739c]"
                                    v-model="dni"
                                    :placeholder="activeTab === 'CLUB' ? 'Nombre del Club...' : 'Nombre, apellido o DNI...'"
                                    type="text" />
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">search</span>
                                </div>
                            </div>
                        </label>

                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">ID Entidad Seleccionada</span>
                            <div class="relative">
                                <input
                                    class="w-full bg-[#e7edf4]/50 text-[#49739c] border border-[#cedbe8] rounded-lg px-4 h-12 cursor-not-allowed"
                                    disabled type="text"
                                    :value="entidad.dni ? entidad.dni : 'Pendiente de selección...'" />
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">lock</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div v-if="entidad.nombre">
                        <div class="flex items-center gap-2 mb-6 text-blue-600">
                            <span class="material-symbols-outlined">badge</span>
                            <h2 class="text-lg font-bold">Informacion de la Entidad</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold text-gray-700 ">Nombre</label>
                                <input v-model="entidad.nombre" disabled=""
                                    class="bg-gray-100 rounded-lg border-gray-300 w-full pl-3 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    placeholder="Ej. Lionel" type="text" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold text-gray-700 ">{{ activeTab === 'CLUB' ? 'Ciudad' :
                                    'Apellido' }}</label>
                                <input :value="entidad.apellido || entidad.ciudad" disabled=""
                                    class="bg-gray-100 rounded-lg border-gray-300 w-full pl-3 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    placeholder="Ej. Messi" type="text" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold text-gray-700 ">{{ activeTab === 'CLUB' ? 'ESTADO' :
                                    'DNI / Pasaporte' }}</label>
                                <input :value="entidad.dni || entidad.estado" disabled=""
                                    class="bg-gray-100 rounded-lg border-gray-300 w-full pl-3 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    placeholder="Documento de identidad" type="text" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold text-gray-700 ">Fecha de {{ activeTab === 'CLUB' ?
                                    'Fundacion' : 'Nacimiento' }}</label>

                                <input :value="entidad.fundacion || entidad.fechaNacimiento" disabled=""
                                    class="bg-gray-100 rounded-lg border-gray-300 w-full pl-3 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    type="text" />
                            </div>
                        </div>
                    </div>
                    <hr class="border-[#e7edf4] my-2" />

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Fecha del Incidente</span>
                            <div class="relative">
                                <input v-model="sancion.fechaHecho"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all text-sm"
                                    type="date" />
                            </div>
                        </label>
                        <!--  -->
                        <label class="flex flex-col gap-2" v-if="activeTab !== 'CLUB' && activeTab !== 'ARBITRO'">
                            <span class="text-[#0d141c] text-sm font-semibold">Tipo de Infracción</span>
                            <div class="relative">
                                <select v-model="sancion.tipoSancion"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all appearance-none">
                                    <option disabled value="">Seleccionar motivo...</option>
                                    <option value="AMARILLA_ACUMULACION">Acumulación Amarillas</option>
                                    <option value="ROJA_DIRECTA">Roja Directa</option>
                                    <option value="DOBLE_AMARILLA">Doble Amarilla</option>
                                    <option value="CONDUCTA_ANTIDEPORTIVA">Conducta Antideportiva</option>
                                    <option value="AGRESION">Agresión</option>
                                    <option value="DISTURBIOS">Disturbios (Club)</option>
                                    <option value="INCUMPLIMIENTO_PAGO">Incumplimiento (Club)</option>
                                </select>
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c] pointer-events-none">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>

                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Cantidad (Fechas / Monto)</span>
                            <div class="relative">
                                <input v-model.number="sancion.cantidad"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    min="0" placeholder="0" type="number" step="0.5" />
                            </div>
                        </label>
                        <div class="flex flex-col gap-2" v-if="activeTab === 'CLUB'">
                            <label for="tipoSancionCLub" class="text-[#0d141c] text-sm font-semibold">Tipo de Sanción:
                            </label>
                            <select v-model="sancion.tipoSancion" name="sancionclub" id="tipoSancionCLub"
                                class="w-full bg-white text-[#0d141c] border border-blue-200 rounded-lg px-4 h-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                                <option value="">Seleccione</option>
                                <option value="llamado_atencion">Llamado de Atención</option>
                                <option value="multa">Multa Económica</option>
                                <option value="clausura">Clausura del estadio</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Código / ID Partido</span>
                            <div class="relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">tag</span>
                                </div>
                                <input v-model="sancion.codigo"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg pl-10 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    placeholder="Ej: PART-2024-001" type="text" />
                            </div>
                        </label>

                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Estado Inicial</span>
                            <div class="relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">toggle_on</span>
                                </div>
                                <select v-model="sancion.estado"
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg pl-10 pr-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all appearance-none">
                                    <option value="ACTIVA">Activa</option>
                                    <option value="PENDIENTE">Pendiente</option>
                                    <option value="CUMPLIDA">Cumplida</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div v-if="activeTab === 'CLUB'"
                        class="p-4 bg-blue-50 border border-blue-100 rounded-lg animate-fade-in">
                        <h3 class="text-blue-800 font-bold mb-4 text-sm flex items-center gap-2">
                            <span class="material-symbols-outlined">domain</span>
                            Información Adicional Institucional
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <label class="flex flex-col gap-2">
                                <span class="text-[#0d141c] text-sm font-semibold">Motivo Detallado</span>
                                <input v-model="clubData.motivo"
                                    class="w-full bg-white text-[#0d141c] border border-blue-200 rounded-lg px-4 h-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    placeholder="Ej: Incidentes en tribuna norte" type="text" />
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-[#0d141c] text-sm font-semibold">Resolución Tribunal</span>
                                <input v-model="clubData.resolucion"
                                    class="w-full bg-white text-[#0d141c] border border-blue-200 rounded-lg px-4 h-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    placeholder="Ej: Clausura por 2 fechas" type="text" />
                            </label>
                        </div>
                    </div>

                    <label class="flex flex-col gap-2">
                        <span class="text-[#0d141c] text-sm font-semibold">Descripción General / Observaciones</span>
                        <textarea v-model="sancion.descripcionGeneral"
                            class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg p-4 h-32 resize-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all text-sm leading-relaxed"
                            placeholder="Describa los detalles del incidente para el informe oficial..."></textarea>
                    </label>

                    <div
                        class="flex flex-col-reverse md:flex-row justify-end gap-4 pt-4 mt-2 border-t border-[#e7edf4]">
                        <button type="button" @click="resetForm"
                            class="px-6 py-3 rounded-lg border border-[#cedbe8] text-[#49739c] font-bold text-sm hover:bg-[#f0f4f8] transition-colors">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-8 py-3 rounded-lg bg-[#0d7ff2] hover:bg-blue-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined">save</span>
                            Registrar Sanción
                        </button>
                    </div>
                </form>
            </div>

            <div class="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <span class="material-symbols-outlined text-blue-600">info</span>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-bold text-[#0d141c]">Nota Importante</p>
                    <p class="text-sm text-[#49739c]">
                        Las sanciones registradas con fecha <strong>{{ sancion.fechaHecho || 'hoy' }}</strong>
                        se aplicarán inmediatamente. El código de referencia debe ser único.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';


// Control de Tabs
const activeTab = ref('JUGADOR');

// Datos base de la entidad Sancion.java
const sancion = reactive({
    idEntidad: '',
    tipoSancion: '',         // String
    cantidad: 0.0,           // Double
    fechaHecho: '',          // LocalDate
    descripcionGeneral: '',  // String
    //codigo: '',              // String (unique)
    //estado: 'ACTIVA'         // Enum EstadoSancion
});

// Datos específicos para CLUB
const clubData = reactive({
    resolucion: '',
    motivo: ''
});

const dni = ref('');
const entidad = ref({})
const guardarSancion = async () => {
    // 1. Preparar el objeto JSON tal cual lo espera el Swagger
    // Asegúrate de que el objeto 'sancion' tenga las claves: idEntidad, tipoSancion, cantidad, fechaHecho, descripcionGeneral
    const dataToSend = {
        ...sancion, 
        entidad: activeTab.value // Ej: "JUGADOR"
    };

    // Si es Club, agregamos los campos extra (mantengo tu lógica original)
    if (activeTab.value === 'CLUB') {
        Object.assign(dataToSend, {
            resolucion: clubData.resolucion,
            motivo: clubData.motivo
        });
    }

    console.log("Enviando sanción al backend:", dataToSend);

    try {
        // 2. La llamada corregida: (URL, BODY, CONFIG)
        const response = await axios.post(
            `${BASIC_URL}/sanciones`, // Primer argumento: URL
            dataToSend,               // Segundo argumento: El JSON (Body)
            {                         // Tercer argumento: Configuración (Headers)
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        );

        if (response.status === 201 || response.status === 200) {
            console.log("Sanción registrada exitosamente:", response.data);
            resetForm();
        } 
    } catch (error) {
        console.error("Error al registrar sanción:", error);
        // Tip: Imprime error.response.data para ver qué dice el backend
        if (error.response) console.error("Detalle del error:", error.response.data);
    }
};
const resetForm = () => {
    sancion.tipoSancion = '';
    sancion.cantidad = 0;
    sancion.fechaHecho = '';
    sancion.descripcionGeneral = '';
    sancion.codigo = '';
    clubData.resolucion = '';
    clubData.motivo = '';
};
const BASIC_URL = 'http://localhost:8080/api';
const buscarEntidad = async () => {
    if (activeTab.value === 'CLUB') {
        const response = await axios.get(`${BASIC_URL}/club/informacion`, {
            params: {
                idClub: dni.value
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const entidadEncontrada = response.data;
        entidad.value = entidadEncontrada;
        sancion.idEntidad = entidadEncontrada.idClub;
    }
    if (activeTab.value !== 'CLUB') {
        const response = await axios.get(`${BASIC_URL}/personas/buscar-dni`, {
            params: {
                dni: dni.value
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const entidadEncontrada = response.data;
        entidad.value = entidadEncontrada;
        sancion.idEntidad = entidadEncontrada.idPersona;
        console.log(entidadEncontrada.tipoPersona);

        if (entidadEncontrada.tipoPersona === 'JUGADOR') {
            activeTab.value = 'JUGADOR';
        }
        if (entidadEncontrada.tipoPersona === 'CUERPO_TECNICO') {
            activeTab.value = 'CUERPO_TECNICO';
        }
        if (entidadEncontrada.tipoPersona === 'ARBITRO') {
            activeTab.value = 'ARBITRO';
        }
    }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animación simple para que el cambio de tabs no sea brusco */
.animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

input {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
}

select {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
}
</style>