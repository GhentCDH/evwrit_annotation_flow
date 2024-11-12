<template>
  <div class="m-auto max-w-2xl">
    <SearchFilter :aggregations="search.aggregations" @search="search.onSearch" />
    <hr />
    <SearchResult
      :data="search.data"
      :count="search.count"
      :activePage="search.page"
      :pageSize="search.pageSize"
      @change-page="search.changePage"
    />
  </div>
</template>

<script setup lang="ts">
import SearchResult from "../components/SearchResult.vue";
import SearchFilter from "../components/SearchFilter.vue";
import { useSearchStore } from "../stores/search.state";

const search = useSearchStore();
</script>
