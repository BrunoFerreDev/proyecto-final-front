<script setup>
import { IconUsersGroup } from '@tabler/icons-vue';
const props = defineProps({
    competencia: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="relative rounded-xl border border-[#1f44f9] bg-blue-50/60  p-5 transition-all shadow-md">
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <span
                    class="inline-block rounded bg-[#1f44f9]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1f44f9]">Masculino</span>
            </div>
            <h4 class="text-lg font-bold text-[#111218] ">{{ competencia.nombre }} - {{
                competencia.categoria.replace("_", " ") }}</h4>
            <div class="flex items-center gap-3 text-sm text-gray-600  mt-1">
                <span class="flex items-center gap-1 ">
                    <IconUsersGroup /> Formato de Competencia:
                </span>
            </div>
        </div>
    </div>
</template>