<template>
  <div>
    <label class="label cursor-pointer gap-2">
      <input
        type="radio"
        :name="annotationView?.id"
        class="radio radio-success"
        :disabled="disabled"
        :checked="selectedAnnotation"
        @click="changeSelected"
      />
      <div class="w-full">
        <div :id="viewId" />
      </div>
      <button
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
import { onMounted, onUnmounted } from "vue";
import SaveIcon from "./SaveIcon.vue";
import { SingleAnnotationView } from "../stores/annotation-viewer";

interface AnnotationEditProps {
  tip: string;
  selectedAnnotation: boolean;
  disabled: boolean;
  allowEdit?: boolean;
  annotationView: SingleAnnotationView;
  viewId: string;
}

const props = defineProps<AnnotationEditProps>();
const emit = defineEmits(["confirmAnnotation", "changeSelected"]);

const confirmAnnotation = () => {
  emit("confirmAnnotation");
};

const changeSelected = () => {
  emit("changeSelected");
};

onMounted(() => {
  props.annotationView.init(props.viewId);
});

onUnmounted(() => {
  props.annotationView?.destroy(props.viewId);
});
</script>
