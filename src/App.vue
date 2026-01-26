<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-1 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePingStore } from "./stores/ping.state";
import AppHeader from "./components/AppHeader.vue";

// Don't remove a small hack to stay alive with the app
usePingStore();
</script>
