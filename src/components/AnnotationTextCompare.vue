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
        @annotation-double-click="onAnnotationDoubleClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnnotatedText, type Line, UpdateAnnotationState } from "@ghentcdh/vue-component-annotated-text";

import { pick } from "lodash-es";
import { WordSnapper } from "../lib/snapper/WordSnapper";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationTextCompareProps {
  originalAnnotations: RuleAnnotation[];
  processedAnnotations: RuleAnnotation[];
  textLines: Line[];
  snapper?: WordSnapper;
}

const props = defineProps<AnnotationTextCompareProps>();

//#region Emit
const emit = defineEmits(["modifyAnnotations", "processesAnnotation", "showAnnotation"]);

// AnnotatedText event handlers
const fixOffset = function (updateState: UpdateAnnotationState) {
  const result = props.snapper!.fixOffset(updateState.newStart, updateState.newEnd);
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

const onAnnotationDoubleClick = function (updateState: UpdateAnnotationState) {
  emit("showAnnotation", updateState.annotation);
};
// #endregion
</script>
