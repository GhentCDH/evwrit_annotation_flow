<template>
  <div :class="[`grid gap-2 `, { 'grid-cols-1': !showMetadata, 'grid-cols-2': showMetadata }]">
    <div
      class="card border rounded-md w-full"
      :class="{ 'border-black': highlight, shadow: highlight, 'opacity-20': disabled }"
    >
      <div class="card-body p-2">
        <div role="alert" class="alert alert-error" v-if="error">Annotatie niet bewaard, probeer opnieuw.</div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 justify-center">
            <button
              class="badge badge-outline badge-sm text-color-custom cursor-pointer"
              :style="getColor()"
              @click="onHighlightAnnotation"
            >
              {{ originalAnnotation.type }}
            </button>
            <button
              v-if="duplicates.length > 1"
              class="badge badge-sm badge-warning cursor-pointer"
              @click="onHighlight()"
            >
              Duplicaat? ({{ originalAnnotation.id }})
            </button>
          </div>
          <div class="flex gap-2">
            <button
              :disabled="disabled"
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
            <AnnotationEditItem
              v-if="annotation"
              :annotation="annotation"
              tip="Bewaar gewijzigde annotatie"
              :selected-annotation="selectedAnnotation === 'modified'"
              :disabled="disabled"
              :text="text"
              :allow-edit="true"
              @change-selected="changeSelected('modified')"
              @confirm-annotation="confirmAnnotation('modified')"
              @modifyAnnotations="emit('modifyAnnotations', $event)"
              @processesAnnotation="emit('processesAnnotation', $event)"
            />
            <hr />
            <AnnotationEditItem
              :annotation="originalAnnotation"
              tip="Bewaar originele annotatie"
              :selected-annotation="selectedAnnotation === 'original'"
              :disabled="disabled"
              :text="text"
              @change-selected="changeSelected('original')"
              @confirm-annotation="confirmAnnotation('original')"
            />
          </div>
          <div class="flex items-center">
            <ul class="flex-grow">
              <li class="badge badge-xs" v-for="rule in appliedRules" :key="rule">{{ rule }}</li>
            </ul>
            <router-link
              class="badge badge-info badge-xs badge-outline tooltip tooltip-left"
              data-tip="Info over regels"
              :to="{ name: 'docs' }"
              target="_blank"
            >
              i
            </router-link>
          </div>
          <p class="pt-2 text-sm text-gray-400">
            <strong class="underline">LineLinguisticCharacteristic:</strong>
            {{ annotation?.metadata?.lineLinguisticCharacteristic }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="showMetadata">
      <AnnotationMetadata :annotation="originalAnnotation" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/16/solid";
import { ref, watch } from "vue";
import AnnotationEditItem from "./AnnotationEditItem.vue";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import type { AnnotationType, RuleAnnotation } from "../types/Annotation";
import { annotationHtmlColors } from "../styles/annotation-colors";
import type { ConfirmAnnotationType } from "../stores/annotation.store";

const selectedAnnotation = ref<ConfirmAnnotationType>();

interface AnnotationEditProps {
  annotation?: RuleAnnotation;
  originalAnnotation: RuleAnnotation;
  appliedRules: string[];
  text: string;
  selected: ConfirmAnnotationType;
  duplicates: string[];
  highlight: boolean;
  disabled: boolean;
  error: boolean;
  showMetadata: boolean;
}

const props = defineProps<AnnotationEditProps>();
const { originalAnnotation } = props;
const emit = defineEmits([
  "confirmAnnotation",
  "deleteAnnotation",
  "changeSelected",
  "onHighlight",
  "modifyAnnotations",
  "processesAnnotation",
  "highlightAnnotation",
]);

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
  emit("changeSelected", originalAnnotation, type);
};

const onHighlight = () => {
  emit("onHighlight", props.duplicates);
};

const onHighlightAnnotation = () => {
  emit("highlightAnnotation", props.originalAnnotation);
};
</script>
