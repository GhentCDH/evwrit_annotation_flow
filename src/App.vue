<script setup lang="ts">
import {ref, onMounted, computed, watch, reactive} from 'vue'
import {AnnotatedText, type Annotation, UpdateAnnotationState} from '@ghentcdh/vue-component-annotated-text'
import {AnnotationRepository} from './stores/annotationRepository';
import { textToLines } from './text_utilities';
import { getAnnotatedLines,normalizeAnnotaion} from './annotation_utils';
import {WordSnapper} from './lib/snapper/WordSnapper';
import {AnnotationTextRule, TokenizeRule, SanitizeAnnotationRule, AnnotationRuleSet, type AnnotationRuleResult } from './annotation_utilities';
import type { RuleAnnotation } from './types/Annotation';
import { nextTick } from 'vue';

//const data = ref<any>(null); // Variabele voor het object zelf
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
let snapper : WordSnapper;
const showModified = ref<boolean>(false);
let processedAnnotaionsMap = ref<Map<string, Annotation>>(new Map()); 
let originalAnnotations = ref<Map<string, any>>(new Map());
let modifiedAnnotationsMap = ref<Map<string, any>>(new Map());;

const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];
let selectedFilters = ref<string[]>([]);
let selectedRules = ref<string[]>([]);
const textId = ref<number | null>(72424); 
const filteredDataAnnotaitons = computed(() => filterAnnotations(originalAnnotations.value, selectedFilters.value));
const filteredProcessedAnnotaions = computed(() =>filterAnnotations(processedAnnotaionsMap.value, selectedFilters.value));
const filteredModifiedAnnotations = computed(() => filterAnnotations(modifiedAnnotationsMap.value, selectedFilters.value));
const textLines = computed(() => textToLines(text.value)); 
const selectedAnnotationIds = ref<string[]>([]);
const filteredVisibleModifiedAnnotations = computed(() => {
    return filteredModifiedAnnotations.value.filter(annotation =>
        selectedAnnotationIds.value.includes(annotation.id)
    );
});

const clearAllAnnotations = () => {
    modifiedAnnotationsMap.value.clear();
}
const resetMaps = () => {
    // Leeg de annotatie maps
    modifiedAnnotationsMap.value.clear();
    processedAnnotaionsMap.value.clear();
    originalAnnotations.value.clear();
};

const confirmAnnotations = async () => {
    try{
      const annotationsToSubmit = filteredVisibleModifiedAnnotations.value.map(
        annotation => modifiedAnnotationsMap.value.get(annotation.id)
      );
      selectedAnnotationIds.value = [];
      console.log("Annotations submitted", annotationsToSubmit);
    }
    catch(error){
        console.error("Error submitting annotations", error);
    }
};
const handleFetchedData = async (id: string) => {
    try {
      const annotationRepository = new AnnotationRepository();//
      let result = await annotationRepository.fetchAnnotation(id);//
      text.value = result.text;
      const annotationTextRule = new TokenizeRule(text.value, 3);
      result.annotations.forEach((annotation: any) => {
        const normalizedAnnotation = normalizeAnnotaion(annotation, text.value);
        originalAnnotations.value.set(annotation.id, normalizedAnnotation);
      });
      applyRules(originalAnnotations.value);
      
      snapper = new WordSnapper(text.value);
    } catch (err) {
      error.value = String(err); 
    } finally {
      loading.value = false;  
    }
};


const applyRules = (nomalizedAnnotations: Map<string,any>) => {
  const tokenizeRule = new TokenizeRule(text.value, 3);
  const textRule = new AnnotationTextRule(text.value, 3);
  const sanitizeRule = new SanitizeAnnotationRule(text.value);

  const languageRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const typographyRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);
  const orthographyRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule, textRule],true,true);
  const lexisRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);
  const handshiftRuleSet = new AnnotationRuleSet([sanitizeRule,tokenizeRule],true,true);

  nomalizedAnnotations.forEach((nolmalizedAnnotation: any) => {
    let resultAnnotation : AnnotationRuleResult = { annotation: {} as RuleAnnotation, rule_applied: false};
    switch (nolmalizedAnnotation.type) {
      case 'typography':
        resultAnnotation = typographyRuleSet.apply(nolmalizedAnnotation);
        //console.log('Typography:', resultAnnotation);
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
        break;
    }
    let processedAnnotaion =  resultAnnotation.rule_applied ? resultAnnotation.annotation : nolmalizedAnnotation;
    if (resultAnnotation.rule_applied) {
      console.log('true');
      processedAnnotaion.class = 'annotation--rule-applied';
      modifiedAnnotationsMap.value.set(nolmalizedAnnotation.id, processedAnnotaion);
    }
    processedAnnotaionsMap.value.set(nolmalizedAnnotation.id, processedAnnotaion);
  });
};

const filterAnnotations = (annotationsMap: Map<any, any>, selectedFilters: string[]) => {
    if (showModified.value) {
        // Verkrijg alle gewijzigde annotaties
        const modifiedAnnotations = Array.from(annotationsMap.values()).filter(annotation =>
            modifiedAnnotationsMap.value.has(annotation.id)  // Controleer of de annotatie gewijzigd is
        );
        if (selectedFilters.length === 0) return modifiedAnnotations;
        // Filter op basis van geselecteerde filters
        return modifiedAnnotations.filter((annotation: any) =>
            selectedFilters.includes(originalAnnotations.value.get(annotation.id)?.type || '')
        );
    } else {  // Als showModified niet waar is
        if (selectedFilters.length === 0) return Array.from(annotationsMap.values());

        return Array.from(annotationsMap.values()).filter((annotation: any) =>
            selectedFilters.includes(originalAnnotations.value.get(annotation.id)?.type || '')
        );
    }
};


const showRuleModifiedAnnotations = () => {
    showModified.value = !showModified.value; // Toggle the state
};
onMounted(() => {
  if (textId.value !== null)
    handleFetchedData(textId.value.toString());
});
watch(textId, (newId) => {
  if (newId !== null) {
    resetMaps();
    handleFetchedData(newId.toString());
  }
});

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
  processedAnnotaionsMap.value.set(updateState.annotation.id, updateState.annotation);

};

    // Maak een nieuwe Map voor de gemodificeerde annotaties
const confirmSelectedAnnotations = async () => {
    try {
        // Stuur de annotaties naar de server (indien nodig)
        const annotationsToSubmit = selectedAnnotationIds.value.map(id => modifiedAnnotationsMap.value.get(id));
        
        /* const response = await axios.post('http://localhost:3000/api/submit-annotations', {
            annotations: annotationsToSubmit
        }); */

        selectedAnnotationIds.value.forEach((annotationId) => {
            modifiedAnnotationsMap.value.delete(annotationId);
        });

        // Reset de geselecteerde annotaties
        selectedAnnotationIds.value = [];
    } catch (error) {
        console.error('Error submitting annotations', error);
    }
};
const confirmAnnotation = (annotation: any) => {
  console.log(`Annotatie met id ${annotation.id} is bevestigd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
};

const cancelAnnotation = (annotation: any) => {
  console.log(`Annotatie met id ${annotation.id} is geannuleerd.`);
  modifiedAnnotationsMap.value.delete(annotation.id);
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
    <button class="primary-button" @click="showRuleModifiedAnnotations">
      {{ showModified ? 'Toon Alle Annotaties' : 'Toon Gewijzigde Annotaties' }}
    </button>

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
  <h3 class="section-title">Aangepaste Annotaties</h3>

  <div class="action-buttons">
    <button class="primary-button" @click="confirmAnnotations">Bevestig Alles</button>
    <button class="primary-button" @click="confirmSelectedAnnotations">Bevestig Aangevinkte</button>
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

    <div class="annotation-body">
      <AnnotatedText 
        :annotations="[annotation]"
        :lines="getAnnotatedLines(textLines, annotation.start, annotation.end).lines" 
        :allow-edit="true"
        @annotation-update-begin="onAnnotationUpdateBegin"
        @annotation-updating="onAnnotationUpdating"
        @annotation-update-end="onAnnotationUpdateEnd"/>
      <hr>
      <AnnotatedText 
        :annotations="[originalAnnotations.get(annotation.id)]"
        :lines="getAnnotatedLines(textLines, originalAnnotations.get(annotation.id).start, originalAnnotations.get(annotation.id).end).lines" 
        :allow-edit="true"
        @annotation-update-begin="onAnnotationUpdateBegin"
        @annotation-updating="onAnnotationUpdating"
        @annotation-update-end="onAnnotationUpdateEnd"/>
    </div>
    </div>
  </div>

    </div>
  </div>
</template>
