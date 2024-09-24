import { ref, computed } from 'vue'; // Vue functies
import {type AnnotationTarget,type dataAnnotation } from './types/Annotation'; // Importeer je types
import { textToLines } from './text_utilities';
import {AnnotationRepository} from './stores/annotationRepository';
import {AnnotationTextRule, TokenizeRule } from './annotation_utilities';
import {WordSnapper} from './lib/snapper/WordSnapper';
import {type Annotation } from '@ghentcdh/vue-component-annotated-text';

const data = ref<any>(null); // Variabele voor het object zelf
const loading = ref(true); 
const error = ref<string | null>(null);   
const text = ref<string>('');  
export let selectedFilters = ref<string[]>([]);
export let snapper : WordSnapper;
export const processedAnnotaionsMap = ref<Map<string, Annotation>>(new Map()); 
export const dataAnnotationsMap = ref<Map<string, any>>(new Map()); // Nieuwe variabele voor de Map van annotaties
export const normalizedAnnotationsMap = ref<Map<string, any>>(new Map());  
 
export const filteredDataAnnotaitons = computed(() => 
    filterAnnotations(normalizedAnnotationsMap.value, selectedFilters.value)
);
export const filteredProcessedAnnotaions = computed(() =>
    filterAnnotations(processedAnnotaionsMap.value, selectedFilters.value)
);
export const textLines = computed(() => 
    textToLines(text.value)
);
  
  

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

export const filterAnnotations = (annotationsMap: Map<any, any>, selectedFilters: string[]) => {
    if (!annotationsMap.size) return [];
    if (selectedFilters.length === 0) return Array.from(annotationsMap.values());
  
    return Array.from(annotationsMap.values()).filter((annotation: any) =>
      selectedFilters.includes(annotationsMap.get(annotation.id).type) // Filter op basis van het type
    );
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