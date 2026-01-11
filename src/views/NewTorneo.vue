<template>
    <div class="flex flex-1 max-w-7xl mx-auto">
        <!-- Main Content -->
        <main class="flex-1 flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex flex-wrap gap-2 px-8 pt-6">
                <a class="text-[#5f668c] text-sm font-medium hover:text-[#1f44f9] transition-colors"
                    href="#">Torneos</a>
                <span class="text-[#5f668c] text-sm font-medium">/</span>
                <span class="text-[#111218] text-sm font-medium">Configuración de Torneo</span>
            </div>
            <!-- PageHeading -->
            <div class="flex flex-wrap justify-between items-center gap-4 px-8 py-6">
                <div class="flex flex-col gap-1">
                    <h2 class="text-[#111218] text-4xl font-black leading-tight tracking-[-0.033em]">
                        Torneo Regional 2024</h2>
                    <p class="text-[#5f668c]  text-base font-normal">Gestiona la lista de clubes
                        inscritos y las fases de la competencia.</p>
                </div>
                <div class="flex gap-3">
                    <button
                        class="flex items-center justify-center rounded-lg h-10 px-4 bg-background-light text-[#111218] text-sm font-bold hover:bg-gray-200  transition-colors">
                        <span>Cancelar</span>
                    </button>
                    <button
                        class="flex items-center justify-center rounded-lg h-10 px-6 bg-[#1f44f9] text-white text-sm font-bold shadow-lg shadow-[#1f44f9]/20 hover:bg-blue-700 transition-all">
                        <span>Guardar Cambios</span>
                    </button>
                </div>
            </div>
            <!-- Tabs -->
            <div class="px-8">
                <div class="flex border-b border-[#dbdde6]  gap-8">
                    <button @click="tab = 1"
                        :class="tab == 1 ? 'border-[#1f44f9] text-[#1f44f9]' : 'border-transparent text-[#5f668c]'"
                        class="flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 hover:text-[#1f44f9] transition-colors">
                        <p class="text-sm font-bold tracking-[0.015em]">Inscribir Clubes</p>
                    </button>

                    <button @click="tab = 2"
                        :class="tab == 2 ? 'border-[#1f44f9] text-[#1f44f9]' : 'border-transparent text-[#5f668c]'"
                        class="flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 hover:text-[#1f44f9] transition-colors">
                        <p class="text-sm font-bold tracking-[0.015em]">Gestionar Competencias</p>
                    </button>
                </div>
            </div>
            <!-- Tab Content: Inscribir Clubes -->
            <div class="flex-1 p-8 space-y-8">
                <!-- Search & Add Section -->
                <div class="bg-white  p-6 rounded-xl border border-[#dbdde6]  shadow-sm" v-if="tab == 1">
                    <h3 class="text-lg font-bold mb-4">Añadir Nuevo Club</h3>
                    <div class="flex gap-4">
                        <div class="flex-1 relative">
                            <span
                                class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5f668c]">search</span>
                            <input
                                class="w-full pl-12 pr-4 py-3 rounded-lg border-[#dbdde6]  bg-background-light  focus:border-[#1f44f9] focus:ring-1 focus:ring-[#1f44f9] transition-all"
                                placeholder="Buscar club por nombre o ciudad..." type="text" />
                        </div>
                        <button
                            class="bg-[#1f44f9] text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">add</span>
                            Inscribir Club
                        </button>
                    </div>
                </div>
                <!-- Participants List -->
                <div class="space-y-4" id="participants-list" v-if="tab == 1">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold">Clubes Participantes <span
                                class="text-[#1f44f9] ml-2 bg-[#1f44f9]/10 px-3 py-1 rounded-full text-sm">16
                                inscritos</span></h3>
                        <button class="text-[#1f44f9] text-sm font-semibold hover:underline">Ver todos los
                            clubes</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <!-- Club Card 1 -->
                        <div
                            class="bg-white  p-4 rounded-xl border border-[#dbdde6]  flex items-center justify-between hover:shadow-md transition-shadow">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img class="w-10 h-10 object-contain" data-alt="Escudo de club de fútbol"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8UDPjfqPp_mRuxqblbXQZ02JIonkho7sk2gJfOCRTWJ2j-BvWMX5NmKQWPuSt1H0lOBTERVW5ZZLOLFN_xicgUPwZ1Y98q21rP1d66xccf6_tNsOIROlvy3g2yeHUiREq2iIOVADBFXFxeHYdRFfGH9LQIB7FrNkHcBPIgr4Z6dsObA925m8mmac4rPYHhQoa9DRTBgVTCgAayHL_oVR67OPsG_X-Xlb93qiwIZRTvSlz-sGkAi8-6BR7tTz6w9ppYlNY-IpgJAc" />
                                </div>
                                <div>
                                    <p class="font-bold">Real Madrid FC</p>
                                    <p class="text-xs text-[#5f668c]">Madrid, España</p>
                                </div>
                            </div>
                            <button class="text-[#5f668c] hover:text-red-500 p-2 transition-colors">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                        </div>

                        <!-- Add Placeholder -->
                        <button
                            class="p-4 rounded-xl border-2 border-dashed border-[#dbdde6]  flex items-center justify-center gap-2 text-[#5f668c] hover:border-[#1f44f9] hover:text-[#1f44f9] transition-all">
                            <span class="material-symbols-outlined">add_circle</span>
                            <span class="font-medium">Inscribir otro</span>
                        </button>
                    </div>
                </div>
                <!-- Secondary Tab-like Section Title (Concept only for layout) -->
                <div class="pt-8 space-y-4" id="secondary-tabs" v-if="tab == 2">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold">Competencias Activas</h3>
                        <button
                            class="flex items-center gap-2 bg-[#1f44f9]/10 text-[#1f44f9] px-4 py-2 rounded-lg font-bold hover:bg-[#1f44f9]/20 transition-colors">
                            <span class="material-symbols-outlined">add</span>
                            Crear Competencia
                        </button>
                    </div>
                    <div class="bg-white  border border-[#dbdde6]  rounded-xl overflow-hidden shadow-sm">
                        <table class="w-full text-left">
                            <thead
                                class="bg-background-light text-xs font-bold uppercase text-[#5f668c] tracking-wider">
                                <tr>
                                    <th class="px-6 py-4">Nombre</th>
                                    <th class="px-6 py-4">Tipo</th>
                                    <th class="px-6 py-4">Estado</th>
                                    <th class="px-6 py-4">Equipos</th>
                                    <th class="px-6 py-4">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[#dbdde6] ">
                                <tr class="hover:bg-gray-50  transition-colors">
                                    <td class="px-6 py-4 font-bold">Torneo Apertura 2024</td>
                                    <td class="px-6 py-4 text-sm">Liga (Ida y Vuelta)</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Activo</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">16/16</td>
                                    <td class="px-6 py-4">
                                        <div class="flex gap-2">
                                            <button class="p-2 text-[#5f668c] hover:text-[#1f44f9]"><span
                                                    class="material-symbols-outlined text-xl">edit</span></button>
                                            <button class="p-2 text-[#5f668c] hover:text-[#1f44f9]"><span
                                                    class="material-symbols-outlined text-xl">settings</span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50  transition-colors">
                                    <td class="px-6 py-4 font-bold">Copa Regional</td>
                                    <td class="px-6 py-4 text-sm">Eliminación Directa</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">Programado</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">0/16</td>
                                    <td class="px-6 py-4">
                                        <div class="flex gap-2">
                                            <button class="p-2 text-[#5f668c] hover:text-[#1f44f9]"><span
                                                    class="material-symbols-outlined text-xl">edit</span></button>
                                            <button class="p-2 text-[#5f668c] hover:text-[#1f44f9]"><span
                                                    class="material-symbols-outlined text-xl">settings</span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref(1);
</script>