<template>
    <main class=" w-full overflow-y-auto bg-[#f8f8f5] ">
        <div class="max-w-4xl mx-auto flex flex-col gap-8 py-4">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2 pb-2">
                    <h1 class="text-[#1c1c0d] text-3xl md:text-4xl font-black tracking-tight">Crear Torneo Padre</h1>
                    <p class="text-sm md:text-base max-w-2xl">Complete los detalles a continuación para
                        configurar una nueva competición principal en el sistema.</p>
                </div>
            </div>
            <div class="bg-white rounded-xl border border-[#e9e8ce] shadow-sm">
                <div class="p-6 md:p-8 lg:p-10">
                    <form class="flex flex-col gap-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div class="col-span-1 md:col-span-2">
                                <label class="block mb-2 text-[#1c1c0d] text-sm font-bold">Nombre del Torneo <span
                                        class="text-red-500">*</span></label>
                                <input v-model="crearTorneo.nombre"
                                    class="w-full h-12 px-4 rounded-lg bg-white border border-[#e9e8ce] text-[#1c1c0d] placeholder-[#4263a1] focus:outline-none focus:ring-2 focus:ring-[#163b72] focus:border-transparent transition-all shadow-sm"
                                    placeholder="Ej: Liga Apertura 2024 - Primera División" type="text" />
                            </div>
                            <div class="col-span-1 md:col-span-2">
                                <label class="block mb-2 text-[#1c1c0d] text-sm font-bold">Descripción</label>
                                <textarea
                                    class="w-full h-32 px-4 py-3 rounded-lg bg-white border border-[#e9e8ce] text-[#1c1c0d] placeholder-[#4263a1] focus:outline-none focus:ring-2 focus:ring-[#163b72] focus:border-transparent resize-y transition-all shadow-sm"
                                    placeholder="Añada detalles adicionales sobre el formato del torneo, reglas especiales, etc."></textarea>
                            </div>
                            <div>
                                <label class="block mb-2 text-[#1c1c0d] text-sm font-bold">Fecha de Inicio <span
                                        class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input v-model="crearTorneo.fechaInicio"
                                        class="w-full h-12 px-4 rounded-lg bg-white border border-[#e9e8ce] text-[#1c1c0d] focus:outline-none focus:ring-2 focus:ring-[#4263a1] focus:border-transparent transition-all shadow-sm"
                                        type="date" />
                                </div>
                            </div>
                            <div>
                                <label class="block mb-2 text-[#1c1c0d] text-sm font-bold">Fecha de Finalización <span
                                        class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input
                                        class="w-full h-12 px-4 rounded-lg bg-white border border-[#e9e8ce] text-[#1c1c0d] focus:outline-none focus:ring-2 focus:ring-[#4263a1] focus:border-transparent transition-all shadow-sm"
                                        type="date" />
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 border-t border-[#e9e8ce]">
                            <h3 class="text-[#1c1c0d] font-bold mb-4 text-base">Configuración Inicial</h3>
                            <div class="flex flex-wrap gap-4">
                                <label
                                    class="flex items-center gap-3 p-4 border border-[#e9e8ce] rounded-lg bg-white cursor-pointer hover:border-[#9e9d47] transition-colors w-full sm:w-auto shadow-sm">
                                    <input class="size-5 rounded border-[#e9e8ce] " type="checkbox" />
                                    <span class="text-[#1c1c0d] text-sm font-medium">Torneo Público</span>
                                </label>
                                <label
                                    class="flex items-center gap-3 p-4 border border-[#e9e8ce] rounded-lg bg-white cursor-pointer hover:border-[#9e9d47] transition-colors w-full sm:w-auto shadow-sm">
                                    <input checked class="size-5 rounded border-[#e9e8ce] " type="checkbox" />
                                    <span class="text-[#1c1c0d] text-sm font-medium">Permitir inscripciones
                                        online</span>
                                </label>
                            </div>
                        </div>
                        <div class="flex items-center justify-end gap-4 pt-4 border-t border-[#e9e8ce]">
                            <button
                                class="px-6 py-2.5 rounded-lg text-[#1c1c0d] text-sm font-bold hover:bg-[#e9e8ce]/50 transition-colors"
                                type="button">
                                Cancelar
                            </button>
                            <button
                                class="px-8 py-2.5 rounded-lg bg-[#4871bd] text-white text-sm shadow-sm hover:bg-[#4263a1] transition-colors flex items-center gap-2"
                                type="button">
                                <IconDeviceFloppy />
                                Guardar Torneo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { IconDeviceFloppy } from '@tabler/icons-vue';
import { ref } from 'vue';
const crearTorneo = ref({
    nombre: '',
    temporada: '',
    descripcion: '',
    fechaInicio: '',
    estado: 'CREADO'
})

</script>