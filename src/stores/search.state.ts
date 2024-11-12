import { computed, type ComputedRef, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { computedAsync } from "@vueuse/core";
import { cloneDeep } from "lodash-es";
import { AnnotationRepository } from "../data-access/annotationRepository";
import type { Search, SearchAggregations } from "@/types/Search";

const toNumber = (value: any) => {
  const newValue = Number(value);
  return isNaN(newValue) ? null : newValue;
};

const defaultPageSize = 25;
export const useSearchStore = defineStore("searchStore", () => {
  const route = useRoute();
  const router = useRouter();
  const pageSize = ref(toNumber(route.query.pageSize) ?? defaultPageSize);
  const page = ref(toNumber(route.query.page) ?? 1);
  const inititalValues: Record<string, number[]> = {};

  Object.entries(route.query).forEach(([key, value]) => {
    if (["pageSize", "page"].includes(key)) return;

    if (Array.isArray(value)) inititalValues[key] = value.map((v) => Number(v));
    else inititalValues[key] = [Number(value)];
  });

  const filterValues = ref<any>(cloneDeep(inititalValues));
  const annotationRepository = new AnnotationRepository();

  const searchResult = computedAsync(async () => {
    const filter = filterValues.value;
    const p = page.value;

    if (!p) return { count: 0, results: [] };
    return annotationRepository.listTexts(filter, p, pageSize.value);
  }) as ComputedRef<Search>;

  const data = computed(() => searchResult.value?.data ?? []);
  const count = computed(() => searchResult.value?.count ?? 0);
  const aggregations = computed(() => searchResult.value?.aggregation ?? ({} as SearchAggregations));

  const onSearch = (filter: any) => {
    filterValues.value = cloneDeep(filter);
    return router.replace({ query: { ...route.query, ...filter } });
  };

  const changePage = (p: number = 1) => {
    const value = toNumber(p) ?? 1;
    page.value = value < 1 ? 1 : value;

    return router.replace({ query: { ...route.query, page: page.value } });
  };

  if (!route.query.pageSize || !route.query.page) {
    router.replace({ query: { ...route.query, pageSize: pageSize.value, page: page.value } });
  }

  return { pageSize, page, filterValues, data, count, searchResult, aggregations, changePage, onSearch };
});
