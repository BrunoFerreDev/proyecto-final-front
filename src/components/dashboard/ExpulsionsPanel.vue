<script setup>
import { IconCardsFilled } from "@tabler/icons-vue";

// Opcional: Recibir lista de expulsados via props en el futuro
const props = defineProps({
  expulsions: {
    type: Array,
    default: () => [
      {
        id: 1,
        player: "Carlos Ruiz",
        team: "Tigres (vs Leones FC)",
        reason: "Agresión a un contrario sin disputa del balón",
        type: "Roja Directa"
      }
    ]
  }
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-[#1c1c0d] text-xl font-bold leading-tight">
        Expulsiones Recientes
      </h2>
      <span class="text-[#d32f2f] text-xs font-bold bg-[#d32f2f]/10 px-2 py-1 rounded-full">Jornada 12</span>
    </div>
    
    <div class="flex flex-col gap-3 rounded-3xl bg-white p-4 border border-gray-50 shadow-sm min-h-75">
      
      <div v-for="item in expulsions" :key="item.id" class="flex items-start gap-4 p-3 bg-red-50 rounded-2xl border border-red-100">
        <div class="size-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 border border-red-200 text-red-600">
          <IconCardsFilled size="20"/>
        </div>
        <div class="flex flex-col flex-1">
          <div class="flex justify-between items-start">
            <p class="text-sm text-[#1c1c0d] font-bold">
              {{ item.player }}
            </p>
            <span class="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full whitespace-nowrap">
              {{ item.type }}
            </span>
          </div>
          <p class="text-xs text-black mb-1">
            {{ item.team }}
          </p>
          <p class="text-xs text-[#1c1c0d] italic">
            "{{ item.reason }}"
          </p>
        </div>
      </div>

      <button class="mt-auto w-full py-3 text-center text-sm font-bold text-black hover:text-[#1c1c0d] transition-colors border-t border-[#f4f4e6]">
        Ver acta completa
      </button>
    </div>
  </div>
</template>