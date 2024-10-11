<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="card-title flex justify-between">
      <div class="flex-grow">Aangepaste Annotaties</div>
      <div class="gap-2 text-right">
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('edited')">
          Selecteer alle aangepaste
        </button>
        <button class="btn btn-xs btn-outline text-gray-500" @click="selectAll('original')">
          Selecteer alle originele
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2 overflow-auto">
      <div v-for="annotation in filteredModifiedAnnotations" :key="annotation.id">
        <AnnotationEdit
          :annotation="annotation"
          :originalAnnotation="getOriginalAnnotation(annotation.id)"
          :textLines="textLines"
          :selected="annotationSelected.get(annotation.id)"
          @confirmAnnotation="confirmAnnotation"
          @cancelAnnotation="cancelAnnotation"
          @changeSelected="onChangeSelected"
        />
      </div>
    </div>
    <hr />
    <div class="flex justify-end">
      <button class="btn" @click="confirmSelectedAnnotations">Bevestig Selectie</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type Line } from "@ghentcdh/vue-component-annotated-text";
import type { AnnotationMap, RuleAnnotation } from "../types/Annotation";
import AnnotationEdit from "@/components/AnnotationEdit.vue";

interface AnnotationEditListProps {
  getOriginalAnnotation: (id: string) => RuleAnnotation;
  modifiedAnnotationsMap: AnnotationMap;

  filteredModifiedAnnotations: RuleAnnotation[];
  textLines: Line[];
}

type Selected = "original" | "edited" | null;
const annotationSelected = ref(new Map<string, Selected>());

const { modifiedAnnotationsMap, filteredModifiedAnnotations } = defineProps<AnnotationEditListProps>();

// Button event handlers
const confirmAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is bevestigd.`);
  modifiedAnnotationsMap.delete(annotation.id);
};
const cancelAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is geannuleerd.`);
  modifiedAnnotationsMap.delete(annotation.id);
};

const onChangeSelected = function (annotation: RuleAnnotation, selected: Selected) {
  if (!selected) annotationSelected.value.delete(annotation.id);
  else annotationSelected.value.set(annotation.id, selected);
};

const confirmSelectedAnnotations = () => {
  console.log(annotationSelected);
  for (const [id, selected] of annotationSelected.value.entries()) {
    console.log(`Annotatie met id ${id} is ${selected}.`);
    modifiedAnnotationsMap.delete(id);
  }
};

const selectAll = (type: Selected) => {
  filteredModifiedAnnotations.forEach((annotation) => {
    onChangeSelected(annotation, type);
  });
};
</script>
