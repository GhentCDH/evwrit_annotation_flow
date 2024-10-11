<template>
  <div class="flex justify-end">
    <button class="btn" @click="confirmSelectedAnnotations">Bevestig Selectie</button>
  </div>
</template>

<script setup lang="ts">
import type { RuleAnnotation } from "src/types/Annotation";

interface AnnotationEditProps {
  modifiedAnnotationsMap: Map<string, RuleAnnotation>;
  filteredModifiedAnnotations: RuleAnnotation[];
}

const { modifiedAnnotationsMap, filteredModifiedAnnotations } = defineProps<AnnotationEditProps>();

const emit = defineEmits([]);
const selectedAnnotationIds = defineModel<string[]>();

const allSelected = () => selectedAnnotationIds.value?.length === modifiedAnnotationsMap.size;

const clearAllAnnotations = () => {
  modifiedAnnotationsMap.clear();
};

const confirmSelectedAnnotations = async () => {
  try {
    const annotationsToSubmit = selectedAnnotationIds.value?.map((id) => modifiedAnnotationsMap.get(id));
    selectedAnnotationIds.value?.forEach((annotationId) => {
      modifiedAnnotationsMap.delete(annotationId);
    });
    selectedAnnotationIds.value = [];
    console.log("Annotations submitted", annotationsToSubmit);
  } catch (error) {
    console.error("Error submitting annotations", error);
  }
};

const toggleSelectAll = () => {
  if (allSelected()) selectedAnnotationIds.value = [];
  else selectedAnnotationIds.value = filteredModifiedAnnotations.map((annotation) => annotation.id);
};

const confirmAllAnnotations = async () => {
  try {
    console.log("filteredModifiedAnnotations", filteredModifiedAnnotations);
    console.log("modifiedAnnotationsMap", modifiedAnnotationsMap);
    filteredModifiedAnnotations.forEach((annotation) => {
      modifiedAnnotationsMap.delete(annotation.id);
    });
  } catch (error) {
    console.error("Error submitting annotations", error);
  }
};
</script>
