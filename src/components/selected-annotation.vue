<template>
  <div :id="view.view.viewerId"></div>
  <AnnotationMetadata :annotation="view.view.annotation.original" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import type { SingleAnnotationView } from "../stores/annotation-viewer.ts";

const props = defineProps<{
  view: { id: number; view: SingleAnnotationView };
}>();

onMounted(() => {
  props.view.view.initViewer();
});

onUnmounted(() => {
  props.view.view?.destroy();
});
</script>
