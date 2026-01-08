<script setup >
import { IconBallFootball } from '@tabler/icons-vue';
import { IconSitemap } from '@tabler/icons-vue';
import { IconList } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { IconTrophy } from '@tabler/icons-vue';
import { IconRocket } from '@tabler/icons-vue';
import { IconScoreboard } from '@tabler/icons-vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { IconDeviceFloppy } from '@tabler/icons-vue';
import { onMounted, ref } from 'vue';
import Participantes from '../components/Participantes.vue';
const tabs = ref(['info', 'participantes']);
const activeTab = ref('info');
const crearCompetencia = ref({
    nombre: '',
    categoria: '',
    idTorneo: 0,
})
const cargarConfiguracion = ref({
    cantJugadoresclub: 0,
    minutosPorTiempo: 0,
    maxSustituciones: 0,
    formatoCompetencia: '',
});

</script>

<template>
    <div class="relative flex h-full w-full flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <div class="w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-6">

                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div class="flex flex-col gap-2 max-w-2xl">
                        <h1 class="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-tight">Crear
                            Competencia</h1>
                        <p class="text-text-secondary text-base md:text-lg font-normal leading-relaxed">
                            Configura los detalles estructurales, el formato de juego y las reglas de puntuación para la
                            nueva fase del torneo.
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <button
                            class="flex items-center justify-center h-10 px-5 rounded-full bg-white border  text-text-main text-sm font-bold hover:bg-sky-50 transition-colors shadow-sm">
                            Cancelar
                        </button>
                        <button
                            class="flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#0ea5e9] text-white text-sm font-bold transition-colors shadow-md shadow-[#0ea5e9]/20">
                            <IconDeviceFloppy />
                            Guardar Competencia
                        </button>
                    </div>
                </div>
                <div class="sticky top-0 z-10  pt-2 pb-6 border-b  mb-8">
                    <div class="flex overflow-x-auto gap-8 no-scrollbar">
                        <button :class="{ 'border-b-3 border-b-[#0ea5e9] ': activeTab == 'info' }"
                            class="group flex flex-col items-center justify-center  pb-3 min-w-[120px] cursor-pointer"
                            @click.prevent="() => activeTab = 'info'">
                            <span class="text-sm font-bold"
                                :class="{ 'text-[#0ea5e9]': activeTab == 'info' }">Información sobre la
                                Competencia</span>
                        </button>
                            <button :class="{ 'border-b-3 border-b-[#0ea5e9] ': activeTab == 'participantes' }"
                            class="group flex flex-col items-center justify-center  pb-3 min-w-[120px] cursor-pointer"
                            @click.prevent="() => activeTab = 'participantes'">
                            <span class="text-sm font-bold"
                                :class="{ 'text-[#0ea5e9]': activeTab == 'participantes' }">Participantes</span>
                        </button>

                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start" v-if="activeTab == 'info'">
                    <div class="lg:col-span-2 flex flex-col gap-8">
                        <div class="bg-surface-light rounded-2xl shadow-soft border  p-6 md:p-8" id="general">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                                    <IconInfoCircle />
                                </div>
                                <h3 class="text-text-main text-xl font-bold">Detalles Básicos</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label class="flex flex-col gap-2 md:col-span-2">
                                    <span class="text-text-main text-sm font-bold">Nombre de la Competencia</span>
                                    <input
                                        class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none placeholder:text-text-secondary/70"
                                        placeholder="Ej. Torneo Apertura - Primera División" type="text" />
                                </label>
                                <label class="flex flex-col gap-2">
                                    <span class="text-text-main text-sm font-bold">Abreviatura (3-4 letras)</span>
                                    <input
                                        class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none placeholder:text-text-secondary/70"
                                        placeholder="Ej. AP24" type="text" />
                                </label>
                                <label class="flex flex-col gap-2">
                                    <span class="text-text-main text-sm font-bold">Categoría / División</span>
                                    <div class="relative">
                                        <select
                                            class="form-select w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none cursor-pointer">
                                            <option>Primera División</option>
                                            <option>Segunda División</option>
                                            <option>Juveniles Sub-20</option>
                                            <option>Femenino A</option>
                                        </select>
                                    </div>
                                </label>
                                <label class="flex flex-col gap-2 md:col-span-2">
                                    <span class="text-text-main text-sm font-bold">Descripción (Opcional)</span>
                                    <textarea
                                        class="w-full p-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none resize-none h-24 placeholder:text-text-secondary/70"
                                        placeholder="Añade notas internas o descripción pública..."></textarea>
                                </label>
                            </div>
                        </div>
                        <div class="bg-surface-light rounded-2xl shadow-soft border  p-6 md:p-8" id="rules">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                                    <IconBallFootball />
                                </div>
                                <h3 class="text-text-main text-xl font-bold">Reglas de Partido</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <label class="flex flex-col gap-2">
                                    <span class="text-text-main text-sm font-bold">Duración (Min/Tiempo)</span>
                                    <input
                                        class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none"
                                        type="number" value="45" />
                                </label>
                                <label class="flex flex-col gap-2">
                                    <span class="text-text-main text-sm font-bold">Descanso (Minutos)</span>
                                    <input
                                        class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none"
                                        type="number" value="15" />
                                </label>
                                <label class="flex flex-col gap-2">
                                    <span class="text-text-main text-sm font-bold">Max. Cambios</span>
                                    <input
                                        class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none"
                                        type="number" value="5" />
                                </label>
                            </div>
                            <div class="space-y-4">
                                <div
                                    class="flex items-center justify-between p-4 rounded-xl border  hover:border-[#0ea5e9]/40 transition-colors bg-sky-50/50">
                                    <div class="flex flex-col">
                                        <span class="text-text-main text-sm font-bold">Prórroga (Tiempo Extra)</span>
                                        <span class="text-text-secondary text-xs">Permitir tiempo extra en caso de
                                            empate</span>
                                    </div>
                                    <div
                                        class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-200 transition-all duration-300 left-0"
                                            id="toggle-extra" name="toggle" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300"
                                            for="toggle-extra"></label>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between p-4 rounded-xl border  hover:border-[#0ea5e9]/40 transition-colors bg-sky-50/50">
                                    <div class="flex flex-col">
                                        <span class="text-text-main text-sm font-bold">Tanda de Penaltis</span>
                                        <span class="text-text-secondary text-xs">Definir partido por penales si
                                            persiste el
                                            empate</span>
                                    </div>
                                    <div
                                        class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-200 transition-all duration-300 left-0"
                                            id="toggle-penalties" name="toggle" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300"
                                            for="toggle-penalties"></label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <div class="bg-surface-light rounded-2xl shadow-soft border  p-6" id="scoring">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                                    <IconScoreboard />
                                </div>
                                <h3 class="text-text-main text-xl font-bold">Puntuación</h3>
                            </div>
                            <div class="bg-sky-50 p-4 rounded-xl border  mb-6">
                                <div class="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div class="text-green-600 font-bold text-xs uppercase mb-2">Victoria</div>
                                        <input
                                            class="w-full text-center h-10 px-2 rounded-lg border  bg-white text-text-main font-bold focus:border-[#0ea5e9] outline-none"
                                            type="number" value="3" />
                                    </div>
                                    <div>
                                        <div class="text-yellow-600 font-bold text-xs uppercase mb-2">Empate</div>
                                        <input
                                            class="w-full text-center h-10 px-2 rounded-lg border  bg-white text-text-main font-bold focus:border-[#0ea5e9] outline-none"
                                            type="number" value="1" />
                                    </div>
                                    <div>
                                        <div class="text-red-600 font-bold text-xs uppercase mb-2">Derrota</div>
                                        <input
                                            class="w-full text-center h-10 px-2 rounded-lg border  bg-white text-text-main font-bold focus:border-[#0ea5e9] outline-none"
                                            type="number" value="0" />
                                    </div>
                                </div>
                            </div>
                            <label class="flex flex-col gap-2 mb-4">
                                <span class="text-text-main text-sm font-bold">Criterio de Desempate 1</span>
                                <div class="relative">
                                    <select
                                        class="form-select w-full h-10 px-3 rounded-lg border  bg-white text-text-main text-sm focus:border-[#0ea5e9] outline-none cursor-pointer">
                                        <option>Diferencia de Goles</option>
                                        <option>Goles a Favor</option>
                                        <option>Resultados Directos (H2H)</option>
                                        <option>Fair Play</option>
                                    </select>
                                </div>
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-text-main text-sm font-bold">Criterio de Desempate 2</span>
                                <div class="relative">
                                    <select
                                        class="form-select w-full h-10 px-3 rounded-lg border  bg-white text-text-main text-sm focus:border-[#0ea5e9] outline-none cursor-pointer">
                                        <option>Goles a Favor</option>
                                        <option>Diferencia de Goles</option>
                                        <option>Resultados Directos (H2H)</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div class="bg-surface-light rounded-2xl shadow-soft border  p-6" id="format">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                                    <IconSitemap />
                                </div>
                                <h3 class="text-text-main text-xl font-bold">Formato</h3>
                            </div>
                            <label class="flex flex-col gap-2 mb-6">
                                <span class="text-text-main text-sm font-bold">Tipo de Competencia</span>
                                <div class="grid grid-cols-2 gap-3">
                                    <button
                                        class="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-[#0ea5e9] bg-[#0ea5e9]/5 text-[#0ea5e9] transition-all">
                                        <IconList />
                                        <span class="text-xs font-bold">Liga</span>
                                    </button>
                                    <button
                                        class="flex flex-col items-center justify-center p-3 rounded-xl border  bg-white text-text-secondary hover:border-[#0ea5e9]/50 hover:text-[#0ea5e9] transition-all">
                                        <IconTrophy />
                                        <span class="text-xs font-bold">Copa</span>
                                    </button>
                                </div>
                            </label>
                            <div class="p-4 bg-[#0ea5e9]/5 rounded-xl border border-[#0ea5e9]/10 mb-6">
                                <div class="flex items-start gap-3">
                                    <IconInfoCircle />
                                    <p class="text-xs text-text-main leading-relaxed">
                                        El formato <span class="font-bold">Liga</span> generará un calendario de todos
                                        contra todos. Podrás configurar las fechas más adelante.
                                    </p>
                                </div>
                            </div>
                            <label class="flex flex-col gap-2 mb-4">
                                <span class="text-text-main text-sm font-bold">Número de clubs</span>
                                <input
                                    class="w-full h-12 px-4 rounded-xl border  bg-sky-50 text-text-main focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all outline-none"
                                    placeholder="Ej. 18" type="number" />
                            </label>
                            <label class="flex items-center justify-between gap-4 cursor-pointer group">
                                <span
                                    class="text-text-main text-sm font-medium group-hover:text-[#0ea5e9] transition-colors">Ida
                                    y Vuelta</span>
                                <div
                                    class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                                    <input
                                        class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-200 transition-all duration-300 left-0"
                                        name="toggle" type="checkbox" />
                                    <label
                                        class="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300"></label>
                                </div>
                            </label>
                        </div>
                        <div
                            class="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-2xl p-6 text-white shadow-lg shadow-[#0ea5e9]/20">
                            <h4 class="font-bold text-lg mb-4 flex items-center gap-2">
                                <IconRocket />
                                Resumen
                            </h4>
                            <div class="space-y-3 text-sm opacity-90">
                                <div class="flex justify-between border-b border-white/20 pb-2">
                                    <span>Formato</span>
                                    <span class="font-bold">Liga (Ida y Vuelta)</span>
                                </div>
                                <div class="flex justify-between border-b border-white/20 pb-2">
                                    <span>Tiempo</span>
                                    <span class="font-bold">45 min / 5 Subs</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Puntos</span>
                                    <span class="font-bold">3 / 1 / 0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Participantes v-if="activeTab == 'participantes'" />
                <div class="mt-12 py-6 border-t  flex justify-end gap-4">
                    <button
                        class="px-6 py-3 rounded-xl border  text-text-secondary font-bold hover:bg-sky-50 hover:text-text-main transition-colors">
                        Descartar Cambios
                    </button>
                    <button
                        class="px-8 py-3 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold shadow-lg shadow-[#0ea5e9]/25 transition-all transform active:scale-95 flex items-center gap-2">
                        <IconCheck />
                        Crear Competencia
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>