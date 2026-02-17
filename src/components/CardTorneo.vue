<template>
    <div class="group flex flex-col gap-3 rounded-xl p-5  bg-[#0d7ff2]/3 shadow-sm relative transition-all">
        <div class="absolute top-4 right-4 text-[#0d7ff2]">
            <span class="material-symbols-outlined" v-if="selected">check_circle</span>
        </div>
        <div class="flex items-center gap-3">
            <div class="size-10 rounded-lg bg-[#0d7ff2] text-white flex items-center justify-center font-bold">
                T1</div>
            <div>
                <h3 class="text-slate-900 font-bold">{{ props.torneo.nombre }}</h3>
                <p class="text-xs text-[#0d7ff2] font-medium uppercase tracking-wider">{{ props.torneo.estado }} •
                    Temporada
                    {{ props.torneo.temporada }}</p>
            </div>
        </div>
        <div class="flex justify-between items-center mt-2 pt-3 border-t border-[#0d7ff2]/10 text-slate-500 text-sm">
            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">lists</span> {{
                props.torneo.competenciasAsociadas }}
                Competencias</span>
            <span class="flex items-center gap-1"><span
                    class="material-symbols-outlined text-[16px]">calendar_month</span> Fecha Inicio: {{
                        props.torneo.fechaInicio
                }}
            </span>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    torneo: {
        type: Object,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})
onMounted(() => {
    console.log('Torneo:', props.torneo);
})

</script>