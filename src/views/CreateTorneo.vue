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
            <TorneoForm />
        </div>
    </main>
</template>
<script setup>
import { ref } from 'vue';
import TorneoForm from '../components/forms/TorneoForm.vue';
const crearTorneo = ref({
    nombre: '',
    temporada: '',
    descripcion: '',
    fechaInicio: '',
    estado: 'CREADO'
})

</script>