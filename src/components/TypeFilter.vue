<template>
  <div class="flex justify-center items-center gap-4">
    <div class="font-bold">Filter:</div>
    <div v-for="type in annotationTypes" :key="type" class="form-control">
      <label :for="type" class="label cursor-pointer">
        <input class="checkbox" type="checkbox" :id="type" :value="type" v-model="model" />
        <span class="pl-2 label-text"> {{ type }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { annotationTypes } from "../types/Annotation";

const model = defineModel();
</script>
