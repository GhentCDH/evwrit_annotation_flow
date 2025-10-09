<template>
  <div v-if="paginationStore.totalPages > 1" class="flex flex-col gap-2 align-items">
    <div class="flex gap-1 items-center">
      <button
        :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': isFirstPage }]"
        @click="paginationStore.toFirst"
      >
        <chevron-double-left-icon class="h-3" />
      </button>

      <button
        :class="[`btn btn-ghost btn-icon btn-xs `, { 'btn-disabled': isFirstPage }]"
        @click="paginationStore.previous"
      >
        <chevron-left-icon class="h-3" />
      </button>
      <div class="flex-grow text-center">Page {{ paginationStore.activePage }} of {{ paginationStore.totalPages }}</div>
      <button :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': isLastPage }]" @click="paginationStore.next">
        <chevron-right-icon class="h-3" />
      </button>

      <button
        :class="[`btn btn-ghost btn-icon btn-xs`, { 'btn-disabled': isLastPage }]"
        @click="paginationStore.toLast"
      >
        <chevron-double-right-icon class="h-3" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/16/solid";
import { computed } from "vue";
import { useEditPaginationStore } from "../stores/edit-pagination.state";

// #region pagination
const paginationStore = useEditPaginationStore();

const isLastPage = computed(() => {
  return paginationStore.activePage === paginationStore.totalPages;
});

const isFirstPage = computed(() => {
  return paginationStore.activePage === 1;
});

// #endregion
</script>
