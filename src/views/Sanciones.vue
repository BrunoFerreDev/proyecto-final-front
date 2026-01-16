<script setup>
import {
    IconChevronDown,
    IconSearch,
    IconPlus,
    IconCalendar,
    IconUsersGroup,
    IconUser
} from '@tabler/icons-vue';
import CardSancion from '../components/CardSancion.vue'
import { IconRefresh } from '@tabler/icons-vue';
</script>

<template>
    <main class=" flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-7xl flex flex-col gap-6">
            <!-- Breadcrumbs -->
            <div class="flex flex-wrap gap-2 px-4">
                <a class="text-slate-500 hover:text-[#0d7ff2] text-sm font-medium leading-normal flex items-center gap-1"
                    href="#">
                    Inicio
                </a>
                <span class="text-slate-400 text-sm font-medium leading-normal">/</span>
                <a class="text-slate-500 hover:text-[#0d7ff2] text-sm font-medium leading-normal" href="#">Sanciones</a>
                <span class="text-slate-400 text-sm font-medium leading-normal">/</span>
                <span class="text-slate-800 text-sm font-medium leading-normal">Historial</span>
            </div>
            <!-- Page Heading -->
            <div class="flex flex-wrap justify-between items-end gap-3 px-4">
                <div class="flex min-w-72 flex-col gap-2">
                    <h1 class="text-[#0d141c]  text-3xl font-black leading-tight tracking-[-0.033em]">
                        Historial de Sanciones</h1>
                    <p class="text-slate-500 text-base font-normal leading-normal">Consulta el
                        registro disciplinario detallado y el estado actual de sanciones.</p>
                </div>
                <RouterLink to="/nueva-sancion"
                    class="flex items-center gap-2 bg-[#0d7ff2] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all">
                    <IconPlus />
                    Nueva Sanción
                </RouterLink>
            </div>
            <!-- Filters & Search Section -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mx-4">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                    <!-- Filter Dropdown -->
                    <div class="lg:col-span-3 flex flex-col gap-2">
                        <span class="text-sm font-semibold text-slate-700">Temporada</span>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <IconCalendar />
                            </span>
                            <select
                                class="w-full h-12 pl-11 pr-10 appearance-none rounded-lg border border-slate-200 bg-slate-50  text-slate-800  focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all cursor-pointer">
                                <option>2023 - 2024</option>
                                <option>2022 - 2023</option>
                                <option>2021 - 2022</option>
                            </select>
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <IconChevronDown />
                            </span>
                        </div>
                    </div>

                    <!-- Search Input -->
                    <div class="lg:col-span-6 flex flex-col gap-2">
                        <span class="text-sm font-semibold text-slate-700">Entidad</span>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <IconSearch />
                            </span>
                            <input
                                class="w-full h-12 pl-11 pr-4 rounded-lg border border-slate-200  bg-slate-50  text-slate-800  placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d7ff2]/20 focus:border-[#0d7ff2] transition-all"
                                placeholder="Buscar jugador por nombre o ID..." value="" />
                        </div>
                    </div>
                    <div class="lg:col-span-3 flex gap-2 flex-col lg:flex-row items-center justify-end">
                        <button
                            class=" bg-[#0d7ff2] hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm transition-all p-3.5 inline-flex items-center gap-2">
                            <IconSearch />
                            Buscar
                        </button>
                        <button
                            class=" bg-[#0d7ff2] hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm transition-all p-3.5 inline-flex items-center gap-2">
                            <IconRefresh />
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
            <CardSancion />

        </div>
    </main>
</template>
