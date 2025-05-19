<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="card-title flex justify-between">
      <div class="flex-grow">Aangepaste Annotaties</div>
      <div class="gap-2 text-right" v-if="false">
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('modified')">
          Selecteer alle aangepaste
        </button>
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('original')">
          Selecteer alle originele
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2 overflow-auto">
      <AnnotationEditListPaginator />
      <div
        v-for="annotation in editPaginationStore.items"
        :key="annotation.id"
        :data-annotation="annotation.id"
        :ref="`annotation-${annotation.id}`"
        :class="{ 'min-h-[20px]': false }"
      >
        <AnnotationEdit
          :annotation="annotation.modified!"
          :originalAnnotation="annotation.original"
          :textLines="textLines"
          :selected="annotationSelected.get(annotation.id)"
          :duplicates="annotation.duplicates"
          :highlight="highlightIds.includes(annotation.id)"
          :appliedRules="annotation.appliedRules"
          :disabled="annotation.saving"
          :error="annotation.error"
          :showMetadata="showMetadata"
          :snapper="snapper"
          @confirmAnnotation="confirmAnnotation"
          @deleteAnnotation="deleteAnnotation"
          @changeSelected="onChangeSelected"
          @onHighlight="highlight"
          @highlightAnnotation="emit('highlightAnnotation', $event)"
          @modifyAnnotations="emit('modifyAnnotations', $event)"
          @processesAnnotation="emit('processesAnnotation', $event)"
        />
      </div>
      <AnnotationEditListPaginator />
    </div>
    <hr />
    <div class="flex justify-end gap-2">
      <button class="btn" @click="emit('needsAttention')">Text heeft extra aandacht nodig</button>
      <button class="btn" @click="emit('reviewDone')">Text Verwerkt</button>
      <button class="btn" @click="confirmSelectedAnnotations">Bevestig Selectie</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref, watch } from "vue";
import AnnotationEdit from "./AnnotationEdit.vue";
import AnnotationEditListPaginator from "./AnnotationEditListPaginator.vue";
import type { RuleAnnotation } from "../types/Annotation";
import type { ConfirmAnnotationType } from "../stores/annotation.store";
import { WordSnapper } from "../lib/snapper";
import type { TextLines } from "../stores/text-lines";
import { useEditPaginationStore } from "../stores/edit-pagination.state";

const highlightIds: Ref<string[]> = ref([]);

const render = ref(5);

interface AnnotationEditListProps {
  // modifiedAnnotations: ModifiedAnnotation[];
  textLines: TextLines;
  highlightAnnotationIds: string[];
  showMetadata: boolean;
  snapper?: WordSnapper;
}

const annotationSelected: Ref<Map<string, ConfirmAnnotationType>> = ref(new Map());

const props = defineProps<AnnotationEditListProps>();

watch(
  () => props.highlightAnnotationIds,
  (newVal) => {
    highlight(newVal);
  },
);

const editPaginationStore = useEditPaginationStore();

const onChangeSelected = function (annotation: RuleAnnotation, selected: ConfirmAnnotationType) {
  if (!selected) annotationSelected.value.delete(annotation.id);
  else annotationSelected.value.set(annotation.id, selected);
};

const selectAll = (type: ConfirmAnnotationType) => {
  // modifiedAnnotations.forEach((annotation) => {
  //   onChangeSelected(annotation.original, type);
  // });
};

//#region Emit
const emit = defineEmits([
  "confirmAnnotations",
  "confirmAnnotation",
  "deleteAnnotation",
  "modifyAnnotations",
  "processesAnnotation",
  "highlightAnnotation",
  "needsAttention",
  "reviewDone",
]);

const confirmSelectedAnnotations = () => {
  emit("confirmAnnotations", annotationSelected.value);
};

// Button event handlers
const confirmAnnotation = (annotation: RuleAnnotation, type: ConfirmAnnotationType) => {
  emit("confirmAnnotation", annotation.id, type);
};
const deleteAnnotation = (annotation: RuleAnnotation) => {
  emit("deleteAnnotation", annotation.id);
};

const highlight = (ids: string[]) => {
  highlightIds.value = ids;
};

onMounted(() => {
  console.log("---> annotation edit list mounted");
});
//#endregion
</script>
