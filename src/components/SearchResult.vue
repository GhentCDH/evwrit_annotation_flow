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
      <tr v-for="row in values?.data" :key="row.id" class="hover hover:cursor-pointer" v-on:click="open(row)">
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
        :key="page.page"
        :class="[
          'join-item btn btn-xs btn-outline',
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
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { SearchAnnotation } from "@/types/Search";

interface SearchResultProps {
  values: any;
  pageSize: number;
  activePage: number;
}
const searchProps = defineProps<SearchResultProps>();

const pages = ref([]);

const pageObj = (idx: number, disabled = false) => {
  const page = idx;
  return { page, label: page, disabled };
};

const calculatePages = (value: SearchResultProps) => {
  const t = value?.values?.count / value.pageSize ?? 0;
  const totalPages = Math.ceil(t);
  console.group("calculatePages");

  const maxPages = 14;
  const totalInc = totalPages < maxPages ? totalPages : maxPages;
  const startIndex = totalPages < maxPages ? 1 : value.activePage;

  let filteredPages = Array.from({ length: totalInc }).map((_, idx) => pageObj(idx + startIndex));
  if (filteredPages[0]?.page !== 1) filteredPages = [pageObj(1), pageObj("...", true), ...filteredPages];
  console.log(filteredPages[filteredPages.length - 1], totalPages);
  if (filteredPages[filteredPages.length - 1]?.page < totalPages)
    filteredPages = [filteredPages, pageObj("...", true), pageObj(totalPages)];

  pages.value = filteredPages.flat();
  console.groupEnd();
};
onMounted(() => {
  calculatePages(searchProps);
});

watch(
  () => ({ value: searchProps.values, pageSize: searchProps.pageSize, activePage: searchProps.activePage }),
  (newVal, oldVal) => {
    calculatePages(newVal);
  },
);

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
