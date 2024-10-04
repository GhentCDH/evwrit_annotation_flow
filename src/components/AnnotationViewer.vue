<template>
      <div class="annotation-body">
        <!-- Gewijzigde annotatie -->
        <AnnotatedText
          :annotations="[annotation]"
          :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines" 
          :allow-edit="false"
        />
        <hr/>
        <!-- Originele annotatie -->
        <AnnotatedText
          :annotations="[originalAnnotation]"
          :lines="getAnnotatedLines(textLines, originalAnnotation.start, originalAnnotation.end).lines"
          :allow-edit="false"
        />
      </div>
</template>
  
<script setup>
  import { AnnotatedText } from '@ghentcdh/vue-component-annotated-text';
  import { getAnnotatedLines } from './../annotation_utils';
  const props = defineProps({
    annotation: Object,  
    originalAnnotation: Object, 
    textLines: Array,  
  });
</script>