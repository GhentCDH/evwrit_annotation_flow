<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue'
import {type dataAnnotation ,type AnnotationTarget} from './types/Annotation';
import {WordSnapper} from './stores/snapper'
import {AnnotationRepository} from './stores/annotationRepository';
import {AnnotationTextRule, TokenizeRule } from './annotation_utilities';
import {textToLines, createWordBoundaryMaps, shiftUpdateToWordBoundary, type AnnotationFix} from './text_utilities';
import {UpdateAnnotationState} from "@ghentcdh/vue-component-annotated-text"
import {AnnotatedText, type Annotation} from '@ghentcdh/vue-component-annotated-text'
//import Annotation from 'styles/Annotation.css';

const data = ref<any>(null); // Variabele voor het object zelf
const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];
const textId = ref<number | null>(72423); 
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
const selectedFilters = ref<string[]>([]);
let annotationRepository : AnnotationRepository;
let snapper : WordSnapper;
//Annotation objecten
const processedAnnotaionsMap = ref<Map<string, Annotation>>(new Map()); 
const dataAnnotationsMap = ref<Map<string, any>>(new Map()); // Nieuwe variabele voor de Map van annotaties
const normalizedAnnotationsMap = ref<Map<string, any>>(new Map());  
 
//computed properties
const filteredDataAnnotaitons = computed(() => filterAnnotations(normalizedAnnotationsMap.value, selectedFilters.value));
const filteredProcessedAnnotaions = computed(() => filterAnnotations(processedAnnotaionsMap.value, selectedFilters.value));

const textLines = computed(() => 
  textToLines(text.value)
);
// Functies voor het verwerken van annotaties
const createTypedAnnotation = (annotation: any, ruleApplied: boolean = false) : Annotation => {
  const annotationClass = ruleApplied ? 'annotation--rule-applied' : 'annotation--color-1';
  return {
    id: annotation.id,  
    start: annotation.start,
    end: annotation.end,
    class: annotationClass,
    target: annotation.target,
  };
};

const normalizeAnnotaion = (annotation: any) : dataAnnotation=> {
  const textLength = annotation.text_selection.selection_end - annotation.text_selection.selection_start;
  const annotationTarget = (textLength > 130 ? 'gutter' : 'text') as AnnotationTarget;
  const startIndex = annotation.text_selection.selection_start - 1;  // 0-gebaseerde index
  const endIndex = annotation.text_selection.selection_end - 1;

  const selectedText = text.value ? text.value.slice(startIndex, endIndex) : '';
  return {
    id: annotation.id,  
    start: annotation.text_selection.selection_start,
    end: annotation.text_selection.selection_end,
    class: 'annotation--color-1',
    label: annotation.type,  
    target: annotationTarget, 
    metadata: {
      text: selectedText,
      id: annotation.id,
      index: annotation.index
    }
  };
};

// haal data op
const fetchAnnotations = async (id: string) => {
  try {
    const response = await fetch(`/text/${id}/annotations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let result = await response.json();

    console.log(result);
    const map = new Map();
    const processedAnnotations = new Map();
    const normalizedAnnotaions = new Map();

    const annotationTextRule = new TokenizeRule(text.value, 3);
    result.annotations.forEach((annotation: any) => {
      map.set(annotation.id, (annotation));

      const normalizedAnnotation = normalizeAnnotaion(annotation);
      const typedAnnotation = createTypedAnnotation(normalizedAnnotation);
      const processedAnnotation = annotationTextRule.apply(normalizedAnnotation);

      normalizedAnnotaions.set(annotation.id, typedAnnotation);
      processedAnnotations.set(annotation.id, createTypedAnnotation(processedAnnotation.annotation, processedAnnotation.rule_applied));

    });
    //annotations indexes zoals in de data
    dataAnnotationsMap.value = map;
    normalizedAnnotationsMap.value = normalizedAnnotaions;

    processedAnnotaionsMap.value = processedAnnotations;

    text.value = result.text;
    snapper = new WordSnapper(text.value);

    data.value = result;
  } catch (err) {
    error.value = String(err); 
  } finally {
    loading.value = false;  
  }
};

onMounted(() => {
  if (textId.value !== null) {
    fetchAnnotations(textId.value.toString());
  }
});
watch(textId, (newId) => {
  if (newId !== null) {
    fetchAnnotations(newId.toString());
  }
});


const filterAnnotations = (annotationsMap: Map<any, any>, selectedFilters: string[]) => {
  if (!annotationsMap.size) return [];
  if (selectedFilters.length === 0) return Array.from(annotationsMap.values());

  return Array.from(annotationsMap.values()).filter((annotation: any) =>
    selectedFilters.includes(dataAnnotationsMap.value.get(annotation.id).type) // Filter op basis van het type
  );
};

const onAnnotationUpdateBegin = function (updateState : UpdateAnnotationState) {
  console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;

  updateState.confirmStartUpdating();
};

const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  /*const result = shiftUpdateToWordBoundary(
    updateState.newStart, 
    updateState.newEnd, 
    mapStartCharIndex, 
    mapStopCharIndex
  );*/
  updateState.confirmUpdate();
};

const onAnnotationUpdateEnd = function (updateState : UpdateAnnotationState) {
  console.log("** Edited: ", updateState.annotation);
  processedAnnotaionsMap.value.set(updateState.annotation.id, updateState.annotation); // Edit application state
  //props.annoList = Array.from(annotations.values());
  
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
  </div>

  </div>
</template>
