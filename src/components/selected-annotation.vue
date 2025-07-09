<template>
  <TextAnnotation :annotations="[annotation]" :text="text" :limit="annotation" :allow-edit="false" />
  <AnnotationMetadata :annotation="annotation" />
</template>

<script setup lang="ts">
import AnnotationMetadata from "./AnnotationMetadata.vue";
import TextAnnotation from "./TextAnnotation.vue";
import type { RuleAnnotation } from "@/types/Annotation";

defineProps<{
  text: string;
  annotation: RuleAnnotation;
}>();
</script>
