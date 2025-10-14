<template>
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id" v-on:click="onSort(column)" class="cursor-pointer">
          <span class="flex justify-between">
            <span class="flex-grow">{{ column.label }}</span>

            <button class="">
              <svg
                v-if="sort.orderBy !== column.id"
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>

              <svg
                v-else-if="sort.ascending == 0"
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

              <svg
                v-else-if="sort.ascending === 1"
                class="h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <!-- row 1 -->
      <tr v-for="row in data" :key="row.id" class="hover hover:cursor-pointer" v-on:click="open(row)">
        <td v-for="column in columns" :key="column.id" :class="{ 'text-center': column.type === 'boolean' }">
          <span v-if="column.type === 'boolean'">
            <svg
              v-if="row[column.id]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="w-4 m-auto"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </span>
          <span v-else>
            {{ row[column.id] }}
          </span>
        </td>
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
  sort: { orderBy: string; ascending: 1 | 0 };
}

const columns: Array<{ label: string; id: keyof SearchAnnotation; type?: "boolean" }> = [
  { label: "Id", id: "id" },
  { label: "tm_id", id: "tm_id" },
  {
    label: "Title",
    id: "title",
  },
  { label: "Year begin", id: "year_begin" },
  { label: "Year end", id: "year_end" },
  { label: "Vereist aaandacht", id: "flag_needs_attention", type: "boolean" },
  { label: "Verwerkt", id: "flag_review_done", type: "boolean" },
];

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
  const firstPage = filteredPages[0]?.page ?? 1;
  if (firstPage > 2) filteredPages.unshift(createDummy(-1));
  if (firstPage !== 1) filteredPages.unshift(pageObj(1));

  const lastPage = filteredPages[filteredPages.length - 1]?.page ?? totalPages;
  if (lastPage < totalPages - 1) filteredPages.push(createDummy(-2));
  if (lastPage !== totalPages) filteredPages.push(pageObj(totalPages));

  pages.value = filteredPages.flat();
};

onMounted(() => {
  calculatePages(searchProps);
});

onBeforeUpdate(() => {
  calculatePages(searchProps);
});

const emits = defineEmits(["changePage", "changeOrder"]);

const changePage = (page: number) => {
  emits("changePage", page);
};

const router = useRouter();
const route = useRoute();

const open = (row: SearchAnnotation) => {
  router.push({ name: "annotation", params: { id: row.id }, query: route.query });
};

const onSort = (column: { id: string }) => {
  let ascending = 1;
  if (searchProps.sort.orderBy === column.id) {
    ascending = searchProps.sort.ascending === 0 ? 1 : 0;
  }

  emits("changeOrder", column.id, ascending);
};
</script>
