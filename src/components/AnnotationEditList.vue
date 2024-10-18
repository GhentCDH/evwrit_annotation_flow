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
    <div class="flex flex-col gap-2 overflow-auto">
      <Lazy v-for="annotation in modifiedAnnotations" :key="annotation.id">
        <AnnotationEdit
          :annotation="annotation.modified!"
          :originalAnnotation="annotation.original"
          :textLines="textLines"
          :selected="annotationSelected.get(annotation.id)"
          :duplicates="annotation.duplicates"
          :highlight="highlightIds.includes(annotation.id)"
          @confirmAnnotation="confirmAnnotation"
          @deleteAnnotation="deleteAnnotation"
          @changeSelected="onChangeSelected"
          @onHighlight="highlight"
        />
      </Lazy>
    </div>
    <hr />
    <div class="flex justify-end">
      <button class="btn" @click="confirmSelectedAnnotations">Bevestig Selectie</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import { type Line } from "@ghentcdh/vue-component-annotated-text";
import AnnotationEdit from "./AnnotationEdit.vue";
import Lazy from "./LazyComponent.vue";
import type { ModifiedAnnotation, RuleAnnotation } from "../types/Annotation";
import type { ConfirmAnnotationType } from "../stores/annotation.store";

const highlightIds: Ref<number> = ref([]);

interface AnnotationEditListProps {
  modifiedAnnotations: ModifiedAnnotation[];
  textLines: Line[];
}

const annotationSelected: Ref<Map<string, ConfirmAnnotationType>> = ref(new Map());

const { modifiedAnnotations } = defineProps<AnnotationEditListProps>();

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
const emit = defineEmits(["confirmAnnotations", "confirmAnnotation", "deleteAnnotation"]);
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
//#endregion

const highlight = (ids: number) => {
  highlightIds.value = ids;
};
</script>
