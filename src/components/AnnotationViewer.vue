<template>

      <div class="annotation-body">
        <!-- Gewijzigde annotatie -->
        <AnnotatedText 
          :annotations="[annotation]"
          :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines" 
          :allow-edit="false"
        />
        <hr />
        <!-- Originele annotatie -->
        <AnnotatedText 
          :annotations="[originalAnnotation]"
          :lines="getAnnotatedLines(textLines, originalAnnotation.start, originalAnnotation.end).lines"
          :allow-edit="false"

        />
      </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { AnnotatedText } from '@ghentcdh/vue-component-annotated-text';
  import { getAnnotatedLines } from './../annotation_utils';
  // Props die vanuit het oudercomponent worden doorgegeven
  const props = defineProps({
    annotation: Object,  
    originalAnnotation: Object, 
    textLines: Array,  
  });
  </script>
  