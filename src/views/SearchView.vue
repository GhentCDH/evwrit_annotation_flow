<template>
  <div class="m-auto max-w-2xl">
    <SearchFilter @search="search.onSearch" />
    <hr />
    <SearchResult
      :values="values"
      :activePage="search.page"
      :pageSize="search.pageSize"
      @change-page="search.changePage"
    />
    {{ search.page }}{{ search.pageSize }}
  </div>
</template>

<script setup lang="ts">
import { computedAsync } from "@vueuse/core";
import SearchResult from "../components/SearchResult.vue";
import SearchFilter from "../components/SearchFilter.vue";
import { AnnotationRepository } from "../data-access/annotationRepository";
import { useSearchStore } from "@/stores/search.state";

const annotationRepository = new AnnotationRepository();

const search = useSearchStore();

const values = computedAsync(async () => {
  const filter = search.filterValues.value;
  const p = search.page.value;

  if (!p) return { count: 0, results: [] };

  const result = await annotationRepository.listTexts(filter, p, search.pageSize.value);

  return result;
});
</script>
