<script setup>
import { ref } from 'vue';
import { IconSearch, IconMenu2, IconX } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

// Estado para el menú móvil
const isMobileMenuOpen = ref(false);

// Definimos los items del menú aquí para reutilizarlos en Desktop y Mobile sin repetir código
const menuItems = [
    { label: 'Dashboard', to: '/inicio' },
    { label: 'Torneos', to: '/torneo' },
    { label: 'Clubes', to: '/clubes' },
    { label: 'Árbitros', to: '/arbitros' },
    { label: 'Sanciones', to: '/sanciones' },
    // { label: 'Competencias', to: '/competencia' },
];

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const logout = async () => {
    try {
        const token = localStorage.getItem('token');

        // El segundo parámetro es el BODY (vacío en este caso)
        // El tercer parámetro es el objeto de CONFIGURACIÓN
        const response = await axios.post('http://localhost:8080/api/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Respuesta del servidor:', response.data);

        // Limpiar localstorage y redirigir
        localStorage.removeItem('token');
        window.location.href = '/';

    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        // Incluso si falla el servidor, limpia el localstorage por seguridad
        localStorage.removeItem('token');
    }
}
</script>

<template>
    <header
        class="relative flex items-center justify-between whitespace-nowrap px-4 md:px-8 py-4 shrink-0 z-20 bg-white border-b border-gray-100">

        <div class="flex items-center gap-4 lg:gap-12">
            <div class="flex items-center gap-3">
                <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0"
                    data-alt="Abstract soccer ball logo design"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXdMDFebob232Jvpxzh6DyfpL6brj2_do9ycliOBPD16NxxiwdSfPYMNmDJ7HttCbCFOsXmP2JjEAsypfFTNGK9ObO4WggE_W4vm_MPZPIGVGH6O36faJJVVqO9_GfX0rHxutmMq1jhxsMrzM3T85O6xuKypF6sHMVCOZARJh5EYbCb9Y8vayfZZyeAqbtL5UiYvAXW0Pi-NJh1nsZFyWc9ZC5eeIVbvKB_QA8TCp4JzaSMhc0rdcQuejrIK8F5IEC4Rb_arvo8ao");'>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-base font-bold leading-tight">Admin Panel</h1>
                    <p class="text-xs md:text-sm font-normal text-gray-500">Gestión de Fútbol 11</p>
                </div>
            </div>

            <nav class="hidden lg:flex items-center gap-2">
                <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">{{ item.label }}</span>
                    </a>
                </RouterLink>
            </nav>
        </div>

        <div class="flex items-center gap-3 md:gap-6">

            <label class="hidden md:flex flex-col w-full max-w-xs h-10">
                <div
                    class="flex w-full items-stretch rounded-full h-full border bg-white overflow-hidden transition-shadow focus-within:ring-2 ring-[#0d7ff2]/20">
                    <div class="flex items-center justify-center pl-3 bg-transparent text-gray-500">
                        <IconSearch size="18" />
                        <input
                            class="flex w-full min-w-0 px-3 h-full text-sm font-normal leading-normal focus:outline-none placeholder-gray-400"
                            placeholder="Buscar..." />
                    </div>
                </div>
            </label>

            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 pl-2 md:border-l border-[#0d7ff2] md:border-gray-200">
                    <div class="size-9 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100"
                        data-alt="User profile picture placeholder"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa1-cZYPR9gKwXCSNGvUiaC_JFndu5jphSFZTQqF1YLnYpzUjCZgfEw971KH_-TpPmslg4WdW814Uk49QVCLHVAts7qVtM5WSZtea1_xHJEna9w8wpEbJExYpxlW-R5lrPpHRci7qkZSN1y-WkFBXPCVA-eCow12RLsG6xYdc0TVJsyhhESmrdVwkWtLz5NaD4H20RB8VsGjBT90-cLTE2EbvoO3YFq-l_-S7uxyaq4CX3Bwtf779XNtp58XT6PwtNPIv_zBiCyrc'); background-size: cover;">
                    </div>
                    <div class="hidden sm:flex flex-col">
                        <span class="text-sm font-bold leading-none mb-0.5 text-[#1c1c0d]">Admin User</span>
                        <span @click="logout"
                            class="text-xs leading-none text-gray-500 cursor-pointer hover:text-red-500">Cerrar
                            sesión</span>
                    </div>
                </div>

                <button @click="toggleMenu"
                    class="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none">
                    <component :is="isMobileMenuOpen ? IconX : IconMenu2" size="24" />
                </button>
            </div>
        </div>

        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="isMobileMenuOpen"
                class="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 lg:hidden flex flex-col p-4 gap-2 z-50">
                <div class="flex md:hidden items-center border rounded-full px-3 py-2 bg-gray-50 mb-2">
                    <IconSearch size="18" class="text-gray-500" />
                    <input class="w-full bg-transparent px-2 text-sm focus:outline-none" placeholder="Buscar..." />
                </div>

                <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to" v-slot="{ isActive }"
                    @click="isMobileMenuOpen = false">
                    <a :class="[
                        'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-gray-100'
                    ]">
                        <span class="text-base font-medium">{{ item.label }}</span>
                    </a>
                </RouterLink>

                <div class="sm:hidden mt-2 pt-2 border-t border-gray-100">
                    <button
                        class="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-medium">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </transition>
    </header>
</template>