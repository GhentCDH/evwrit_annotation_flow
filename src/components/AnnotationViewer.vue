<template>
  <div class="annotation-body">
    <!-- Gewijzigde annotatie -->
    <AnnotatedText
      :annotations="[annotation]"
      :lines="textLines.getAnnotatedLines(annotation.start, annotation.end).lines"
      :allow-edit="false"
    />
    <hr />
    <!-- Originele annotatie -->
    <AnnotatedText
      :annotations="[originalAnnotation]"
      :lines="textLines.getAnnotatedLines(originalAnnotation.start, originalAnnotation.end).lines"
      :allow-edit="false"
    />
  </div>
</template>

<script setup lang="ts">
import { AnnotatedText } from "@ghentcdh/vue-component-annotated-text";
import type { RuleAnnotation } from "src/types/Annotation";
import type { TextLines } from "../stores/text-lines";

interface AnnotationViewerProps {
  annotation: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  textLines: TextLines;
}

const props = defineProps<AnnotationViewerProps>();
</script>
