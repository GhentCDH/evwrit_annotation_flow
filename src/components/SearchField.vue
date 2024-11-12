<template>
  <div class="dropdown border w-full rounded px-2 py-1 text-sm">
    <div tabindex="0" role="button" class="h-full">
      {{ title }}:
      <span class="badge badge-ghost m-1" v-for="select of selected" :key="select.id">{{ select.name }}</span>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
      <li v-for="aggregation of aggregations" :key="aggregation.id">
        <label class="form-control">
          <input :value="aggregation.id" v-model="model" type="checkbox" class="checkbox checkbox-sm" />
          <span>{{ aggregation.name }}</span>
          <span class="badge badge-ghost">{{ aggregation.count }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { SearchAggregation } from "@/types/Search";

const props = defineProps<{
  title: string;
  id: string;
  aggregations?: SearchAggregation[];
}>();
const model = defineModel<number[]>();

const selected = computed(() => {
  const aggregations = props.aggregations ?? [];
  return model.value?.map?.((v) => aggregations.find((a) => a.id === v) as SearchAggregation);
});
</script>
