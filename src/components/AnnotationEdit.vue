<template>
  <div class="card border rounded-md w-full">
    <div class="card-body p-2">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-center">
          <label>
            <input class="checkbox" type="checkbox" :value="annotation.id" v-model="selectedAnnotationIds" />
          </label>
          <div class="badge badge-outline badge-sm text-color-custom"
          :style="getColor()">{{ annotation.type }}</div>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-circle btn-xs btn-success btn-outline" @click="confirmAnnotation()">
            <CheckIcon />
          </button>
          <button class="btn btn-circle btn-xs btn-error btn-outline" @click="cancelAnnotation()">
            <XMarkIcon />
          </button>
        </div>
      </div>
      <div>
        <AnnotationViewer :annotation="annotation" :originalAnnotation="originalAnnotation" :textLines="textLines" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Line } from "@ghentcdh/vue-component-annotated-text";

import { CheckIcon, XMarkIcon } from "@heroicons/vue/16/solid";
import AnnotationViewer from "./AnnotationViewer.vue";
import type { RuleAnnotation } from "../types/Annotation";
import { annotationHtmlColors } from "../styles/annotation-colors";

const selectedAnnotationIds = defineModel<string[]>();

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  textLines: Line[];
}

const { annotation } = defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "cancelAnnotation"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation", annotation);
};

const cancelAnnotation = () => {
  emit("cancelAnnotation", annotation);
};

const getColor = () => {
  const type = annotation.type as string
  return `--text-color-custom:${annotationHtmlColors[type]}`;
};
</script>
