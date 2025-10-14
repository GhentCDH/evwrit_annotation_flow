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
        v-for="annotation in views"
        :key="annotation.id"
        :data-annotation="annotation.id"
        :ref="`annotation-${annotation.id}`"
        :data-highlight="annotation.id"
      >
        <AnnotationEdit
          v-if="annotation.view"
          :view="annotation.view"
          :showMetadata="showMetadata"
          :selected="annotationSelected.get(annotation.id)"
          :highlight="highlightIds.includes(annotation.id)"
          @confirmAnnotation="confirmAnnotation(annotation, $event)"
          @deleteAnnotation="deleteAnnotation(annotation)"
          @changeSelected="onChangeSelected(annotation.id, $event)"
          @onHighlight="highlight"
        />
        <div v-if="!annotation.view">Annotation view is loading ....</div>
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
import type { ConfirmAnnotationType } from "../stores/annotation.store";
import { SingleAnnotationView } from "../stores/annotation-viewer.ts";

const highlightIds: Ref<string[]> = ref([]);

interface AnnotationEditListProps {
  highlightAnnotationIds: string[];
  showMetadata: boolean;
  views: { id: string; view: SingleAnnotationView }[];
}

const annotationSelected: Ref<Map<string, ConfirmAnnotationType>> = ref(new Map());

const props = defineProps<AnnotationEditListProps>();

watch(
  () => props.highlightAnnotationIds,
  (newVal) => {
    highlight(newVal);
  },
);

const onChangeSelected = function (annotationId: string, selected: ConfirmAnnotationType) {
  if (!selected) annotationSelected.value.delete(annotationId);
  else annotationSelected.value.set(annotationId, selected);
};

const selectAll = (type: ConfirmAnnotationType) => {
  props.views.forEach((view) => {
    onChangeSelected(view.id, type);
  });
};

//#region Emit
const emit = defineEmits([
  "confirmAnnotations",
  "confirmAnnotation",
  "deleteAnnotation",
  "needsAttention",
  "reviewDone",
]);

const confirmSelectedAnnotations = () => {
  emit("confirmAnnotations", annotationSelected.value);
};

// Button event handlers
const confirmAnnotation = (annotation: { id: string }, type: ConfirmAnnotationType) => {
  emit("confirmAnnotation", annotation.id, type);
};
const deleteAnnotation = (annotation: { id: string }) => {
  emit("deleteAnnotation", annotation.id);
};

const highlight = (ids: string[]) => {
  highlightIds.value = ids;
};
//#endregion
</script>
