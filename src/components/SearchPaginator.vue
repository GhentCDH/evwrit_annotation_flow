<template>
  <div class="flex flex-col gap-2 align-items">
    <div class="flex gap-1 items-center">
      <router-link class="btn btn-ghost btn-icon btn-xs" :to="{ params: { id: firstId } }">
        <chevron-double-left-icon class="h-3" />
      </router-link>

      <router-link class="btn btn-ghost btn-icon btn-xs" :to="{ params: { id: previousId } }">
        <chevron-left-icon class="h-3" />
      </router-link>
      <div class="text-sm">
        {{ activeId }}
      </div>
      <router-link class="btn btn-ghost btn-icon btn-xs" :to="{ params: { id: nextId } }">
        <chevron-right-icon class="h-3" />
      </router-link>

      <router-link class="btn btn-ghost btn-icon btn-xs" :to="{ params: { id: lastId } }">
        <chevron-double-right-icon class="h-3" />
      </router-link>
    </div>
    <router-link class="link btn-ghost btn-icon" :to="{ name: 'search', query: router.query }">
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

import { useRouter } from "vue-router";

interface SearchPaginatorProps {
  activeId: number;
  paginatedIds: number[];
  firstIds: number[];
  lastIds: number[];
}
const searchProps = defineProps<SearchPaginatorProps>();

const router = useRouter();

const firstId = searchProps.firstIds?.[0];
const nextId = searchProps.firstIds?.[0];
const previousId = searchProps.firstIds?.[0];
const lastId = searchProps.firstIds?.[0];
</script>
