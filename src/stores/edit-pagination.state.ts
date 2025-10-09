import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAnnotationStore } from "./annotation.state";

export const useEditPaginationStore = defineStore("editPaginationStore", () => {
  const annotationStore = useAnnotationStore();

  const totalItems = computed(() => annotationStore.modifiedAnnotations.length);

  const activePage = ref(1);
  const itemsPerPage = ref(50);
  const totalPages = computed(() => {
    return Math.ceil(totalItems.value / itemsPerPage.value);
  });

  const getValidPage = (page: number) => {
    if (page <= 1) return 1;
    if (page > totalPages.value) return totalPages.value;
    return page;
  };

  const paginatedItems = computed(() => {
    const start = (getValidPage(activePage.value) - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return annotationStore.modifiedAnnotations.slice(start, end);
  });

  const setPage = (page: number) => {
    activePage.value = getValidPage(page);
  };

  return {
    items: paginatedItems,
    next: () => setPage(activePage.value + 1),
    previous: () => setPage(activePage.value - 1),
    totalPages,
    activePage,
    toFirst: () => setPage(1),
    toLast: () => setPage(totalPages.value),
  };
});
