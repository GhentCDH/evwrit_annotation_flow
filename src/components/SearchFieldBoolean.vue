<template>
  <div class="form-control w-min">
    <label class="label cursor-pointer gap-2">
      <span class="label-text truncate">{{ title }}</span>
      <input type="checkbox" v-model="model" class="checkbox" />
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  id: string;
}>();
const model = defineModel<number[]>();
</script>
