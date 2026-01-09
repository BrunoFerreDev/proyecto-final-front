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
                        <button @click="activeTab = 'JUGADOR'"
                            :class="activeTab === 'JUGADOR' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">person</span>
                            <span class="text-sm font-bold tracking-wide">Jugador</span>
                        </button>

                        <button @click="activeTab = 'CLUB'"
                            :class="activeTab === 'CLUB' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">shield</span>
                            <span class="text-sm font-bold tracking-wide">Club</span>
                        </button>

                        <button @click="activeTab = 'CUERPO_TECNICO'"
                            :class="activeTab === 'CUERPO_TECNICO' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">group</span>
                            <span class="text-sm font-bold tracking-wide">Cuerpo Técnico</span>
                        </button>

                        <button @click="activeTab = 'ARBITRO'"
                            :class="activeTab === 'ARBITRO' ? 'border-[#0d7ff2] text-[#0d141c]' : 'border-transparent text-[#49739c] hover:text-[#0d141c]'"
                            class="group flex flex-col items-center justify-center border-b-[3px] gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <span class="material-symbols-outlined">sports</span>
                            <span class="text-sm font-bold tracking-wide">Árbitro</span>
                        </button>
                    </div>
                </div>

                <form @submit.prevent="guardarSancion" class="p-6 md:p-8 flex flex-col gap-6">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">
                                Buscar {{ activeTab === 'CLUB' ? 'Club' : 'Persona' }}
                            </span>
                            <div class="relative group">
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg pl-4 pr-12 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all placeholder:text-[#49739c]"
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
                                    disabled type="text" value="Pendiente de selección..." />
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">lock</span>
                                </div>
                            </div>
                        </label>
                    </div>

                    <hr class="border-[#e7edf4] my-2" />

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Fecha del Incidente</span>
                            <div class="relative">
                                <input v-model="sancion.fechaHecho" required
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all text-sm"
                                    type="date" />
                            </div>
                        </label>

                        <label class="flex flex-col gap-2" v-if="activeTab !== 'CLUB' && activeTab !== 'ARBITRO'">
                            <span class="text-[#0d141c] text-sm font-semibold">Tipo de Infracción</span>
                            <div class="relative">
                                <select v-model="sancion.tipoSancion" required 
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
                                <input v-model.number="sancion.cantidad" required
                                    class="w-full bg-[#f8fafc] text-[#0d141c] border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                    min="0" placeholder="0" type="number" step="0.5" />
                            </div>
                        </label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Código / ID Partido</span>
                            <div class="relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-[#49739c]">
                                    <span class="material-symbols-outlined">tag</span>
                                </div>
                                <input v-model="sancion.codigo" required
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
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
import { reactive, ref } from 'vue';

// Control de Tabs
const activeTab = ref('JUGADOR');

// Datos base de la entidad Sancion.java
const sancion = reactive({
    tipoSancion: '',         // String
    cantidad: 0.0,           // Double
    fechaHecho: '',          // LocalDate
    descripcionGeneral: '',  // String
    codigo: '',              // String (unique)
    estado: 'ACTIVA'         // Enum EstadoSancion
});

// Datos específicos para CLUB
const clubData = reactive({
    resolucion: '',
    motivo: ''
});

const guardarSancion = async () => {
    // Preparar Payload
    const payload = {
        ...sancion,
        // Discriminador para backend saber qué tipo de sanción es
        tipoEntidad: activeTab.value
    };

    // Si es Club, agregamos los campos extra
    if (activeTab.value === 'CLUB') {
        Object.assign(payload, {
            resolucion: clubData.resolucion,
            motivo: clubData.motivo
        });
    }

    console.log("Enviando sanción al backend:", payload);

    try {
        // await sancionApi.crear(payload);
        alert("Sanción registrada correctamente");
    } catch (error) {
        console.error("Error al registrar", error);
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
</style>