<template>
  >
  <div :id="annotatedTextId"></div>
  <AnnotationMetadata :annotation="annotation" />
</template>

<script setup lang="ts">
import { AnnotatedText, createAnnotatedText, TextLineAdapter } from "@ghentcdh/annotated-text";
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUnmounted, watch } from "vue";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import type { RuleAnnotation } from "@/types/Annotation";

const props = defineProps<{
  annotation: RuleAnnotation;
  text: string;
}>();

const annotatedTextId = `annotated-text-selected-item--${uuidv4()}`;

let annotatedText: AnnotatedText;

onMounted(() => {
  annotatedText = createAnnotatedText(annotatedTextId, {
    text: TextLineAdapter(),
  }).setText(props.text);

  if (props.annotation) {
    annotatedText
      .setAnnotations([props.annotation])
      .changeTextAdapterConfig("limit", { start: props.annotation.start, end: props.annotation.end });
  }
});

watch(
  () => props.text,
  (newValue) => {
    annotatedText.setText(newValue);
  },
);

watch(
  () => props.annotation,
  (newVal) => {
    annotatedText.setAnnotations([newVal]).changeTextAdapterConfig("limit", { start: newVal.start, end: newVal.end });
  },
);

onUnmounted(() => {
  annotatedText?.destroy();
});
</script>
