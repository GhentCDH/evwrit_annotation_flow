<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue'
import {type dataAnnotation ,type AnnotationTarget} from './types/Annotation';
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
let mapStartCharIndex: { [index: number]: number; } ;
let mapStopCharIndex: { [index: number]: number; } ;

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
    const result = await response.json();
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

      //console.log('Processed Annotation:', processedAnnotation);  // Controleer de uitvoer van TokenizeRule
      //console.log('Normalized Annotation:', createTypedAnnotation(processedAnnotation.annotation, processedAnnotation.rule_applied));  // Controleer de uitvoer van normalizeAnnotaion
      
    });
    //annotations indexes zoals in de data
    dataAnnotationsMap.value = map;
    normalizedAnnotationsMap.value = normalizedAnnotaions;

    processedAnnotaionsMap.value = processedAnnotations;

    text.value = result.text;
    const maps = createWordBoundaryMaps(text.value);
    mapStartCharIndex = maps.mapStartCharIndexToToken;
    mapStopCharIndex = maps.mapStopCharIndexToToken;
    console.log('Map Start:', mapStartCharIndex);
    console.log('Map Stop:', mapStopCharIndex);
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
  const result = shiftUpdateToWordBoundary(
    updateState.newStart,
    updateState.newEnd, 
    mapStartCharIndex, 
    mapStopCharIndex
  ) as AnnotationFix;
  updateState.newStart = result.start;
  updateState.newEnd = result.end;

  updateState.confirmStartUpdating();
};

const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  console.log('Annotation updating:', updateState.annotation);
  const result = shiftUpdateToWordBoundary(
    updateState.newStart, 
    updateState.newEnd, 
    mapStartCharIndex, 
    mapStopCharIndex
  ) as AnnotationFix;
  updateState.newStart = result.start;
  updateState.newEnd = result.end;

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
        :debug="true"
        :verbose="true"
        :show-labels="true"
        :annotations="filteredProcessedAnnotaions" 
        :lines="textLines"
        :allow-edit="true"
        :listen-to-on-update-start="true"
        :listen-to-on-updating="true"
        :listen-to-on-key-pressed="true" 
        @annotation-update-begin="onAnnotationUpdateBegin"
        @annotation-updating="onAnnotationUpdating"
        @annotation-update-end="onAnnotationUpdateEnd"/>
    </div>
  </div>

  </div>
</template>

<style scoped>
/* Algemene instellingen voor de header */
header {
  padding: 20px 10px;
  background-color: #f8f9fa; /* Lichte achtergrondkleur voor de header */
  border-bottom: 1px solid #dee2e6; /* Lichte rand onder de header */
  display: flex;
  justify-content: center; /* Centreer de inhoud horizontaal */
  align-items: center; /* Centreer de inhoud verticaal */
}
/* Container voor de checkboxes */
.checkbox-container {
  display: flex;
  flex-wrap: wrap; /* Zorg ervoor dat de checkboxes naar de volgende regel verplaatsen indien nodig */
  gap: 15px; /* Ruimte tussen de checkboxes */
}
/* Stijl voor elk checkbox-item */
.checkbox-container div {
  display: flex;
  align-items: center; /* Zorg ervoor dat het label en de checkbox uitgelijnd zijn */
}
/* Stijl voor de checkbox zelf */
.checkbox-container input {
  margin-right: 8px; /* Ruimte tussen de checkbox en het label */
  cursor: pointer; /* Cursor verandert naar een pointer om aan te geven dat het klikbaar is */
}
/* Stijl voor de labels */
.checkbox-container label {
  font-size: 16px; /* Grotere tekstgrootte voor leesbaarheid */
  cursor: pointer; /* Cursor verandert naar een pointer om aan te geven dat het klikbaar is */
}
.texts-container {
  display: flex;
  justify-content: space-between;
}
.annotation--rule-applied {
  background-color: lightgreen;
  border: 2px solid green;
}
.text-column {
  width: 48%;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>