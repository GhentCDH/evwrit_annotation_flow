import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { textToLines } from "../text_utilities";

export const useAnnotationStore = defineStore("annotationStore", () => {
  const route = useRoute();
  const router = useRouter();
  const loading = ref(true);
  const text = ref<string>("");
  const textLines = computed(() => textToLines(useAnnotationStore.text.value));
  const id = ref(Number(route.params.id));

  const changeId = (newId: number) => {
    id.value = newId;
    return router.push({ name: "annotation", params: { id: newId }, query: route.query });
  };

  return { id, loading, text, textLines, changeId };
});
