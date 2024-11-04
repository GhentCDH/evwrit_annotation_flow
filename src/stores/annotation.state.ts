import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";

export const useAnnotationStore = defineStore("annotationStore", () => {
  const route = useRoute();
  const router = useRouter();
  const loading = ref(true);
  const text = ref<string>("");
  const id = ref(Number(route.params.id));

  const changeId = (newId: number) => {
    id.value = newId;
    return router.push({ name: "annotation", params: { id: newId }, query: route.query });
  };

  return { id, loading, text, changeId };
});
