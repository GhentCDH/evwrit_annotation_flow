<template>
  <div class="p-2 flex flex-col gap-2">
    TODO add search criteria
    <div>
      <button class="btn btn-sm"><magnifying-glass-icon class="h-6" /> Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
import type { RuleAnnotation } from "src/types/Annotation";

const emits = defineEmits("search");

const onSearch = () => {
  console.log("searching...");

  // TODO add filter values
  const filterValues = {};
  emits("search", filterValues);
};
</script>
