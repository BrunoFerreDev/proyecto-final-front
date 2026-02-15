<template>
    <!-- Competition Row 1 -->
    <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
        <div class="flex items-center gap-4 mb-4 sm:mb-0">
            <div class="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <span class="material-symbols-outlined">sports_soccer</span>
            </div>
            <div>
                <h4 class="font-bold text-slate-900">{{ props.competencia.nombre }}</h4>
                <div class="flex gap-3 text-sm text-slate-500 mt-1">
                    <span class="flex items-center gap-1"><span
                            class="material-symbols-outlined text-[14px]">groups</span> 20
                        Equipos</span>
                    <span class="flex items-center gap-1 text-emerald-600 font-medium">● En
                        Juego</span>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto">
            <button
                class="flex-1 sm:flex-none h-9 px-4 rounded text-sm font-semibold border border-slate-200 hover:bg-white transition-colors">Resultados</button>
            <button
                class="flex-1 sm:flex-none h-9 px-4 rounded text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors">Gestionar</button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    competencia: {
        type: Object,
        default: () => ({})
    }
});

</script>