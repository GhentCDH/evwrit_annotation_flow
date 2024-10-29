<template>
  <div class="m-auto max-w-2xl">
    <SearchFilter @search="onSearch" />
    <hr />
    <SearchResult :values="values" :activePage="page" :pageSize="pageSize" @change-page="changePage" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { computedAsync } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";
import SearchResult from "../components/SearchResult.vue";
import SearchFilter from "../components/SearchFilter.vue";
import { AnnotationRepository, DEFAULT_LIMIT } from "../data-access/annotationRepository";
import type { SearchDto } from "@/types/Search";

const pageSize = computed({
  get() {
    const pageSize = route.query.pageSize ?? DEFAULT_LIMIT;

    return +pageSize;
  },
  set(page) {
    router.replace({ query: { pageSize } });
  },
});

const filterValues = ref<SearchDto>({});

const annotationRepository = new AnnotationRepository();
const router = useRouter();
const route = useRoute();

const page = computed({
  get() {
    const activePage = route.query.page ?? 1;

    return +activePage;
  },
  set(page) {
    router.replace({ query: { page } });
  },
});

const values = computedAsync(async () => {
  const filter = filterValues.value;
  const p = page.value;

  if (!p) return { count: 0, results: [] };

  const result = await annotationRepository.listTexts(filter, p, pageSize.value);

  return result;
});

const onSearch = (filter: SearchDto) => {
  page.value = 1;
  filterValues.value = filter;
};

const changePage = (p: number) => {
  page.value = p;
};
</script>
