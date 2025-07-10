<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import {
  type AnnotatedText,
  type Annotation,
  createAnnotatedText,
  getAnnotatedText,
  TextLineAdapter,
  WordSnapper,
} from "@ghentcdh/vue-component-annotated-text";
import { pick } from "lodash-es";
import { onMounted, onUnmounted, ref, watch } from "vue";
import type { RuleAnnotation } from "../types/Annotation";

interface AnnotationEditProps {
  fullTextId?: string | number;
  annotationId?: string | number;
  limit?: { start: number; end: number };
  annotations: RuleAnnotation[];
  text: string;
  allowEdit?: boolean;
}

const props = defineProps<AnnotationEditProps>();
// TODO this should go directly to the storre
const emit = defineEmits(["modifyAnnotations", "doubleClickAnnotation"]);

const editMode = ref(false);

//#region edit annotations
const getId = (annotationId: string | number | null | undefined) => {
  return `annotated-edit--${annotationId}`;
};
const id = getId(props.annotationId ?? props.fullTextId);
let textAnnotation: AnnotatedText<Annotation>;

onMounted(() => {
  console.log(id);
  console.log(props.fullTextId);
  console.log(props.annotationId);

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
      console.log("annotation-edit--move", data);
      const annotation = data.annotation;
      const annotatedTextId = getId(props.annotationId ? props.fullTextId : annotation.id);
      console.log(annotatedTextId);
      try {
        const createAnnotation = getAnnotatedText(annotatedTextId);
        if (!createAnnotation) {
          // If the annotated text is hidden do nothing
          console.warn("No annotated text found for id:", annotatedTextId);

          return;
        }
        if (!props.annotationId) {
          // If we are editing the full text, we need to update the limit
          const limit = pick(annotation, ["start", "end"]);
          // createAnnotation?.changeTextAdapterConfig("limit", limit);
        }
        createAnnotation.updateAnnotation(annotation.id, annotation);
      } catch (error) {
        console.log(error);
      }
    })
    .on("annotation-edit--end", ({ data }) => {
      console.log("annotation-edit--end", data);
      editMode.value = false;
      // Emit the double click event to the parent component
      emit("modifyAnnotations", pick(data.annotation, ["id", "start", "end"]));
    });
});

watch(
  () => props.text,
  (text: string) => {
    // Only update annotations if not in edit mode
    if (editMode.value) return;
    try {
      textAnnotation?.setText(text);
    } catch (error) {
      console.error("Error setting text in textAnnotation:", error);
    }
  },
  { deep: true },
);

watch(
  () => props.limit,
  (prev, current) => {
    console.log("change the limit", props.limit);
    console.log(prev, current, editMode.value);
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
