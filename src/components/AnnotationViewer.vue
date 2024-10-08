<template>
  <div class="annotation-body">
    <!-- Gewijzigde annotatie -->
    <AnnotatedText
      :annotations="[annotation]"
      :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"
      :allow-edit="false"
    />
    <hr />
    <!-- Originele annotatie -->
    <AnnotatedText
      :annotations="[originalAnnotation]"
      :lines="getAnnotatedLines(textLines, originalAnnotation.start, originalAnnotation.end).lines"
      :allow-edit="false"
    />
  </div>
</template>

<script setup lang="ts">
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import type { RuleAnnotation } from "src/types/Annotation";
import { getAnnotatedLines } from "./../annotation_utils";

interface AnnotationViewerProps {
  annotation: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  textLines: Line[];
}

const props = defineProps<AnnotationViewerProps>();
</script>
