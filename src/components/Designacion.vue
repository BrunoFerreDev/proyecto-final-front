<template>
    <div class="bg-white rounded-xl border border-[#dbdde6] overflow-hidden">
        <div class="bg-[#516dfb]/5 px-6 py-4 border-b border-[#dbdde6]">
            <h2 class="text-lg font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-[#516dfb]">sports</span>
                2. Designación Arbitral
            </h2>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-lg border-2 border-[#516dfb]/20 bg-[#516dfb]/5">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-[#516dfb] flex items-center justify-center text-white text-xs font-bold">AP</span>
                    <p class="text-sm font-bold">Árbitro Principal</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option>Antonio Mateu Lahoz</option>
                    <option>Jesús Gil Manzano</option>
                    <option>José Luis Munuera Montero</option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A1</span>
                    <p class="text-sm font-bold">Asistente 1</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option>Pau Cebrián Devis</option>
                    <option>Roberto Díaz Pérez</option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A2</span>
                    <p class="text-sm font-bold">Asistente 2</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option>Guadalupe Porras Ayuso</option>
                    <option>Iker De Francisco Grijalba</option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">4A</span>
                    <p class="text-sm font-bold">Cuarto Árbitro</p>
                </div>
                <select
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option>Juan Martínez Munuera</option>
                    <option>Ricardo De Burgos Bengoetxea</option>
                </select>
            </div>
        </div>
    </div>
</template>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>