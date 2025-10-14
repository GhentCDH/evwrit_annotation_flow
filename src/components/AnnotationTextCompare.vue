<template>
  <div class="grid grid-cols-2 gap-2 overflow-auto h-full">
    <div class="border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed">
      <div class="text-lg font-bold">Originele Tekst</div>
      <div :id="annotationView.viewerId" />
    </div>
    <div>
      <div class="text-lg font-bold">Verwerkte Tekst</div>
      <div :id="annotationView.editId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

interface AnnotationTextCompareProps {
  annotationView: any;
}

const props = defineProps<AnnotationTextCompareProps>();

onMounted(() => {
  props.annotationView.initViewer();
  props.annotationView.initEditor();
});

onUnmounted(() => {
  props.annotationView.destroy();
});
</script>
