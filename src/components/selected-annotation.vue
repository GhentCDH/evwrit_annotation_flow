<template>
  <AnnotatedText
    :annotations="[annotation]"
    :lines="textLines.getAnnotatedLines(annotation.start, annotation.end).lines"
    :allow-edit="false"
  />
  <AnnotationMetadata :annotation="annotation" />
</template>

<script setup lang="ts">
import { AnnotatedText } from "@ghentcdh/vue-component-annotated-text";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import type { TextLines } from "../stores/text-lines";
import type { RuleAnnotation } from "@/types/Annotation";

defineProps<{
  textLines: TextLines;
  annotation: RuleAnnotation;
}>();
</script>
