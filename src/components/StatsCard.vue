<template>
  <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-32">
    <div class="flex justify-between items-start">
      <p class="text-slate-500 text-sm font-medium">{{ titulo }}</p>
      <span class="material-symbols-outlined text-slate-400">groups</span>
    </div>
    <p :class="fontSize" class=" font-bold text-slate-900">{{ valor }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  valor: {
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    default: "text-base",
  },
});
</script>
