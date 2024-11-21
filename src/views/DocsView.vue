<template>
  <div class="m-4 prose">
    <div v-html="markdown"></div>
  </div>
</template>

<script setup lang="ts">
import { marked } from "marked";
import { ref } from "vue";

const markdown = ref("");

fetch("../docs/rules.md")
  .then((response) => response.text())
  .then((text) => marked(text))
  .then((text) => {
    markdown.value = text;
  });
</script>
