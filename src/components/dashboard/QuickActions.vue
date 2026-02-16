<script setup>
import { useRouter } from "vue-router";
import { IconPlus, IconCalendar } from "@tabler/icons-vue";

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-[#1c1c0d] text-xl font-bold leading-tight">
      Acciones Rápidas
    </h2>
    <div class="grid grid-cols-2 gap-3">
      <button @click.prevent="navigateTo('/nuevo-club')"
        class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-50 hover:border-blue-500 transition-all group shadow-sm h-32">
        <div class="size-10 rounded-full bg-[#f4f4e6] flex items-center justify-center mb-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <IconPlus />
        </div>
        <span class="text-sm font-bold text-[#1c1c0d] text-center">Registrar club</span>
      </button>

      <button @click.prevent="navigateTo('/nueva-persona')"
        class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-50 hover:border-blue-500 transition-all group shadow-sm h-32">
        <div class="size-10 rounded-full bg-[#f4f4e6] flex items-center justify-center mb-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <IconCalendar />
        </div>
        <span class="text-sm font-bold text-[#1c1c0d] text-center">Alta Usuario</span>
      </button>

      <button @click.prevent="navigateTo('/nuevo-partido')"
        class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-50 hover:border-blue-500 transition-all group shadow-sm h-32">
        <div class="size-10 rounded-full bg-[#f4f4e6] flex items-center justify-center mb-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <IconCalendar />
        </div>
        <span class="text-sm font-bold text-[#1c1c0d] text-center">Programar Partido</span>
      </button>
    </div>
  </div>
</template>