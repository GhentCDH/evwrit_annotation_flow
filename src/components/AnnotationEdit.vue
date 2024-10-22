<template>
  <div class="card border rounded-md w-full" :class="{ 'border-black': highlight, shadow: highlight }">
    <div class="card-body p-2">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-center">
          <div class="badge badge-outline badge-sm text-color-custom" :style="getColor()">
            {{ originalAnnotation.type }}
          </div>
          <div v-if="duplicates.length > 1" class="badge badge-sm badge-warning cursor-pointer" @click="onHighlight()">
            Duplicaat? ({{ originalAnnotation.id }})
          </div>
        </div>
        <div class="flex gap-2">
          <button
            class="btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left"
            data-tip="Verwijder annotatie"
            @click="deleteAnnotation()"
          >
            <trash-icon />
          </button>
        </div>
      </div>
      <div>
        <div class="annotation-body">
          <label class="label cursor-pointer" v-if="annotation">
            <input
              type="radio"
              :name="originalAnnotation.id"
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
            <button
              class="btn btn-circle btn-xs text-gray-500 btn-ghost tooltip tooltip-left z-[9999]"
              data-tip="Bewaar gewijzigde annotatie"
              @click="confirmAnnotation('modified')"
            >
              <SaveIcon />
            </button>
          </label>
          <hr />
          <label class="label cursor-pointer gap-2">
            <input
              v-if="annotation"
              type="radio"
              :name="originalAnnotation.id"
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
            <button
              v-if="annotation"
              class="btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]"
              data-tip="Bewaar originele annotatie"
              @click="confirmAnnotation('original')"
            >
              <SaveIcon />
            </button>
          </label>
        </div>
        <div>
          <ul>
            <li class="badge badge-xs" v-for="rule in appliedRules" :key="rule">{{ rule }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/16/solid";
import { AnnotatedText, type Line } from "@ghentcdh/vue-component-annotated-text";
import { ref, watch } from "vue";
import SaveIcon from "./SaveIcon.vue";
import type { AnnotationType, RuleAnnotation } from "../types/Annotation";
import { annotationHtmlColors } from "../styles/annotation-colors";
import { getAnnotatedLines } from "../utils/annotation_utils";
import type { ConfirmAnnotationType } from "../stores/annotation.store";

const selectedAnnotation = ref<ConfirmAnnotationType>();

interface AnnotationEditProps {
  annotation?: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  appliedRules: string[];
  textLines: Line[];
  selected: ConfirmAnnotationType;
  duplicates: string[];
  highlight: boolean;
}

const props = defineProps<AnnotationEditProps>();
const { originalAnnotation } = props;
const emit = defineEmits(["confirmAnnotation", "deleteAnnotation", "changeSelected", "onHighlight"]);

watch(
  () => props.selected,
  (newVal) => {
    selectedAnnotation.value = newVal;
  },
);

const confirmAnnotation = (type: ConfirmAnnotationType) => {
  emit("confirmAnnotation", originalAnnotation, type);
};

const deleteAnnotation = () => {
  emit("deleteAnnotation", originalAnnotation);
};

const getColor = () => {
  const type = originalAnnotation.type as AnnotationType;
  return `--text-color-custom:${annotationHtmlColors[type]}`;
};

const changeSelected = (type: ConfirmAnnotationType) => {
  selectedAnnotation.value = type === selectedAnnotation.value ? null : type;
};

const onHighlight = () => {
  emit("onHighlight", props.duplicates);
};
</script>
