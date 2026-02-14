<script setup>
import { useRouter } from "vue-router";
import Header from "./components/Header.vue";
const route = useRouter();
</script>

<template>
  <Header v-if="!$route.meta.hideHeader" />
  <main class="w-full overflow-y-auto">
    <RouterView />
  </main>
</template>
