<template>
  <div class="card border rounded-md w-full">
    <div class="card-body p-2">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-center">
          <div class="badge badge-outline badge-sm text-color-custom" :style="getColor()">{{ annotation.type }}</div>
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
        <div class="annotation-body">
          <label class="label cursor-pointer">
            <input
              type="radio"
              :name="annotation.id"
              class="radio radio-success"
              :checked="selectedAnnotation === 'edited'"
              @click="changeSelected('edited')"
            />
            <!-- Gewijzigde annotatie -->
            <div class="w-full">
              <AnnotatedText
                :annotations="[annotation]"
                :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"
                :allow-edit="false"
              />
            </div>
          </label>
          <hr />
          <label class="label cursor-pointer">
            <input
              type="radio"
              :name="annotation.id"
              class="radio radio-success"
              :checked="selectedAnnotation === 'original'"
              @click="changeSelected('original')"
            />
            <div class="w-full">
              <!-- Originele annotatie -->
              <AnnotatedText
                :annotations="[originalAnnotation]"
                :lines="getAnnotatedLines(textLines, originalAnnotation.start, originalAnnotation.end).lines"
                :allow-edit="false"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, XMarkIcon } from "@heroicons/vue/16/solid";
import type { FilterValue } from "src/stores/FilterStore";
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import { ref, watch } from "vue";
import type { RuleAnnotation } from "../types/Annotation";
import { annotationHtmlColors } from "../styles/annotation-colors";
import { getAnnotatedLines } from "../utils/annotation_utils";

type Selected = "original" | "edited" | null | undefined;
const selectedAnnotation = ref<Selected>();

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  textLines: Line[];
  selected: Selected;
}

const props = defineProps<AnnotationEditProps>();
const { annotation } = props;
const emit = defineEmits(["confirmAnnotation", "cancelAnnotation", "changeSelected"]);
watch(
  () => props.selected,
  (newVal) => {
    selectedAnnotation.value = newVal;
  },
);
const confirmAnnotation = () => {
  emit("confirmAnnotation", annotation);
};

const cancelAnnotation = () => {
  emit("cancelAnnotation", annotation);
};

const getColor = () => {
  const type = annotation.type as FilterValue;
  return `--text-color-custom:${annotationHtmlColors[type]}`;
};
const changeSelected = (changeSelected: Selected) => {
  selectedAnnotation.value = changeSelected === selectedAnnotation.value ? null : changeSelected;
};
</script>
