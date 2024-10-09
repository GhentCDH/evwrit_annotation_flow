<template>
  <div class="card border rounded-md">
    <div class="card-body p-4">
      <h2 class="card-title">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>

</template>

<script setup lang="ts">
interface CardProps {
  title: string
}

const props = defineProps<CardProps>();
</script>
