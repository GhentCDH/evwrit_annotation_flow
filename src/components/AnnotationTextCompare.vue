<template>
  <div class="grid grid-cols-2 gap-2 overflow-auto h-full" v-if="text">
    <div class="border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed">
      <div class="text-lg font-bold">Originele Tekst</div>
      <TextAnnotation
        :full-text-id="textId"
        :text="text"
        :annotations="originalAnnotations"
        :allow-edit="false"
        :annotation-id="'original-text' + textId"
      />
    </div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <TextAnnotation
        :full-text-id="textId"
        :text="text"
        :annotations="processedAnnotations"
        :allow-edit="true"
        @double-click-annotation="emit('showAnnotation', $event)"
        @modify-annotations="emit('modifyAnnotations', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TextAnnotation from "./TextAnnotation.vue";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationTextCompareProps {
  originalAnnotations: RuleAnnotation[];
  processedAnnotations: RuleAnnotation[];
  text: string;
  textId: number;
}

defineProps<AnnotationTextCompareProps>();

//#region Emit
const emit = defineEmits(["modifyAnnotations", "showAnnotation"]);
// #endregion
</script>
