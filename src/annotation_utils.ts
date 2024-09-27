import { ref, computed, reactive } from 'vue'; // Vue functies
import {type AnnotationTarget } from './types/Annotation'; // Importeer je types
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
export const typedAnnotationsMap = ref<Map<string, any>>(new Map());  
let modifiedAnnotations = reactive(new Map<string, Annotation>()); // Maak een nieuwe Map voor de gemodificeerde annotaties


/**
 * 
 * export function normalizeAnnotations(annotations: [], normAnnotations: DataAnnotation[] ): DataAnnotation[] {
  annotations.forEach((a, index) => {
    const annotation_type = a['type']
    const text_selection = a['text_selection']
    const textLength = text_selection['selection_end'] - text_selection['selection_start']
    const annotationTarget = (textLength > 130 ? 'gutter' : "span") as AnnotationTarget
    const normalized = {
      start: text_selection['selection_start'],
      end: text_selection['selection_end'],
      class: 'annotation annotation--color-' + (1 + (index % 9)),
      target: annotationTarget,
      label: annotation_type,
      metadata: {
        text: text_selection['text'],
        ///text_edited: text_selection['text_edited'],
        id: text_selection['id'],
        index: index,
        //annotation_type: annotation_type
      }
    } as DataAnnotation
    //filter length for debug
    normAnnotations.push(normalized)
  })
  normAnnotations.sort((a,b) => (Number(a?.start) > Number(b?.start) ? 1 : -1))
  return normAnnotations
}
 */

export const normalizeAnnotaion = (annotation: any, text:string)  => {
    const textLength = annotation.text_selection.selection_end - annotation.text_selection.selection_start;
    const annotationTarget = (textLength > 130 ? 'gutter' : 'text') as AnnotationTarget;
    const startIndex = annotation.text_selection.selection_start - 1;  // 0-gebaseerde index
    const endIndex = annotation.text_selection.selection_end - 1;
  
    const selectedText = text ? text.slice(startIndex, endIndex) : '';
    return {
      id: annotation.id,  
      start: annotation.text_selection.selection_start,
      end: annotation.text_selection.selection_end,
      class: 'annotation--color-1',
      label: annotation.type,  
      target: annotationTarget, 
      type: annotation.type,
      metadata: {
        text: selectedText,
        id: annotation.id,
        index: annotation.index
      }
    };
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