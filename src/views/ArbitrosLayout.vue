<script setup>
import { IconSearch, IconPlus } from "@tabler/icons-vue";
import { useRouter, useRoute } from "vue-router";

// No necesitamos axios ni refs de árbitros aquí. Eso va en el hijo.
const router = useRouter();
const route = useRoute(); // Para saber en qué ruta estamos

const navigateTo = (path) => {
    router.push(path);
};

// Función para manejar el cambio del Select
const handleNavigationChange = (event) => {
    router.push(event.target.value);
};
</script>

<template>
    <main class="flex flex-col items-center py-8 px-4 md:px-10">
        <div class="max-w-300 w-full flex flex-col gap-6">

            <nav class="flex flex-wrap gap-2 items-center text-sm">
                <a class="text-[#49739c] font-medium hover:underline" href="#">Inicio</a>
                <span class="text-[#49739c] font-medium">/</span>
                <a class="text-[#49739c] font-medium hover:underline" href="#">Gestión de Liga</a>
                <span class="text-[#49739c] font-medium">/</span>

                <select name="nav" id="nav"
                    class="text-[#49739c] font-medium bg-transparent border-none focus:ring-0 cursor-pointer"
                    @change="handleNavigationChange" :value="route.path">
                    <option value="/arbitros">Gestión de Árbitros</option>
                    <option value="/arbitros/costos">Gestión de Costos de pasajes</option>
                    <option value="/arbitros/aranceles">Gestión de Aranceles</option>
                </select>
            </nav>
            <RouterView />

        </div>
    </main>
</template>