<template>
    <div class="flex items-center gap-2 bg-white border border-[#516dfb]/30 rounded-full pl-1.5 pr-3 py-1.5 shadow-sm">
        <div class="size-6 bg-center bg-no-repeat bg-cover rounded-full" data-alt="Escudo pequeño Madrid"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz6ZyYCexfGuy54CQZVHmJC9uFsy4-A4_oBnyKMB_Ilya-AJ4uT1w04BDw4EDFFJTfwAgvXxnpDlqnZnyuef4A0TsDFramdWDELjpr19iypIAHO0eLU6sAfGIjVWy6W6lUWQjamAiGjnKQE9U8VIlJq7r05rA93YFMQdfWlgbzF66v63syNfU1Hrt2-HfrEtkQXW1tl7P9oL-0b6J24twdFdfguO499oI9QiAtK3N9S7wdWpa_FY-35lzNrMGbXrAD5LMRHus-MuI");'>
        </div>
        <span class="text-sm font-medium text-gray-700">{{ club.nombre }}</span>
        <button @click="$emit('removeClub', club)" class="text-gray-400 hover:text-red-500 transition-colors">
            <span class="material-symbols-outlined !text-lg">cancel</span>
        </button>
    </div>

</template>
<script setup>
const props = defineProps({
    club: {
        type: Object,
        required: true
    }
})

</script>