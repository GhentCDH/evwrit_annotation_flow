<template>
  <div class="grid grid-cols-2 gap-2 overflow-auto h-full" v-if="textLines">
    <div class="border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed">
      <div class="text-lg font-bold">Originele Tekst</div>
      <TextAnnotation :annotations="originalAnnotations" :text-lines="textLines" :allow-edit="false" />
    </div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <TextAnnotation
        :annotations="processedAnnotations"
        :text-lines="textLines"
        :allow-edit="true"
        :snapper="snapper"
        @double-click-annotation="emit('showAnnotation', $event)"
        @modify-annotations="emit('modifyAnnotations', $event)"
        @processes-annotations="emit('processesAnnotation', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Line } from "@ghentcdh/vue-component-annotated-text";
import TextAnnotation from "./TextAnnotation.vue";
import { WordSnapper } from "../lib/snapper/WordSnapper";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationTextCompareProps {
  originalAnnotations: RuleAnnotation[];
  processedAnnotations: RuleAnnotation[];
  textLines: Line[];
  snapper?: WordSnapper;
}

const props = defineProps<AnnotationTextCompareProps>();

//#region Emit
const emit = defineEmits(["modifyAnnotations", "processesAnnotation", "showAnnotation"]);
// #endregion
</script>
