<template>
  <div class="card border rounded-md w-full">
    <div class="card-body p-2">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-center">
          <label>
            <input class="checkbox" type="checkbox" :value="annotation.id" v-model="selectedAnnotationIds" />
          </label>
          <div :class="getTypeClass()">{{ annotation.type }}</div>
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
import type { RuleAnnotation } from "../types/Annotation";
import type { Line } from "@ghentcdh/vue-component-annotated-text";

import { CheckIcon, XMarkIcon } from "@heroicons/vue/16/solid";
import AnnotationViewer from "./AnnotationViewer.vue";
import { FilterColor, type FilterValue } from "../stores/FilterStore";

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

const getTypeClass = () => {
  return `badge badge-outline ${FilterColor[annotation.type as FilterValue]}`
}
</script>
