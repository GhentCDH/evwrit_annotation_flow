import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAnnotationStore } from "./annotation.state";

export const useEditPaginationStore = defineStore("editPaginationStore", () => {
  const annotationStore = useAnnotationStore();

  const totalItems = computed(() => annotationStore.modifiedAnnotations.length);

  const activePage = ref(1);
  const itemsPerPage = ref(10);
  const totalPages = computed(() => {
    return Math.ceil(totalItems.value / itemsPerPage.value);
  });

  const paginatedItems = computed(() => {
    const start = (activePage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return annotationStore.modifiedAnnotations.slice(start, end);
  });

  const setPage = (page: number) => {
    if (page < 1) activePage.value = 1;
    else if (page > totalPages.value) activePage.value = totalPages.value;
    else activePage.value = page;
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
