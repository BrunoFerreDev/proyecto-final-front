<template>
    <div class="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20">
        <div class="flex flex-col max-w-270 w-full gap-6">
        
            <!-- Page Heading -->
            <div class="flex flex-wrap justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <h1 class="text-[#111218]  text-4xl font-black leading-tight tracking-[-0.033em]">
                        Programar Partido</h1>
                    <p class="text-[#5f668c] text-base font-normal leading-normal">Configura los
                        detalles del encuentro: torneo, clubs y logística.</p>
                </div>
            </div>
            <!-- Main Form Container -->
            <div class="flex flex-col gap-8">
                <!-- Step 1: Select Tournament & Competition -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50 flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            1</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Selección de Torneo</h2>
                    </div>
                    <div class="p-6 grid gap-6">
                        <!-- Search Bar for Tournament -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Buscar
                                Torneo</label>
                            <div class="relative w-full max-w-2xl">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">search</span>
                                </div>
                                <input
                                    class="w-full pl-10 pr-4 py-3 rounded-lg bg-[#f8f9fc]  border-none focus:ring-2 focus:ring-[#0d7ff2] text-[#111218]  placeholder-[#5f668c]"
                                    placeholder="Buscar por nombre, temporada o categoría (ej. Liga Mayor 2024)..."
                                    type="text" value="" />
                                <div class="absolute inset-y-0 right-3 flex items-center">
                                    <span class="material-symbols-outlined text-green-500">check_circle</span>
                                </div>
                            </div>
                        </div>
                        <!-- Competitions List -->
                        <div class="flex flex-col gap-3 animate-fade-in">
                            <label class="block text-sm font-semibold text-[#111218] ">Seleccionar
                                Competencia</label>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <!-- Active Card -->
                                <button
                                    class="group relative flex flex-col items-start gap-3 p-4 rounded-xl border-2 border-[#0d7ff2] bg-[#0d7ff2]/30 cursor-pointer transition-all">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-[#0d7ff2]/10 flex items-center justify-center text-[#0d7ff2]">
                                        <span class="material-symbols-outlined">trophy</span>
                                    </div>
                                    <div class="text-left">
                                        <h3 class="font-bold text-[#0d7ff2] text-base">Torneo Apertura</h3>
                                        <p class="text-xs text-[#5f668c]  mt-1">Fase Regular • 16
                                            clubs</p>
                                    </div>
                                    <div class="absolute top-4 right-4 text-[#0d7ff2]">
                                        <span class="material-symbols-outlined filled">radio_button_checked</span>
                                    </div>
                                </button>
                                <!-- Inactive Card -->
                                <button
                                    class="group relative flex flex-col items-start gap-3 p-4 rounded-xl border border-[#e5e7eb]  bg-white  hover:border-[#0d7ff2]/50 hover:bg-blue-50 cursor-pointer transition-all">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 ">
                                        <span class="material-symbols-outlined">trophy</span>
                                    </div>
                                    <div class="text-left">
                                        <h3 class="font-bold text-[#111218]  text-base">Copa Nacional
                                        </h3>
                                        <p class="text-xs text-[#5f668c]  mt-1">Eliminatorias • 32
                                            clubs</p>
                                    </div>
                                    <div class="absolute top-4 right-4 text-gray-300 group-hover:text-[#0d7ff2]/50">
                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                    </div>
                                </button>
                                <!-- Inactive Card -->
                                <button
                                    class="group relative flex flex-col items-start gap-3 p-4 rounded-xl border border-[#e5e7eb]  bg-white  hover:border-[#0d7ff2]/50 hover:bg-blue-50  cursor-pointer transition-all">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-gray-100  flex items-center justify-center text-gray-500 ">
                                        <span class="material-symbols-outlined">workspace_premium</span>
                                    </div>
                                    <div class="text-left">
                                        <h3 class="font-bold text-[#111218]  text-base">Supercopa</h3>
                                        <p class="text-xs text-[#5f668c]  mt-1">Final Única</p>
                                    </div>
                                    <div class="absolute top-4 right-4 text-gray-300 group-hover:text-[#0d7ff2]/50">
                                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Step 2: Select Teams -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50  flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            2</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Definir Encuentro</h2>
                    </div>
                    <div class="p-6">
                        <div class="flex flex-col md:flex-row items-center gap-8 justify-between">
                            <!-- Local Team -->
                            <div class="flex-1 w-full">
                                <label class="flex items-center gap-2 text-sm font-bold text-[#0d7ff2] mb-2">
                                    <span class="material-symbols-outlined text-lg">home</span>
                                    club Local
                                </label>
                                <div class="relative">
                                    <select
                                        class="w-full appearance-none rounded-lg border border-[#e5e7eb]  bg-white  px-4 py-3 pr-8 text-[#111218]  focus:border-[#0d7ff2] focus:outline-none focus:ring-1 focus:ring-[#0d7ff2]">
                                        <option value="">Seleccionar club...</option>
                                        <option value="fc_norte">FC Norte</option>
                                        <option value="atletico_sur">Atlético Sur</option>
                                        <option value="deportivo_este">Deportivo Este</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                                <!-- Selected Team Preview Small -->
                                <div
                                    class="mt-4 flex items-center gap-3 p-3 bg-blue-50  rounded-lg border border-blue-100">
                                    <div
                                        class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                                        <img alt="Logo" class="w-full h-full object-cover opacity-80"
                                            data-alt="Blue soccer team logo abstract"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5ap942qU55f3EwV-_MkBV3Rkobb8hJ9-D5eIw853ErI8MyEQBKOdcV9sksXZ966jOguxqssC7Auf97NTYGmiHbKcEf3wBsCD4UeT2W_sIF74cEVO0TFOpdFPCcZJSsDh3zJXaD5IkDpC28fMLLyIFygeHjzZW35DFsrQm1GVd9mldPNAwp8z4vlCsGDj7SAPYtZvfFrzqEgfeYVNefw20n1CpCWdpuNpz-CRC1IoNhY27k6oss_Uac6GP7_eVmwSVlkdFYbB8X4" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-[#111218] ">FC Norte</p>
                                        <p class="text-xs text-[#5f668c]">Posición: 3°</p>
                                    </div>
                                </div>
                            </div>
                            <!-- VS Badge -->
                            <div class="flex flex-col items-center justify-center shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#111218] text-white flex items-center justify-center font-black text-lg shadow-lg z-10">
                                    VS
                                </div>
                            </div>
                            <!-- Visiting Team -->
                            <div class="flex-1 w-full">
                                <label class="flex items-center gap-2 text-sm font-bold text-[#ef4444] mb-2">
                                    <span class="material-symbols-outlined text-lg">flight</span>
                                    club Visitante
                                </label>
                                <div class="relative">
                                    <select
                                        class="w-full appearance-none rounded-lg border border-[#e5e7eb]  bg-white  px-4 py-3 pr-8 text-[#111218]  focus:border-[#0d7ff2] focus:outline-none focus:ring-1 focus:ring-[#0d7ff2]">
                                        <option value="">Seleccionar club...</option>
                                        <option value="fc_norte">FC Norte</option>
                                        <option value="atletico_sur">Atlético Sur</option>
                                        <option value="deportivo_este">Deportivo Este</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                                <!-- Selected Team Preview Small -->
                                <div
                                    class="mt-4 flex items-center gap-3 p-3 bg-red-50  rounded-lg border border-red-100 ">
                                    <div
                                        class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                                        <img alt="Logo" class="w-full h-full object-cover opacity-80"
                                            data-alt="Red soccer team logo abstract"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk47d0lFDBHJ-12blfkvf0qOW7mNpAvbAotMESS2g18b_WBGPwq9pupPdE49rH2mCE1G9KmsO0JOtvUakQ8HMWgAnGLhaIkQBs_eKysgGVYRY2VSK1YapfZJkuFZGE5TJGJKaKl_dGQGjafKk7QrVqtOk-3JbRvONFUuUs0EVrEmK35B77dmEwKhEnGDT0uKkOU9oV81jofvbcUmUABm7NeraCtZzQXrQD5ciRUNpcSfcwGZcLTAe-hrjfndBZ-82o9SUl__CID4Y" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-[#111218] ">Atlético Sur</p>
                                        <p class="text-xs text-[#5f668c]">Posición: 5°</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Step 3: Logistics -->
                <section class="bg-white  rounded-xl shadow-sm border border-blue-100  overflow-hidden">
                    <div class="px-6 py-4 border-b border-blue-50  flex items-center gap-3 bg-blue-50/50 ">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d7ff2] text-white font-bold text-sm">
                            3</div>
                        <h2 class="text-[#111218]  text-lg font-bold">Logística y Árbitros</h2>
                    </div>
                    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Date -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Fecha del
                                Partido</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">calendar_today</span>
                                </div>
                                <input
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb] bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                                    type="date" />
                            </div>
                        </div>
                        <!-- Time -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Hora de
                                Inicio</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">schedule</span>
                                </div>
                                <input
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  focus:ring-[#0d7ff2] focus:border-[#0d7ff2]"
                                    type="time" />
                            </div>
                        </div>
                        <!-- Stadium -->
                        <div class="md:col-span-2">
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Estadio /
                                Sede</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">stadium</span>
                                </div>
                                <select
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  appearance-none focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option value="">Seleccionar sede...</option>
                                    <option value="estadio_municipal">Estadio Municipal (Local)</option>
                                    <option value="campo_deportivo">Campo Deportivo Central</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <div class="h-px bg-gray-100 md:col-span-2 my-2"></div>
                        <!-- Referee Main -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Árbitro
                                Principal</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">person</span>
                                </div>
                                <select
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb] bg-white  text-[#111218]  appearance-none focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option value="">Asignar árbitro...</option>
                                    <option value="ref1">Carlos Méndez (FIFA)</option>
                                    <option value="ref2">Roberto Gómez</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <!-- Referee Assistant -->
                        <div>
                            <label class="block text-sm font-semibold text-[#111218]  mb-2">Juez de Línea
                                / Asistente</label>
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f668c]">
                                    <span class="material-symbols-outlined">flag</span>
                                </div>
                                <select
                                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e5e7eb]  bg-white  text-[#111218]  appearance-none focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                                    <option value="">Asignar asistente...</option>
                                    <option value="asst1">Luis Pérez</option>
                                    <option value="asst2">Ana Martínez</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f668c]">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Action Bar -->
                <div class="flex items-center justify-end gap-4 py-6">
                    <button
                        class="px-8 py-3 rounded-lg bg-white border border-[#e5e7eb] text-[#111218] font-bold text-sm shadow-lg shadow-gray-500/30 hover:bg-gray-100 hover:shadow-gray-500/50 transition-all">
                        Cancelar
                    </button>
                    <button
                        class="px-8 py-3 rounded-lg bg-[#0d7ff2] text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg">save</span>
                        Guardar Partido
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>