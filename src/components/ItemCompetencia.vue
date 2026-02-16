<template>
    <button
        class="group relative flex flex-col items-start gap-3 p-4 rounded-xl border-2 border-[#0d7ff2] bg-[#0d7ff2]/30 cursor-pointer transition-all">
        <div class="w-10 h-10 rounded-lg bg-[#0d7ff2]/10 flex items-center justify-center text-[#0d7ff2]">
            <span class="material-symbols-outlined">trophy</span>
        </div>
        <div class="text-left">
            <h3 class="font-bold text-[#0d7ff2] text-base">{{ props.competencia.nombre }}</h3>
            <p class="text-xs text-[#5f668c]  mt-1">{{ props.competencia.categoria }}</p>
        </div>
        <div class="absolute top-4 right-4 text-[#0d7ff2]">
            <span class="material-symbols-outlined filled">radio_button_checked</span>
        </div>
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    competencia: Object
});
</script>