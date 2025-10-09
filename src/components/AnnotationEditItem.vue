<template>
  <div v-if="annotation">
    <label class="label cursor-pointer gap-2">
      <input
        v-if="annotation"
        type="radio"
        :name="annotation.id"
        class="radio radio-success"
        :disabled="disabled"
        :checked="selectedAnnotation"
        @click="changeSelected"
      />
      <div class="w-full">
        <div :id="annotatedTextId" />
        <!-- Originele annotatie -->
        <!--        <AnnotatedText-->
        <!--          :annotations="[annotation]"-->
        <!--          :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"-->
        <!--          :allow-edit="allowEdit ?? false"-->
        <!--          :listen-to-on-update-start="true"-->
        <!--          :listen-to-on-updating="true"-->
        <!--          @annotation-update-begin="onAnnotationUpdateBegin"-->
        <!--          @annotation-updating="onAnnotationUpdating"-->
        <!--          @annotation-update-end="onAnnotationUpdateEnd"-->
        <!--        />-->
      </div>
      <button
        v-if="annotation"
        :disabled="disabled"
        class="btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]"
        :data-tip="tip"
        @click="confirmAnnotation"
      >
        <SaveIcon />
      </button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { AnnotatedText, Annotation, createAnnotatedText, TextLineAdapter, WordSnapper } from "@ghentcdh/annotated-text";
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUnmounted, watch } from "vue";
import SaveIcon from "./SaveIcon.vue";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  tip: string;
  selectedAnnotation: boolean;
  disabled: boolean;
  text: string;
  allowEdit?: boolean;
}

const props = defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "changeSelected", "modifyAnnotations", "processesAnnotation"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation");
};

const changeSelected = () => {
  emit("changeSelected");
};

const annotatedTextId = `annotated-text-edit-item--${uuidv4()}`;

let annotatedText: AnnotatedText;
//#region edit annotations

onMounted(() => {
  annotatedText = createAnnotatedText(annotatedTextId, {
    text: TextLineAdapter(),
    annotation: {
      edit: props.allowEdit,
      snapper: new WordSnapper(),
    },
  })
    .setText(props.text)
    .on("annotation-edit--move", (data: any) => {
      annotationMoved(data.data.annotation);
    })
    .on("annotation-edit--move-end", (data: any) => {
      annotationMovedEnd(data.data.annotation);
    });

  if (props.annotation) {
    annotatedText
      .changeTextAdapterConfig("limit", {
        start: props.annotation.start,
        end: props.annotation.end,
      })
      .setAnnotations([props.annotation]);
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
    annotatedText.changeTextAdapterConfig("limit", { start: newVal.start, end: newVal.end }).setAnnotations([newVal]);
  },
);

onUnmounted(() => {
  annotatedText?.destroy();
});
const isSame = (annotation: Annotation) => {
  return props.annotation.start == annotation.start && props.annotation.end === annotation.end;
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
</script>
