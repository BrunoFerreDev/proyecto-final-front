<script setup>
import {
    IconCheck,
    IconAlertSquareRounded,
    IconChevronDown,
    IconSearch,
    IconPlus,
    IconCalendar,
    IconShieldCheckeredFilled,
    IconEye,
    IconUsersGroup,
    IconUser
} from '@tabler/icons-vue';

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
                    <!-- Segmented Control -->
                    <div class="lg:col-span-3 flex flex-col gap-2">
                        <span class="text-sm font-semibold text-slate-700">Buscar por</span>
                        <div class="flex h-12 w-full items-center justify-center rounded-lg bg-slate-100  p-1">
                            <label
                                class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-all text-slate-500 text-sm font-medium leading-normal">
                                <span class="flex items-center gap-2">
                                    <IconUser /> Jugador
                                </span>
                                <input checked class="invisible w-0" name="search_type" type="radio" value="Jugador" />
                            </label>
                            <label
                                class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-all text-slate-500 text-sm font-medium leading-normal">
                                <span class="flex items-center gap-2">
                                    <IconUsersGroup /> club
                                </span>
                                <input class="invisible w-0" name="search_type" type="radio" value="club" />
                            </label>
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
                </div>
            </div>
            <!-- Entity Summary Card -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mx-4">
                <div
                    class="bg-[#0d7ff2]/5 border-b border-[#0d7ff2]/10 px-6 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <div class="size-16 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                            data-alt="Portrait of soccer player"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1MVHlv-x6a98rOTcyYLbpucf-S5NWX2_PPhaIa3iFEv6ZjHKwhV4MkkYiFyz0Jw_D9T5dbqV_42d5ijJVnu7l3GUcm8sM86jYo3_wnjMIZBym2850eshKlBJGA00acZJNZaPCgU4ShUUPqMtHQM5Lz_ZlKmAB36jDPOQ24aZJEsOh_NUCv_KwkElbM-U207EzcF0Y3h3gt6LILGt_3-buCXEahebXl9kCpQOVkbx5iKTrKK1IGSPImzqfgoQCGhCPJKLmd5RAlD8");'>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 ">Carlos Mendoza</h3>
                            <p class="text-slate-500 text-sm flex items-center gap-1">
                                <IconShieldCheckeredFilled /> Delantero | ID: #88321
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-4 text-center sm:text-right">
                        <div>
                            <p class="text-xs uppercase tracking-wide text-slate-500 font-semibold">club Actual</p>
                            <p class="font-bold text-slate-900 ">Leones FC</p>
                        </div>
                        <div class="w-px bg-slate-200 h-10"></div>
                        <div>
                            <p class="text-xs uppercase tracking-wide text-slate-500 font-semibold">Sanciones Activas
                            </p>
                            <p class="font-bold text-red-600 flex items-center justify-end gap-1">
                                <IconAlertSquareRounded /> 1
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Table Container -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50  border-b border-slate-200">
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Fecha</th>
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Partido / Contexto</th>
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Tipo
                                </th>
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Motivo</th>
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Duración</th>
                                <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Estado</th>
                                <th
                                    class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                                    Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 ">
                            <!-- Row 1: Active Sanction -->
                            <tr class="hover:bg-slate-50  transition-colors group">
                                <td class="py-4 px-6 text-sm font-medium text-slate-900  whitespace-nowrap">
                                    12 May 2024</td>
                                <td class="py-4 px-6 text-sm text-slate-600">
                                    <div class="flex flex-col">
                                        <span class="font-medium">vs. Rayos FC</span>
                                        <span class="text-xs text-slate-400">Jornada 14</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6">
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-4 bg-red-500 rounded-sm shadow-sm" title="Tarjeta Roja"></div>
                                        <span class="text-sm text-slate-700">Tarjeta Roja</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm text-slate-600 max-w-[200px] truncate"
                                    title="Agresión física a un contrario">
                                    Agresión física a un contrario
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-slate-900 ">3 Partidos</td>
                                <td class="py-4 px-6">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600 border border-red-100 ">
                                        <span class="size-1.5 rounded-full bg-red-600 "></span> Pendiente
                                    </span>
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <button
                                        class="text-slate-400 hover:text-[#0d7ff2] transition-colors p-2 rounded-full hover:bg-slate-100 ">
                                        <IconEye />
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 2: Served Sanction (Yellow Accumulation) -->
                            <tr class="hover:bg-slate-50  transition-colors group">
                                <td class="py-4 px-6 text-sm font-medium text-slate-900  whitespace-nowrap">
                                    03 Mar 2024</td>
                                <td class="py-4 px-6 text-sm text-slate-600">
                                    <div class="flex flex-col">
                                        <span class="font-medium">vs. Tigres del Norte</span>
                                        <span class="text-xs text-slate-400">Jornada 8</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6">
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-4 bg-yellow-400 rounded-sm shadow-sm"
                                            title="Acumulación Amarillas"></div>
                                        <span class="text-sm text-slate-700">Acumulación</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm text-slate-600 max-w-[200px] truncate">
                                    5ta Tarjeta Amarilla
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-slate-900 ">1 Partido</td>
                                <td class="py-4 px-6">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600 border border-green-100">
                                        <IconCheck /> Cumplida
                                    </span>
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <button
                                        class="text-slate-400 hover:text-[#0d7ff2] transition-colors p-2 rounded-full hover:bg-slate-100 ">
                                        <IconEye />
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 3: Served Sanction (Double Yellow) -->
                            <tr class="hover:bg-slate-50  transition-colors group">
                                <td class="py-4 px-6 text-sm font-medium text-slate-900  whitespace-nowrap">
                                    15 Nov 2023</td>
                                <td class="py-4 px-6 text-sm text-slate-600">
                                    <div class="flex flex-col">
                                        <span class="font-medium">vs. Atlético Sur</span>
                                        <span class="text-xs text-slate-400">Jornada 4</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6">
                                    <div class="flex items-center gap-2">
                                        <div class="relative w-4 h-4 mr-1">
                                            <div
                                                class="absolute top-0 left-0 w-3 h-4 bg-yellow-400 rounded-sm shadow-sm transform -rotate-6">
                                            </div>
                                            <div
                                                class="absolute top-0 left-1 w-3 h-4 bg-red-500 rounded-sm shadow-sm transform rotate-6 z-10">
                                            </div>
                                        </div>
                                        <span class="text-sm text-slate-700">Doble Amarilla</span>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm text-slate-600 max-w-[200px] truncate">
                                    Protestar decisiones arbitrales
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-slate-900 ">1 Partido</td>
                                <td class="py-4 px-6">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600 border border-green-100">
                                        <IconCheck /> Cumplida
                                    </span>
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <button
                                        class="text-slate-400 hover:text-[#0d7ff2] transition-colors p-2 rounded-full hover:bg-slate-100 ">
                                        <IconEye />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                    <p class="text-sm text-slate-500">Mostrando <span class="font-semibold text-slate-900 ">1-3</span>
                        de <span class="font-semibold text-slate-900 ">12</span> resultados</p>
                    <div class="flex gap-2">
                        <button
                            class="px-3 py-1 rounded-md border border-slate-300 text-slate-500 text-sm hover:bg-white disabled:opacity-50">Anterior</button>
                        <button class="px-3 py-1 rounded-md bg-[#0d7ff2] text-white text-sm shadow-sm">1</button>
                        <button
                            class="px-3 py-1 rounded-md border border-slate-300 text-slate-500 text-sm hover:bg-white ">2</button>
                        <button
                            class="px-3 py-1 rounded-md border border-slate-300 text-slate-500 text-sm hover:bg-white ">Siguiente</button>
                    </div>
                </div>
            </div>
            <!-- Empty State Illustration (Hidden, shown only for context if needed in dynamic implementation) -->
            <!-- 
            <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-4xl text-slate-400">manage_search</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900  mb-1">Comienza tu búsqueda</h3>
                <p class="text-slate-500 max-w-sm">Selecciona un jugador o club arriba para ver su historial completo de sanciones.</p>
            </div> 
            -->
        </div>
    </main>
</template>