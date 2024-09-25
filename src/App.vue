<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue'
import {UpdateAnnotationState} from "@ghentcdh/vue-component-annotated-text"
import {AnnotatedText, type Annotation} from '@ghentcdh/vue-component-annotated-text'
//import Annotation from 'styles/Annotation.css';
import {type Line} from '@ghentcdh/vue-component-annotated-text'
import { 
  fetchAnnotations,
  normalizedAnnotationsMap,
  dataAnnotationsMap,
  processedAnnotaionsMap,
  textLines,
  snapper,
  getAnnotatedLines,
  modifiedAnnotations,
  confirmAnnotations,
  clearAllAnnotations,
  confirmSelectedAnnotations,
  selectedAnnotations,
} from './annotation_utils';
const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];
let selectedFilters = ref<string[]>([]);
const textId = ref<number | null>(72423); 
const filteredDataAnnotaitons = computed(() => filterAnnotations(normalizedAnnotationsMap.value, selectedFilters.value));
const filteredProcessedAnnotaions = computed(() =>filterAnnotations(processedAnnotaionsMap.value, selectedFilters.value));



const filterAnnotations = (annotationsMap: Map<any, any>, selectedFilters: string[]) => {
    if (!annotationsMap.size) return [];
    if (selectedFilters.length === 0) return Array.from(annotationsMap.values());
    console.log('id', annotationsMap.values().next().value);
    return Array.from(annotationsMap.values()).filter((annotation: any) =>
      selectedFilters.includes(dataAnnotationsMap.value.get(annotation.id)?.type || '')
    );
};

onMounted(() => {
  if (textId.value !== null)
    fetchAnnotations(textId.value.toString());
});
watch(textId, (newId) => {
  if (newId !== null) 
    fetchAnnotations(newId.toString());
});

const onAnnotationUpdateBegin = function (updateState : UpdateAnnotationState) {
  //console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotations.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmStartUpdating();
};

const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotations.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmUpdate();
};

const onAnnotationUpdateEnd = function (updateState : UpdateAnnotationState) {
  console.log("** Edited: ", updateState.annotation);
  processedAnnotaionsMap.value.set(updateState.annotation.id, updateState.annotation);

};
</script>

<template>
  <div>
    <label for="textId">Text ID </label>
    <input type="number" v-model="textId" id="textId" placeholder="Tekst-ID" />
  </div>
  <div>
    <header>
      <div class="checkbox-container">
        <div v-for="type in filterTypes" :key="type">
        <input 
          type="checkbox" 
          :id="type" 
          :value="type" 
          v-model="selectedFilters" 
        />
        <label :for="type">
          {{ type }}
        </label>
        </div>
      </div>
    </header>

    <div class="texts-container">
    <div class="text-column">
      <h3>Originele Tekst</h3>
      <AnnotatedText :annotations="filteredDataAnnotaitons" :lines="textLines"/>
    </div>
    <div class="text-column">
      <h3>Verwerkte Tekst</h3>
      <AnnotatedText 
        :component-id="1"
        :annotations="filteredProcessedAnnotaions" 
        :lines="textLines"
        :allow-edit="true"
        :listen-to-on-update-start="true"
        :listen-to-on-updating="true"
        @annotation-update-begin="onAnnotationUpdateBegin"
        @annotation-updating="onAnnotationUpdating"
        @annotation-update-end="onAnnotationUpdateEnd"/>
    </div>
    <div class="text-column">
  <h3>Aangepaste Annotaties</h3>
  <button @click="confirmAnnotations">Bevestig Alles</button>
  <button @click="clearAllAnnotations">Verwijder Alles</button>
  <button @click="confirmSelectedAnnotations">Bevestig Aangevinkte</button>
  <div class="annotated-line" v-for="(annotation, index) in Array.from(modifiedAnnotations.values())" 
  :key="annotation.id">
  <label>
        <input type="checkbox" v-model="selectedAnnotations[index]" />

      </label>
    <AnnotatedText 
      :component-id="index"
      :annotations="[annotation]"
      :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines" 
      :allow-edit="true"
      :listen-to-on-update-start="true"
      :listen-to-on-updating="true"
      @annotation-update-begin="onAnnotationUpdateBegin"
      @annotation-updating="onAnnotationUpdating"
      @annotation-update-end="onAnnotationUpdateEnd"/>
  </div>
  </div>
  </div>
  </div>
</template>
