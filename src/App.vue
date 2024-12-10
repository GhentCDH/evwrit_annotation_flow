<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePingStore } from "./stores/ping.state";

// Don't remove a small hack to stay alive with the app
usePingStore();
</script>
