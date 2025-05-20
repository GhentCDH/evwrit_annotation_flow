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
        <!-- Originele annotatie -->
        <AnnotatedText
          :annotations="[annotation]"
          :lines="textLines"
          :allow-edit="allowEdit ?? false"
          :listen-to-on-update-start="true"
          :listen-to-on-updating="true"
          @annotation-update-begin="onAnnotationUpdateBegin"
          @annotation-updating="onAnnotationUpdating"
          @annotation-update-end="onAnnotationUpdateEnd"
        />
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
import { AnnotatedText, type Line, UpdateAnnotationState } from "@ghentcdh/vue-component-annotated-text";
import { pick } from "lodash-es";
import SaveIcon from "./SaveIcon.vue";
import type { RuleAnnotation } from "../types/Annotation";
import { WordSnapper } from "../lib/snapper";

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  tip: string;
  selectedAnnotation: boolean;
  disabled: boolean;
  textLines: Line[];
  allowEdit?: boolean;
  snapper?: WordSnapper;
}

const props = defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "changeSelected", "modifyAnnotations", "processesAnnotation"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation");
};

const changeSelected = () => {
  emit("changeSelected");
};

//#region edit annotations

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

// #endregion
</script>
