<template>
    <div class="flex items-center gap-4 group p-3 -m-3 hover:bg-[#516dfb]/5 rounded-xl transition-colors">
        <div class="h-16 w-16 rounded-full border-2 border-[#516dfb]/20 p-0.5 overflow-hidden">
            <img class="w-full h-full object-cover rounded-full bg-slate-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoG-GnLfc0bJ8aQ9N6Nt-8loAV-dBRbmy8ogRXvnrY8dwAUdy2rChwE94xsPSyh69qATdqWhP-Z7rq0xH1mpi1vLtqi92OZFNk-jv86RBUJdX0sUNHVoi-m37uyAUhbhNBs6bOJEKV_RQ6aGLnwY4tdl519Yy1FIgZEtptqcNAzltWFviBhUpQ69IoIKb6pnlsnmy9x0j-k_ecF9xMXD8Fo6fDmixV17pNVscKENVGy28hx0sWKC-c9EC1992NAYv6d6sg8RIVGCs" />
        </div>
        <div>
            <p class="text-base font-bold text-[#111218]  group-hover:text-[#516dfb] transition-colors">
                {{ props.miembro.nombre }} {{ props.miembro.apellido }}
            </p>
            <p class="text-xs font-bold text-[#516dfb] uppercase tracking-wide">
                {{ props.miembro.rol }}
            </p>
            <p class="text-[10px] text-[#5f668c] mt-1">
                Desde {{props.miembro.fechaIncio}} • Nacionalidad: Argentina
            </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    miembro: {
        type: Object,
        required: true
    }
});
</script>