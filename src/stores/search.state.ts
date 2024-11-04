import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";

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
  const filterValues = ref<any>({});

  const onSearch = (filterValues: any) => {
    filterValues.value = filterValues;
    return router.replace({ query: { ...route.query, ...filterValues } });
  };

  const changePage = (p: number = 1) => {
    const value = toNumber(p) ?? 1;
    page.value = value < 1 ? 1 : value;

    return router.replace({ query: { ...route.query, page: page.value } });
  };

  if (!route.query.pageSize || !route.query.page) {
    router.replace({ query: { ...route.query, pageSize: pageSize.value, page: page.value } });
  }

  return { pageSize, page, filterValues, changePage, onSearch };
});
