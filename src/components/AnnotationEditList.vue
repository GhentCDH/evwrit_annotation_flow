<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="card-title flex justify-between">
      <div class="flex-grow">Aangepaste Annotaties</div>
      <div class="gap-2 text-right">
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('modified')">
          Selecteer alle aangepaste
        </button>
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('original')">
          Selecteer alle originele
        </button>
      </div>
    </div>
    <ul class="flex flex-col gap-2 overflow-auto">
      <li
        v-for="annotation in modifiedAnnotations"
        :key="annotation.id"
        :data-annotation="annotation.id"
        :ref="`annotation-${annotation.id}`"
      >
        <Lazy>
          <AnnotationEdit
            :annotation="annotation.modified!"
            :originalAnnotation="annotation.original"
            :text="text"
            :selected="annotationSelected.get(annotation.id)"
            :duplicates="annotation.duplicates"
            :highlight="highlightIds.includes(annotation.id)"
            :appliedRules="annotation.appliedRules"
            :disabled="annotation.saving"
            :error="annotation.error"
            :showMetadata="showMetadata"
            @confirmAnnotation="confirmAnnotation"
            @deleteAnnotation="deleteAnnotation"
            @changeSelected="onChangeSelected"
            @onHighlight="highlight"
            @highlightAnnotation="emit('highlightAnnotation', $event)"
            @modifyAnnotations="emit('modifyAnnotations', $event)"
            @processesAnnotation="emit('processesAnnotation', $event)"
          />
        </Lazy>
      </li>
    </ul>
    <hr />
    <div class="flex justify-end gap-2">
      <button class="btn" @click="emit('needsAttention')">Text heeft extra aandacht nodig</button>
      <button class="btn" @click="emit('reviewDone')">Text Verwerkt</button>
      <button class="btn" @click="confirmSelectedAnnotations">Bevestig Selectie</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watch } from "vue";
import AnnotationEdit from "./AnnotationEdit.vue";
import Lazy from "./LazyComponent.vue";
import type { ModifiedAnnotation, RuleAnnotation } from "../types/Annotation";
import type { ConfirmAnnotationType } from "../stores/annotation.store";

const highlightIds: Ref<string[]> = ref([]);

interface AnnotationEditListProps {
  modifiedAnnotations: ModifiedAnnotation[];
  highlightAnnotationIds: string[];
  text: string;
  showMetadata: boolean;
}

const annotationSelected: Ref<Map<string, ConfirmAnnotationType>> = ref(new Map());

const { modifiedAnnotations, highlightAnnotationIds } = defineProps<AnnotationEditListProps>();

watch(
  () => highlightAnnotationIds,
  (newVal) => {
    highlight(newVal);
  },
);

const onChangeSelected = function (annotation: RuleAnnotation, selected: ConfirmAnnotationType) {
  if (!selected) annotationSelected.value.delete(annotation.id);
  else annotationSelected.value.set(annotation.id, selected);
};

const selectAll = (type: ConfirmAnnotationType) => {
  modifiedAnnotations.forEach((annotation) => {
    onChangeSelected(annotation.original, type);
  });
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
//#endregion
</script>
