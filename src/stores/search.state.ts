import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
const toNumber = (value: string) => {
  const newValue = Number(value);
  return isNaN(newValue) ? null : newValue;
};
const defaultPageSize = 25;
export const useSearchStore = defineStore("searchStore", () => {
  const route = useRoute();
  const router = useRouter();
  const pageSize = ref(toNumber(route.query.pageSize));
  const page = ref(toNumber(route.query.page));
  const filterValues = ref({});

  const changePage = (p: number = 1) => {
    const value = toNumber(p) ?? 1;
    page.value = value < 1 ? 1 : value;

    return router.replace({ query: { ...route.query, page: page.value } });
  };

  const changePageSize = (p: number = 25) => {
    pageSize.value = toNumber(p) ?? 25;
    return router.replace({ query: { ...route.query, pageSize: p } });
  };

  if (!page.value && !pageSize.value) {
    pageSize.value = defaultPageSize;
    page.value = 1;
    router.replace({ query: { ...route.query, pageSize: defaultPageSize, page: 1 } });
  } else if (!pageSize.value) {
    changePageSize();
  }

  if (!page.value) {
    changePage();
  }

  return { pageSize, page, filterValues, changePage };
});
