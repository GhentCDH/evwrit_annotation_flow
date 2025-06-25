<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import {
  type Annotation,
  createAnnotatedText,
  CreateAnnotations,
  type Line,
  type SnapperAction,
  type SnapperFn,
} from "@ghentcdh/vue-component-annotated-text";
import { pick } from "lodash-es";
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUnmounted, ref, watch } from "vue";
import type { RuleAnnotation } from "../types/Annotation";
import { WordSnapper } from "../lib/snapper";

interface AnnotationEditProps {
  annotations: RuleAnnotation[];
  textLines: Line[];
  allowEdit?: boolean;
  snapper?: WordSnapper;
}

const props = defineProps<AnnotationEditProps>();
// TODO this should go directly to the storre
const emit = defineEmits(["modifyAnnotations", "processesAnnotation", "doubleClickAnnotation"]);

const editMode = ref(false);

//#region edit annotations

const fixOffsetSnapper: SnapperFn = (action: SnapperAction, annotation: Annotation) => {
  if (!props.snapper?.fixOffset) {
    console.warn("No snapper provided for fixOffsetSnapper");
    return pick(annotation, ["start", "end"]);
  }
  const result = props.snapper!.fixOffset(annotation.start, annotation.end);

  if (result.modified) {
    emit("modifyAnnotations", { ...result, id: annotation.id });
  }
  return pick(result, ["start", "end"]);
};

const id = `annotated-edit-${uuidv4()}`;
let textAnnotation: CreateAnnotations<Line, Annotation>;

onMounted(() => {
  textAnnotation = createAnnotatedText(id, {
    annotation: {
      edit: props.allowEdit,
      create: false,
      snapper: fixOffsetSnapper.bind(this),
    },
  })
    .setLines(props.textLines, false)
    .setAnnotations(props.annotations)
    .on("double-click", ({ data }) => {
      // Emit the double click event to the parent component
      emit("doubleClickAnnotation", data.annotation);
    })
    .on("annotation-edit--start", ({}) => {
      editMode.value = true;
    })
    .on("annotation-edit--end", ({ data }) => {
      editMode.value = false;
      // Emit the double click event to the parent component
      emit("processesAnnotation", pick(data.annotation, ["id", "start", "end"]));
    });
});

watch(
  () => props.textLines,
  (textLines: Line) => {
    // Only update annotations if not in edit mode
    if (editMode.value) return;
    textAnnotation?.setLines(textLines);
  },
  { deep: true },
);

watch(
  () => props.annotations,
  (annotations: RuleAnnotation[]) => {
    // Only update annotations if not in edit mode
    if (editMode.value) return;
    textAnnotation?.setAnnotations(annotations);
  },
  { deep: true },
);

onUnmounted(() => {
  textAnnotation.destroy();
});
// #endregion
</script>
