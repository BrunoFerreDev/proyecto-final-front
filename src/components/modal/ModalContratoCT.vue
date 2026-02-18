<template>
    <!-- Modal Overlay Backdrop -->
    <div v-if="showModalCT"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

        <div class="bg-white w-full max-w-[840px] max-h-[85dvh] overflow-y-auto rounded-xl shadow-2xl flex flex-col">
            <!-- Modal Header -->
            <div class="px-8 pt-8 pb-4 flex justify-between items-start">
                <div>
                    <h2 class="text-gray-900  text-2xl font-bold tracking-tight">Registrar Cuerpo Técnico
                    </h2>
                    <p class="text-gray-500  text-sm mt-1">Vincula a un nuevo integrante al staff
                        técnico del club.</p>
                </div>
                <button @click="$emit('closeModalCT')" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <div class="px-8 py-4">
                <!-- Club Selection Context (ProfileHeader style)-->
                <div class="flex items-center gap-4 p-4 rounded-lg bg-[#516dfb]/5 border border-[#516dfb]/10 mb-6">
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shadow-sm border border-white"
                        data-alt="Real Madrid C.F. club crest"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzWX7_46fLCf0JTLmNjhAPFuK41sd_k9pSLuPdjQVU5wYvBD5mxlMT9wDrTCZ_-BAvr5zH3RzfdXA3GsCzyvMnk0e1C4Y_d4OjRcVAVpni2b2jfruzA_XUINz_ksRevimqHknl8-6SIDJRO_4KcmJuoqoRz2Hx41dx1xBz4fL0QZjyTQk4CaH0QR22CCHHo2pLSt5FzCbk63rddOdNlNy2JC3NR_AFLcPmqSdTR2g457rBtOV-8VNCgDFFpDhUGiHs4a7AMqkoe8w");'>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-900  text-lg font-bold leading-tight">{{ club.nombre }}</p>
                        <p class="text-[#516dfb] font-medium text-sm">Temporada 2024/2025</p>
                    </div>
                </div>
                <form class="space-y-5" @submit.prevent="verificarGuardado">
                    <!-- Person Search -->
                    <div class="flex flex-col gap-2">
                        <label class="text-gray-700 text-sm font-semibold">Buscar Persona</label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                                <span class="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input v-model="dniBuscar" @keydown.enter.prevent="fetchCuerpoTecnico"
                                class="block w-full pl-11 pr-4 py-3 bg-gray-50 border-gray-200 rounded-lg text-gray-900  placeholder:text-gray-400 focus:ring-[#516dfb] focus:border-[#516dfb] text-sm transition-all"
                                placeholder="Nombre, apellido o DNI del integrante..." type="text" />
                        </div>
                        <div class="flex flex-col md:flex-row gap-6 mt-5 border bg-[#f0f1f5] p-4 rounded-lg text-sm"
                            v-if="integranteSeleccionado.nombre">
                            <div class="flex flex-col gap-2">
                                <span class="font-semibold">Nombre:</span>
                                <input type="text" disabled :value="integranteSeleccionado.nombre">
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="font-semibold">DNI:</span>
                                <input type="text" disabled :value="integranteSeleccionado.dni">
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <!-- Role Selection -->
                        <div class="flex flex-col gap-2">
                            <label class="text-gray-700 text-sm font-semibold">Rol en el Cuerpo
                                Técnico</label>
                            <div class="relative">
                                <select
                                    class="appearance-none block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900  focus:ring-[#516dfb] focus:border-[#516dfb] text-sm transition-all pr-10">
                                    <option disabled="" selected="" value="">Seleccionar cargo</option>
                                    <option value="dt">Director Técnico</option>
                                    <option value="at">Asistente Técnico</option>
                                    <option value="pf">Preparador Físico</option>
                                    <option value="me">Médico / Fisioterapeuta</option>
                                    <option value="ea">Entrenador de Arqueros</option>
                                    <option value="an">Analista de Video</option>
                                </select>
                                <div
                                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <!-- Date Field -->
                        <div class="flex flex-col gap-2">
                            <label class="text-gray-700 text-sm font-semibold">Fecha de Alta</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                                    <span class="material-symbols-outlined text-[20px]">calendar_today</span>
                                </div>
                                <input
                                    class="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900  focus:ring-[#516dfb] focus:border-[#516dfb] text-sm transition-all"
                                    type="date" />
                            </div>
                        </div>
                        <!-- Category Maximum -->
                        <div class="flex flex-col md:col-span-2">
                            <label class="text-[#111218] text-sm font-semibold mb-2 ">Categoría Máxima</label>
                            <select name="categoriaMaxima" id=""
                                class="w-full px-4 py-3 bg-white border border-[#dbdde6] rounded-lg text-[#111218]  focus:ring-2 focus:ring-[#516dfb] transition-all">
                                <option value="" disabled>Seleccionar categoría máxima...</option>
                                <option value="PRIMERA_DIVISION">Primera Division</option>
                                <option value="SUB_21">Sub 21</option>
                            </select>
                        </div>
                    </div>
                    <!-- Modal Footer -->
                    <div class="px-8 py-6 mt-4 bg-gray-50/50 flex justify-end gap-3 border-t border-gray-100">
                        <button @click.prevent="$emit('closeModalCT')"
                            class="px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-200 transition-colors">
                            Cancelar
                        </button>
                        <button @click.prevent="asignarCT"
                            class="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#516dfb] hover:bg-[#516dfb]/90 shadow-lg shadow-[#516dfb]/20 transition-all flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">person_add</span>
                            Asignar a Cuerpo Técnico
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
const dniBuscar = ref('');
const props = defineProps({
    showModalCT: {
        type: Boolean,
        default: false
    },
    club: {
        type: Object,
        default: () => ({})
    }
});
const emit = defineEmits('closeModalCT');
const integranteSeleccionado = ref({});

const closeModalCT = () => {
    emit('closeModalCT');
}
const guardarContrato = () => {
    console.log("contrato guardado");

}
const verificarGuardado = () => {
    if (confirm("¿Estas seguro de guardar el contrato?")) {
        guardarContrato();
    } else {
        resetForm();
    }
}
const resetForm = () => {
    dniBuscar.value = '';
    integranteSeleccionado.value = {};
}
const fetchCuerpoTecnico = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/cuerpo-tecnico/buscar', {
            params: {
                dni: dniBuscar.value
            },
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = response.data;
        integranteSeleccionado.value = data;
    } catch (error) {
        const dataError = error.response.data;
        console.log(dataError);
        integranteSeleccionado.value = dataError;
    }
}
</script>
<!-- 50924232
29747156
50698807
42474910
30904539
34526443
28101644
25811227 -->