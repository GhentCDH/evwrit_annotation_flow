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
  <div :class="loadingClass()">
    <div class="w-2/3 p-4 border flex flex-col">
      <div>
        <label class="swap btn">
          <input type="checkbox" @click="showRuleModifiedAnnotations" />
          <div class="swap-on">Alle annotaties</div>
          <div class="swap-off">Enkel Gewijzigde annotaties</div>
        </label>
      </div>
      <AnnotationTextCompare
        :originalAnnotations="originalAnnotations"
        :processedAnnotations="processedAnnotations"
        :text-lines="textLines"
        :snapper="snapper"
        @modify-annotations="modifyAnnotation"
        @processes-annotation="processAnnotation"
      />
    </div>
    <div class="w-1/3 border p-4">
      <annotation-edit-list
        :modifiedAnnotations="modifiedAnnotations"
        :text-lines="textLines"
        @confirm-annotation="confirmAnnotation"
        @delete-annotation="deleteAnnotation"
        @confirm-annotations="confirmAnnotations"
      />
    </div>
    <span v-if="loading" class="absolute left-1/2 top-1/2 loading loading-bars loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { textToLines } from "./text_utilities";
import { WordSnapper } from "./lib/snapper/WordSnapper";

import AnnotationEditList from "./components/AnnotationEditList.vue";
import AnnotationTextCompare from "./components/AnnotationTextCompare.vue";
import TypeFilter from "./components/TypeFilter.vue";
import { AnnotationStore, type ConfirmAnnotationType, type UpdateAnnotation } from "./stores/annotation.store";

let snapper: WordSnapper;
const annotationStore = new AnnotationStore();
const loading = ref(true);
const text = ref<string>("");
const textId = ref<string | "">("72427");

const { originalAnnotations, processedAnnotations, modifiedAnnotations, selectedFilters } = annotationStore;

const showModified = ref<boolean>(false);

const showRuleModifiedAnnotations = () => {
  showModified.value = !showModified.value;
  annotationStore.changeShowModified(showModified.value);
};

const textLines = computed(() => textToLines(text.value));

const handleChangedId = (event: Event) => {
  const target = event.target as HTMLInputElement;
  textId.value = target.value;
};

onMounted(() => {
  if (textId.value !== null) handleFetchedData(textId.value);
});
watch(textId, (newId) => {
  if (newId !== null) {
    handleFetchedData(newId);
  }
});

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
</script>
