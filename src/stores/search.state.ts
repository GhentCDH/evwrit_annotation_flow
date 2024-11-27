import { computed, type ComputedRef, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { computedAsync } from "@vueuse/core";
import { cloneDeep } from "lodash-es";
import { AnnotationRepository } from "../data-access/annotationRepository";
import type { Search, SearchFilter } from "@/types/Search";

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

  const sort = ref<{ orderBy: string; ascending: 1 | 0 }>({
    orderBy: (route.query.orderBy as string) ?? "title",
    ascending: route.query.ascending === "0" ? 0 : 1,
  });

  const inititalValues: Record<string, any[]> = {
    project: [3],
  };

  Object.entries(route.query).forEach(([key, value]) => {
    if (["pageSize", "page"].includes(key)) return;

    if (Array.isArray(value)) inititalValues[key] = value.map((v) => v);
    else inititalValues[key] = [value];
  });

  const filterValues = ref<any>(cloneDeep(inititalValues));
  const annotationRepository = new AnnotationRepository();

  const filters = computedAsync(async () => {
    return annotationRepository.filters();
  });

  const searchResult = computedAsync(async () => {
    const filter = filterValues.value;
    const p = page.value;
    const { ascending, orderBy } = sort.value;

    if (!p) return { count: 0, results: [] };
    return annotationRepository.listTexts(filter, p, pageSize.value, orderBy, ascending);
  }) as ComputedRef<Search>;

  const data = computed(() => searchResult.value?.data ?? []);
  const count = computed(() => searchResult.value?.count ?? 0);
  const searchFilters = computed(() => searchResult.value?.filters ?? ([] as SearchFilter[]));

  const onSearch = (filter: any) => {
    filterValues.value = cloneDeep(filter);
    return router.replace({ query: { ...route.query, ...filter } });
  };

  const changePage = (p: number = 1) => {
    const value = toNumber(p) ?? 1;
    page.value = value < 1 ? 1 : value;

    return router.replace({ query: { ...route.query, page: page.value } });
  };

  const changeOrder = (orderBy: string, ascending: 1 | 0) => {
    sort.value = { orderBy, ascending };
    return router.replace({ query: { ...route.query, orderBy, ascending } });
  };

  if (!route.query.pageSize || !route.query.page || !route.query.orderBy || !route.query.ascending) {
    router.replace({
      query: {
        ...route.query,
        pageSize: pageSize.value,
        page: page.value,
        ...sort.value,
      },
    });
  }

  return {
    sort,
    pageSize,
    page,
    filters,
    filterValues,
    data,
    searchFilters,
    count,
    searchResult,
    changePage,
    onSearch,
    changeOrder,
  };
});
