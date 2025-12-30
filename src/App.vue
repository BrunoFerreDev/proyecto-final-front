<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <Header />
  <main class="w-full overflow-y-auto bg-[#f8f8f5] min-h-[90dvh]">
    <RouterView />
  </main>
</template>
