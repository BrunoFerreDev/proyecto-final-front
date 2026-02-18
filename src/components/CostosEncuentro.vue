<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import ModalLocalidad from '../components/modal/ModalLocalidad.vue';
// Configuración base de axios (opcional, si no la tienes global)
axios.defaults.baseURL = 'http://localhost:8080';

// --- ESTADO ---
const loading = ref(false);
const saving = ref(false);
const localidades = ref([]);
const costosMap = ref({}); // Mapa rápido: "idOrigen_idDestino" -> Objeto Costo
const filterText = ref('');

// --- CARGA DE DATOS ---
const loadData = async () => {
    loading.value = true;
    try {
        // 1. Obtener Localidades
        const responseLoc = await axios.get('/api/costos/obtener/localidades', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')

            }
        });
        localidades.value = responseLoc.data;

        // 2. Obtener Costos Existentes
        const responseCostos = await axios.get('/api/costos/obtener', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        // Transformar la lista a un Mapa para renderizado rápido
        const mapa = {};

        if (Array.isArray(responseCostos.data)) {
            responseCostos.data.forEach(c => {
                // Clave única compuesta por los IDs
                const key = `${c.origen.id_Localidad}_${c.destino.id_Localidad}`;

                mapa[key] = {
                    idCosto: c.idCosto,
                    monto: c.monto,
                    originalMonto: c.monto, // Para detectar cambios
                    origenId: c.origen.id_Localidad,
                    destinoId: c.destino.id_Localidad
                };
            });
        }
        costosMap.value = mapa;

    } catch (error) {
        console.error("Error cargando datos:", error);
    } finally {
        loading.value = false;
    }
};

// --- LOGICA DE MATRIZ ---

// Obtiene el objeto de la celda. Si no existe, crea uno temporal en memoria.
const getCostoCell = (origenId, destinoId) => {
    const key = `${origenId}_${destinoId}`;

    if (!costosMap.value[key]) {
        costosMap.value[key] = {
            idCosto: null, // Es nuevo, no tiene ID todavía
            monto: 0,      // Valor por defecto
            originalMonto: 0,
            origenId: origenId,
            destinoId: destinoId,
            isNew: true
        };
    }
    return costosMap.value[key];
};

// Filtrado de filas (Buscador)
const filteredRows = computed(() => {
    if (!filterText.value) return localidades.value;
    const term = filterText.value.toLowerCase();
    return localidades.value.filter(l => l.nombre.toLowerCase().includes(term));
});

// --- GUARDADO ---
const saveChanges = async () => {
    saving.value = true;

    // Filtramos solo las celdas que han cambiado
    const cambios = [];

    Object.keys(costosMap.value).forEach(key => {
        const item = costosMap.value[key];

        // Comparamos el monto actual con el original (convirtiendo a float para seguridad)
        const montoActual = parseFloat(item.monto);
        const montoOriginal = parseFloat(item.originalMonto);

        if (montoActual !== montoOriginal) {
            // Construimos el objeto tal cual lo espera tu backend (estructura anidada)
            cambios.push({
                idCosto: item.idCosto, // null si es nuevo
                monto: montoActual,
                origen: {
                    id_Localidad: item.origenId
                },
                destino: {
                    id_Localidad: item.destinoId
                }
            });
        }
    });

    if (cambios.length === 0) {
        saving.value = false;
        return;
    }

    try {
        // Asumo que tienes un endpoint para guardar (batch o uno por uno)
        // Si tu API no soporta array, habría que hacer un Promise.all con llamadas individuales
        await axios.post('/api/costos/guardar-lote', cambios, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        await loadData(); // Recargar para limpiar el estado "sucio"
    } catch (error) {
        console.error("Error guardando:", error);
    } finally {
        saving.value = false;
    }
};

onMounted(() => {
    loadData();
});
const modalLocalidad = ref(false)
const showModalLocalidad = () => {
    modalLocalidad.value = true
}
watch(modalLocalidad, () => {
    if (!modalLocalidad.value) {
        loadData()
    }
})
const closeModalLocalidad = () => {
    modalLocalidad.value = false
}
// --- LÓGICA PARA BLOQUEAR EL SCROLL ---
watch([modalLocalidad], ([valLocalidad]) => {
    // Si alguno de los dos modales está activo (true)
    if (valLocalidad) {
        document.body.classList.add('overflow-hidden');
    } else {
        // Si ambos están cerrados (false)
        document.body.classList.remove('overflow-hidden');
    }
});
</script>

<template>
    <div v-if="modalLocalidad" class="fixed inset-0 modal-overlay z-50 flex items-center justify-center p-4 ">
        <ModalLocalidad :showModalLocalidad="modalLocalidad" @closeModalLocalidad="closeModalLocalidad" />
    </div>
    <main class="flex-1 flex flex-col min-w-0 overflow-hidden relative h-screen bg-gray-50"
        :class="{ 'blur-sm pointer-events-none': modalLocalidad }">
        <div class="p-8 pb-4">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div class="flex flex-col gap-1">
                    <p class="text-[#111218] text-3xl font-black leading-tight tracking-tight">
                        Matriz de Costos
                    </p>
                    <p class="text-[#5f668c] text-base font-normal">
                        Administración de tarifas entre localidades.
                    </p>
                </div>
                <div class="flex gap-3">
                    <button @click.prevent="showModalLocalidad"
                        class="flex items-center justify-center rounded-lg h-11 px-6 bg-[#516dfb] text-white text-sm font-bold shadow-lg shadow-[#516dfb]/30 hover:bg-[#516dfb]/90 transition-all">
                        <span class="material-symbols-outlined mr-2">add</span>Nueva
                        Localidad</button>
                    <button @click.prevent="loadData"
                        class="flex items-center justify-center rounded-lg h-11 px-6 bg-white border border-[#dbdde6] text-[#111218] text-sm font-bold hover:bg-gray-50 transition-colors">
                        <span class="material-symbols-outlined mr-2">refresh</span>
                        Actualizar Datos
                    </button>
                </div>
            </div>

            <div class="bg-white p-3 rounded-xl border border-[#dbdde6] flex items-center gap-4 shadow-sm">
                <div class="flex-1">
                    <div class="flex items-stretch rounded-lg bg-[#f0f1f5] h-11">
                        <div class="flex items-center justify-center pl-4 text-gray-400">
                            <span class="material-symbols-outlined">search</span>
                        </div>
                        <input v-model="filterText"
                            class="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#5f668c] px-4 outline-none"
                            placeholder="Buscar localidad de origen..." />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 px-8 pb-24 overflow-hidden">
            <div
                class="h-full bg-white rounded-xl border border-[#dbdde6] shadow-sm overflow-hidden flex flex-col relative">

                <div v-if="loading" class="absolute inset-0 z-50 bg-white/80 flex items-center justify-center">
                    <div class="flex flex-col items-center">
                        <span class="material-symbols-outlined animate-spin text-4xl text-[#516dfb] mb-2">sync</span>
                        <span class="text-[#516dfb] font-bold">Cargando datos...</span>
                    </div>
                </div>

                <div class="matrix-table-container flex-1 overflow-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="sticky-header">
                                <th
                                    class="sticky top-0 left-0 z-40 bg-gray-100 border-b border-r border-[#dbdde6] p-4 text-left min-w-50 shadow-sm">
                                    <div
                                        class="flex flex-col text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                                        <span class="text-right">Destino →</span>
                                        <span class="text-left">↓ Origen</span>
                                    </div>
                                </th>

                                <th v-for="destino in localidades" :key="destino.id_Localidad"
                                    class="sticky top-0 z-30 p-4 bg-gray-50 border-b border-[#dbdde6] text-sm font-bold text-[#111218] min-w-35 text-center shadow-sm whitespace-nowrap">
                                    {{ destino.nombre }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="origen in filteredRows" :key="origen.id_Localidad"
                                class="group hover:bg-gray-50/50">
                                <td
                                    class="sticky left-0 z-20 p-4 bg-white border-r border-b border-[#dbdde6] text-sm font-bold text-[#111218] group-hover:bg-gray-50 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                    {{ origen.nombre }}
                                </td>

                                <td v-for="destino in localidades" :key="destino.id_Localidad"
                                    class="p-3 border-b border-r border-[#dbdde6] relative">

                                    <div v-if="origen.id_Localidad === destino.id_Localidad"
                                        class="h-10 flex items-center justify-center bg-gray-100 rounded text-gray-300 font-medium select-none">
                                        —
                                    </div>

                                    <div v-else class="relative group/input">
                                        <span
                                            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>

                                        <input v-model="getCostoCell(origen.id_Localidad, destino.id_Localidad).monto"
                                            type="number" min="0" step="0.01"
                                            class="w-full pl-4 pr-3 py-2 text-right border-none rounded focus:ring-2 focus:ring-[#516dfb] text-sm font-medium transition-colors outline-none"
                                            :class="[
                                                getCostoCell(origen.id_Localidad, destino.id_Localidad).monto != getCostoCell(origen.id_Localidad, destino.id_Localidad).originalMonto
                                                    ? 'bg-blue-50 text-[#516dfb] ring-1 ring-blue-200 font-bold' // Si cambió
                                                    : 'bg-[#f0f1f5] text-gray-700' // Si es original
                                            ]" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div
            class="absolute bottom-0 left-0 right-0 bg-white border-t border-[#dbdde6] p-4 px-8 flex items-center justify-between z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div class="flex items-center gap-4">
                <span class="flex items-center text-sm font-medium text-gray-500">
                    <span class="material-symbols-outlined text-green-500 mr-2 text-lg">database</span>
                    Datos sincronizados
                </span>
            </div>
            <div class="flex gap-4">
                <button @click.prevent="loadData" :disabled="saving"
                    class="px-6 py-2.5 rounded-lg text-sm font-bold text-[#111218] hover:bg-gray-100 transition-colors disabled:opacity-50">
                    Cancelar
                </button>
                <button @click.prevent="saveChanges" :disabled="saving"
                    class="px-8 py-2.5 bg-[#516dfb] text-white rounded-lg text-sm font-bold shadow-lg shadow-[#516dfb]/30 hover:bg-[#516dfb]/90 transition-all flex items-center disabled:opacity-70 disabled:cursor-not-allowed">
                    <span v-if="!saving" class="material-symbols-outlined mr-2">save</span>
                    <span v-else class="material-symbols-outlined mr-2 animate-spin">sync</span>
                    {{ saving ? 'Guardando...' : 'Guardar Cambios' }}
                </button>
            </div>
        </div>
    </main>
</template>