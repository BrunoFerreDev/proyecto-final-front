<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue';

</script>

<template>
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
                        </div>
                    </div>
                </section>
</template>