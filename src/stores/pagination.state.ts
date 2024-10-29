import { defineStore } from "pinia";
import { useSearchStore } from "./search.state";
import { useAnnotationStore } from "./annotation.state";
import { AnnotationRepository } from "../data-access/annotationRepository";
import { calculateTotalPages } from "@/utils/page.utils";

export const usePaginationStore = defineStore("paginationStore", () => {
  const searchStore = useSearchStore();
  const annotationStore = useAnnotationStore();
  console.log(searchStore);

  const repository = new AnnotationRepository();

  const toFirst = async () => {
    const ids = await repository.paginate(searchStore.filterValues, 1, 1);

    annotationStore.changeId(ids[0]);
    searchStore.changePage(1);
  };

  const toLast = async () => {
    const lastRecord = await repository.listTexts(searchStore.filterValues, 1, 0);
    const ids = await repository.paginate(searchStore.filterValues, lastRecord.count, 1);
    const totalPages = calculateTotalPages(lastRecord.count, searchStore.pageSize);

    annotationStore.changeId(ids[0]);
    searchStore.changePage(totalPages);
  };

  const previous = () => {};
  const next = () => {};

  return { next, previous, toFirst, toLast };
});
