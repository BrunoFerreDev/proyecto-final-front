<script setup lang="ts">
import { IconClipboardData } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { IconDeviceFloppy } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';
import { IconMapPin } from '@tabler/icons-vue';
import { IconUpload } from '@tabler/icons-vue';
import { IconPhoto } from '@tabler/icons-vue';

</script>

<template>
    <main class=" flex flex-col h-full overflow-y-auto bg-white dark:bg-background-dark relative">
        <div class="w-full max-w-[1100px] mx-auto p-6 md:p-10 flex flex-col gap-8 pb-20">
            <div class="flex items-center gap-2">
                <a class="text-text-secondary hover:text-[##3b82f6] transition-colors text-sm font-medium"
                    href="#">Inicio</a>
                <span class="text-text-secondary text-sm">/</span>
                <a class="text-text-secondary hover:text-[##3b82f6] transition-colors text-sm font-medium"
                    href="#">Clubes</a>
                <span class="text-text-secondary text-sm">/</span>
                <span class="text-text-main text-sm font-medium">Nuevo Club</span>
            </div>
            <div class="flex flex-col gap-2 border-b border-slate-200 pb-6">
                <h1 class="text-text-main text-4xl font-black leading-tight tracking-tight">Crear Nuevo Club</h1>
                <p class="text-text-secondary text-base max-w-2xl">
                    Registra un nuevo equipo en el sistema. Asegúrate de tener el escudo en formato digital y los datos
                    de contacto de la sede.
                </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div class="lg:col-span-4 flex flex-col gap-4">
                    <div
                        class="flex flex-col p-6 rounded-2xl border border-slate-200 bg-slate-50 items-center text-center gap-6 shadow-sm">
                        <div class="relative group cursor-pointer w-full flex justify-center">
                            <div
                                class="size-48 rounded-full bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[##3b82f6] transition-colors">
                                <IconPhoto />
                                <span class="text-text-secondary text-xs font-medium">Subir Escudo</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h3 class="text-text-main text-lg font-bold">Escudo del Club</h3>
                            <p class="text-text-secondary text-sm">
                                Recomendado: PNG transp. 500x500px.<br />Máx 2MB.
                            </p>
                        </div>
                        <button
                            class="w-full bg-slate-100 hover:bg-slate-200 text-text-main font-bold py-2.5 px-4 rounded-full text-sm transition-colors flex items-center justify-center gap-2">
                            <IconUpload />
                            Seleccionar Archivo
                        </button>
                    </div>
                </div>
                <div class="lg:col-span-8 flex flex-col gap-6">
                    <div class="flex flex-col gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="bg-[##3b82f6]/10 p-2 rounded-lg text-[##3b82f6]">
                                <IconClipboardData />
                            </div>
                            <h3 class="text-text-main text-lg font-bold">Identidad del Club</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label class="flex flex-col gap-2">
                                <span class="text-text-main text-sm font-medium ml-1">Nombre del Club <span
                                        class="text-red-500">*</span></span>
                                <input
                                    class="form-input w-full rounded-full border border-slate-200 bg-slate-50 focus:border-[##3b82f6] focus:ring-[##3b82f6] h-12 px-5 text-text-main placeholder:text-text-secondary/50 font-normal"
                                    placeholder="Ej. Real Madrid CF" type="text" />
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-text-main text-sm font-medium ml-1">Nombre Corto / Apodo</span>
                                <input
                                    class="form-input w-full rounded-full border border-slate-200 bg-slate-50 focus:border-[##3b82f6] focus:ring-[##3b82f6] h-12 px-5 text-text-main placeholder:text-text-secondary/50 font-normal"
                                    placeholder="Ej. RMA" type="text" />
                            </label>
                        </div>
                        <label class="flex flex-col gap-2">
                            <span class="text-text-main text-sm font-medium ml-1">Lema o Descripción Corta</span>
                            <textarea
                                class="form-textarea w-full rounded-2xl border border-slate-200 bg-slate-50 focus:border-[##3b82f6] focus:ring-[##3b82f6] p-4 text-text-main placeholder:text-text-secondary/50 font-normal resize-none"
                                placeholder="Una breve descripción de la historia o valores del club..."
                                rows="2"></textarea>
                        </label>
                    </div>
                    <div class="flex flex-col gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="bg-[##3b82f6]/10 p-2 rounded-lg text-[##3b82f6]">
                                <IconMapPin />
                            </div>
                            <h3 class="text-text-main text-lg font-bold">Datos Generales</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label class="flex flex-col gap-2">
                                <span class="text-text-main text-sm font-medium ml-1">Ciudad / Ubicación <span
                                        class="text-red-500">*</span></span>
                                <div class="relative">
                                    <input
                                        class="form-input w-full rounded-full border border-slate-200 bg-slate-50 focus:border-[##3b82f6] focus:ring-[##3b82f6] h-12 pl-12 pr-5 text-text-main placeholder:text-text-secondary/50 font-normal"
                                        placeholder="Buscar ciudad..." type="text" />
                                    <IconSearch class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                                </div>
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-text-main text-sm font-medium ml-1">Fecha de Fundación</span>
                                <div class="relative">
                                    <input
                                        class="form-input w-full rounded-full border border-slate-200 bg-slate-50 focus:border-[##3b82f6] focus:ring-[##3b82f6] h-12 pl-5 pr-12 text-text-main placeholder:text-text-secondary/50 font-normal text-start"
                                        type="date" />
                                    <IconCalendar class="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 mt-4 pt-6 border-t border-slate-200">
                <button
                    class="w-full sm:w-auto px-8 h-12 rounded-full border border-slate-200 text-text-main font-bold hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                    Cancelar
                </button>
                <button
                    class="w-full sm:w-auto px-10 h-12 rounded-full bg-[#3b82f6] text-white font-bold hover:bg-[#2563eb] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2">
                    <IconDeviceFloppy class="text-xl" />
                    Guardar Club
                </button>
            </div>
        </div>
    </main>
</template>