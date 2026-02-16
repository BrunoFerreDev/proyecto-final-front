<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  value: [Number, String],
  trend: String,
  iconComponent: Object, // Pasamos el componente del ícono como prop
});
</script>

<template>
  <div class="flex flex-col gap-2 rounded-2xl p-6 border border-gray-50 bg-white shadow-sm hover:shadow-md transition-all">
    <div class="flex justify-between items-start">
      <p class="text-[#1c1c0d] text-base font-medium leading-normal">
        {{ title }}
      </p>
      <component :is="iconComponent" class="text-gray-600" />
    </div>
    <div class="flex items-end gap-2 mt-2">
      <p class="text-[#1c1c0d] tracking-tight text-3xl font-bold leading-tight">
        {{ value }}
      </p>
      <p v-if="trend" class="text-[#078816] text-sm font-bold mb-1 bg-[#078816]/10 px-2 py-0.5 rounded-full">
        {{ trend }}
      </p>
    </div>
  </div>
</template>