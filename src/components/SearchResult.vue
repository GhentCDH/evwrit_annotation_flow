<template>
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Id</th>
        <th>tm_id</th>
        <th>Title</th>
        <th>Year begin</th>
        <th>Year end</th>
      </tr>
    </thead>

    <tbody>
      <!-- row 1 -->
      <tr v-for="row in data" :key="row.id" class="hover hover:cursor-pointer" v-on:click="open(row)">
        <th>{{ row.id }}</th>
        <th>{{ row.tm_id }}</th>
        <td>{{ row.title }}</td>
        <td>{{ row.year_begin }}</td>
        <td>{{ row.year_end }}</td>
      </tr>
    </tbody>
  </table>

  <div class="flex justify-around py-2">
    <div class="join">
      <button
        v-for="page in pages"
        :key="page.key"
        :class="[
          'join-item btn btn-xs btn-outline w-8',
          { 'btn-active': page.page === activePage, 'btn-disabled': page.disabled },
        ]"
        @click="changePage(page.page)"
      >
        {{ page.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { calculateTotalPages } from "../utils/page.utils";
import type { SearchAnnotation } from "@/types/Search";

interface SearchResultProps {
  count: number;
  data: SearchAnnotation[];
  pageSize: number;
  activePage: number;
}

const searchProps = defineProps<SearchResultProps>();

type PageObj = { page: number; key: number; label: string | number; disabled: boolean };

const pages = ref<PageObj[]>([]);

const pageObj = (idx: number, disabled = false): PageObj => {
  const page = idx;
  return { page, label: page, disabled, key: idx };
};

const calculatePages = (value: SearchResultProps) => {
  const totalPages = calculateTotalPages(value.count, value.pageSize);

  if (totalPages < 1) return [];

  const maxPages = 14;
  const totalInc = totalPages < maxPages ? totalPages : maxPages;
  let startIndex = 1;
  if (totalPages > maxPages) {
    startIndex = value.activePage - maxPages / 2;

    if (startIndex < 1) startIndex = 1;
    else if (startIndex + maxPages > totalPages) {
      startIndex = totalPages - maxPages + 1;
    }
  }

  const createDummy = (index: number): PageObj => {
    return { page: 0, label: "...", disabled: true, key: index };
  };

  const filteredPages = Array.from({ length: totalInc }).map((_, idx) => pageObj(idx + startIndex));
  if (filteredPages[0]?.page > 2) filteredPages.unshift(createDummy(-1));
  if (filteredPages[0]?.page !== 1) filteredPages.unshift(pageObj(1));

  if (filteredPages[filteredPages.length - 1]?.page < totalPages - 1) filteredPages.push(createDummy(-2));
  if (filteredPages[filteredPages.length - 1]?.page !== totalPages) filteredPages.push(pageObj(totalPages));

  pages.value = filteredPages.flat();
};

onMounted(() => {
  calculatePages(searchProps);
});

onBeforeUpdate(() => {
  calculatePages(searchProps);
});

const emits = defineEmits(["changePage"]);

const changePage = (page: number) => {
  emits("changePage", page);
};

const router = useRouter();
const route = useRoute();

const open = (row: SearchAnnotation) => {
  router.push({ name: "annotation", params: { id: row.id }, query: route.query });
};
</script>
