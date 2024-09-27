<script setup lang="ts">
import {ref, onMounted, computed, watch, reactive} from 'vue'
import {AnnotatedText, type Annotation, UpdateAnnotationState} from '@ghentcdh/vue-component-annotated-text'
import {AnnotationRepository} from './stores/annotationRepository';
import { textToLines } from './text_utilities';
import { getAnnotatedLines,normalizeAnnotaion} from './annotation_utils';
import {WordSnapper} from './lib/snapper/WordSnapper';
import {AnnotationTextRule, TokenizeRule, SanitizeAnnotationRule, AnnotationRuleSet, type AnnotationRuleResult } from './annotation_utilities';

//const data = ref<any>(null); // Variabele voor het object zelf
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
let snapper : WordSnapper;

const processedAnnotaionsMap = ref<Map<string, Annotation>>(new Map()); 
const originalAnnotations = ref<Map<string, any>>(new Map());
let modifiedAnnotationsMap = reactive(new Map<string, Annotation>());


const filterTypes = ['language', 'typography', 'orthography', 'lexis', 'morpho_syntactical', 'handshift', 'ltsa', 'gtsa', 'gts', 'lts'];
let selectedFilters = ref<string[]>([]);
let selectedRules = ref<string[]>([]);
const textId = ref<number | null>(72423); 
const filteredDataAnnotaitons = computed(() => filterAnnotations(originalAnnotations.value, selectedFilters.value));
const filteredProcessedAnnotaions = computed(() =>filterAnnotations(processedAnnotaionsMap.value, selectedFilters.value));
const textLines = computed(() => textToLines(text.value)); 
const selectedAnnotationIds = ref<string[]>([]);

const clearAllAnnotations = () => {
    modifiedAnnotationsMap.clear();
}
const confirmAnnotations = async () => {
    try{
        /*const response = await axios.post('http://localhost:3000/api/submit-annotations',{
            annotations: modifiedAnnotations.values()
        });*/
        if(true){
            console.log("Annotations submitted", modifiedAnnotationsMap);
            modifiedAnnotationsMap.clear();
        }else{
            console.error("Error submitting annotations");
        }
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
      
      //data.value = result

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
  const typographyRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,false);
  const orthographyRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);
  const lexisRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);
  const morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);
  const handshiftRuleSet = new AnnotationRuleSet([sanitizeRule,textRule],true,true);

  nomalizedAnnotations.forEach((nolmalizedAnnotation: any) => {
    let resultAnnotation : AnnotationRuleResult = { annotation: null, rule_applied: false };
    switch (nolmalizedAnnotation.type) {
      case 'typography':
      resultAnnotation = typographyRuleSet.apply(nolmalizedAnnotation);
      //console.log('Typography:', resultAnnotation);
      if(resultAnnotation.rule_applied){
        console.log('true');
      }
        break;
      case 'orthography':
      //resultAnnotation = orthographyRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'lexis':
      //resultAnnotation = lexisRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'morpho_syntactical':
      //resultAnnotation = morphoSyntacticalRuleSet.apply(nolmalizedAnnotation);
        break;
      case 'handshift':
      //resultAnnotation =handshiftRuleSet.apply(nolmalizedAnnotation);
        break;
      default:
        console.log('No rule set for type:', nolmalizedAnnotation.type);
        break;
    }
    let processedAnnotaion = resultAnnotation?.annotation;
    //console.log('Processed:', processedAnnotaion);
    //console.log('Original:', nolmalizedAnnotation);
    if(resultAnnotation && resultAnnotation.rule_applied){
      processedAnnotaion.class = 'annotation--rule-applied';
      modifiedAnnotationsMap.set(nolmalizedAnnotation.id, processedAnnotaion);
      console.log('Modified:', processedAnnotaion);
      console.log('Original:', nolmalizedAnnotation);
    }
    processedAnnotaionsMap.value.set(nolmalizedAnnotation.id, processedAnnotaion? processedAnnotaion : nolmalizedAnnotation);
  });
};

const filterAnnotations = (annotationsMap: Map<any, any>, selectedFilters: string[]) => {
    if (!annotationsMap.size) return [];
    if (selectedFilters.length === 0) return Array.from(annotationsMap.values());
    //console.log('id', annotationsMap.values().next().value);
    
    return Array.from(annotationsMap.values()).filter((annotation: any) =>
      selectedFilters.includes(originalAnnotations.value.get(annotation.id)?.type || '')
    );
};

onMounted(() => {
  if (textId.value !== null)
  handleFetchedData(textId.value.toString());
});
watch(textId, (newId) => {
  if (newId !== null) 
  handleFetchedData(newId.toString());
});

const onAnnotationUpdateBegin = function (updateState : UpdateAnnotationState) {
  //console.log('Annotation updating begin:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotationsMap.set(updateState.annotation.id, updateState.annotation);
  }
  updateState.confirmStartUpdating();
};

const onAnnotationUpdating = function (updateState: UpdateAnnotationState) {
  //console.log('Annotation updating:', updateState.annotation);
  const result = snapper.fixOffset(updateState.newStart, updateState.newEnd);
  updateState.newStart = result.start;
  updateState.newEnd = result.end;
  if(result.modified){
    modifiedAnnotationsMap.set(updateState.annotation.id, updateState.annotation);
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
        const annotationsToSubmit = selectedAnnotationIds.value.map(id => modifiedAnnotationsMap.get(id));
        
        /* const response = await axios.post('http://localhost:3000/api/submit-annotations', {
            annotations: annotationsToSubmit
        }); */

        // Verwijder de geselecteerde annotaties uit modifiedAnnotations
        selectedAnnotationIds.value.forEach((annotationId) => {
            modifiedAnnotationsMap.delete(annotationId);
        });

        // Reset de geselecteerde annotaties
        selectedAnnotationIds.value = [];
    } catch (error) {
        console.error('Error submitting annotations', error);
    }
};
const getCombinedAnnotations = (annotationId: any) => {
  const originalAnnotation = originalAnnotations.value.get(annotationId);
  const modifiedAnnotation = modifiedAnnotationsMap.get(annotationId);
  return [originalAnnotation,modifiedAnnotation];


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
  <button @click="clearAllAnnotations">Annuleer Alle wijzigingen</button>
  <button @click="confirmSelectedAnnotations">Bevestig Aangevinkte</button>
  <div class="annotated-line" v-for="(annotation, index) in Array.from(modifiedAnnotationsMap.values())" 
  :key="annotation.id">
  <label>
        <input type="checkbox" :value="annotation.id" v-model="selectedAnnotationIds" />
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
      <hr>
      <AnnotatedText 
      :component-id="index"
      :annotations="[originalAnnotations.get(annotation.id)]"
      :lines="getAnnotatedLines(textLines, originalAnnotations.get(annotation.id).start, originalAnnotations.get(annotation.id).end).lines" 
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
