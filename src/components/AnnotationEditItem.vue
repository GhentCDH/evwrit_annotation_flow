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
        <TextAnnotation
          :annotations="[annotation]"
          :limit="annotation"
          :text="text"
          :allow-edit="allowEdit ?? false"
          :annotation-id="allowEdit ? annotation.id : `read-only${annotation.id}`"
          :full-text-id="textId"
          @modify-annotations="emit('modifyAnnotations', $event)"
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
import TextAnnotation from "./TextAnnotation.vue";
import SaveIcon from "./SaveIcon.vue";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationEditProps {
  textId: number;
  annotation: RuleAnnotation;
  tip: string;
  selectedAnnotation: boolean;
  disabled: boolean;
  text: string;
  allowEdit?: boolean;
}

defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "changeSelected", "modifyAnnotations"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation");
};

const changeSelected = () => {
  emit("changeSelected");
};
</script>
