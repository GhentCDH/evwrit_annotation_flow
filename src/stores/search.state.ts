import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { DEFAULT_LIMIT } from "../data-access/annotationRepository";
import type { SearchDto } from "@/types/Search";

export const useSearchStore = defineStore("search", {
  state: () => {
    return { page: 1, pageSize: 25, filterValues: {} };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {},
});

export function useSearch_() {
  const router = useRouter();
  const route = useRoute();

  const filterValues = ref<SearchDto>({});

  const pageSize = computed({
    get() {
      const pageSize = route.query.pageSize ?? DEFAULT_LIMIT;
      return Number(pageSize);
    },
    set(pageSize) {
      router.replace({ query: { pageSize } });
    },
  });

  const page = computed({
    get() {
      let activePage = Number(route.query.page);
      if (isNaN(activePage)) activePage = 1;
      if (!route.query.page) router.replace({ query: { page: activePage } });
      return Number(activePage);
    },
    set(page) {
      router.replace({ query: { page } });
    },
  });

  const onSearch = (filter: SearchDto) => {
    page.value = 1;
    filterValues.value = filter;
  };

  const changePage = (p: number) => {
    page.value = p;
  };

  return {
    filterValues,
    pageSize,
    page,
    onSearch,
    changePage,
  };
}
