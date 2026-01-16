<template>
    <!-- Modal Container -->
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        v-if="showModalJugador">
        <div class="bg-white w-full max-w-[640px] max-h-[85dvh] rounded-xl shadow-2xl overflow-y-auto flex flex-col">
            <!-- Modal Header / Club Profile -->
            <div class="bg-[#516dfb]/5  border-b border-[#dbdde6] px-8 py-6">
                <div class="flex items-center gap-5">
                    <div
                        class="size-20 rounded-full bg-white shadow-sm flex items-center justify-center border-2 border-white p-1 overflow-hidden">
                        <div class="w-full h-full bg-cover bg-center rounded-full" data-alt="Real Madrid Club Crest"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVhIo8IcWTgG--JMimz6SSzRZWoDl9coyD5WCg75qR52mqN1Ey5SvCNUcCSjq5jkdh5QVrOybScGfj_DNGcoe0vtIljoJEJ1T-ySg7S8pB4h8AEoGhvaKe-rjtJAriuJIA7FCkMXDcHslgmgsvTrlbfWh8Hi5P-rbZR8CgL6OUWk59NOv3pRHhSd4Lk6XCc2MsUtmUz0YyqMclCKAydHoXmvGHJ_zevn6vS5dIx2kUMmORRK_7ZhK-EmrZN71S_Zr48VmLl8pNB7U");'>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[#516dfb] text-xs font-bold uppercase tracking-widest mb-1">Registro de
                            Jugador</span>
                        <h2 class="text-[#111218] text-2xl font-bold leading-tight">{{ club.nombre }}</h2>
                        <p class="text-[#60678a] text-sm">Temporada 2023/2024 · LaLiga EA Sports</p>
                    </div>
                    <button @click="$emit('closeModalJugador')"
                        class="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
            <!-- Modal Body -->
            <div class="p-8 space-y-6">
                <!-- Player Search Section -->
                <div>
                    <label class="block text-[#111218] text-sm font-semibold mb-2">Seleccionar Jugador
                        Registrado</label>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span
                                class="material-symbols-outlined text-[#60678a] group-focus-within:text-[#516dfb] transition-colors">search</span>
                        </div>
                        <input v-model="dniBuscar" @keydown.enter.prevent="fetchJugador"
                            class="w-full pl-11 pr-4 py-3 bg-[#f0f1f5] border-none rounded-lg text-[#111218] placeholder:text-[#60678a] focus:ring-2 focus:ring-[#516dfb] focus:bg-white transition-all"
                            placeholder="Buscar por nombre, apellidos o DNI..." type="text" />
                    </div>
                    <p class="mt-2 text-[#60678a] text-xs">Solo aparecerán personas registradas
                        previamente en el sistema global.</p>
                    <div class="flex flex-col md:flex-row gap-6 mt-5 border bg-[#f0f1f5] p-4 rounded-lg text-sm"
                        v-if="jugadorSeleccionado.nombre">
                        <div class="flex flex-col gap-2">
                            <span class="font-semibold">Jugador:</span>
                            <input type="text" disabled
                                :value="jugadorSeleccionado.nombre ? jugadorSeleccionado.nombre : 'Seleccione un jugador'">
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="font-semibold">DNI:</span>
                            <input type="text" disabled
                                :value="jugadorSeleccionado.dni ? jugadorSeleccionado.dni : 'Seleccione un jugador'">
                        </div>
                    </div>
                </div>
                <!-- Registration Details Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Jersey Number -->
                    <div class="flex flex-col">
                        <label class="text-[#111218] text-sm font-semibold mb-2">Número de Camiseta
                            (Dorsal)</label>
                        <div class="relative">
                            <input
                                class="w-full px-4 py-3 bg-white border border-[#dbdde6] rounded-lg text-[#111218] focus:ring-2 focus:ring-[#516dfb] transition-all"
                                max="99" min="1" placeholder="Ej: 10" type="number" />
                        </div>
                    </div>
                    <!-- Preferred Position -->
                    <div class="flex flex-col">
                        <label class="text-[#111218] text-sm font-semibold mb-2">Posición Preferida</label>
                        <div class="relative">
                            <select
                                class="w-full px-4 py-3 bg-white border border-[#dbdde6] rounded-lg text-[#111218] appearance-none focus:ring-2 focus:ring-[#516dfb] transition-all">
                                <option value="">Seleccionar posición...</option>
                                <option value="gk">Portero</option>
                                <option value="df">Defensa</option>
                                <option value="mf">Mediocentro</option>
                                <option value="fw">Delantero</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span class="material-symbols-outlined text-[#60678a]">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <!-- Category Maximum -->
                    <div class="flex flex-col ">
                        <label class="text-[#111218] text-sm font-semibold mb-2 ">Categoría Máxima</label>
                        <select name="categoriaMaxima" id=""
                            class="w-full px-4 py-3 bg-white border border-[#dbdde6] rounded-lg text-[#111218]  focus:ring-2 focus:ring-[#516dfb] transition-all">
                            <option value="" disabled>Seleccionar categoría máxima...</option>
                            <option value="PRIMERA_DIVISION">Primera Division</option>
                            <option value="SUB_21">Sub 21</option>
                        </select>
                    </div>
                    <!-- Contract Start Date -->
                    <div class="flex flex-col ">
                        <label class="text-[#111218] text-sm font-semibold mb-2">Fecha de Inicio de
                            Vinculación</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span class="material-symbols-outlined text-[#60678a]">calendar_today</span>
                            </div>
                            <input
                                class="w-full pl-11 pr-4 py-3 bg-white border border-[#dbdde6] rounded-lg text-[#111218] focus:ring-2 focus:ring-[#516dfb] transition-all"
                                type="date" />
                        </div>
                    </div>
                </div>
                <!-- Info Alert -->
                <div class="flex gap-3 p-4 bg-[#516dfb]/10 rounded-lg border border-[#516dfb]/20">
                    <span class="material-symbols-outlined text-[#516dfb]">info</span>
                    <p class="text-sm text-[#111218] leading-relaxed">
                        Al vincular al jugador, se generará una ficha federativa provisional para la temporada actual.
                        Asegúrese de que los datos de contacto del jugador estén actualizados.
                    </p>
                </div>
            </div>
            <!-- Modal Footer Actions -->
            <div class="bg-[#f8f9fb] border-t border-[#dbdde6] px-8 py-5 flex justify-end gap-4">
                <button @click="$emit('closeModalJugador')"
                    class="px-6 py-2.5 rounded-lg text-[#111218] font-semibold text-sm hover:bg-gray-200 transition-colors">
                    Cancelar
                </button>
                <button @submit.prevent="guardarContrato"
                    class="px-6 py-2.5 bg-[#516dfb] hover:bg-[#516dfb]/90 rounded-lg text-white font-bold text-sm shadow-md shadow-[#516dfb]/20 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">person_add</span>
                    Vincular Jugador
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps({
    showModalJugador: {
        type: Boolean,
        default: false
    },
    club: {
        type: Object,
        default: () => ({})
    }
});
const emit = defineEmits(['closeModalJugador']);
const jugadorSeleccionado = ref({
    idPersona: '',
    nombre: '',
    apellido: '',
    dni: '',

});
const closeModalJugador = () => {
    emit('closeModalJugador');
}
const dniBuscar = ref('');
const fetchJugador = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/jugadores/buscar', {
            params: {
                dni: dniBuscar.value
            }
        });
        const data = response.data;
        jugadorSeleccionado.value = data;
    } catch (error) {
        const errorData = error.response.data;
        jugadorSeleccionado.value = errorData;
    }
}
</script>
<!-- 
38741172
39570214
55533200
37848428
38257049
24261603
46861073
34106386
24651362
28622655
44366782
24409655 -->