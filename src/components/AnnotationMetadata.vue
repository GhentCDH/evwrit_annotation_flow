<template>
  <p class="py-2">
    <strong class="underline">LineLinguisticCharacteristic:</strong>
    {{ annotation.metadata?.lineLinguisticCharacteristic }}
  </p>
  <strong class="underline">Metadata</strong>
  <ul class="text-sm text-content">
    <li v-for="property of annotation.properties" :key="property.id_name">
      <strong> {{ property.label }}:</strong> {{ property.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { RuleAnnotation } from "@/types/Annotation";

const props = defineProps<{ annotation: RuleAnnotation }>();
console.table(props.annotation.metadata);
</script>
