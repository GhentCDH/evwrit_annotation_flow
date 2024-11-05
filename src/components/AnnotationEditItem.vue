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
          :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"
          :allow-edit="false"
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
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import SaveIcon from "./SaveIcon.vue";
import type { RuleAnnotation } from "../types/Annotation";
import { getAnnotatedLines } from "../utils/annotation_utils";

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  tip: string;
  selectedAnnotation: boolean;
  disabled: boolean;
  textLines: Line[];
}

const props = defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "changeSelected"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation");
};

const changeSelected = () => {
  emit("changeSelected");
};
</script>
