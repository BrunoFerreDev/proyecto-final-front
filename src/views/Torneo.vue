<script setup >
import { IconShare } from '@tabler/icons-vue';
import { IconCircleDashedPercentage } from '@tabler/icons-vue';
import { IconChevronLeft } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';
import { IconAdCircleFilled } from '@tabler/icons-vue';
import { IconPlus } from '@tabler/icons-vue';
import { IconDeviceFloppy } from '@tabler/icons-vue';
import { IconCircleFilled } from '@tabler/icons-vue';
import { IconLineDashed } from '@tabler/icons-vue';
import { IconChevronRight } from '@tabler/icons-vue';
import { IconCalendarEvent } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';
import { IconSettings } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { ref } from 'vue';

const tab = ref('fixture');

</script>

<template>
    <div class="layout-container flex h-full grow flex-col">
        <div class="flex  justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div class="layout-content-container flex flex-col w-full max-w-[1024px] gap-8">
                <!-- Search & Title Section -->
                <section class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div class="flex flex-col gap-2 max-w-lg">
                        <h1 class="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#111218] ">
                            Gestión de Torneos</h1>
                        <p class="text-[#5f668c] dark:text-[#94a3b8] text-base">Busca, administra y programa los
                            encuentros de tus campeonatos.</p>
                    </div>
                    <!-- Search Bar -->
                    <div class="flex flex-col w-full md:w-auto md:min-w-[400px]">
                        <label class="sr-only" for="search-tournament">Buscar torneo</label>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <IconSearch />
                            </div>
                            <input
                                class="block w-full rounded-xl border-none bg-white py-4 pl-12 pr-4 text-[#111218] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-[#9ca3af] focus:ring-2 focus:ring-inset focus:ring-[#0d7ff2] sm:text-sm sm:leading-6 transition-all"
                                id="search-tournament" placeholder="Buscar torneo por nombre o ID (ej. #8821)..."
                                type="search" />
                            <div class="absolute inset-y-0 right-2 flex items-center">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Selected Context: Tournament Card -->
                <section>
                    <div
                        class="flex flex-col md:flex-row items-stretch gap-6 rounded-2xl bg-white p-1 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] ring-1 ring-gray-100">
                        <!-- Tournament Image -->
                        <div class="w-full md:w-48 shrink-0 aspect-video md:aspect-auto rounded-xl bg-cover bg-center"
                            data-alt="Abstract dynamic soccer pattern blue and white"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfWzIQNlYK_6YyxcgzE0BFpjqjMxS-D5VlZXijbVJpb5zA0PbrIFIbUalBocXEttI08BGa9c3i1tmUCK-LdGXTxnckLS7fEzTjGFnfuc-za8yB2CkXGAKxuX7oQF_iStVRecZg9JfmR9gcLydyYyFyxo4upd3jVUzJ66DT0x62hG3R6fIF1rijbK59DU_XpdxFgYctPzMuAv-Ap-srSmAVX-NPlB2DH0s3aBOljhk1nQlt-YRGMAZTLY-5j_0-qQMVVyQJ3ngjiPY");'>
                            <div
                                class="w-full h-full bg-gradient-to-t from-black/50 to-transparent md:hidden rounded-xl">
                            </div>
                        </div>
                        <!-- Tournament Info -->
                        <div class="flex  flex-col justify-center gap-4 p-4 md:py-6 md:pr-6">
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <div class="flex items-center gap-3 mb-1">
                                        <span
                                            class="inline-flex items-center rounded-md bg-green-50  px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">En
                                            Progreso</span>
                                        <span class="text-xs text-[#5f668c] font-mono">ID:
                                            #8821</span>
                                    </div>
                                    <h2 class="text-2xl font-bold text-[#111218]">Copa De Oro 2024</h2>
                                    <p class="text-[#5f668c] text-sm mt-1">Temporada 2024 - Apertura
                                        | Fútbol 11 Masculino</p>
                                </div>
                                <div class="flex gap-3 w-full md:w-auto">
                                    <button
                                        class="inline-flex  md:flex-none items-center justify-center gap-2 rounded-lg bg-[#0d7ff2]/10 hover:bg-[#0d7ff2]/20 px-4 py-2.5 text-sm font-semibold text-[#0d7ff2] transition-colors">
                                        <IconSettings />
                                        <span>Configurar</span>
                                    </button>
                                    <button
                                        class="inline-flex  md:flex-none items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors">
                                        <IconShare />
                                        <span>Compartir</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Tabs Navigation -->
                <div class="border-b border-gray-200 dark:border-gray-700">
                    <nav aria-label="Tabs" class="-mb-px flex space-x-8 overflow-x-auto custom-scrollbar">
                        <!-- Tab: Fixture (Active) -->
                        <button class="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2"
                            @click="tab = 'fixture'">
                            <IconCalendar />
                            Fixture
                        </button>
                        <!-- Tab: Clasificación -->
                        <button class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2 transition-colors"
                            @click="tab = 'clasificacion'">
                            <IconCircleDashedPercentage />
                            Clasificación
                        </button>
                        <!-- Tab: Programar Partidos -->
                        <button class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2 transition-colors"
                            @click="tab = 'programar'">
                            <IconCalendarEvent />
                            Programar Partidos
                        </button>
                    </nav>
                </div>
                <!-- Tab Content Area -->
                <div class="flex flex-col gap-12">
                    <!-- TAB CONTENT 1: FIXTURE -->
                    <div v-if="tab ==='fixture'" class="animate-in fade-in slide-in-from-bottom-2 duration-500" id="fixture-content">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-lg font-bold text-[#111218]">Partidos Recientes y Próximos
                            </h3>
                            <div class="flex items-center gap-2">
                                <button class="p-2 rounded-lg hover:bg-gray-100 ">
                                    <IconChevronLeft />
                                </button>
                                <span
                                    class="text-sm font-medium text-gray-900 bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Jornada
                                    5</span>
                                <button class="p-2 rounded-lg hover:bg-gray-100 ">
                                    <IconChevronRight />
                                </button>
                            </div>
                        </div>
                        <!-- Match List -->
                        <div class="space-y-4">
                            <!-- Match Item: Played -->
                            <div
                                class="bg-white  rounded-xl p-4 shadow-sm border border-gray-100  flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:border-[#0d7ff2]/30 transition-colors cursor-pointer group">
                                <div
                                    class="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs font-medium min-w-[140px]">
                                    <div
                                        class="flex flex-col items-center justify-center rounded px-2 py-1 text-center w-12">
                                        <span class="block text-xs uppercase font-bold">Sáb</span>
                                        <span class="block text-sm font-bold text-gray-900">12</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-green-600 font-bold">Finalizado</span>
                                        <span>18:30 HS</span>
                                        <span class="truncate max-w-[100px]">Estadio Central</span>
                                    </div>
                                </div>
                                <div class="flex  items-center justify-center gap-4 md:gap-8 w-full">
                                    <div class="flex items-center gap-3  justify-end text-right">
                                        <span class="font-bold text-gray-900 text-sm md:text-base">Real
                                            Madrid FC</span>
                                        <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                                            data-alt="Team logo shield blue">
                                            <img alt="RM Logo" class="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxs6ZoEqOX1tICR9egPUyS9gODad5QLXpMZwHIQ7SmduQkgJyYs8YQiUEd-ukYmYFjeReuF48do3qwJ7FBQEu5C0T9DHqo60foJwW336TE0MQi9IQMOwGa6Fg6urMFXxPzbVNd5wMI15zzEwYQzT5pgctsOmCjPg5XpV8NB5SKv7pg9b3sKE50kg3nHg7PL3TDqMOycpHGm4SCXy9KQZsWewbUSPGJKH9MWZgZUYVSRfONSETPwDv3R9hFUgUEBuZrrTTqh_xIwB8" />
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
                                        <span class="text-xl md:text-2xl font-black text-gray-900 tracking-widest">3
                                            - 1</span>
                                    </div>
                                    <div class="flex items-center gap-3  justify-start text-left">
                                        <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                                            data-alt="Team logo shield red">
                                            <img alt="ATL Logo" class="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmecSjj7uwaOcmH_-3xeqEQ8j5YWMqwrqJXH1A4NUSGAoqQIeBkEwshP9wMIlLOzInWRkzMg-DDHsXavUB5z8XNaOyYWBrTb2PtuNZ9syi4hZkQXvcXMi--J8wPXkq4gPeAVd4ln3-TPRO1YX1XOa6srg_B7GBIUst7M4FPVJOJsXcZkTvacrelVd7g44Wh_oV_DHdUK_kV7ecTwQZPsfZV9u0Pg72wDrFzV4jfw1LVHxpGb7FZwHCZdJ-EsrOWQymNbPr85uGxqU" />
                                        </div>
                                        <span class="font-medium  text-sm md:text-base">Atlético
                                            Sur</span>
                                    </div>
                                </div>
                                <div class="hidden md:flex min-w-[100px] justify-end">
                                    <IconChevronRight />
                                </div>
                            </div>
                            <!-- Match Item: Scheduled -->
                            <div
                                class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:border-[#0d7ff2]/30 transition-colors cursor-pointer group">
                                <div class="flex items-center gap-3 text-gray-500 text-xs font-medium min-w-[140px]">
                                    <div
                                        class="flex flex-col items-center justify-center bg-gray-50 rounded px-2 py-1 text-center w-12">
                                        <span class="block text-xs uppercase font-bold">Dom</span>
                                        <span class="block text-sm font-bold text-gray-900">13</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-[#0d7ff2] font-bold">Programado</span>
                                        <span>20:00 HS</span>
                                        <span class="truncate max-w-[100px]">Cancha Norte</span>
                                    </div>
                                </div>
                                <div class="flex  items-center justify-center gap-4 md:gap-8 w-full">
                                    <div class="flex items-center gap-3  justify-end text-right">
                                        <span class="font-bold text-gray-900 text-sm md:text-base">Los
                                            Pumas</span>
                                        <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                                            data-alt="Team logo shield black">
                                            <img alt="LP Logo" class="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdePC7tLjEcUO3tAY0zSZ1mN4VQV4m1nUtyT3z61nAKtGLme8Q7FN82fXniInHnny6AySCUOOADSmxTxQbTHflj-EW8t2nqIBLJ9RlMEz-9ZfYtVMFYkfQU_Yd8rcY8yemxMABSu11Ag9WTZLkdFVbAsOGY6eD5LfFuHOPfCzWhaUs2_3yWb6Wpzeg3vxelx_NNFjG-K1Nl4KPRcRQlVcufLy-IS3mwvCiXJGDap5g0F3-u66oFW63wZD5emtQMCpm9X_mAFca2Go" />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center px-3 py-1.5">
                                        <span
                                            class="text-sm font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">VS</span>
                                    </div>
                                    <div class="flex items-center gap-3  justify-start text-left">
                                        <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                                            data-alt="Team logo shield green">
                                            <img alt="DL Logo" class="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM6w5KSMSub0oJVIX-O0yzvMb-cEloyS6myT7ugZ8tHnqnBNA5U9vD6auDJgNPqfSExnfIm8WLOc-xZcqwGt-pw7ndFBzKG7QD9CxImFQ15fbZkcoOtx6UVQYkl3HKzbeLhJ-UrhaTLkyypuXB8lG_2JoQ_CqsWC1WAqnv-_-27Q6aWgVzg6qn1kShtPZ4qgOWsIZTgQiAd1-H6iQiZ4RRoBsz0xQcpn-6qyEwvQj4rSG9AyL2YDGv0nyvsT89aytR4Q9ON_lAubY" />
                                        </div>
                                        <span class="font-bold text-gray-900  text-sm md:text-base">Dep.
                                            Libertad</span>
                                    </div>
                                </div>
                                <div class="hidden md:flex min-w-[100px] justify-end">
                                    <IconEdit />
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <!-- TAB CONTENT 2: CLASIFICACION -->
                    <div v-if="tab ==='clasificacion'" class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200  overflow-hidden"
                        id="clasificacion-content">
                        <div class="p-4 border-b border-gray-200  flex justify-between items-center bg-gray-50">
                            <h3 class="text-base font-bold text-[#111218] flex items-center gap-2">
                                <IconLineDashed />
                                Tabla de Posiciones
                            </h3>
                            <button class="text-sm text-[#0d7ff2] font-medium hover:underline">Ver Reglas</button>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left">
                                <thead class="bg-gray-50  text-xs uppercase font-semibold ">
                                    <tr>
                                        <th class="px-4 py-3 text-center w-12">#</th>
                                        <th class="px-4 py-3 w-64">Club</th>
                                        <th class="px-4 py-3 text-center" title="Partidos Jugados">PJ</th>
                                        <th class="px-4 py-3 text-center" title="Ganados">G</th>
                                        <th class="px-4 py-3 text-center" title="Empatados">E</th>
                                        <th class="px-4 py-3 text-center" title="Perdidos">P</th>
                                        <th class="px-4 py-3 text-center hidden sm:table-cell" title="Goles Favor">GF
                                        </th>
                                        <th class="px-4 py-3 text-center hidden sm:table-cell" title="Goles Contra">GC
                                        </th>
                                        <th class="px-4 py-3 text-center" title="Diferencia de Gol">DG</th>
                                        <th
                                            class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/50 dark:bg-blue-900/10">
                                            Pts</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                                    <!-- Row 1 -->
                                    <tr class="hover:bg-gray-50transition-colors">
                                        <td class="px-4 py-3 text-center border-l-4 border-green-500 font-medium">1</td>
                                        <td class="px-4 py-3 font-semibold text-gray-900 flex items-center gap-3">
                                            Real Madrid FC
                                        </td>
                                        <td class="px-4 py-3 text-center">5</td>
                                        <td class="px-4 py-3 text-center">4</td>
                                        <td class="px-4 py-3 text-center">1</td>
                                        <td class="px-4 py-3 text-center">0</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">12</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">3</td>
                                        <td class="px-4 py-3 text-center text-green-600 font-medium">+9</td>
                                        <td
                                            class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                                            13</td>
                                    </tr>
                                    <!-- Row 2 -->
                                    <tr class="hover:bg-gray-50 transition-colors">
                                        <td class="px-4 py-3 text-center border-l-4 border-green-500 font-medium">2</td>
                                        <td class="px-4 py-3 font-semibold text-gray-900 flex items-center gap-3">
                                            Atlético Sur
                                        </td>
                                        <td class="px-4 py-3 text-center">5</td>
                                        <td class="px-4 py-3 text-center">3</td>
                                        <td class="px-4 py-3 text-center">1</td>
                                        <td class="px-4 py-3 text-center">1</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">10</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">5</td>
                                        <td class="px-4 py-3 text-center text-green-600 font-medium">+5</td>
                                        <td
                                            class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                                            10</td>
                                    </tr>
                                    <!-- Row 3 -->
                                    <tr class="hover:bg-gray-50 transition-colors">
                                        <td
                                            class="px-4 py-3 text-center border-l-4 border-transparent font-medium text-gray-500">
                                            3</td>
                                        <td class="px-4 py-3 font-medium text-gray-700 flex items-center gap-3">
                                            Dep. Libertad
                                        </td>
                                        <td class="px-4 py-3 text-center">5</td>
                                        <td class="px-4 py-3 text-center">2</td>
                                        <td class="px-4 py-3 text-center">2</td>
                                        <td class="px-4 py-3 text-center">1</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">8</td>
                                        <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">6</td>
                                        <td class="px-4 py-3 text-center text-green-600 font-medium">+2</td>
                                        <td
                                            class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                                            8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- TAB CONTENT 3: PROGRAMAR PARTIDOS -->
                    <div v-if="tab ==='programar'" class="bg-gray-50 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-gray-700 p-6 md:p-8"
                        id="programar-content">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="bg-[#0d7ff2]/10 text-[#0d7ff2] p-2 rounded-lg">
                                <IconPlus />
                            </div>
                            <h3 class="text-xl font-bold text-[#111218]">Programar Nuevo Encuentro</h3>
                        </div>
                        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Team Selection -->
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Equipo
                                    Local</label>
                                <select
                                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option disabled selected value="">Seleccionar equipo...</option>
                                    <option value="1">Real Madrid FC</option>
                                    <option value="2">Atlético Sur</option>
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Equipo
                                    Visitante</label>
                                <select
                                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option disabled selected value="">Seleccionar equipo...</option>
                                    <option value="1">Dep. Libertad</option>
                                    <option value="2">Los Pumas</option>
                                </select>
                            </div>
                            <!-- Date & Time -->
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Fecha del
                                    Partido</label>
                                <div class="relative">
                                    <input
                                        class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-4"
                                        type="date" />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Hora de
                                    Inicio</label>
                                <div class="relative">
                                    <input
                                        class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2] focus:border-[#0d7ff2] pl-4"
                                        type="time" />
                                </div>
                            </div>
                            <!-- Venue -->
                            <div class="md:col-span-2 space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Lugar del
                                    Encuentro (Cancha/Estadio)</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <IconStadium />
                                    </span>
                                    <input
                                        class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-10"
                                        placeholder="Ej. Estadio Municipal, Cancha 4..." type="text" />
                                </div>
                            </div>
                            <!-- Actions -->
                            <div
                                class="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-2">
                                <button
                                    class="px-6 py-3 rounded-lg text-sm font-semibold text-gray-600 transition-colors"
                                    type="button">Cancelar</button>
                                <button
                                    class="px-8 py-3 rounded-lg text-sm bg-[#1f44f9] text-white font-semibold shadow-lg shadow-blue-500/30  transition-all flex items-center gap-2"
                                    type="button">
                                    <IconDeviceFloppy />
                                    Crear Partido
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End Tab Content Area -->
            </div>
        </div>
    </div>
</template>