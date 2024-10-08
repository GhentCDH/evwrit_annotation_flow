<template>
  <div>
    <label for="textId">Text ID </label>
    <input type="number" @change="handleChangedId" :value="textId" id="textId" placeholder="Tekst-ID" />
  </div>
  <div>
    <header>
      <div class="checkbox-container">
        <div v-for="type in filterTypes" :key="type">
          <input type="checkbox" :id="type" :value="type" v-model="selectedFilters"/>
          <label :for="type"> {{ type }} </label>
        </div>
      </div>
    </header>
    <button class="primary-button" @click="showRuleModifiedAnnotations">
      {{ showModified ? 'Toon Alle Annotaties' : 'Toon Gewijzigde Annotaties' }}
    </button>
    <div class="texts-container">
      <div class="text-column">
        <h3>Originele Tekst</h3>
        <AnnotatedText :annotations="filteredDataAnnotations" :lines="textLines"/>
      </div>
      <div class="text-column">
        <h3>Verwerkte Tekst</h3>
        <AnnotatedText 
          :annotations="filteredProcessedAnnotations"
          :lines="textLines"
          :allow-edit="true"
          :listen-to-on-update-start="true"
          :listen-to-on-updating="true"
          @annotation-update-begin="onAnnotationUpdateBegin"
          @annotation-updating="onAnnotationUpdating"
          @annotation-update-end="onAnnotationUpdateEnd"/>
      </div>
      <div class="text-column">
        <h3 class="section-title">Aangepaste Annotaties</h3>
        <div class="action-buttons">
          <button class="primary-button" @click="confirmAllAnnotations">Bevestig Alles</button>
          <button class="primary-button" @click="confirmSelectedAnnotations">Bevestig Aangevinkte</button>
          <button class="primary-button" @click="toggleSelectAll">
            {{ allSelected ? 'Deselecteer' : 'Selecteer' }} Alle Annotaties
          </button>
          <button class="secondary-button" @click="clearAllAnnotations">Annuleer Alle wijzigingen</button>
        </div>

        <div class="annotated-line" v-for="(annotation) in filteredModifiedAnnotations" :key="annotation.id">
          <div class="annotation-header">
            <label>
              <input type="checkbox" :value="annotation.id" v-model="selectedAnnotationIds" />
            </label>
            <div class="annotation-actions">
              <input type="button" value="✔️"  @click="confirmAnnotation(annotation)" />
              <input type="button" value="✖️" @click="cancelAnnotation(annotation)" />
            </div>
          </div>
            <AnnotationViewer :annotation="annotation" :originalAnnotation="getOriginalAnnotation(annotation.id)" :textLines="textLines"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, computed, watch} from 'vue'
import {AnnotatedText, type Annotation, UpdateAnnotationState} from '@ghentcdh/vue-component-annotated-text'
import {AnnotationRepository} from './stores/annotationRepository';
import {textToLines} from './text_utilities';
import {normalizeAnnotaion} from './annotation_utils';
import {WordSnapper} from './lib/snapper/WordSnapper';
import {AnnotationTextRule, TokenizeRule, SanitizeAnnotationRule, AnnotationRuleSet, type AnnotationRuleResult } from './annotation_utilities';
import type { RuleAnnotation } from './types/Annotation';
import AnnotationViewer from './components/AnnotationViewer.vue';

let snapper : WordSnapper;
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
const selectedFilters = ref<string[]>([]);
const textId = ref<string | "">("72424"); 
const selectedAnnotationIds = ref<string[]>([]);
const showModified = ref<boolean>(false);
const allSelected = ref<boolean>(false);
const processedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map()); 
const originalAnnotations = ref<Map<string, RuleAnnotation>>(new Map());
const modifiedAnnotationsMap = ref<Map<string, RuleAnnotation>>(new Map());;
const filteredDataAnnotations = computed(() => filterAnnotations(originalAnnotations.value, selectedFilters.value));
const filteredProcessedAnnotations = computed(() =>filterAnnotations(processedAnnotationsMap.value, selectedFilters.value));
const filteredModifiedAnnotations = computed(() => filterAnnotations(modifiedAnnotationsMap.value, selectedFilters.value));
const textLines = computed(() => textToLines(text.value)); 
const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];

const handleChangedId = (event: Event) => {
  const target = event.target as HTMLInputElement;
  textId.value = target.value;
};
const resetMaps = () => {
  modifiedAnnotationsMap.value.clear();
  processedAnnotationsMap.value.clear();
  originalAnnotations.value.clear();
};
onMounted(() => {
  if (textId.value !== null)
    handleFetchedData(textId.value);
});
watch(textId, (newId) => {
  if (newId !== null) {
    resetMaps();
    handleFetchedData(newId);
  }
});
watch(text, (newText) => {
  snapper = new WordSnapper(newText);
});

const handleFetchedData = async (id: string) => {
  try {
    const annotationRepository = new AnnotationRepository();
    let result = await annotationRepository.fetchAnnotation(id);
    text.value = result.text;
    result.annotations.forEach((annotation: any) => {
      const normalizedAnnotation = normalizeAnnotaion(annotation, text.value);
      originalAnnotations.value.set(annotation.id, normalizedAnnotation);
    });
    applyRules(originalAnnotations.value);
  } catch (err) {
    error.value = String(err); 
  } finally {
    loading.value = false;  
  }
};
const applyRules = (nomalizedAnnotations: Map<string,RuleAnnotation>) => {
  const tokenizeRule = new TokenizeRule(text.value, 3);
  const textRule = new AnnotationTextRule(text.value, 3);
  const sanitizeRule = new SanitizeAnnotationRule(text.value);

  const languageRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const typographyRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);
  const orthographyRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule, textRule],true,true);
  const lexisRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,false);
  const handshiftRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const defaultRuleSet = new AnnotationRuleSet([sanitizeRule],true,false);
  nomalizedAnnotations.forEach((nolmalizedAnnotation: RuleAnnotation) => {
    let resultAnnotation : AnnotationRuleResult = { annotation: {} as RuleAnnotation, rule_applied: false};
    switch (nolmalizedAnnotation.type) {
      case 'typography':
        resultAnnotation = typographyRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'orthography':
        resultAnnotation = orthographyRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'lexis':
        resultAnnotation = lexisRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'morpho_syntactical':
        resultAnnotation = morphoSyntacticalRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'handshift':
        resultAnnotation =handshiftRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'language':
        resultAnnotation = languageRuleSet.apply(nolmalizedAnnotation);
        break;
      default:
        //resultAnnotation = defaultRuleSet.apply(nolmalizedAnnotation);
        break;
    }
    let processedAnnotaion =  resultAnnotation.rule_applied ? resultAnnotation.annotation : nolmalizedAnnotation;
    if (resultAnnotation.rule_applied) {
      console.log('true');
      processedAnnotaion.class = 'annotation--rule-applied';
      modifiedAnnotationsMap.value.set(nolmalizedAnnotation.id, processedAnnotaion);
    }
    processedAnnotationsMap.value.set(nolmalizedAnnotation.id, processedAnnotaion);
  });
};

const getOriginalAnnotation = (annotationId: string)=>{
  return originalAnnotations.value.get(annotationId) as RuleAnnotation
}

const filterAnnotations = (annotationsMap: Map<string, RuleAnnotation>, selectedFilters: string[]) => {
  if (showModified.value) {
    const modifiedAnnotations = Array.from(annotationsMap.values()).filter(annotation =>
        modifiedAnnotationsMap.value.has(annotation.id)  
    );
    if (selectedFilters.length === 0) return modifiedAnnotations;
    return modifiedAnnotations.filter((annotation: RuleAnnotation) =>
        selectedFilters.includes(originalAnnotations.value.get(annotation.id)?.type || '')
    );
  } else {  
    if (selectedFilters.length === 0) return Array.from(annotationsMap.values());
    return Array.from(annotationsMap.values()).filter((annotation: RuleAnnotation) =>
        selectedFilters.includes(originalAnnotations.value.get(annotation.id)?.type || '')
    );
  }
};
// Button event handlers
const clearAllAnnotations = () => {
  modifiedAnnotationsMap.value.clear();
}
const confirmSelectedAnnotations = async () => {
  try {
    const annotationsToSubmit = selectedAnnotationIds.value.map(id => modifiedAnnotationsMap.value.get(id));
    selectedAnnotationIds.value.forEach((annotationId) => {
        modifiedAnnotationsMap.value.delete(annotationId);
    });
    selectedAnnotationIds.value = [];
    console.log('Annotations submitted', annotationsToSubmit);
  } catch (error) {
      console.error('Error submitting annotations', error);
  }
};
const confirmAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is bevestigd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
};
const cancelAnnotation = (annotation: RuleAnnotation) => {
  console.log(`Annotatie met id ${annotation.id} is geannuleerd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
};
const toggleSelectAll = () =>{
  if (allSelected.value) 
    selectedAnnotationIds.value = [];
  else 
    selectedAnnotationIds.value = filteredModifiedAnnotations.value.map(annotation => annotation.id);
  allSelected.value = !allSelected.value;
};
const confirmAllAnnotations = async () => {
  try{
    console.log('filteredModifiedAnnotations', filteredModifiedAnnotations.value);
    console.log('modifiedAnnotationsMap', modifiedAnnotationsMap.value);
    filteredModifiedAnnotations.value.forEach((annotation) => {
      modifiedAnnotationsMap.value.delete(annotation.id);
    });
  }
  catch(error){
    console.error("Error submitting annotations", error);
  }
};
const showRuleModifiedAnnotations = () => {
  showModified.value = !showModified.value;
};

// AnnotatedText event handlers
const onAnnotationUpdateBegin = function (updateState : UpdateAnnotationState) {
  //console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmStartUpdating();
};
const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmUpdate();
};
const onAnnotationUpdateEnd = function (updateState : UpdateAnnotationState) {
  console.log("** Edited: ", updateState.annotation);
  processedAnnotationsMap.value.set(updateState.annotation.id, updateState.annotation);
};
</script>
