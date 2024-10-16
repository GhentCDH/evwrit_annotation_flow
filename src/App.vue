<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <label class="flex items-center gap-2 whitespace-nowrap" for="textId"
      >Text ID
        <input
          class="input input-bordered w-full max-w-xs input-sm"
          type="number"
          @change="handleChangedId"
          :value="textId"
          id="textId"
          placeholder="Tekst-ID"
        />
      </label>
    </div>
    <div class="flex-none">
      <TypeFilter v-model="selectedFilters" />
    </div>
  </div>

  <div class="flex p-1 gap-1 viewer">
    <div class="w-2/3 p-4 border">
      <label class="swap btn">
        <input type="checkbox" @click="showRuleModifiedAnnotations" />
        <div class="swap-on">Alle annotaties</div>
        <div class="swap-off">Enkel Gewijzigde annotaties</div>
      </label>
      <AnnotationTextCompare
        :filteredDataAnnotations="filterAnnotations.filteredDataAnnotations.value"
        :filteredProcessedAnnotations="filterAnnotations.filteredProcessedAnnotations.value"
        :modifiedAnnotationsMap="modifiedAnnotationsMap"
        :text-lines="textLines"
        :processedAnnotationsMap="processedAnnotationsMap"
        :snapper="snapper"
      />
    </div>
    <div class="w-1/3 border p-4">
      <annotation-edit-list
        :getOriginalAnnotation="filterAnnotations.getOriginalAnnotation"
        :modifiedAnnotationsMap="modifiedAnnotationsMap"
        :filteredModifiedAnnotations="filterAnnotations.filteredModifiedAnnotations.value"
        :text-lines="textLines"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { AnnotationRepository } from "./data-access/annotationRepository";
import { textToLines } from "./text_utilities";
import { normalizeAnnotation } from "./utils";
import { WordSnapper } from "./lib/snapper/WordSnapper";

import type { RuleAnnotation } from "./types/Annotation";
import AnnotationEditList from "./components/AnnotationEditList.vue";
import AnnotationTextCompare from "./components/AnnotationTextCompare.vue";
import TypeFilter from "./components/TypeFilter.vue";
import { FilterAnnotationsStore, type FilterValue } from "./stores/FilterStore";
import { AnnotationService } from "@/data-access/annotation.service";

let snapper: WordSnapper;
const loading = ref(true);
const error = ref<string | null>(null);
const text = ref<string>("");
const selectedFilters = ref<FilterValue[]>([]);
const textId = ref<string | "">("72427");
const processedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map());
const originalAnnotations = ref<Map<string, RuleAnnotation>>(new Map());

const showModified = ref<boolean>(false);
const showRuleModifiedAnnotations = () => {
  showModified.value = !showModified.value;
};

//#region Filter
const modifiedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map());
const filterAnnotations = new FilterAnnotationsStore({
  originalAnnotations,
  processedAnnotationsMap,
  modifiedAnnotationsMap,
  selectedFilters,
  showModified,
});

const textLines = computed(() => textToLines(text.value));

//#endregion

const handleChangedId = (event: Event) => {
  const target = event.target as HTMLInputElement;
  textId.value = target.value;
};

const resetMaps = () => {
  modifiedAnnotationsMap.value.clear();
  processedAnnotationsMap.value.clear();
  originalAnnotations.value.clear();
};
onMounted(() => {
  if (textId.value !== null) handleFetchedData(textId.value);
});
watch(textId, (newId) => {
  if (newId !== null) {
    resetMaps();
    handleFetchedData(newId);
  }
});
watch(text, (newText) => {
  snapper = new WordSnapper(newText);
});

const annotationService = new AnnotationService();

const handleFetchedData = async (id: string) => {
  try {
    const value = await annotationService.getAnnotation(id);
    text.value = value.text;
    originalAnnotations.value = value.originalAnnotations;
    modifiedAnnotationsMap.value = value.modifiedAnnotationsMap;
    processedAnnotationsMap.value = value.processedAnnotationsMap;
  } catch (error) {
    alert("Fout bij het laden van de annotatie");
  }
};

// Button event handlers
</script>
