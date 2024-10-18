<template>
  <div class="card border rounded-md w-full">
    <div class="card-body p-2">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-center">
          <div class="badge badge-outline badge-sm text-color-custom" :style="getColor()">{{ annotation.type }}</div>
          <div v-if="hasDuplicates" class="badge badge-sm badge-warning">Duplicaat?</div>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-circle btn-xs" @click="deleteAnnotation()">
            <trash-icon />
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
              :checked="selectedAnnotation === 'modified'"
              @click="changeSelected('modified')"
            />
            <!-- Gewijzigde annotatie -->
            <div class="w-full">
              <AnnotatedText
                :annotations="[annotation]"
                :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines"
                :allow-edit="false"
              />
            </div>
            <button class="btn btn-circle btn-xs btn-success btn-outline" @click="confirmAnnotation('original')">
              <CheckIcon />
            </button>
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
            <button class="btn btn-circle btn-xs btn-success btn-outline" @click="confirmAnnotation('original')">
              <CheckIcon />
            </button>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, XMarkIcon, TrashIcon } from "@heroicons/vue/16/solid";
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import { ref, watch } from "vue";
import type { RuleAnnotation, AnnotationType } from "../types/Annotation";
import { annotationHtmlColors } from "../styles/annotation-colors";
import { getAnnotatedLines } from "../utils/annotation_utils";
import type { ConfirmAnnotationType } from "../stores/annotation.store";

const selectedAnnotation = ref<ConfirmAnnotationType>();

interface AnnotationEditProps {
  annotation: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  textLines: Line[];
  selected: ConfirmAnnotationType;
  hasDuplicates: boolean;
}

const props = defineProps<AnnotationEditProps>();
const { annotation } = props;
const emit = defineEmits(["confirmAnnotation", "deleteAnnotation", "changeSelected"]);

watch(
  () => props.selected,
  (newVal) => {
    selectedAnnotation.value = newVal;
  },
);

const confirmAnnotation = (changeSelected: ConfirmAnnotationType) => {
  emit("confirmAnnotation", annotation);
};

const deleteAnnotation = () => {
  emit("deleteAnnotation", annotation);
};

const getColor = () => {
  const type = annotation.type as AnnotationType;
  return `--text-color-custom:${annotationHtmlColors[type]}`;
};

const changeSelected = (changeSelected: ConfirmAnnotationType) => {
  selectedAnnotation.value = changeSelected === selectedAnnotation.value ? null : changeSelected;
};
</script>
