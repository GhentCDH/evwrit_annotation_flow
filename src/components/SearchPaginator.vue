<template>
  <div class="flex flex-col gap-2 align-items">
    <div class="flex gap-1 items-center">
      <button class="btn btn-ghost btn-icon btn-xs" @click="paginationStore.toFirst">
        <chevron-double-left-icon class="h-3" />
      </button>

      <button class="btn btn-ghost btn-icon btn-xs" @click="paginationStore.previous">
        <chevron-left-icon class="h-3" />
      </button>
      <div class="text-sm">
        {{ activeId }}
      </div>

      <button class="btn btn-ghost btn-icon btn-xs" @click="paginationStore.next">
        <chevron-right-icon class="h-3" />
      </button>

      <button class="btn btn-ghost btn-icon btn-xs" @click="paginationStore.toLast">
        <chevron-double-right-icon class="h-3" />
      </button>
    </div>
    <router-link class="link btn-ghost btn-icon" :to="{ name: 'search', query: route.query }">
      Terug naar zoeken
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/16/solid";

import { useRoute, useRouter } from "vue-router";
import { usePaginationStore } from "@/stores/pagination.state";
import { useSearchStore } from "@/stores/search.state";

interface SearchPaginatorProps {
  activeId: string;
}
const searchProps = defineProps<SearchPaginatorProps>();

// #region pagination
const paginationStore = usePaginationStore();
const route = useRoute();

// #endregion
</script>
