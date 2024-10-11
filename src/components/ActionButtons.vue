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

const { modifiedAnnotationsMap } = defineProps<AnnotationEditProps>();

const selectedAnnotationIds = defineModel<string[]>();

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
</script>
