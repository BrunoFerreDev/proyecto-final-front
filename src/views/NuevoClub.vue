<script setup>
import { IconDeviceFloppy } from '@tabler/icons-vue';
import ClubForm from '../components/forms/ClubForm.vue';
</script>

<template>
    <main class=" flex flex-col h-full overflow-y-auto bg-white dark:bg-background-dark relative">
        <div class="w-full max-w-275 mx-auto p-6 md:p-10 flex flex-col gap-8 pb-20">

            <div class="flex flex-col gap-2 border-b border-slate-200 pb-6">
                <h1 class="text-text-main text-4xl font-black leading-tight tracking-tight">Crear Nuevo Club</h1>
                <p class="text-text-secondary text-base max-w-2xl">
                    Registra un nuevo club en el sistema. Asegúrate de tener el escudo en formato digital y los datos
                    de contacto de la sede.
                </p>
            </div>
            <ClubForm />
        
        </div>
    </main>
</template>