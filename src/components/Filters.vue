<template>
    <!-- Filters & Stats Toolbar -->
    <div class="flex flex-col lg:flex-row gap-4 justify-around items-center  p-4 rounded-xl">
        <!-- Search -->
        <div class="w-full max-w-xl">
            <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <IconSearch />
                </span>
                <input
                    class="w-full bg-slate-50  border border-slate-200  text-slate-900  text-sm rounded-lg focus:ring-[#0d7ff2] focus:border-[#0d7ff2] block pl-10 p-2.5"
                    placeholder="Buscar club por nombre, DT o ID..." type="text" v-model="searchQuery"
                    @keyup.enter="emitirBusqueda" />
            </label>
        </div>
        <!-- Chips/Filters -->
        <!-- <div class="w-full lg:w-auto flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            <button
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d7ff2]/10 text-[#0d7ff2] border border-[#0d7ff2]/20 transition-colors whitespace-nowrap">
                <IconCheck />
                <span class="text-sm font-bold">Todos</span>
            </button>
            <button
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50  text-slate-600  border border-slate-200  hover:bg-slate-100  transition-colors whitespace-nowrap">
                <IconChecklist />
                <span class="text-sm font-medium">Activos (18)</span>
            </button>
            <button
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50  text-slate-600  border border-slate-200  hover:bg-slate-100  transition-colors whitespace-nowrap">
                <IconAlertSquareRounded />
                <span class="text-sm font-medium">Pendientes (6)</span>
            </button>
        </div> -->
    </div>
</template>
<script setup>
import { IconCheck, IconAlertSquareRounded, IconChecklist, IconSearch } from '@tabler/icons-vue';
import { ref } from 'vue'

// Definimos el evento que vamos a emitir al padre
const emit = defineEmits(['on-search'])
const searchQuery = ref('')

const emitirBusqueda = () => {
    // Emitimos el evento y le pasamos el texto escrito
    emit('on-search', searchQuery.value)
}

</script>