<template>
  <div class="flex gap-4 overflow-auto h-full">
    <div>
      <div class="text-lg font-bold">Originele Tekst</div>
      <AnnotatedText :annotations="filteredDataAnnotations" :lines="textLines" />
    </div>
    <div class="border border-x-0 border-l-0 border-r-2 border-dashed"></div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <AnnotatedText
        :annotations="filteredProcessedAnnotations"
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
import type { AnnotationMap, RuleAnnotation } from "../types/Annotation";

interface AnnotationTextCompareProps {
  filteredDataAnnotations: RuleAnnotation[];
  filteredProcessedAnnotations: RuleAnnotation[];
  modifiedAnnotationsMap: AnnotationMap;
  processedAnnotationsMap: AnnotationMap;
  textLines: Line[];
  snapper: WordSnapper;
}

const { modifiedAnnotationsMap, filteredProcessedAnnotations, processedAnnotationsMap, snapper } =
  defineProps<AnnotationTextCompareProps>();

// AnnotatedText event handlers
const onAnnotationUpdateBegin = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if (result.modified) {
    modifiedAnnotationsMap.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmStartUpdating();
};
const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if (result.modified) {
    modifiedAnnotationsMap.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmUpdate();
};
const onAnnotationUpdateEnd = function (updateState: UpdateAnnotationState) {
  console.log("** Edited: ", updateState.annotation);
  processedAnnotationsMap.set(updateState.annotation.id, updateState.annotation);
};
</script>
