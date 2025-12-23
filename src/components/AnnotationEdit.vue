<template>
  <div
    :class="[
      `grid gap-2 `,
      { 'grid-cols-1': !showMetadata, 'grid-cols-2': showMetadata },
    ]"
  >
    <div
      class="card border rounded-md w-full"
      :class="{
        'border-black': highlight,
        shadow: highlight,
        'opacity-20': disabled,
      }"
      v-if="view"
    >
      <div class="card-body p-2">
        <div role="alert" class="alert alert-error" v-if="error">
          Annotatie niet bewaard, probeer opnieuw.
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 justify-center">
            <button
              class="badge badge-outline badge-sm text-color-custom cursor-pointer"
              :style="getColor()"
              @click="onHighlightAnnotation"
            >
              {{ view.annotation.original.type }}
            </button>
            <button
              v-if="view.annotation.duplicates.length > 1"
              class="badge badge-sm badge-warning cursor-pointer"
              @click="onHighlight()"
            >
              Duplicaat? ({{ view.id }})
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
          <AnnotationEditItem
            v-if="view.displayEdit"
            :annotation-view="view"
            :view-id="view.editId"
            tip="Bewaar gewijzigde annotatie"
            :selected-annotation="selectedAnnotation === 'modified'"
            :disabled="disabled"
            :allow-edit="true"
            @change-selected="changeSelected('modified')"
            @confirm-annotation="confirmAnnotation('modified')"
          />
          <hr />
          <AnnotationEditItem
            :annotation-view="view"
            :annotationId="view.id"
            :view-id="view.viewerId"
            tip="Bewaar originele annotatie"
            :selected-annotation="selectedAnnotation === 'original'"
            :disabled="disabled"
            @change-selected="changeSelected('original')"
            @confirm-annotation="confirmAnnotation('original')"
          />
        </div>
        <div class="flex items-center">
          <ul class="flex-grow">
            <li
              class="badge badge-xs"
              v-for="rule in view.annotation.appliedRules"
              :key="rule"
            >
              {{ rule }}
            </li>
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
          {{ view.metadata?.lineLinguisticCharacteristic }}
        </p>
      </div>
    </div>
    <div v-if="showMetadata">
      <AnnotationMetadata
        :annotation="view.annotation.original"
        :modified="view.annotation.processed"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { TrashIcon } from "@heroicons/vue/16/solid";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import AnnotationEditItem from "./AnnotationEditItem.vue";
import type { ConfirmAnnotationType } from "../stores/annotation.store";
import { SingleAnnotationView } from "../stores/annotation-viewer.ts";
import { annotationHtmlColors } from "../styles/annotation-colors.ts";
import type { AnnotationType } from "@/types/Annotation.ts";

const selectedAnnotation = ref<ConfirmAnnotationType>();

interface AnnotationEditProps {
  selected: ConfirmAnnotationType;
  highlight: boolean;
  showMetadata: boolean;
  view: SingleAnnotationView;
}

const props = defineProps<AnnotationEditProps>();
const emit = defineEmits([
  "confirmAnnotation",
  "deleteAnnotation",
  "changeSelected",
  "onHighlight",
  "highlightAnnotation",
]);

const error = computed(() => props.view.annotation.error.value);
const disabled = computed(
  () => props.view.annotation.error.value || props.view.annotation.saving.value,
);

watch(
  () => props.selected,
  (newVal) => {
    selectedAnnotation.value = newVal;
  },
);

const confirmAnnotation = (type: ConfirmAnnotationType) => {
  emit("confirmAnnotation", type);
};

const deleteAnnotation = () => {
  emit("deleteAnnotation");
};

const getColor = () => {
  const type = props.view.annotation.original.type as AnnotationType;
  return `--text-color-custom:${annotationHtmlColors[type]}`;
};

const changeSelected = (type: ConfirmAnnotationType) => {
  selectedAnnotation.value = type === selectedAnnotation.value ? null : type;
  emit("changeSelected", type);
};

const onHighlight = () => {
  emit("onHighlight", props.view.annotation.duplicates);
};

const onHighlightAnnotation = () => {
  emit("highlightAnnotation");
};
</script>
