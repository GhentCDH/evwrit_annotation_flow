<template>
  <div class="p-2 flex flex-col gap-2">
    <div class="grid grid-cols-2 gap-2">
      <div v-for="field in fields" :key="field.id">
        <SearchField
          :id="field.id"
          :title="field.title"
          :aggregations="field.aggregations"
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
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
import { computed, ref } from "vue";
import SearchField from "./SearchField.vue";
import type { SearchAggregations } from "@/types/Search";

const props = defineProps<{
  aggregations?: SearchAggregations;
}>();

const searchConfig = {
  project: { id: "project", title: "Project" },
  level_category_category: { id: "level_category_category", title: "Text type" },
};

const searchModel = ref(
  Object.keys(searchConfig).reduce(
    (acc, key) => {
      acc[key] = [];
      return acc;
    },
    {} as Record<string, number[]>,
  ),
);

const fields = computed(() => {
  return Object.values(searchConfig).map((field) => {
    const aggregations = props.aggregations?.[field.id] ?? [];
    const model = ref(aggregations.filter((a) => a.active).map((a) => a.id));

    searchModel.value[field.id] = aggregations.filter((a) => a.active).map((a) => a.id);

    return {
      id: field.id,
      title: field.title,
      model,
      aggregations,
    };
  });
});

const emits = defineEmits(["search"]);

const onSearch = () => {
  const filterValues = searchModel.value;
  emits("search", filterValues);
};
</script>
