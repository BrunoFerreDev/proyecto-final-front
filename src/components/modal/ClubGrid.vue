<template>
    <div 
        @click="$emit('selectClub', club)"
        :class="[
            'w-full h-44',                                      /* Tamaño: Ancho de celda y Alto fijo */
            'flex flex-col items-center justify-center gap-3',  /* Flex centrado */
            'p-3 rounded-xl cursor-pointer relative group',     /* Estilos base */
            'bg-[#516dfb]/5 hover:bg-[#516dfb]/10 transition-all duration-200', /* Hover suave */
            selected ? 'border-2 border-[#516dfb]' : 'border-2 border-transparent' /* Borde que no empuja */
        ]"
    >
        <div class="absolute top-2 right-2 text-[#516dfb]" v-if="selected">
            <span class="material-symbols-outlined text-xl">check_circle</span>
        </div>

        <div class="shrink-0"> <div class="w-20 h-20 rounded-full border border-[#516dfb] bg-center bg-cover shadow-sm"
                 :style="`background-image: url('${club.escudo}')`">
            </div>
        </div>

        <div class="w-full text-center px-1">
            <p class="text-[#111218] text-sm font-semibold truncate" :title="club.nombre">
                {{ club.nombre.replace('Club ', '').trim() }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    club: { type: Object, required: true },
    selected: { type: Boolean, default: false }
})
</script>