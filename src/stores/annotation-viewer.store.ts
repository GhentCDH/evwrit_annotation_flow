import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { effect, ref, watch } from "vue";
import type { AnnotationId } from "@ghentcdh/annotated-text";
import {
  AnnotationStore,
  type ConfirmAnnotationType,
} from "./annotation.store.ts";
import { AnnotationViewer } from "./annotation-viewer";
import { usePaginationStore } from "./pagination.state.ts";
import { useSearchStore } from "./search.state.ts";
import type { AnnotationType, ModifiedAnnotation } from "@/types/Annotation.ts";

export const useAnnotationStoreViewer = defineStore(
  "useAnnotationStoreViewer" + Date.now(),
  () => {
    const loading = ref(false);
    const route = useRoute();
    const router = useRouter();
    const id = ref(Number(route.params.id));
    const highlightAnnotationIds = ref<AnnotationId[]>([]);

    const changeId = (newId: number) => {
      id.value = newId;
      return router.push({
        name: "annotation",
        params: { id: newId },
        query: route.query,
      });
    };

    watch(
      () => route.params.id,
      (newId, oldId) => {
        const newIdInt = Number(newId);
        if (newIdInt && id.value !== newIdInt) changeId(newIdInt);
      },
    );
    const scrollTo = (annotationId: AnnotationId) => {
      const elementSelector = `[data-highlight="${annotationId}"]`;
      const element = document.querySelector(elementSelector);
      element?.scrollIntoView({ behavior: "smooth" });
      highlightAnnotationIds.value = [annotationId];
    };

    const debugRUle = async (annotationId: AnnotationId) => {
      console.group("Debugging applied rules: ");
      await annotationStore.debugRule(annotationId);
      console.groupEnd();
    };

    const annotationViewer = new AnnotationViewer(
      (annotationId) => scrollTo(annotationId),
      (annotationId) => debugRUle(annotationId),
      route.query.debug === "true",
    );
    let annotationStore = new AnnotationStore();

    const stats = ref({
      totalProcessed: 0,
      total: 0,
      modified: 0,
      duplicates: 0,
    });

    const flags = ref({
      needs_attention: false,
      review_done: false,
    });

    effect(async () => {
      annotationStore.reset();
      annotationViewer.reset();
      if (!id.value) return null;

      loading.value = true;
      try {
        annotationStore = new AnnotationStore();
        const response = await annotationStore.getAnnotation(id.value);

        annotationViewer.updateText(response.text);
        const values = annotationStore.annotationValues?.value || [];

        const total = values.length;
        const totalModified = values.filter((a) => a.isModified).length;
        const totalDuplicates = values.filter((a) => a.duplicates).length;
        const totalProcessed = total - totalModified;

        updateView(response.text, values);
        highlightAnnotationIds.value = [];

        if (response.flags) {
          flags.value = response.flags;
        }

        stats.value = {
          total: values.length,
          totalProcessed,
          modified: totalModified,
          duplicates: totalDuplicates,
        };

        return { annotationStore, ...response };
      } catch (error) {
        console.error(error);
        console.error("Fout bij het laden van de annotaties");
        alert("Fout bij het laden van de annotatie");
      } finally {
        console.log("Total processed annotations", stats.value.totalProcessed);
        console.log("Total modified annotations", stats.value.modified);
        console.log("Total original annotations", stats.value.total);

        loading.value = false;
      }

      return null;
    });
    //
    const updateView = (text: string, annotations: ModifiedAnnotation[]) => {
      annotationViewer
        .updateText(text)
        .setAnnotations(annotations)
        .setFilters({});
    };

    const reviewDone = async () => {
      if (!annotationStore) return;
      await annotationStore?.reviewDone();
      void usePaginationStore().next();
      useSearchStore().refresh();
    };

    const needsAttention = async () => {
      if (!annotationStore) return;
      await annotationStore?.needsAttention();
      void usePaginationStore().next();
      useSearchStore().refresh();
    };

    return {
      id,
      annotationViewer,
      needsAttention,
      reviewDone,
      changeId,
      setFilters: (filters: {
        selectedFilters?: AnnotationType[];
        showOnlyDuplicates?: boolean;
        showModified?: boolean;
      }) => annotationViewer.setFilters(filters),
      loading,
      stats,
      flags,
      singleViews: annotationViewer.modifiedViews,
      modifiedIds: annotationViewer.displayModified,
      highlightAnnotationIds,
      resetHighlightAnnotationIds: () => (highlightAnnotationIds.value = []),
      confirmAnnotation: (id: string, confirm: ConfirmAnnotationType) =>
        annotationStore.confirmAnnotation(id, confirm).then(() => {
          annotationViewer.updateAnnotations();
        }),
      confirmAnnotations: (annotations: Map<string, ConfirmAnnotationType>) =>
        annotationStore.confirmAnnotations(annotations).then(() => {
          annotationViewer.updateAnnotations();
        }),
      deleteAnnotation: (id: string) =>
        annotationStore.deleteAnnotation(id).then(() => {
          annotationViewer.removeAnnotation(id);
        }),
    };
  },
);
