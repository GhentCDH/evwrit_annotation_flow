<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import {
  type AnnotatedText,
  type Annotation,
  createAnnotatedText,
  type SnapperAction,
  type SnapperFn,
  TextLineAdapter,
  WordSnapper,
} from "@ghentcdh/vue-component-annotated-text";
import { pick } from "lodash-es";
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUnmounted, ref, watch } from "vue";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationEditProps {
  limit?: { start: number; end: number };
  annotations: RuleAnnotation[];
  text: string;
  allowEdit?: boolean;
}

const props = defineProps<AnnotationEditProps>();
// TODO this should go directly to the storre
const emit = defineEmits(["modifyAnnotations", "processesAnnotation", "doubleClickAnnotation"]);

const editMode = ref(false);

//#region edit annotations

const fixOffsetSnapper: SnapperFn = (action: SnapperAction, annotation: Annotation) => {
  // if (!props.snapper?.fixOffset) {
  //   console.warn("No snapper provided for fixOffsetSnapper");
  //   return pick(annotation, ["start", "end"]);
  // }
  // const result = props.snapper!.fixOffset(annotation.start, annotation.end);
  //
  // if (result.modified) {
  //   emit("modifyAnnotations", { ...result, id: annotation.id });
  // }
  // return pick(result, ["start", "end"]);
};

const id = `annotated-edit-${uuidv4()}`;
let textAnnotation: AnnotatedText<Annotation>;

onMounted(() => {
  const limit = props.limit ? pick(props.limit, ["start", "end"]) : undefined;

  textAnnotation = createAnnotatedText(id, {
    text: TextLineAdapter({ limit }),
    annotation: {
      edit: props.allowEdit,
      create: false,
      snapper: new WordSnapper(),
    },
  })
    .setText(props.text, false)
    .setAnnotations(props.annotations)
    .on("double-click", ({ data }) => {
      // Emit the double click event to the parent component
      emit("doubleClickAnnotation", data.annotation);
    })
    .on("annotation-edit--start", ({}) => {
      editMode.value = true;
    })
    .on("annotation-edit--move", ({ data }) => {
      emit("modifyAnnotations", pick(data.annotation, ["id", "start", "end"]));
    })
    .on("annotation-edit--end", ({ data }) => {
      editMode.value = false;
      // Emit the double click event to the parent component
      emit("processesAnnotation", pick(data.annotation, ["id", "start", "end"]));
    });
});

watch(
  () => props.text,
  (text: string) => {
    // Only update annotations if not in edit mode
    if (editMode.value) return;
    textAnnotation?.setText(text);
  },
  { deep: true },
);

watch(
  () => props.limit,
  () => {
    // Only update annotations if not in edit mode
    if (editMode.value) return;
    const limit = props.limit ? pick(props.limit, ["start", "end"]) : undefined;
    textAnnotation?.changeTextAdapterConfig("limit", limit);
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
