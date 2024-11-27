<template>
  <div v-if="multi" class="dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center">
    <div tabindex="0" role="button" class="h-full w-full">
      {{ title }}:
      <span class="badge badge-ghost m-1" v-for="select of selected" :key="select.id">{{ select.name }}</span>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
      <li v-for="aggregation of filterValues" :key="aggregation.id">
        <label class="form-control">
          <input :value="aggregation.id" v-model="model" type="checkbox" class="checkbox checkbox-sm" />
          <span>{{ aggregation.name }}</span>
        </label>
      </li>
    </ul>
  </div>
  <div v-else>
    <label class="border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center">
      <div class="w-full">{{ title }}:</div>
      <select class="select s w-full max-w-xs" @change="changeValue($event)">
        <option
          v-for="aggregation of filterValues"
          :key="aggregation.id"
          :selected="model?.[0] == aggregation.id"
          :value="aggregation.id"
          @click="changeValue(aggregation.id)"
        >
          {{ aggregation.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Filter } from "@/types/Search";

const props = defineProps<{
  title: string;
  id: string;
  multi?: boolean;
  filterValues?: Filter[];
}>();
const model = defineModel<number[]>();

const selected = computed(() => {
  const filters = props.filterValues ?? [];
  return model.value?.map?.((v) => filters.find((a) => a.id == v) as Filter).filter((value) => !!value);
});

const changeValue = (event: any) => {
  const id = event.target.value;

  if (id === null) model.value = [];
  else model.value = [id];
};
</script>
