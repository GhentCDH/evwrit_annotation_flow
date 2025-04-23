<template>
  <div class="p-2 flex flex-col gap-2">
    <div class="grid grid-cols-2 gap-2">
      <div v-for="field in fields" :key="field.id" :class="{ 'col-span-2': field.multi }">
        <SearchField
          :id="field.id"
          :title="field.title"
          :filterValues="field.filterValues"
          :multi="field.multi"
          v-model="searchModel[field.id]"
        />
      </div>
    </div>
    <div>
      <button class="btn btn-sm" @click="onSearch">
        <magnifying-glass-icon class="h-6" />
        Search
      </button>
    </div>
    <div class="flex gap-2 items-center">
      <label
        class="input input-sm input-bordered border w-64 rounded px-2 py-1 text-sm min-h-12 flex items-center gap-2"
      >
        <span>EvwritId: </span>
        <input v-model="evwritId" type="number" class="grow" />
      </label>
      <button class="btn btn-sm" @click="onSearchId" :disabled="!evwritId">
        <magnifying-glass-icon class="h-6" />
        Zoek op id
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import SearchField from "./SearchField.vue";
import type { Filters, SearchFilter } from "@/types/Search";

const props = defineProps<{
  searchFilters?: SearchFilter[];
  filters?: Filters;
}>();

const searchConfig: Record<keyof Filters, { id: string; title: string; multi?: boolean }> = {
  project: { id: "project", title: "Project", multi: true },
  level_category_category: { id: "level_category_category", title: "Text type", multi: true },
  era: { id: "era", title: "Era", multi: true },
  flag_review_done: { id: "flag_review_done", title: "Tekst verwerkt" },
  flag_needs_attention: { id: "flag_needs_attention", title: "Vereist aandacht" },
};

const searchModel = ref(
  Object.keys(searchConfig).reduce(
    (acc, key) => {
      acc[key] = [];
      return acc;
    },
    {} as Record<string, Array<any>>,
  ),
);
const evwritId = ref<number | null>(null);

const fields = computed(() => {
  return Object.values(searchConfig).map((field) => {
    const fieldId = field.id as keyof Filters;
    const values = props.searchFilters?.find((f) => f.id === fieldId)?.value ?? [];
    const filterValues = props.filters?.[fieldId] ?? [];
    const model = ref(values);
    const type = (field as any).type || null;

    searchModel.value[field.id] = values;

    return {
      ...field,
      type,
      model,
      filterValues,
    };
  });
});

const emits = defineEmits(["search"]);

const onSearch = () => {
  const filterValues = searchModel.value;
  emits("search", filterValues);
};

const router = useRouter();

const onSearchId = () => {
  router.push({ name: "annotation", params: { id: evwritId.value } });
};
</script>
