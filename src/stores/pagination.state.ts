import { defineStore } from "pinia";
import { computedAsync } from "@vueuse/core";
import { computed, ref } from "vue";
import { useSearchStore } from "./search.state";
import { useAnnotationStore } from "./annotation.state";
import { AnnotationRepository } from "../data-access/annotationRepository";
import { calculateTotalPages } from "../utils/page.utils";

export const usePaginationStore = defineStore("paginationStore", () => {
  const searchStore = useSearchStore();
  const annotationStore = useAnnotationStore();

  const repository = new AnnotationRepository();

  const paginated = ref<number[]>([]);

  const updatePaginated = async () => {
    const { ascending, orderBy } = searchStore.sort;
    const values = await repository.paginate(
      searchStore.filterValues,
      searchStore.page,
      searchStore.pageSize,
      orderBy,
      ascending,
    );
    paginated.value = values;
    return values;
  };

  const firstId = computedAsync(async () => {
    const { ascending, orderBy } = searchStore.sort;
    const ids = await repository.paginate(searchStore.filterValues, 1, 1, orderBy, ascending);
    return ids[0];
  });

  const totalRecords = computedAsync(async () => {
    const { ascending, orderBy } = searchStore.sort;
    const lastRecord = await repository.listTexts(searchStore.filterValues, 1, 0, orderBy, ascending);
    return lastRecord.count;
  });

  const lastId = computedAsync(async () => {
    const { ascending, orderBy } = searchStore.sort;
    const ids = await repository.paginate(searchStore.filterValues, totalRecords.value!, 1, orderBy, ascending);
    return ids[0];
  });

  // Update the paginated list when the page changes
  computedAsync(() => {
    return updatePaginated();
  });

  const findIndex = computed(() => {
    return paginated.value.findIndex((i) => i === annotationStore.id);
  });

  const toFirst = async () => {
    await annotationStore.changeId(firstId.value!);
    await searchStore.changePage(1);
  };

  const toLast = async () => {
    const totalPages = calculateTotalPages(totalRecords.value, searchStore.pageSize);
    await annotationStore.changeId(lastId.value!);
    await searchStore.changePage(totalPages);
  };

  const previous = async () => {
    const index = findIndex.value;
    const maxIndex = paginated.value.length;
    let nextId = index < 0 ? undefined : paginated.value[index - 1];

    if (nextId) {
      await annotationStore.changeId(nextId);
    } else {
      await searchStore.changePage(searchStore.page - 1);
      await updatePaginated();
      nextId = paginated.value[maxIndex];

      if (nextId) await annotationStore.changeId(nextId);
    }
  };

  const next = async () => {
    const index = findIndex.value;
    let nextId = index < 0 ? undefined : paginated.value[index + 1];

    if (nextId) {
      await annotationStore.changeId(nextId);
    } else {
      await searchStore.changePage(searchStore.page + 1);
      await updatePaginated();
      nextId = paginated.value[0];

      if (nextId) await annotationStore.changeId(nextId);
    }
  };

  return { firstId, lastId, next, previous, toFirst, toLast };
});
