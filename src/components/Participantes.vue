<script setup >
import { IconSearch } from '@tabler/icons-vue';
import { IconShield } from '@tabler/icons-vue';
import { IconMinus } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { IconRowRemove } from '@tabler/icons-vue';
import { IconPlus } from '@tabler/icons-vue';
import { IconFilter } from '@tabler/icons-vue';
import { IconUsersGroup } from '@tabler/icons-vue';

</script>

<template>
    <div>
        <div class=" rounded-2xl shadow-soft border border-border-light p-6 md:p-8 scroll-mt-48" >
            <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <IconUsersGroup />
                </div>
                <div class="flex-1">
                    <h3 class="text-text-main text-xl font-bold">Clubes Participantes</h3>
                    <p class="text-text-secondary text-sm">Gestiona los clubs inscritos en la competencia.
                    </p>
                </div>
                <div
                    class="hidden sm:flex items-center gap-2 bg-sky-50 border border-border-light px-3 py-1.5 rounded-lg">
                    <span class="text-xs font-bold text-text-secondary">Total:</span>
                    <span class="text-sm font-bold text-primary">2 clubs</span>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                <div class="relative flex-1">
                    <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]" />
                    <input
                        class="w-full h-10 pl-10 pr-4 rounded-xl border border-border-light bg-white text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-sm placeholder:text-text-secondary/70"
                        placeholder="Buscar clubes por nombre..." type="text" />
                </div>
                <button
                    class="flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-sky-50 border border-border-light text-primary text-sm font-bold hover:bg-sky-100 transition-colors">
                    <IconFilter />
                    Filtros
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
                <div class="flex flex-col gap-3 h-full">
                    <div class="flex items-center justify-between">
                        <h4 class="text-text-main text-xs font-bold uppercase tracking-wider text-opacity-70">
                            Disponibles</h4>
                    </div>
                    <div
                        class="flex-1 border border-border-light rounded-xl bg-sky-50/30 overflow-y-auto p-2 custom-scrollbar">
                        <div
                            class="group flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-border-light cursor-pointer transition-all mb-1">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center overflow-hidden text-primary/70">
                                    <IconShield />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-sm font-bold text-text-main">Real Madrid</span>
                                    <span class="text-[10px] text-text-secondary">Primera División</span>
                                </div>
                            </div>
                            <button
                                class="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-sky-50 transition-colors">
                                <IconPlus />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 h-full">
                    <div class="flex items-center justify-between">
                        <h4 class="text-text-main text-xs font-bold uppercase tracking-wider text-opacity-70">
                            Seleccionados</h4>
                        <button
                            class="text-[10px] font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors">Limpiar
                            Todo</button>
                    </div>
                    <div
                        class="flex-1 border border-border-light rounded-xl bg-white overflow-y-auto p-2 custom-scrollbar shadow-inner bg-opacity-50">
                        <div
                            class="flex items-center justify-between p-2 rounded-lg bg-sky-50 border border-primary/20 mb-2">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary">
                                    <IconCheck />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-sm font-bold text-text-main">FC Barcelona</span>
                                    <span class="text-[10px] text-text-secondary">Añadido manualmente</span>
                                </div>
                            </div>
                            <button
                                class="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-red-500 hover:bg-red-50 transition-colors">
                                <IconMinus />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>