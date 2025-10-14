<template>
  <div :id="view.viewerId"></div>
  <AnnotationMetadata :annotation="view.annotation.original" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AnnotationMetadata from "./AnnotationMetadata.vue";
import type { SingleAnnotationView } from "../stores/annotation-viewer.ts";

const props = defineProps<{
  view: SingleAnnotationView;
}>();

onMounted(() => {
  props.view.initViewer();
});

onUnmounted(() => {
  props.view.destroy();
});
</script>
