<template>
    <div class="bg-[#1f44f9]/5 border-b border-slate-100 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[#1f44f9] text-[20px]">emoji_events</span>
            <span class="font-semibold text-slate-800 uppercase tracking-wider text-xs">{{
                partido.competenciaDTO?.nombre }}</span>
            <span class="text-slate-300 mx-1">|</span>
            <span class="text-slate-500 text-sm font-medium">Fecha: #{{ partido.fechaTorneo }}</span>
        </div>
        <div class="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-full uppercase tracking-widest">
            Confirmado
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    partido: {
        type: Object,
        required: true
    }
})
</script>