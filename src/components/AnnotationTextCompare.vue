<template>
  <div class="grid grid-cols-2 gap-2 overflow-auto h-full">
    <div class="border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed">
      <div class="text-lg font-bold">Originele Tekst</div>
      <AnnotatedText :annotations="originalAnnotations" :lines="textLines" />
    </div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <AnnotatedText
        :annotations="processedAnnotations"
        :lines="textLines"
        :allow-edit="true"
        :listen-to-on-update-start="true"
        :listen-to-on-updating="true"
        @annotation-update-begin="onAnnotationUpdateBegin"
        @annotation-updating="onAnnotationUpdating"
        @annotation-update-end="onAnnotationUpdateEnd"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Line } from "@ghentcdh/vue-component-annotated-text";
import { AnnotatedText, UpdateAnnotationState } from "@ghentcdh/vue-component-annotated-text";

import { WordSnapper } from "../lib/snapper/WordSnapper";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationTextCompareProps {
  originalAnnotations: RuleAnnotation[];
  processedAnnotations: RuleAnnotation[];
  textLines: Line[];
  snapper?: WordSnapper;
}

const { processedAnnotations, snapper, originalAnnotations, textLines } = defineProps<AnnotationTextCompareProps>();

import { pick } from "lodash-es";

//#region Emit
const emit = defineEmits(["modifyAnnotations", "processesAnnotation"]);

// AnnotatedText event handlers
const fixOffset = function (updateState: UpdateAnnotationState) {
  const result = snapper!.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;

  if (result.modified) {
    emit("modifyAnnotations", { ...result, id: updateState.annotation.id });
  }
};

const onAnnotationUpdateBegin = function (updateState: UpdateAnnotationState) {
  fixOffset(updateState);

  updateState.confirmStartUpdating();
};
const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  fixOffset(updateState);

  updateState.confirmUpdate();
};
const onAnnotationUpdateEnd = function (updateState: UpdateAnnotationState) {
  emit("processesAnnotation", pick(updateState.annotation, ["id", "start", "end"]));
};
// #endregion
</script>
