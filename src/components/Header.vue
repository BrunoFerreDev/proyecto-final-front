<script setup>

import { IconSearch } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <header class="flex items-center justify-between whitespace-nowrap px-8 py-4 shrink-0 z-20 bg-white">
        <div class="flex items-center gap-12">
            <div class="flex items-center gap-3">
                <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0"
                    data-alt="Abstract soccer ball logo design"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXdMDFebob232Jvpxzh6DyfpL6brj2_do9ycliOBPD16NxxiwdSfPYMNmDJ7HttCbCFOsXmP2JjEAsypfFTNGK9ObO4WggE_W4vm_MPZPIGVGH6O36faJJVVqO9_GfX0rHxutmMq1jhxsMrzM3T85O6xuKypF6sHMVCOZARJh5EYbCb9Y8vayfZZyeAqbtL5UiYvAXW0Pi-NJh1nsZFyWc9ZC5eeIVbvKB_QA8TCp4JzaSMhc0rdcQuejrIK8F5IEC4Rb_arvo8ao");'>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-base font-bold leading-tight">Admin Panel</h1>
                    <p class="text-sm font-normal">Gestión de Fútbol 11</p>
                </div>
            </div>
            <nav class="hidden lg:flex items-center gap-2">
                <RouterLink to="/" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-bold">Dashboard</span>
                    </a>
                </RouterLink>
                <RouterLink to="/torneo" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">Torneos</span>
                    </a>
                </RouterLink>
                <RouterLink to="/clubes" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">Clubes</span>
                    </a>
                </RouterLink>
                <RouterLink to="/arbitros" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">Árbitros</span>
                    </a>
                </RouterLink>
                <RouterLink to="/sanciones" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">Sanciones</span>
                    </a>
                </RouterLink>
                <!-- <RouterLink to="/competencia" v-slot="{ isActive }">
                    <a :class="[
                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                        isActive
                            ? 'bg-[#0d7ff2] text-white'
                            : 'text-[#1c1c0d] hover:bg-[#0d7ff2] hover:text-white'
                    ]">
                        <span class="text-sm font-medium">Competencias</span>
                    </a>
                </RouterLink> -->
            </nav>
        </div>
        <div class="flex items-center gap-6">
            <label class="hidden md:flex flex-col w-full max-w-xs h-10">
                <div
                    class="flex w-full  items-stretch rounded-full h-full border bg-white overflow-hidden transition-shadow">
                    <div class="flex items-center justify-center pl-3 bg-transparent">
                        <IconSearch />
                        <input
                            class="flex w-full min-w-0  px-3 h-full text-sm font-normal leading-normal focus:outline-none"
                            placeholder="Buscar..." value="" />
                    </div>
                </div>
            </label>
            <div class="flex items-center gap-3">

                <div class="flex items-center gap-2 pl-2 border-l border-[#0d7ff2] :border-[#3a3928]">
                    <div class="size-9 rounded-full bg-gray-200 overflow-hidden"
                        data-alt="User profile picture placeholder"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa1-cZYPR9gKwXCSNGvUiaC_JFndu5jphSFZTQqF1YLnYpzUjCZgfEw971KH_-TpPmslg4WdW814Uk49QVCLHVAts7qVtM5WSZtea1_xHJEna9w8wpEbJExYpxlW-R5lrPpHRci7qkZSN1y-WkFBXPCVA-eCow12RLsG6xYdc0TVJsyhhESmrdVwkWtLz5NaD4H20RB8VsGjBT90-cLTE2EbvoO3YFq-l_-S7uxyaq4CX3Bwtf779XNtp58XT6PwtNPIv_zBiCyrc'); background-size: cover;">
                    </div>
                    <div class="hidden sm:flex flex-col">
                        <span class="text-sm font-bold leading-none mb-0.5 text-[#1c1c0d] :text-white">Admin User</span>
                        <span class="text-xs leading-none text-[#1c1c0d] :text-white">Cerrar sesión</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>