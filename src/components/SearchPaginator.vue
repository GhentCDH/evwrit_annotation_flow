<template>
  <div class="flex flex-col gap-2 align-items">
    <div class="flex gap-1 items-center">
      <button
        :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': activeId === paginationStore.firstId }]"
        @click="paginationStore.toFirst"
      >
        <chevron-double-left-icon class="h-3" />
      </button>

      <button
        :class="[`btn btn-ghost btn-icon btn-xs `, { 'btn-disabled': activeId === paginationStore.firstId }]"
        @click="paginationStore.previous"
      >
        <chevron-left-icon class="h-3" />
      </button>
      <a
        :href="`${config.EVWRIT_BASE_URL}/text/${activeId}`"
        target="_blank"
        class="text-sm w-16 text-center hover:underline"
      >
        {{ activeId }}
      </a>

      <button
        :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': activeId === paginationStore.lastId }]"
        @click="paginationStore.next"
      >
        <chevron-right-icon class="h-3" />
      </button>

      <button
        :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': activeId === paginationStore.lastId }]"
        @click="paginationStore.toLast"
      >
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
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/16/solid";

import { useRoute } from "vue-router";
import { usePaginationStore } from "../stores/pagination.state";
import { getRuntimeConfig } from "../config/runtime-config";

interface SearchPaginatorProps {
  activeId: number;
}

defineProps<SearchPaginatorProps>();

// #region pagination
const paginationStore = usePaginationStore();
const route = useRoute();
const config = getRuntimeConfig();

// #endregion
</script>
