import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { computedAsync } from "@vueuse/core";
import { AnnotationStore, type ConfirmAnnotationType, type UpdateAnnotation } from "./annotation.store";
import { usePaginationStore } from "./pagination.state";
import { useSearchStore } from "./search.state";
import { filterAnnotations } from "../utils/filter.utils";
import type { AnnotationType, RuleAnnotation } from "@/types/Annotation";

export const useAnnotationStore = defineStore("annotationStore", () => {
  const route = useRoute();
  const router = useRouter();
  const id = ref(Number(route.params.id));

  const fetchNewValue = computedAsync(async () => {
    console.log("id", id.value);
    const annotationStore = new AnnotationStore();
    if (!id.value) return null;

    try {
      const response = await annotationStore.getAnnotation(id.value);
      return { annotationStore, ...response };
    } catch (error) {
      console.error(error);
      console.error("Fout bij het laden van de annotaties");
      // alert("Fout bij het laden van de annotatie");
    } finally {
      console.log("Total processed annotations", processedAnnotations.value.length);
      console.log("Total modified annotations", modifiedAnnotations.value.length);
      console.log("Total original annotations", originalAnnotations.value.length);
    }

    return null;
  });

  const text = computed(() => fetchNewValue.value?.text || "");
  const annotationStore = computed(() => {
    return fetchNewValue.value?.annotationStore || null;
  });
  const flags = computed(() => {
    return (
      fetchNewValue.value?.flags || {
        needs_attention: false,
        review_done: false,
      }
    );
  });

  const showModified = ref(false);
  const showOnlyDuplicates = ref(false);
  const selectedFilters = ref([] as AnnotationType[]);

  const annotationValues = computed(() => annotationStore.value?.annotationValues?.value || []);

  const filteredAnnotations = computed(() =>
    filterAnnotations(selectedFilters.value, annotationValues.value, showModified.value, showOnlyDuplicates.value),
  );
  const totalAnnotations = computed(() => annotationValues.value.length);
  const originalAnnotations = computed(() => filteredAnnotations.value.map((annotation) => annotation.original));
  const processedAnnotations = computed(() => filteredAnnotations.value.map((annotation) => annotation.processed));
  const modifiedAnnotations = computed(() =>
    filteredAnnotations.value.filter((annotation) => !!annotation.modified || annotation.duplicates.length > 1),
  );

  const duplicates = computed(() => filteredAnnotations.value.filter((annotation) => annotation.duplicates.length > 1));

  const totalProcessedAnnotation = computed(
    () => annotationValues.value.filter((annotation) => annotation.hasOverride || !annotation.modified).length,
  );

  const loading = computed(() => {
    const value = fetchNewValue.value;
    return !value || value.id !== id.value;
  });

  const changeId = (newId: number) => {
    id.value = newId;
    return router.push({ name: "annotation", params: { id: newId }, query: route.query });
  };

  watch(
    () => route.params.id,
    (newId, oldId) => {
      const newIdInt = Number(newId);
      if (newIdInt && id.value !== newIdInt) changeId(newIdInt);
    },
  );

  const changeShowModified = (value: boolean) => (showModified.value = value);

  const changeShowOnlyDuplicates = (value: boolean) => (showOnlyDuplicates.value = value);

  const reviewDone = async () => {
    await annotationStore.value?.reviewDone();
    usePaginationStore().next();
    useSearchStore().refresh();
  };

  const needsAttention = async () => {
    await annotationStore.value?.needsAttention();
    usePaginationStore().next();
    useSearchStore().refresh();
  };

  const debugRule = (annotation: RuleAnnotation) => annotationStore.value?.debugRule(annotation);

  return {
    id,
    loading,
    changeId,
    fetchNewValue,
    text,
    originalAnnotations,
    processedAnnotations,
    modifiedAnnotations,
    selectedFilters,
    duplicates,
    totalAnnotations,
    flags,
    totalProcessedAnnotation,
    debugRule,
    changeShowModified,
    changeShowOnlyDuplicates,
    processAnnotation: (annotation: UpdateAnnotation) => annotationStore.value?.processAnnotation(annotation),
    modifyAnnotation: (annotation: UpdateAnnotation) => annotationStore.value?.modifyAnnotation(annotation),
    confirmAnnotation: (id: string, confirm: ConfirmAnnotationType) =>
      annotationStore.value?.confirmAnnotation(id, confirm),
    confirmAnnotations: (annotations: Map<string, ConfirmAnnotationType>) =>
      annotationStore.value?.confirmAnnotations(annotations),
    deleteAnnotation: (id: string) => annotationStore.value?.deleteAnnotation(id),
    needsAttention: needsAttention,
    reviewDone: reviewDone,
  };
});
