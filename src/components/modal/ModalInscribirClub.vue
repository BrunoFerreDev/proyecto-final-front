<template>
    <div class="bg-white w-full max-w-[720px] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        v-if="modalInscribirClub">
        <!-- PageHeading (Modal Header) -->
        <div class="flex flex-wrap justify-between items-start gap-3 p-6 border-b border-gray-100 ">
            <div class="flex min-w-72 flex-col gap-1">
                <p class="text-[#111218]  tracking-light text-2xl font-bold leading-tight">Inscripción de
                    Clubes</p>1
                <p class="text-[#5f668c]  text-sm font-normal">Torneo Apertura 2024 - Liga Fútbol 11
                </p>
            </div>
            <button @click="closeModal"
                class="flex size-10 items-center justify-center rounded-full hover:bg-gray-100  text-gray-500 transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <!-- Modal Content - Scrollable -->
        <div class="flex-1 overflow-y-auto custom-scrollbar">
            <!-- Search Bar Section -->
            <div class="p-6 pb-2">
                <p class="text-sm font-medium text-gray-700  mb-2">Buscar clubes existentes</p>
                <label class="flex flex-col w-full">
                    <div
                        class="flex w-full items-stretch rounded-lg h-12 bg-background-light  border border-transparent focus-within:border-[#516dfb] transition-all">
                        <div class="text-[#5f668c] flex items-center justify-center pl-4 rounded-l-lg">
                            <span class="material-symbols-outlined">search</span>
                        </div>
                        <input
                            class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#111218]  placeholder:text-[#5f668c] px-4 text-base font-normal"
                            placeholder="Buscar por nombre, ciudad o código..." value="Real" />
                    </div>
                </label>
            </div>
            <!-- SectionHeader: Results -->
            <div class="px-6 flex justify-between items-end">
                <h3 class="text-[#111218]  text-md font-bold leading-tight tracking-[-0.015em] pt-4">
                    Resultados de búsqueda</h3>
                <p class="text-xs text-[#5f668c] ">4 clubes encontrados</p>
            </div>
            <!-- ImageGrid: Search Results -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                <!-- Club 1 -->
                <div
                    class="flex flex-col gap-3 text-center p-3 rounded-xl border border-[#516dfb] bg-[#516dfb]/5  transition-all cursor-pointer relative group">
                    <div class="absolute top-2 right-2 text-[#516dfb]">
                        <span class="material-symbols-outlined fill-1">check_circle</span>
                    </div>
                    <div class="px-2">
                        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full border-2 border-[#516dfb]"
                            data-alt="Logotipo circular del Real Madrid CF"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvOM_L8hX6E9jtR0uFvDiy5_EvWuDTTLTkNlPEdoRbRqc5M7f88msAophB6BTcy91ML1emjZyN71YelrQblkKqZOzw5EHWrnNtnPtsL9pUBjL9sk4AYQiYylbYaL-eQb-Vkbf__7mPfNbKpGbmw0I9lddVe3MNL0jybY-omJrjWdrw9p5X1lyBkpZ_oQ3xcO5X7rEEPNDcWyIQp3Av5zhquXK8LluCc2JV8rsz0GybwgiYcM-WVDmbv33dfLo7EgaTKbKiAUrGycs");'>
                        </div>
                    </div>
                    <div>
                        <p class="text-[#111218]  text-sm font-semibold truncate">Real Madrid CF</p>
                        <p class="text-[#5f668c]  text-xs truncate">Madrid</p>
                    </div>
                </div>
            </div>
            <!-- Selected Section -->
            <div class="bg-[#516dfb]/5  p-6 mx-6 rounded-xl mb-6">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="text-sm font-bold text-gray-800 flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#516dfb] scale-90">verified</span>
                        Clubes seleccionados para inscribir (2)
                    </h4>
                    <button class="text-xs text-[#516dfb] font-semibold hover:underline">Limpiar todos</button>
                </div>
                <div class="flex flex-wrap gap-2">
                    <!-- Selection Chip 1 -->
                    <div
                        class="flex items-center gap-2 bg-white border border-[#516dfb]/30 rounded-full pl-1.5 pr-3 py-1.5 shadow-sm">
                        <div class="size-6 bg-center bg-no-repeat bg-cover rounded-full"
                            data-alt="Escudo pequeño Madrid"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz6ZyYCexfGuy54CQZVHmJC9uFsy4-A4_oBnyKMB_Ilya-AJ4uT1w04BDw4EDFFJTfwAgvXxnpDlqnZnyuef4A0TsDFramdWDELjpr19iypIAHO0eLU6sAfGIjVWy6W6lUWQjamAiGjnKQE9U8VIlJq7r05rA93YFMQdfWlgbzF66v63syNfU1Hrt2-HfrEtkQXW1tl7P9oL-0b6J24twdFdfguO499oI9QiAtK3N9S7wdWpa_FY-35lzNrMGbXrAD5LMRHus-MuI");'>
                        </div>
                        <span class="text-sm font-medium text-gray-700">Real Madrid CF</span>
                        <button class="text-gray-400 hover:text-red-500 transition-colors">
                            <span class="material-symbols-outlined !text-lg">cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Actions -->
        <div class="p-6 border-t border-gray-100  flex items-center justify-end gap-3 bg-white">
            <button @click="closeModal"
                class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-gray-100  text-gray-700  text-sm font-semibold transition-colors hover:bg-gray-200">
                Cancelar
            </button>
            <button @click="closeModal"
                class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-[#516dfb] text-white text-sm font-bold shadow-lg shadow-[#516dfb]/25 hover:bg-blue-600 transition-all">
                Inscribir Clubes
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    modalInscribirClub: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits('closeModal');

const closeModal = () => {
    emit('closeModal');
}
</script>