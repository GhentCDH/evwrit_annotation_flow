<template>
  <div class="navbar bg-base-100">
    <SearchPaginator :active-id="annotationStore_.id" />

    <div class="flex-none">
      <TypeFilter v-model="selectedFilters" />
    </div>
  </div>
  <div :class="loadingClass()">
    <div class="w-2/3 p-4 border flex flex-col">
      <div class="flex flex-row gap-4">
        <label class="label cursor-pointer gap-2">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            :checked="showModified"
            @click="showRuleModifiedAnnotations"
          />
          <span class="label-text"> Enkel Gewijzigde annotaties</span>
        </label>
        <label class="label cursor-pointer gap-2">
          <input type="checkbox" class="toggle toggle-sm" :checked="showOnlyDuplicates" @click="showDuplicates" />
          <span class="label-text"> Enkel Duplicaten</span>
        </label>
      </div>
      <AnnotationTextCompare
        :originalAnnotations="originalAnnotations"
        :processedAnnotations="processedAnnotations"
        :text-lines="textLines"
        :snapper="snapper"
        @modify-annotations="modifyAnnotation"
        @processes-annotation="processAnnotation"
        @show-annotation="showAnnotation"
      />
    </div>
    <div class="w-1/3 border p-4">
      <annotation-edit-list
        :modifiedAnnotations="modifiedAnnotations"
        :text-lines="textLines"
        :highlightAnnotationIds="highlightAnnotationIds"
        @confirm-annotation="confirmAnnotation"
        @delete-annotation="deleteAnnotation"
        @confirm-annotations="confirmAnnotations"
      />
    </div>
    <span v-if="loading" class="absolute left-1/2 top-1/2 loading loading-bars loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref, watch } from "vue";
import { WordSnapper } from "../lib/snapper/WordSnapper";

import { textToLines } from "../text_utilities";
import AnnotationEditList from "../components/AnnotationEditList.vue";
import AnnotationTextCompare from "../components/AnnotationTextCompare.vue";
import TypeFilter from "../components/TypeFilter.vue";
import { AnnotationStore, type ConfirmAnnotationType, type UpdateAnnotation } from "../stores/annotation.store";
import { useAnnotationStore } from "../stores/annotation.state";
import SearchPaginator from "../components/SearchPaginator.vue";
import type { RuleAnnotation } from "@/types/Annotation";

let snapper: WordSnapper;
const annotationStore = new AnnotationStore();
const loading = ref(true);
const text = ref<string>("");

const { originalAnnotations, processedAnnotations, modifiedAnnotations, selectedFilters } = annotationStore;

const showModified = ref<boolean>(false);
const showOnlyDuplicates = ref<boolean>(false);
const highlightAnnotationIds: Ref<string[]> = ref([]);

const showRuleModifiedAnnotations = () => {
  showModified.value = !showModified.value;
  annotationStore.changeShowModified(showModified.value);
};
const showDuplicates = () => {
  showOnlyDuplicates.value = !showOnlyDuplicates.value;
  annotationStore.changeShowOnlyDuplicates(showOnlyDuplicates.value);
};

const textLines = computed(() => textToLines(text.value));

const annotationStore_ = useAnnotationStore();

const handleFetchedData = async (id: string) => {
  loading.value = true;
  text.value = "";
  try {
    const value = await annotationStore.getAnnotation(id);
    text.value = value.text;
    snapper = new WordSnapper(text.value);
  } catch (error) {
    console.error(error);
    console.error("Fout bij het laden van de annotaties");
    // alert("Fout bij het laden van de annotatie");
  } finally {
    loading.value = false;
  }
};

watch(() => {
  console.log("id changed", annotationStore_.id);
  const newId = annotationStore_.id;
  if (newId !== null) {
    handleFetchedData(newId);
  }
});

const loadingClass = () => {
  return [`flex p-1 gap-1 viewer`, loading?.value ? "opacity-30" : ""];
};

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

const confirmAnnotations = (annotation: Map<string, ConfirmAnnotationType>) => {
  annotationStore.confirmAnnotations(annotation);
};

const showAnnotation = (annotation: RuleAnnotation) => {
  highlightAnnotationIds.value = [];
  // document.get.target.scrollIntoView();
  if (!annotation) return;

  document.querySelector(`[data-annotation="${annotation.id}"]`)?.scrollIntoView();
  highlightAnnotationIds.value = [annotation.id];
};
</script>
