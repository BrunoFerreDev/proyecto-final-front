<template>
    <div
        class="bg-[#0d7ff2]/5 border-b border-[#0d7ff2]/10 px-6 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div class="flex items-center gap-4">
            <div class="size-16 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                data-alt="Portrait of soccer player"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1MVHlv-x6a98rOTcyYLbpucf-S5NWX2_PPhaIa3iFEv6ZjHKwhV4MkkYiFyz0Jw_D9T5dbqV_42d5ijJVnu7l3GUcm8sM86jYo3_wnjMIZBym2850eshKlBJGA00acZJNZaPCgU4ShUUPqMtHQM5Lz_ZlKmAB36jDPOQ24aZJEsOh_NUCv_KwkElbM-U207EzcF0Y3h3gt6LILGt_3-buCXEahebXl9kCpQOVkbx5iKTrKK1IGSPImzqfgoQCGhCPJKLmd5RAlD8");'>
            </div>
            <div>
                <h3 class="text-xl font-bold text-slate-900 ">{{ titulo }}</h3>
                <p class="text-slate-500 text-sm flex items-center gap-1">
                    {{ tipoEntidad }} |
                </p>
            </div>
        </div>
        <div class="flex gap-4 text-center sm:text-right">
            <div>
                <p class="text-xs uppercase tracking-wide text-slate-500 font-semibold">Club Actual</p>
                <p class="font-bold text-slate-900 ">{{ titulo }}</p>
            </div>
            <div class="w-px bg-slate-200 h-10"></div>
            <div>
                <p class="text-xs uppercase tracking-wide text-slate-500 font-semibold">Sanciones Activas
                </p>
                <p class="font-bold text-red-600 flex items-center justify-end gap-1">
                    {{ cantidad }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    titulo: {
        type: String,
        required: true,
        default: 'Sanción de Ejemplo',
    },
    tipoEntidad: {
        type: String,
        required: true,
        default: 'Jugador',
    },
    cantidad: {
        type: Number,
        required: true,
        default: 0,
    },
});
</script>