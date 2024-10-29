import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
const toNumber = (value: string) => {
  const newValue = Number(value);
  return isNaN(newValue) ? null : newValue;
};

export const useSearchStore = defineStore("searchStore", () => {
  const route = useRoute();
  const router = useRouter();
  const pageSize = ref(toNumber(route.query.pageSize) ?? 25);
  const page = ref(toNumber(route.query.page) ?? 1);
  const filterValues = ref({});

  const changePage = (p: number) => {
    router.replace({ query: { page: p } });
    page.value = p;
  };

  return { pageSize, page, filterValues, changePage };
});
