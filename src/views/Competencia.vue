<script setup>
import { IconEdit } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';
import { IconChevronRight } from '@tabler/icons-vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { IconCalendarCheck } from '@tabler/icons-vue';
import { IconPlus } from '@tabler/icons-vue';
import { IconTrophy } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateTo = (path) => {
    router.push(path);
}
</script>

<template>
    <main class="layout-container flex h-full grow flex-col">
        <div class="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
            <div class="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-8">
                <section class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <h1 class="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">
                            Búsqueda de Competencias</h1>
                        <p class="text-slate-500  text-lg font-normal leading-normal">Encuentra
                            competencias y gestiona sus torneos asociados.</p>
                    </div>
                    <div class="bg-surface-light  p-6 rounded-xl shadow-sm border border-stone-100 ">
                        <label class="flex flex-col w-full">
                            <div
                                class="flex w-full items-center rounded-xl h-14 bg-background-light  border-2 border-transparent focus-within:border-[#0ea5e9] transition-colors overflow-hidden">
                                <div class="text-slate-400  flex items-center justify-center pl-4 pr-2">
                                    <IconSearch />
                                </div>
                                <input
                                    class="flex w-full flex-1 bg-transparent outline-none text-slate-900 border-none focus:ring-0 placeholder:text-slate-400 h-full text-lg px-2"
                                    placeholder="Buscar competencia por nombre (ej. Primera División)..."
                                    value="Liga Profesional" />
                                <button
                                    class="mr-2 px-6 h-10 bg-[#0ea5e9] text-white font-bold text-sm rounded-lg hover:bg-sky-600 transition-colors">
                                    Buscar
                                </button>
                            </div>
                        </label>
                        <div class="flex gap-3 pt-4 flex-wrap">
                            <button
                                class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#0ea5e9] text-white px-5 transition-transform active:scale-95 shadow-sm">
                                <span class="text-sm font-bold">Todas</span>
                            </button>
                            <button
                                class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-background-light  hover:bg-stone-200 text-slate-600 px-5 border border-stone-200  transition-colors">
                                <span class="text-sm font-medium">Activas</span>
                            </button>
                            <button
                                class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-background-light  hover:bg-stone-200 text-slate-600 px-5 border border-stone-200  transition-colors">
                                <span class="text-sm font-medium">Finalizadas</span>
                            </button>
                            <button
                                class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-background-light  hover:bg-stone-200 text-slate-600 px-5 border border-stone-200  transition-colors">
                                <span class="text-sm font-medium">Próximas</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="flex flex-col gap-4 animate-fade-in-up">
                    <div class="flex items-center justify-between px-1">
                        <h2 class="text-slate-900 text-2xl font-bold leading-tight">Resultados</h2>
                        <span class="text-sm text-slate-500">Mostrando resultados para "Liga Profesional"</span>
                    </div>
                    <div class="bg-surface-light  rounded-xl border border-stone-200  shadow-sm overflow-hidden">
                        <div
                            class="p-6 border-b border-stone-100  flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div class="size-20 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-inner"
                                data-alt="Logo placeholder for Liga Profesional with gradient background">
                                <IconTrophy />
                            </div>
                            <div class="flex flex-col gap-1 flex-1">
                                <div class="flex items-center gap-3">
                                    <h3 class="text-2xl font-bold text-slate-900 ">Liga Profesional de
                                        Fútbol</h3>
                                    <span
                                        class="bg-green-100  text-green-700  text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">Activa</span>
                                </div>
                                <p class="text-slate-500  text-base">Temporada 2024 • Primera
                                    División • Asociación Nacional</p>
                            </div>
                            <div class="flex gap-3">
                                <button
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 text-slate-700 hover:bg-stone-50 font-medium text-sm transition-colors">
                                    <IconEdit />
                                    Editar
                                </button>
                                <button @click.prevent="navigateTo('/nuevo-torneo')"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900  text-white  hover:bg-slate-800 font-medium text-sm transition-colors">
                                    <IconPlus />
                                    Nuevo Torneo
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div
                                class="bg-background-light  px-6 py-3 border-b border-stone-100  grid grid-cols-12 gap-4 text-xs font-bold text-slate-500  uppercase tracking-wider">
                                <div class="col-span-6 md:col-span-5">Torneo Padre</div>
                                <div class="col-span-3 md:col-span-2">Inicio</div>
                                <div class="col-span-3 md:col-span-2">Fin</div>
                                <div class="hidden md:block col-span-2 text-center">Estado</div>
                                <div class="hidden md:block col-span-1 text-right">Acción</div>
                            </div>
                            <div
                                class="group px-6 py-4 border-b border-stone-100  grid grid-cols-12 gap-4 items-center hover:bg-[#0ea5e9]/5  transition-colors cursor-pointer">
                                <div class="col-span-6 md:col-span-5 flex items-center gap-4">
                                    <div
                                        class="size-10 rounded-full bg-white  border border-stone-100 flex items-center justify-center shrink-0">
                                        <IconTrophy />
                                    </div>
                                    <div class="flex flex-col">
                                        <span
                                            class="text-slate-900 font-bold text-base group-hover:text-sky-600  transition-colors">Torneo
                                            Clausura 2024</span>
                                        <span class="text-slate-500 text-xs md:hidden">Activo</span>
                                    </div>
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-600 font-medium flex items-center gap-2">
                                    <IconCalendar />
                                    15 Jul 2024
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-600 font-medium flex items-center gap-2">
                                    <IconCalendarCheck />
                                    10 Dic 2024
                                </div>
                                <div class="hidden md:flex col-span-2 justify-center">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                        <span class="size-1.5 rounded-full bg-green-600"></span>
                                        En curso
                                    </span>
                                </div>
                                <div class="hidden md:flex col-span-1 justify-end">
                                    <button
                                        class="size-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-slate-400 hover:text-slate-900  transition-colors">
                                        <IconChevronRight />
                                    </button>
                                </div>
                            </div>
                            <div
                                class="group px-6 py-4 border-b border-stone-100  grid grid-cols-12 gap-4 items-center hover:bg-stone-50/50 transition-colors cursor-pointer">
                                <div class="col-span-6 md:col-span-5 flex items-center gap-4">
                                    <div
                                        class="size-10 rounded-full bg-white  border border-stone-100 flex items-center justify-center shrink-0 grayscale opacity-70">
                                        <IconTrophy />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-700 font-bold text-base">Torneo
                                            Apertura 2024</span>
                                        <span class="text-slate-400 text-xs md:hidden">Finalizado</span>
                                    </div>
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-500  font-medium flex items-center gap-2">
                                    <IconCalendar />
                                    10 Feb 2024
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-500  font-medium flex items-center gap-2">
                                    <IconCalendarCheck />
                                    05 Jun 2024
                                </div>
                                <div class="hidden md:flex col-span-2 justify-center">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-600  ">
                                        Finalizado
                                    </span>
                                </div>
                                <div class="hidden md:flex col-span-1 justify-end">
                                    <button
                                        class="size-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-slate-400 hover:text-slate-900  transition-colors">
                                        <IconChevronRight />
                                    </button>
                                </div>
                            </div>
                            <div
                                class="group px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-stone-50/50 transition-colors cursor-pointer">
                                <div class="col-span-6 md:col-span-5 flex items-center gap-4">
                                    <div
                                        class="size-10 rounded-full bg-white  border border-stone-100 flex items-center justify-center shrink-0 grayscale opacity-70">
                                        <IconTrophy />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-700 font-bold text-base">Copa de la
                                            Liga 2023</span>
                                        <span class="text-slate-400 text-xs md:hidden">Finalizado</span>
                                    </div>
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-500  font-medium flex items-center gap-2">
                                    <IconCalendar />
                                    01 Ago 2023
                                </div>
                                <div
                                    class="col-span-3 md:col-span-2 text-sm text-slate-500  font-medium flex items-center gap-2">
                                    <IconCalendarCheck />
                                    15 Dic 2023
                                </div>
                                <div class="hidden md:flex col-span-2 justify-center">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-600  ">
                                        Finalizado
                                    </span>
                                </div>
                                <div class="hidden md:flex col-span-1 justify-end">
                                    <button
                                        class="size-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-slate-400 hover:text-slate-900  transition-colors">
                                        <IconChevronRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="px-6 py-4 bg-background-light  border-t border-stone-100  flex justify-between items-center">
                            <span class="text-sm text-slate-500">Mostrando 3 de 12 torneos</span>
                            <div class="flex gap-2">
                                <button
                                    class="px-3 py-1 rounded-lg border border-stone-200 text-slate-500 text-sm hover:bg-white disabled:opacity-50">Anterior</button>
                                <button
                                    class="px-3 py-1 rounded-lg border border-stone-200 text-slate-500 text-sm hover:bg-white">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-[#0ea5e9]/10 rounded-xl p-5 border border-[#0ea5e9]/20 flex items-start gap-4">
                        <div class="bg-[#0ea5e9] rounded-full p-2 text-white shrink-0">
                            <IconInfoCircle />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 mb-1">Guía Rápida</h4>
                            <p class="text-sm text-slate-600">Selecciona un torneo para ver el
                                calendario de partidos, la tabla de posiciones y las estadísticas de jugadores.</p>
                        </div>
                    </div>
                    <div
                        class="bg-surface-light  rounded-xl p-5 border border-stone-100  flex items-center justify-between shadow-sm">
                        <div class="flex flex-col">
                            <h4 class="font-bold text-slate-900 mb-1">¿No encuentras tu competencia?
                            </h4>
                            <p class="text-sm text-slate-500">Puedes crear una nueva desde el panel de administración.
                            </p>
                        </div>
                        <button type="button" @click.prevent="navigateTo('/nueva-competencia')"
                            class="text-slate-900 font-bold text-sm underline decoration-[#0ea5e9] decoration-2 underline-offset-4 hover:text-[#0ea5e9] transition-colors">Crear
                            Nueva</button>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>
