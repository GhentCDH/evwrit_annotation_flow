<template>
  <div class="navbar bg-base-100">
    <SearchPaginator :active-id="annotationStore.id" />

    <div class="flex-none">
      <TypeFilter
        v-model="selectedFilters"
        @update:model-value="changeSelectedFilters"
      />
    </div>
  </div>
  <div
    :class="[
      `flex p-1 gap-1 viewer`,
      { 'opacity-30': annotationStore.loading },
    ]"
  >
    <div
      :class="[
        `p-4 border flex flex-col`,
        { 'w-1/2': showMetadata, 'w-2/3': !showMetadata },
      ]"
    >
      <div class="flex flex-row gap-4 items-center">
        <label class="label cursor-pointer gap-2">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            :checked="showModified"
            @click="showRuleModifiedAnnotations"
          />
          <span class="label-text">
            Enkel Gewijzigde annotaties ({{
              annotationStore.stats.modified
            }})</span
          >
        </label>
        <label class="label cursor-pointer gap-2">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            :checked="showOnlyDuplicates"
            @click="showDuplicates"
          />
          <span class="label-text">
            Enkel Duplicaten ({{ annotationStore.stats.duplicates }})</span
          >
        </label>
        <label class="label cursor-pointer gap-2">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            v-model="showMetadata"
          />
          <span class="label-text">Toon metadata</span>
        </label>
      </div>
      <AnnotationTextCompare
        :annotation-view="annotationStore.annotationViewer.completeTextView"
      />
    </div>
    <div
      :class="[
        ` border p-4`,
        { 'w-1/3': !showMetadata, 'w-1/2': showMetadata },
      ]"
    >
      <div
        class="card border mb-2 p-2"
        v-for="annotationView in highlightAnnotations"
        :key="annotationView.id"
      >
        <SelectedAnnotation :view="annotationView" />
      </div>
      <div class="flex flex-row gap-2">
        <div>
          Verwerkte annotaties:
          {{ annotationStore.stats.totalProcessed }}/{{
            annotationStore.stats.total
          }}
        </div>
        <div
          v-if="annotationStore.flags.review_done"
          class="badge badge-success badge-outline"
        >
          Text verwerkt
        </div>
        <div
          v-if="annotationStore.flags.needs_attention"
          class="badge badge-error badge-outline"
        >
          Aandacht vereist
        </div>
      </div>
      <annotation-edit-list
        :views="annotationStore.singleViews"
        :highlightAnnotationIds="annotationStore.highlightAnnotationIds"
        :show-metadata="showMetadata"
        @confirm-annotation="confirmAnnotation"
        @delete-annotation="deleteAnnotation"
        @confirm-annotations="confirmAnnotations"
        @needs-attention="annotationStore.needsAttention"
        @review-done="annotationStore.reviewDone"
      />
    </div>
    <span
      v-if="annotationStore.loading"
      class="absolute left-1/2 top-1/2 loading loading-bars loading-lg"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AnnotationEditList from "../components/AnnotationEditList.vue";
import AnnotationTextCompare from "../components/AnnotationTextCompare.vue";
import TypeFilter from "../components/TypeFilter.vue";
import { type ConfirmAnnotationType } from "../stores/annotation.store";
import SearchPaginator from "../components/SearchPaginator.vue";
import SelectedAnnotation from "../components/selected-annotation.vue";
import { useAnnotationStoreViewer } from "../stores/annotation-viewer.store.ts";
import { useQueryParams } from "../stores/query-params.store.ts";
import type { AnnotationType } from "@/types/Annotation.ts";

const queryParams = useQueryParams();
const showModified = ref<boolean>(false);
const showOnlyDuplicates = ref<boolean>(false);
const selectedFilters = ref<AnnotationType[]>([]);
const showMetadata = ref<boolean>(queryParams.get("showMetadata"));
const annotationStore = useAnnotationStoreViewer();

watch(
  () => showMetadata.value,
  (newValue) => {
    queryParams.set("showMetadata", newValue);
  },
);
watch(
  () => showOnlyDuplicates.value,
  (newValue) => {
    queryParams.set("onlyDuplicates", newValue);
  },
);
watch(
  () => showModified.value,
  (newValue) => {
    queryParams.set("onlyModified", newValue);
  },
);

const highlightAnnotations = computed(() => {
  const ids = annotationStore.highlightAnnotationIds;
  if (ids.length === 0) return null;
  const notModifiedAnnotations = ids.filter(
    (id) => !annotationStore.modifiedIds.some((aId) => aId === id),
  );

  return notModifiedAnnotations.map((id) =>
    annotationStore.annotationViewer.getView(id),
  );
});

const showRuleModifiedAnnotations = () => {
  annotationStore.resetHighlightAnnotationIds();
  showModified.value = !showModified.value;
  annotationStore.setFilters({ showModified: showModified.value });
};
if (queryParams.get("onlyModified")) {
  showRuleModifiedAnnotations();
}

const changeSelectedFilters = (newVal: AnnotationType[]) => {
  annotationStore.setFilters({ selectedFilters: newVal });
};

const showDuplicates = () => {
  annotationStore.resetHighlightAnnotationIds();
  showOnlyDuplicates.value = !showOnlyDuplicates.value;
  annotationStore.setFilters({ showOnlyDuplicates: showOnlyDuplicates.value });
};
if (queryParams.get("onlyDuplicates")) {
  showDuplicates();
}

const confirmAnnotation = (id: string, confirm: ConfirmAnnotationType) => {
  annotationStore.confirmAnnotation(id, confirm);
};

const deleteAnnotation = (id: string) => {
  annotationStore.deleteAnnotation(id);
};

const confirmAnnotations = (
  annotations: Map<string, ConfirmAnnotationType>,
) => {
  annotationStore.confirmAnnotations(annotations);
};
</script>
