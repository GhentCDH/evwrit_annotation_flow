<template>
  <AnnotatedText
    :annotations="[annotation]"
    :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"
    :allow-edit="false"
  />
  <AnnotationMetadata :annotation="annotation" />
</template>

<script setup lang="ts">
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import { getAnnotatedLines } from "../utils/annotation_utils";
import type { RuleAnnotation } from "@/types/Annotation";

defineProps<{
  textLines: Line[];
  annotation: RuleAnnotation;
}>();
</script>
