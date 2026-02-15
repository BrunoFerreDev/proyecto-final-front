<template>
    <form @submit.prevent="verificarGuardado" class="bg-white rounded-xl shadow-sm border border-[#f0f1f5]">

        <div class="p-6 border-b border-[#f0f1f5]">
            <div class="flex items-center gap-2 mb-4">
                <span class="material-symbols-outlined text-[#1f44f9]">info</span>
                <h2 class="text-[#111218] text-[20px] font-bold leading-tight tracking-[-0.015em]">
                    Información Básica
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-bold">
                        Nombre del Torneo <span class="text-red-500">*</span>
                    </label>
                    <input v-model="torneo.nombre" required type="text" maxlength="150"
                        class="form-input flex w-full rounded-lg text-[#111218] border border-[#dbdde6] h-12 px-4 text-base font-normal focus:ring-2 focus:ring-[#1f44f9] focus:border-transparent outline-none transition-all"
                        placeholder="Ej: Apertura Fútbol 11 - 2024" />
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-bold">
                        Temporada <span class="text-red-500">*</span>
                    </label>
                    <input v-model.number="torneo.temporada" required type="number" min="2000" max="2100"
                        class="form-input flex w-full rounded-lg text-[#111218] border border-[#dbdde6] h-12 px-4 text-base font-normal focus:ring-2 focus:ring-[#1f44f9] focus:border-transparent outline-none transition-all"
                        placeholder="Ej: 2024" />
                </div>
            </div>
        </div>

        <div class="p-6 border-b border-[#f0f1f5]">
            <div class="flex items-center gap-2 mb-4">
                <span class="material-symbols-outlined text-[#1f44f9]">calendar_month</span>
                <h2 class="text-[#111218] text-[20px] font-bold leading-tight tracking-[-0.015em]">
                    Cronograma
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-bold">
                        Fecha de Inicio <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <input v-model="torneo.fechaInicio" required type="date"
                            class="form-input flex w-full rounded-lg text-[#111218] border border-[#dbdde6] h-12 px-4 text-base font-normal focus:ring-2 focus:ring-[#1f44f9] focus:border-transparent outline-none transition-all" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-bold">
                        Fecha de Finalización <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <input v-model="torneo.fechaFinal" required type="date"
                            class="form-input flex w-full rounded-lg text-[#111218] border border-[#dbdde6] h-12 px-4 text-base font-normal focus:ring-2 focus:ring-[#1f44f9] focus:border-transparent outline-none transition-all" />
                    </div>
                </div>
            </div>
        </div>

        <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
                <span class="material-symbols-outlined text-[#1f44f9]">settings</span>
                <h2 class="text-[#111218] text-[20px] font-bold leading-tight tracking-[-0.015em]">
                    Configuración
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-bold">Estado del Torneo</label>
                    <div class="relative">
                        <select v-model="torneo.estado"
                            class="form-input flex w-full rounded-lg text-[#111218] border border-[#dbdde6] h-12 px-4 text-base font-normal appearance-none focus:ring-2 focus:ring-[#1f44f9] focus:border-transparent outline-none transition-all bg-white">
                            <option value="PROGRAMADO">Programado (Borrador)</option>
                            <option value="EN_CURSO">En Curso (Activo)</option>
                            <option value="FINALIZADO">Finalizado</option>
                            <option value="CANCELADO">Cancelado</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5f668c]">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-xs text-[#5f668c]">Define el ciclo de vida actual de la competición.</p>
                </div>

            </div>
        </div>

        <div class="flex items-center justify-end gap-4 p-6 bg-gray-50 border-t border-[#f0f1f5]">
            <button type="button" @click="resetForm"
                class="px-6 py-3 rounded-lg text-sm font-bold text-[#5f668c] hover:bg-gray-200 transition-colors">
                Cancelar
            </button>
            <button type="submit"
                class="px-8 py-3 rounded-lg bg-[#1f44f9] text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-[#1f44f9]/20 flex items-center gap-2">
                <span class="material-symbols-outlined text-base">save</span>
                Crear Torneo
            </button>
        </div>
    </form>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

// Objeto reactivo mapeado EXACTAMENTE a Torneo.java
const torneo = reactive({
    nombre: '',          // String
    temporada: 2024,     // Integer
    fechaInicio: '',     // LocalDate (YYYY-MM-DD)
    fechaFinal: '',      // LocalDate (YYYY-MM-DD)
    estado: 'PROGRAMADO' // Enum: EstadoTorneo
});

const guardarTorneo = async () => {
    // Validación simple de fechas
    if (torneo.fechaInicio > torneo.fechaFinal) {
        alert("La fecha de inicio no puede ser mayor a la final");
        return;
    }

    console.log("Payload para Spring Boot:", JSON.parse(JSON.stringify(torneo)));

    try {
        // Aquí iría tu llamada a la API
        // const { data } = await torneoApi.crear(torneo);
        const data = await axios.post("http://localhost:8080/api/torneos", torneo, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        
        console.log("Respuesta del servidor:", data);
        location.href = '/torneo'; // Redirige a la lista de torneos después de guardar
        alert("Torneo creado exitosamente (Simulación)");
    } catch (error) {
        console.error("Error al guardar", error);
    }
};

const verificarGuardado = () => {
    if (confirm("¿Estas seguro de guardar el torneo?")) {
        guardarTorneo();
    } else {
        alert("Operacion cancelada");
        resetForm();
    }
}
const resetForm = () => {
    torneo.nombre = '';
    torneo.temporada = new Date().getFullYear();
    torneo.fechaInicio = '';
    torneo.fechaFinal = '';
    torneo.estado = 'PROGRAMADO';
};
</script>