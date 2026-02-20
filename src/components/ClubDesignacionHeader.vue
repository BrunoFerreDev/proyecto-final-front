<template>
    <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        <!-- Home Club -->
        <div class="flex-1 flex flex-col items-center md:items-end text-center md:text-right group">
            <div
                class="w-24 h-24 mb-4 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <img alt="Escudo Local" class="w-16 h-16 object-contain"
                    data-alt="Escudo oficial del equipo local de fútbol" :src="props.local?.escudo || ''" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-[#1f44f9] transition-colors">{{
                props.local.nombre }}</h3>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">Local</p>
        </div>
        <!-- VS Divider -->
        <div class="flex flex-col items-center">
            <div
                class="w-12 h-12 bg-[#1f44f9] text-white font-black italic flex items-center justify-center rounded-full shadow-lg shadow-[#1f44f9]/30 z-10">
                VS
            </div>
            <div class="h-16 w-px bg-slate-200 -mt-2 -mb-2 hidden md:block"></div>
        </div>
        <!-- Away Club -->
        <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
            <div
                class="w-24 h-24 mb-4 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <img alt="Escudo Visitante" class="w-16 h-16 object-contain"
                    data-alt="Escudo oficial del equipo visitante de fútbol" :src="props.visitante?.escudo || ''" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-[#1f44f9] transition-colors">{{
                props.visitante.nombre }}</h3>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">Visitante</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    local: {
        type: Object,
        required: true,
        default: () => ({
            nombre: 'Club Local',
            escudo: 'https://via.placeholder.com/64?text=Local'
        })
    },
    visitante: {
        type: Object,
        required: true,
        default: () => ({
            nombre: 'Club Visitante',
            escudo: 'https://via.placeholder.com/64?text=Visitante'
        })
    }
})
</script>