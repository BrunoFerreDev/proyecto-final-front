<template>
    <form @submit.prevent="guardarClub" class="flex flex-col gap-8 p-8 bg-white rounded-xl shadow-sm">

        <section class="flex flex-col gap-6">
            <h3 class="text-[#111218]  text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Identidad Visual
            </h3>
            <div class="flex flex-col items-center gap-4 text-center">
                <div class="relative group">
                    <div
                        class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300  transition-all group-hover:border-[#1f44f9]">

                        <div v-if="!club.escudo" class="text-gray-400  flex flex-col items-center">
                            <span class="material-symbols-outlined !text-4xl">shield</span>
                            <span class="text-[10px] mt-1 font-bold uppercase">Sin Escudo</span>
                        </div>

                        <img v-else :src="club.escudo" class="w-full h-full object-cover" alt="Escudo del club"
                            @error="handleImageError" />
                    </div>
                </div>

                <div class="flex flex-col gap-2 w-full max-w-md">
                    <label class="text-[#111218]  text-sm font-semibold">URL del Escudo</label>
                    <input v-model="club.escudo" type="url"
                        class="rounded-lg border-gray-300  focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4 text-sm"
                        placeholder="https://ejemplo.com/escudo.png" />
                    <p class="text-[#5f668c]  text-xs font-normal">
                        Pega la dirección de la imagen (JPG, PNG). Se guarda como texto en la base de datos.
                    </p>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-5">
            <h3 class="text-[#111218]  text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Información General
            </h3>

            <div class="grid grid-cols-1 gap-5">
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">
                        Nombre del Club <span class="text-red-500">*</span>
                    </label>
                    <input v-model="club.nombre" required maxlength="100"
                        class="rounded-lg border-gray-300   focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4"
                        placeholder="Ej: Real Madrid C.F." type="text" />
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Fecha de Fundación</label>
                    <div class="relative">
                        <input v-model="club.fundacion"
                            class="w-full rounded-lg border-gray-300  focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4"
                            type="date" />
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-5">
            <h3 class="text-[#111218]  text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Ubicación y Estado
            </h3>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-bold text-[#111218] ">Ciudad</label>
                <div class="relative">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-xl">location_on</span>
                    <input v-model="club.ciudad"
                        class="w-full pl-10 rounded-lg border-gray-300   focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11"
                        placeholder="Ej: Buenos Aires" type="text" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">

                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Estado Institucional</label>
                    <select v-model="club.estado"
                        class="w-full rounded-lg border-gray-300   focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4 bg-white ">
                        <option value="ACTIVO">Activo</option>
                        <option value="SUSPENDIDO">Suspendido</option>
                        <option value="BAJA">Baja</option>
                    </select>
                </div>

                <div class="flex items-center justify-between p-3 border border-gray-200  rounded-lg bg-gray-50 ">
                    <div>
                        <p class="text-sm font-bold text-[#111218] ">Habilitado</p>
                        <p class="text-xs text-[#5f668c] ">¿Puede jugar torneos?</p>
                    </div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input v-model="club.isActivo" type="checkbox" class="sr-only peer" />
                        <div
                            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1f44f9]">
                        </div>
                    </label>
                </div>

            </div>
        </section>

    </form>
</template>

<script setup>
import { reactive } from 'vue';

// Estado reactivo basado en Club.java
const club = reactive({
    nombre: '',
    escudo: '',    // String en Java
    ciudad: '',
    fundacion: '', // LocalDate
    isActivo: true,
    estado: 'ACTIVO' // Enum: EstadoClub
});

const handleImageError = (e) => {
    // Si la URL falla, vuelve a mostrar el placeholder
    club.escudo = '';
    // Opcional: alertar al usuario
    console.log("No se pudo cargar la imagen");
};

const guardarClub = async () => {
    console.log("Payload Club:", JSON.parse(JSON.stringify(club)));

    try {
        // await clubApi.create(club);
        alert("Club guardado (Simulación)");
    } catch (error) {
        console.error("Error", error);
    }
};

const resetForm = () => {
    club.nombre = '';
    club.escudo = '';
    club.ciudad = '';
    club.fundacion = '';
    club.isActivo = true;
    club.estado = 'ACTIVO';
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