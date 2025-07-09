<template>
  <div class="navbar bg-base-100">
    <SearchPaginator :active-id="annotationStore.id" />

    <div class="flex-none">
      <TypeFilter v-model="annotationStore.selectedFilters" />
    </div>
  </div>
  <div :class="[`flex p-1 gap-1 viewer`, { 'opacity-30': annotationStore.loading }]">
    <div :class="[`p-4 border flex flex-col`, { 'w-1/2': showMetadata, 'w-2/3': !showMetadata }]">
      <div class="flex flex-row gap-4 items-center">
        <label class="label cursor-pointer gap-2">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            :checked="showModified"
            @click="showRuleModifiedAnnotations"
          />
          <span class="label-text">
            Enkel Gewijzigde annotaties ({{ annotationStore.modifiedAnnotations.length }})</span
          >
        </label>
        <label class="label cursor-pointer gap-2">
          <input type="checkbox" class="toggle toggle-sm" :checked="showOnlyDuplicates" @click="showDuplicates" />
          <span class="label-text"> Enkel Duplicaten ({{ annotationStore.duplicates.length }})</span>
        </label>
        <label class="label cursor-pointer gap-2">
          <input type="checkbox" class="toggle toggle-sm" v-model="showMetadata" />
          <span class="label-text">Toon metadata</span>
        </label>
      </div>
      <AnnotationTextCompare
        :text="annotationStore.text"
        :originalAnnotations="annotationStore.originalAnnotations"
        :processedAnnotations="annotationStore.processedAnnotations"
        @modify-annotations="modifyAnnotation"
        @processes-annotation="processAnnotation"
        @show-annotation="showAnnotation"
      />
    </div>
    <div :class="[` border p-4`, { 'w-1/3': !showMetadata, 'w-1/2': showMetadata }]">
      <div class="card border mb-2 p-2" v-for="annotation in highlightAnnotations" :key="annotation.id">
        <SelectedAnnotation :annotation="annotation" :text="annotationStore.text" />
      </div>
      <div class="flex flex-row gap-2">
        <div>
          Verwerkte annotaties:
          {{ annotationStore.totalProcessedAnnotation }}/{{ annotationStore.totalAnnotations }}
        </div>
        <div v-if="annotationStore.flags.review_done" class="badge badge-success badge-outline">Text verwerkt</div>
        <div v-if="annotationStore.flags.needs_attention" class="badge badge-error badge-outline">Aandacht vereist</div>
      </div>
      <annotation-edit-list
        :modifiedAnnotations="annotationStore.modifiedAnnotations"
        :text="annotationStore.text"
        :highlightAnnotationIds="highlightAnnotationIds"
        :show-metadata="showMetadata"
        @confirm-annotation="confirmAnnotation"
        @delete-annotation="deleteAnnotation"
        @confirm-annotations="confirmAnnotations"
        @modify-annotations="modifyAnnotation"
        @processes-annotation="processAnnotation"
        @needs-attention="annotationStore.needsAttention"
        @review-done="annotationStore.reviewDone"
      />
    </div>
    <span v-if="annotationStore.loading" class="absolute left-1/2 top-1/2 loading loading-bars loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
import { computed, type Ref, ref } from "vue";
import AnnotationEditList from "../components/AnnotationEditList.vue";
import AnnotationTextCompare from "../components/AnnotationTextCompare.vue";
import TypeFilter from "../components/TypeFilter.vue";
import { type ConfirmAnnotationType, type UpdateAnnotation } from "../stores/annotation.store";
import { useAnnotationStore } from "../stores/annotation.state";
import SearchPaginator from "../components/SearchPaginator.vue";
import SelectedAnnotation from "../components/selected-annotation.vue";
import type { RuleAnnotation } from "@/types/Annotation";

const showModified = ref<boolean>(false);
const showOnlyDuplicates = ref<boolean>(false);
const showMetadata = ref<boolean>(false);
const highlightAnnotationIds: Ref<string[]> = ref([]);
const highlightAnnotations = computed(() => {
  const ids = highlightAnnotationIds.value;
  if (ids.length === 0) return null;
  const notModifiedAnnotations = ids.filter((id) => !annotationStore.modifiedAnnotations.some((a) => a.id === id));

  return notModifiedAnnotations
    .map((id) => annotationStore.originalAnnotations.find((annotation) => annotation.id === id) ?? null)
    .filter((annotation) => annotation !== null) as RuleAnnotation[]; // Filter out null values
});

const showRuleModifiedAnnotations = () => {
  highlightAnnotationIds.value = [];
  showModified.value = !showModified.value;
  annotationStore.changeShowModified(showModified.value);
};

const showDuplicates = () => {
  highlightAnnotationIds.value = [];
  showOnlyDuplicates.value = !showOnlyDuplicates.value;
  annotationStore.changeShowOnlyDuplicates(showOnlyDuplicates.value);
};

const annotationStore = useAnnotationStore();

const processAnnotation = (annotation: UpdateAnnotation) => {
  annotationStore.processAnnotation(annotation);
};

const modifyAnnotation = (annotation: UpdateAnnotation) => {
  annotationStore.modifyAnnotation(annotation);
};

const confirmAnnotation = (id: string, confirm: ConfirmAnnotationType) => {
  annotationStore.confirmAnnotation(id, confirm);
};

const deleteAnnotation = (id: string) => {
  annotationStore.deleteAnnotation(id);
};

const confirmAnnotations = (annotations: Map<string, ConfirmAnnotationType>) => {
  annotationStore.confirmAnnotations(annotations);
};

const showAnnotation = (annotation: RuleAnnotation) => {
  highlightAnnotationIds.value = [];
  if (!annotation) return;

  console.group("Debugging applied rules: ");
  console.log(annotation.id);

  annotationStore.debugRule(annotation);
  console.groupEnd();

  document.querySelector(`[data-annotation="${annotation.id}"]`)?.scrollIntoView();
  highlightAnnotationIds.value = [annotation.id];
};
</script>
