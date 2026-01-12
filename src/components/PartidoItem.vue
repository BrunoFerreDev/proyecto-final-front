<template>
    <div
        class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:border-[#0d7ff2]/30 transition-colors cursor-pointer group">
        <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs font-medium min-w-[140px]">
            <div class="flex flex-col items-center justify-center rounded px-2 py-1 text-center w-12">
                <span class="block text-xs uppercase font-bold">Sáb</span>
                <span class="block text-sm font-bold text-gray-900">12</span>
            </div>
            <div class="flex flex-col">
                <span class="text-green-600 font-bold">Finalizado</span>
                <span>18:30 HS</span>
                <span class="truncate max-w-[100px]">Estadio Central</span>
            </div>
        </div>
        <div class="flex items-center justify-center gap-4 md:gap-8 w-full">
            <div class="flex items-center gap-3 justify-end text-right">
                <span class="font-bold text-gray-900 text-sm md:text-base">{{ partido.clubLocal }}</span>
                <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                    data-alt="Team logo shield blue">
                    <img alt="RM Logo" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxs6ZoEqOX1tICR9egPUyS9gODad5QLXpMZwHIQ7SmduQkgJyYs8YQiUEd-ukYmYFjeReuF48do3qwJ7FBQEu5C0T9DHqo60foJwW336TE0MQi9IQMOwGa6Fg6urMFXxPzbVNd5wMI15zzEwYQzT5pgctsOmCjPg5XpV8NB5SKv7pg9b3sKE50kg3nHg7PL3TDqMOycpHGm4SCXy9KQZsWewbUSPGJKH9MWZgZUYVSRfONSETPwDv3R9hFUgUEBuZrrTTqh_xIwB8" />
                </div>
            </div>
            <div class="flex items-center justify-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
                <span class="text-xl md:text-2xl font-black text-gray-900 tracking-widest">3 - 1</span>
            </div>
            <div class="flex items-center gap-3 justify-start text-left">
                <div class="size-8 md:size-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                    data-alt="Team logo shield red">
                    <img alt="ATL Logo" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmecSjj7uwaOcmH_-3xeqEQ8j5YWMqwrqJXH1A4NUSGAoqQIeBkEwshP9wMIlLOzInWRkzMg-DDHsXavUB5z8XNaOyYWBrTb2PtuNZ9syi4hZkQXvcXMi--J8wPXkq4gPeAVd4ln3-TPRO1YX1XOa6srg_B7GBIUst7M4FPVJOJsXcZkTvacrelVd7g44Wh_oV_DHdUK_kV7ecTwQZPsfZV9u0Pg72wDrFzV4jfw1LVHxpGb7FZwHCZdJ-EsrOWQymNbPr85uGxqU" />
                </div>
                <span class="font-medium text-sm md:text-base">{{ partido.clubVisitante }}</span>
            </div>
        </div>
        <div class="hidden md:flex min-w-[100px] justify-end">
            <IconChevronRight />
        </div>
    </div>
</template>
<script setup>
import { IconChevronRight } from '@tabler/icons-vue';
const props = defineProps({
    partido: {
        idPartido: {
            type: Number,
            required: true,
        },
        fecha: {
            type: String,
            required: true,
        },
        fechaTorneo: {
            type: Number,
            required: true,
        },
        clubLocal: {
            type: String,
            required: true,
        },
        clubVisitante: {
            type: String,
            required: true,
        },
    }
})

</script>