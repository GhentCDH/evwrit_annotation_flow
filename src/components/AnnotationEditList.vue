<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="card-title flex justify-between">
      <div class="flex-grow">Aangepaste Annotaties</div>
      <div class="gap-2 text-right">
        <button
          class="btn btn-xs btn-outline text-gray-500"
          @click="selectAll('modified')"
        >
          Selecteer alle aangepaste
        </button>
        <button
          class="btn btn-xs btn-outline text-gray-500"
          @click="selectAll('original')"
        >
          Selecteer alle originele
        </button>
      </div>
    </div>
    <ul class="overflow-auto">
      <li
        v-for="view in views"
        :key="view.id"
        :data-annotation="view.id"
        :ref="`annotation-${view.id}`"
        :data-highlight="view.id"
        class="mb-2 block"
      >
        <AnnotationEdit
          v-if="view"
          :view="view"
          :showMetadata="showMetadata"
          :selected="annotationSelected.get(view.id)"
          :highlight="highlightIds.includes(view.id)"
          @confirmAnnotation="confirmAnnotation(view, $event)"
          @deleteAnnotation="deleteAnnotation(view)"
          @changeSelected="onChangeSelected(view.id, $event)"
          @onHighlight="highlight"
        />
        <div v-if="!view">Annotation view is loading ....</div>
      </li>
    </ul>
    <hr />
    <div class="flex justify-end gap-2">
      <button class="btn" @click="emit('needsAttention')">
        Text heeft extra aandacht nodig
      </button>
      <button class="btn" @click="emit('reviewDone')">Text Verwerkt</button>
      <button class="btn" @click="confirmSelectedAnnotations">
        Bevestig Selectie
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watch } from "vue";
import type { AnnotationId } from "@ghentcdh/annotated-text";
import AnnotationEdit from "./AnnotationEdit.vue";
import type { ConfirmAnnotationType } from "../stores/annotation.store";
import { SingleAnnotationView } from "../stores/annotation-viewer.ts";

const highlightIds: Ref<AnnotationId[]> = ref([]);

interface AnnotationEditListProps {
  highlightAnnotationIds: AnnotationId[];
  showMetadata: boolean;
  views: SingleAnnotationView[];
}

const annotationSelected: Ref<Map<string, ConfirmAnnotationType>> = ref(
  new Map(),
);

const props = defineProps<AnnotationEditListProps>();

watch(
  () => props.highlightAnnotationIds,
  (newVal) => {
    highlight(newVal);
  },
);

const onChangeSelected = function (
  annotationId: string,
  selected: ConfirmAnnotationType,
) {
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
const confirmAnnotation = (
  annotation: { id: string },
  type: ConfirmAnnotationType,
) => {
  emit("confirmAnnotation", annotation.id, type);
};
const deleteAnnotation = (annotation: { id: string }) => {
  emit("deleteAnnotation", annotation.id);
};

const highlight = (ids: AnnotationId[]) => {
  highlightIds.value = ids;
};
//#endregion
</script>
