<template>
  <div class="grid grid-cols-2 gap-2 overflow-auto h-full">
    <div class="border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed">
      <div class="text-lg font-bold">Originele Tekst</div>
      <div :id="originalId" />
      <!--      <AnnotatedText :annotations="originalAnnotations" :lines="textLines" />-->
    </div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <div :id="editId" />
      <!--      <AnnotatedText-->
      <!--        :annotations="processedAnnotations"-->
      <!--        :lines="textLines"-->
      <!--        :allow-edit="true"-->
      <!--        :listen-to-on-update-start="true"-->
      <!--        :listen-to-on-updating="true"-->
      <!--        @annotation-update-begin="onAnnotationUpdateBegin"-->
      <!--        @annotation-updating="onAnnotationUpdating"-->
      <!--        @annotation-update-end="onAnnotationUpdateEnd"-->
      <!--        @annotation-double-click="onAnnotationDoubleClick"-->
      <!--      />-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnnotatedText, Annotation, createAnnotatedText, TextLineAdapter, WordSnapper } from "@ghentcdh/annotated-text";

import { v4 as uuidv4 } from "uuid";
import { onMounted, onUnmounted, watch } from "vue";
import type { RuleAnnotation } from "../types/Annotation";

const originalId = `compare--original--${uuidv4()}`;
const editId = `compare--edit--${uuidv4()}`;

interface AnnotationTextCompareProps {
  originalAnnotations: RuleAnnotation[];
  processedAnnotations: RuleAnnotation[];
  text: string;
}

const props = defineProps<AnnotationTextCompareProps>();

let originalAnnotatedText: AnnotatedText;
let editedAnnotationText: AnnotatedText;

onMounted(() => {
  originalAnnotatedText = createAnnotatedText(originalId, {
    text: TextLineAdapter(),
  })
    .setText(props.text)
    .setAnnotations(props.originalAnnotations ?? []);

  editedAnnotationText = createAnnotatedText(editId, {
    text: TextLineAdapter(),
    annotation: {
      edit: true,
      snapper: new WordSnapper(),
    },
  })
    .setText(props.text)
    .setAnnotations(props.processedAnnotations ?? [])
    .on("annotation-edit--move", (data: any) => {
      annotationMoved(data.data.annotation);
    })
    .on("annotation-edit--move-end", (data: any) => {
      annotationMovedEnd(data.data.annotation);
    });
});

watch(
  () => props.text,
  (newValue, oldValue) => {
    originalAnnotatedText.setText(newValue);
    editedAnnotationText.setText(newValue);
  },
);

watch(
  () => props.originalAnnotations,
  (newVal) => {
    originalAnnotatedText.setAnnotations(newVal);
  },
);

watch(
  () => props.processedAnnotations,
  (newVal) => {
    editedAnnotationText.setAnnotations(newVal);
  },
);

onUnmounted(() => {
  originalAnnotatedText?.destroy();
  editedAnnotationText?.destroy();
});
//#region Emit
const emit = defineEmits(["modifyAnnotations", "processesAnnotation", "showAnnotation"]);

const isSame = (annotation: Annotation) => {
  // return props.annotation.start == annotation.start && props.annotation.end === annotation.end;

  return false;
};
const annotationMoved = (annotation: Annotation) => {
  if (isSame(annotation)) {
    return;
  }
  emit("modifyAnnotations", annotation);
};
const annotationMovedEnd = (annotation: Annotation) => {
  if (isSame(annotation)) {
    return;
  }
  emit("processesAnnotation", annotation);
};
//
// // AnnotatedText event handlers
// const fixOffset = function (updateState: UpdateAnnotationState) {
//   const result = snapper!.fixOffset(updateState.newStart, updateState.newEnd);
//   updateState.newStart = result.start;
//   updateState.newEnd = result.end;
//
//   if (result.modified) {
//     emit("modifyAnnotations", { ...result, id: updateState.annotation.id });
//   }
// };
//
// const onAnnotationUpdateBegin = function (updateState: UpdateAnnotationState) {
//   fixOffset(updateState);
//
//   updateState.confirmStartUpdating();
// };
// const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
//   fixOffset(updateState);
//
//   updateState.confirmUpdate();
// };
// const onAnnotationUpdateEnd = function (updateState: UpdateAnnotationState) {
//   emit("processesAnnotation", pick(updateState.annotation, ["id", "start", "end"]));
// };
//
// const onAnnotationDoubleClick = function (updateState: UpdateAnnotationState) {
//   emit("showAnnotation", updateState.annotation);
// };
// // #endregion
</script>
