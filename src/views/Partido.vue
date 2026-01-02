<script setup>
import { IconBallFootball } from '@tabler/icons-vue';
import { IconWashDryclean } from '@tabler/icons-vue';
import { IconArrowUp } from '@tabler/icons-vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { IconTableDown } from '@tabler/icons-vue';
import { IconShare } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';
import { IconArrowDown } from '@tabler/icons-vue';
import { IconArrowAutofitContent } from '@tabler/icons-vue';
import { IconCardboards } from '@tabler/icons-vue';
import { IconBuildingStadium } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';

</script>

<template>
    <main class=" max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
        <!-- Breadcrumbs -->
        <div class="flex flex-wrap items-center gap-2 mb-6 text-sm">
            <a class="text-slate-500  hover:text-[#0d7ff2]" href="#">Inicio</a>
            <span class="text-slate-300">/</span>
            <a class="text-slate-500  hover:text-[#0d7ff2]" href="#">Liga 1ª División</a>
            <span class="text-slate-300">/</span>
            <a class="text-slate-500  hover:text-[#0d7ff2]" href="#">Resultados</a>
            <span class="text-slate-300">/</span>
            <span class="text-[#0d7ff2] font-medium">Detalles del Partido</span>
        </div>
        <!-- Match Hero Scoreboard -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200  p-6 lg:p-10 mb-8 relative overflow-hidden">
            <!-- Background Decoration -->
            <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0d7ff2] to-transparent opacity-50">
            </div>
            <!-- Meta Info Header -->
            <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div
                    class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Jornada 12 • Finalizado
                </div>
                <div class="text-slate-500  text-sm flex items-center gap-1">
                    <IconCalendar />
                    <span>Sábado, 24 Oct 2023 • 16:00</span>
                    <span class="mx-2">•</span>
                    <IconBuildingStadium />
                    <span>Estadio Santiago Bernabéu</span>
                </div>
            </div>
            <!-- Teams & Score -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <!-- Home Team -->
                <div class="flex flex-col items-center  min-w-[140px] gap-4 group cursor-pointer">
                    <div class="relative">
                        <div class="w-24 h-24 md:w-32 md:h-32 bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-105"
                            data-alt="Escudo del Real Madrid"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKpPqXLxaYwpq0j3MKKicBdZBwtYNJHpuAqUddVjwRk0TreEM7HGeKgp1MRxbw9M2k80whkQlMsUXQRa7p19z8cRgJ7HhEZF0FAK3RXZpL_Cv0ab5PCNwVfWZ9BgJHcd4G8Wa440mu6cL0LKMXCEMZ0ZRecLGCqF-Bm9TXlUhtIhUPSZzYArbtksJbfpwGNTo7ntnlmQl3fs-TbiuP9y-j6bzVt_VBLVr-8-uQZYslz0G2NZ9Hsq7Dw0HAS2PsDWJcr8auxPqU9nM");'>
                        </div>
                    </div>
                    <h2 class="text-xl md:text-2xl font-bold text-center text-slate-900 leading-tight">
                        Real Madrid</h2>
                    <span class="text-slate-500  text-sm font-medium">Local</span>
                </div>
                <!-- Score Display -->
                <div class="flex flex-col items-center justify-center shrink-0 mx-4">
                    <div class="flex items-center justify-center gap-4 md:gap-8 mb-2">
                        <span class="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">3</span>
                        <div class="h-1 w-4 md:w-8 bg-slate-300 rounded-full"></div>
                        <span class="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">1</span>
                    </div>
                    <div class="text-slate-500  text-sm font-medium bg-slate-100 px-3 py-1 rounded">
                        Descanso: 1 - 0
                    </div>
                </div>
                <!-- Away Team -->
                <div class="flex flex-col items-center  min-w-[140px] gap-4 group cursor-pointer">
                    <div class="relative">
                        <div class="w-24 h-24 md:w-32 md:h-32 bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-105"
                            data-alt="Escudo del FC Barcelona"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2sbm2Ns2Tai2qAswrKXp5073QnuGDR6eu-qjF6Q4fYPQU9iay3pIvCSOnl-lMCndIbWgX8i9A3hcKAmtVIAkQzCpr6yRi0mbrOcVYr55-733YBAx3AIr-r7R-FJyP16UGgwijTBy3M67UcaJck_EAUoaHTzEY1QpRf9GzPnIqmIJUEF7yNAqgc8_mE3jGR4OlElSPWG3Q6Eowev4BEfPduG0eO9Zn-q4xOdeirb1jnm7CHc9LDqiHzgjcERZ08GSgNGawADP65E8");'>
                        </div>
                    </div>
                    <h2 class="text-xl md:text-2xl font-bold text-center text-slate-900 leading-tight">
                        FC Barcelona</h2>
                    <span class="text-slate-500  text-sm font-medium">Visitante</span>
                </div>
            </div>
            <!-- Action Buttons -->
            <div class="flex flex-wrap justify-center gap-3 mt-10">
                <button
                    class="flex items-center justify-center gap-2 h-10 px-6 bg-[#0d7ff2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20">
                    <IconEdit />
                    <span>Editar Acta</span>
                </button>
                <button
                    class="flex items-center justify-center gap-2 h-10 px-6 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-200  transition-colors border border-transparent hover:border-slate-300">
                    <IconTableDown />
                    <span>Descargar PDF</span>
                </button>
                <button
                    class="flex items-center justify-center gap-2 h-10 px-6 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-200  transition-colors border border-transparent hover:border-slate-300">
                    <IconShare />
                    <span>Compartir</span>
                </button>
            </div>
        </div>
        <!-- Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Goals Column -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200  flex flex-col h-full">
                <div class="p-4 border-b border-slate-100  flex items-center gap-2">
                    <div class="p-1.5 bg-green-100 rounded text-green-600">
                        <IconBallFootball />
                    </div>
                    <h3 class="text-base font-bold text-slate-900">Goles</h3>
                </div>
                <div class="p-0">
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">12'</span>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">Vinícius Jr.</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">RMA</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Asistencia: L. Modrić</p>
                        </div>
                        <div class="text-slate-900 font-bold text-sm">1 - 0</div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">45'</span>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">R. Lewandowski</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">FCB</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Penalti</p>
                        </div>
                        <div class="text-slate-900 font-bold text-sm">1 - 1</div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">67'</span>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">J. Bellingham</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">RMA</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Jugada individual</p>
                        </div>
                        <div class="text-slate-900 font-bold text-sm">2 - 1</div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">88'</span>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">Rodrygo</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">RMA</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Asistencia: Vinícius Jr.</p>
                        </div>
                        <div class="text-slate-900 font-bold text-sm">3 - 1</div>
                    </div>
                </div>
            </div>
            <!-- Discipline Column -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200  flex flex-col h-full">
                <div class="p-4 border-b border-slate-100  flex items-center gap-2">
                    <div class="p-1.5 bg-amber-100  rounded text-amber-600">
                        <IconCardboards />
                    </div>
                    <h3 class="text-base font-bold text-slate-900">Tarjetas</h3>
                </div>
                <div class="p-0">
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">33'</span>
                        <div class="pt-1.5">
                            <div aria-label="Tarjeta Amarilla" class="w-3 h-4 bg-yellow-400 rounded-sm shadow-sm"></div>
                        </div>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">Gavi</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">FCB</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Falta táctica</p>
                        </div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">55'</span>
                        <div class="pt-1.5">
                            <div aria-label="Tarjeta Amarilla" class="w-3 h-4 bg-yellow-400 rounded-sm shadow-sm"></div>
                        </div>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">E. Camavinga</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">RMA</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Protestar decisión arbitral</p>
                        </div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">72'</span>
                        <div class="pt-1.5">
                            <div aria-label="Tarjeta Roja" class="w-3 h-4 bg-red-500 rounded-sm shadow-sm"></div>
                        </div>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900 text-sm">Ronald Araújo</span>
                                <span
                                    class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600">FCB</span>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">Doble amarilla</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Subs Column -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200  flex flex-col h-full">
                <div class="p-4 border-b border-slate-100  flex items-center gap-2">
                    <div class="p-1.5 bg-blue-100  rounded text-[#0d7ff2]">
                        <IconArrowAutofitContent />
                    </div>
                    <h3 class="text-base font-bold text-slate-900">Cambios</h3>
                </div>
                <div class="p-0">
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">60'</span>
                        <div class=" flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <IconArrowUp />
                                <span class="text-sm font-bold text-slate-900 ">F. Mendy</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <IconArrowDown />
                                <span class="text-sm text-slate-500 ">D. Alaba</span>
                            </div>
                            <span
                                class="text-[10px] self-start font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600 mt-1">RMA</span>
                        </div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">65'</span>
                        <div class=" flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <IconArrowUp />
                                <span class="text-sm font-bold text-slate-900 ">Lamine Yamal</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <IconArrowDown />
                                <span class="text-sm text-slate-500 ">Raphinha</span>
                            </div>
                            <span
                                class="text-[10px] self-start font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600 mt-1">FCB</span>
                        </div>
                    </div>
                    <!-- Event Item -->
                    <div
                        class="flex items-start gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                        <span class="text-slate-400 font-mono text-sm pt-0.5 w-8 text-right">80'</span>
                        <div class=" flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <IconArrowUp />
                                <span class="text-sm font-bold text-slate-900 ">Joselu</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <IconArrowDown />
                                <span class="text-sm text-slate-500 ">Rodrygo</span>
                            </div>
                            <span
                                class="text-[10px] self-start font-bold px-1.5 py-0.5 rounded bg-slate-100  text-slate-600 mt-1">RMA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Extra: Incidencias / Referee -->
        <div class="mt-6 bg-white rounded-xl shadow-sm border border-slate-200  p-6">
            <h3 class="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <IconInfoCircle />
                Otras Incidencias
            </h3>
            <div class="space-y-3">
                <p class="text-sm text-slate-600 pl-4 border-l-2 border-slate-200 ">
                    <span class="font-bold mr-2 text-slate-900">Árbitro:</span> Jesús Gil Manzano
                    (Comité Extremeño)
                </p>
                <p class="text-sm text-slate-600 pl-4 border-l-2 border-slate-200 ">
                    <span class="font-bold mr-2 text-slate-900">Minuto 30:</span> Pausa de hidratación
                    debido a las altas temperaturas.
                </p>
                <p class="text-sm text-slate-600 pl-4 border-l-2 border-slate-200 ">
                    <span class="font-bold mr-2 text-slate-900">Minuto 90+4:</span> Final del partido.
                </p>
            </div>
        </div>
    </main>
</template>