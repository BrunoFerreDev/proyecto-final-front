<template>
    <div class="flex items-center gap-3 mb-6">
        <div class="bg-[#0d7ff2]/10 text-[#0d7ff2] p-2 rounded-lg">
            <IconPlus />
        </div>
        <h3 class="text-xl font-bold text-[#111218]">
            Programar Nuevo Encuentro
        </h3>
    </div>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Team Selection -->
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Club Local</label>
            <select class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                <option disabled selected value="">
                    Seleccionar club...
                </option>
                <option value="1">Real Madrid FC</option>
                <option value="2">Atlético Sur</option>
            </select>
        </div>
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Club Visitante</label>
            <select class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]">
                <option disabled selected value="">
                    Seleccionar club...
                </option>
                <option value="1">Dep. Libertad</option>
                <option value="2">Los Pumas</option>
            </select>
        </div>
        <!-- Date & Time -->
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Fecha del Partido</label>
            <div class="relative">
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-4"
                    type="date" />
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700">Hora de Inicio</label>
            <div class="relative">
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2] focus:border-[#0d7ff2] pl-4"
                    type="time" />
            </div>
        </div>
        <!-- Venue -->
        <div class="md:col-span-2 space-y-2">
            <label class="text-sm font-semibold text-gray-700">Lugar del Encuentro (Cancha/Estadio)</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <!-- <IconStadium /> -->
                </span>
                <input
                    class="w-full h-12 rounded-lg border bg-white focus:ring-[#0d7ff2] focus:border-[#0d7ff2]focus:border-[#0d7ff2] pl-10"
                    placeholder="Ej. Estadio Municipal, Cancha 4..." type="text" />
            </div>
        </div>
        <!-- Actions -->
        <div class="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-2">
            <button class="px-6 py-3 rounded-lg text-sm font-semibold text-gray-600 transition-colors" type="button">
                Cancelar
            </button>
            <button
                class="px-8 py-3 rounded-lg text-sm bg-[#1f44f9] text-white font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                type="button">
                <IconDeviceFloppy />
                Crear Partido
            </button>
        </div>
    </form>
</template>