import { ref, computed, reactive } from 'vue'; // Vue functies
import {type AnnotationTarget,type dataAnnotation } from './types/Annotation'; // Importeer je types
import { textToLines } from './text_utilities';
import {AnnotationRepository} from './stores/annotationRepository';
import {AnnotationTextRule, TokenizeRule } from './annotation_utilities';
import {WordSnapper} from './lib/snapper/WordSnapper';
import {type Annotation } from '@ghentcdh/vue-component-annotated-text';
import {type Line} from '@ghentcdh/vue-component-annotated-text'; // Importeer je types
import axios from 'axios' // Axios voor de API calls
const data = ref<any>(null); // Variabele voor het object zelf
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
export let snapper : WordSnapper;
export const processedAnnotaionsMap = ref<Map<string, Annotation>>(new Map()); 
export const dataAnnotationsMap = ref<Map<string, any>>(new Map()); // Nieuwe variabele voor de Map van annotaties
export const normalizedAnnotationsMap = ref<Map<string, any>>(new Map());  

export const textLines = computed(() => textToLines(text.value)); // Bereken de lijnen van de tekst
export let modifiedAnnotations = reactive(new Map<string, Annotation>()); // Maak een nieuwe Map voor de gemodificeerde annotaties
export const createTypedAnnotation = (annotation: any, ruleApplied: boolean = false) : Annotation => {
    const annotationClass = ruleApplied ? 'annotation--rule-applied' : 'annotation--color-1';
    return {
      id: annotation.id,  
      start: annotation.start,
      end: annotation.end,
      class: annotationClass,
      target: annotation.target,
    };
};

export const normalizeAnnotaion = (annotation: any) : dataAnnotation => {
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


export const fetchAnnotations = async (id: string) => {
    try {
      const annotationRepository = new AnnotationRepository();
      let result = await annotationRepository.fetchAnnotation(id);
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
        const proceesedTypedAnnotation = createTypedAnnotation(processedAnnotation.annotation, processedAnnotation.rule_applied);
        processedAnnotations.set(annotation.id,proceesedTypedAnnotation);
        if(processedAnnotation.rule_applied){
          modifiedAnnotations.set(annotation.id, proceesedTypedAnnotation);
        }
        
      });
      //annotations indexes zoals in de data
      dataAnnotationsMap.value = map;
      normalizedAnnotationsMap.value = normalizedAnnotaions;
      processedAnnotaionsMap.value = processedAnnotations;

      text.value = result.text;
      snapper = new WordSnapper(text.value);
      data.value = result;
      //console.log("annotation lines", getAnnotatedLines(textLines.value, 183, 253));
      //console.log("text lines", textLines.value);
    } catch (err) {
      error.value = String(err); 
    } finally {
      loading.value = false;  
    }
};



export const getAnnotatedLines = (lines: Line[], start: number, end: number) => {
    let annotatedLines  = [] as Line[];
    let offset: number = 0;

    lines.forEach((line)=>{
        if((start >= line.start && start < line.end) ||
        (end > line.start && end <= line.end) ||
        (start < line.start && end > line.end)){
            annotatedLines.push(line);
            if(start >= line.start && start < line.end){
                offset = start - line.start;
            }
        }
    });
    return {
        lines: annotatedLines,
        offset: offset,
    }
}

export const confirmAnnotations = async () => {

    try{
        /*const response = await axios.post('http://localhost:3000/api/submit-annotations',{
            annotations: modifiedAnnotations.values()
        });*/
        if(true){
            console.log("Annotations submitted", modifiedAnnotations);
            modifiedAnnotations.clear();
        }else{
            console.error("Error submitting annotations");
        }
    }
    catch(error){
        console.error("Error submitting annotations", error);
    }
    

};
export const clearAllAnnotations = () => {
    modifiedAnnotations.clear();
}
export const selectedAnnotations = ref<string[]>([]); 
export const confirmSelectedAnnotations = async () => {
    try{
        /*const response = await axios.post('http://localhost:3000/api/submit-annotations',{
            annotations: modifiedAnnotations.values()
        });*/
        selectedAnnotations.value.forEach((annotationId)=>{
            modifiedAnnotations.delete(annotationId);
        });
    }
    catch(error){
        console.error("Error submitting annotations", error);
    }
}