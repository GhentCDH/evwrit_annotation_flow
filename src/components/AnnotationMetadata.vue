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
    <template v-if="debug">
      <li>
        <hr />
        <strong class="text-warning">Debug</strong>
      </li>
      <li><strong>Has override</strong>: {{ annotation.hasOverride }}</li>
      <li><strong>Id</strong>: {{ annotation.id }}</li>
      <li>
        <strong>original start/stop</strong>: {{ annotation.start }} -
        {{ annotation.end }}
      </li>
      <li>
        <strong>corrected start/stop</strong>: {{ modified?.start }} -
        {{ modified?.end }}
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { useQueryParams } from "../stores/query-params.store.ts";
import type { RuleAnnotation } from "@/types/Annotation";

defineProps<{ annotation: RuleAnnotation; modified?: RuleAnnotation }>();

const debug = useQueryParams().get("debug");
</script>
