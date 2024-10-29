<template>
  Paginator

  <router-link class="btn btn-icon" :to="{ name: 'search', query: router.query }">
    <magnifying-glass-icon class="h-6" />
  </router-link>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
import type { RuleAnnotation } from "src/types/Annotation";
import { useRouter } from "vue-router";

const emits = defineEmits("search");
const router = useRouter();
const onSearch = () => {
  console.log("searching...");

  // TODO add filter values
  const filterValues = {};
  emits("search", filterValues);
};
</script>
