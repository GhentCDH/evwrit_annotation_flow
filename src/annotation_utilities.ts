import { type AnnotationMetaData } from './types/Annotation'
import { type Annotation, type AnnotationTarget} from '@ghentcdh/vue-component-annotated-text'
import {
  shiftToAnnotationMetaDataText,
  shiftToWordBoundary
} from './text_utilities'

export interface AnnotationRuleResult {
  annotation: Annotation
  rule_applied: boolean
}


/**
 * Receives a list of annotations from elasticsearch, transform them into 
 * Annotation's supported by the vue-component-annotated-text
 * @param annotations annotations as received from elasticsearch.
 * @returns  A list of annotations fit for visualization in the component.
 */
export function normalizeAnnotations(annotations: [], normAnnotations: Annotation[] ): Annotation[] {
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
    } as Annotation
    //filter length for debug
    normAnnotations.push(normalized)
  })
  normAnnotations.sort((a,b) => (Number(a?.start) > Number(b?.start) ? 1 : -1))
  return normAnnotations
}

/**
 * An annotation rule is a rule which can be applied to
 * a single annotation to fix the
 * annotation start and end character indexes.
 */
export interface AnnotationRule {
  /**
   * The name of the rule
   */
  name: string

  /**
   * The full! text which contains the annotation.
   */
  text: string

  /**
   * Apply the rule to a single annotation.
   * @param annotation The annotation to align.
   */
  apply(annotation: Annotation): AnnotationRuleResult
}

/**
 * Makes sure the indexes are valid:  0 >= index < text.length
 */
export class SanitizeAnnotationRule implements AnnotationRule {
  name: string
  text: string

  /**
   * 
   * @param text The full text
   */
  constructor(text: string) {
    this.name = 'sanitize_annotation_rule'
    this.text = text
  }

  apply(annotation: Annotation): AnnotationRuleResult {
    const fixedAnnotation: Annotation = JSON.parse(JSON.stringify(annotation)) as Annotation
    if(annotation.start < 0){
      fixedAnnotation.start = 0;
    }
    if(annotation.end >= this.text.length){
      fixedAnnotation.end = this.text.length - 1;
    }
    const changed = (annotation.start != fixedAnnotation.start || annotation.end != fixedAnnotation.end)
    return {
      annotation: fixedAnnotation,
      rule_applied: changed
    }
  }
}

/**
 * Tokenize the text and find the closest token start and
 * to the given annotation start/stop.
 */
export class TokenizeRule implements AnnotationRule {
  name: string
  text: string
  max_shift: number

  /**
   * 
   * @param text The full text to tokenize.
   * @param max_shift The maximum shift allowed to modify character indexes. If no token start of stop is found after moving indexes by max_shift positions the rule does not do anything.
   * If a negative value is given the max_shift becomes '2 + annotation.length /3'. To find a near boundry always, set to a high number like 10000. 
   */
  constructor(text: string,max_shift: number) {
    this.name = 'tokenize_rule'
    this.text = text
    this.max_shift = max_shift
  }

  apply(annotation: Annotation): AnnotationRuleResult {
    const fixedAnnotation: Annotation = JSON.parse(JSON.stringify(annotation)) as Annotation
    let max_shift = this.max_shift
    if(max_shift < 0){
      //
      max_shift = 2 + Math.floor((annotation.end - annotation.start) / 3);
    }
    const result = shiftToWordBoundary(this.text, annotation.start, annotation.end,max_shift)
    if (result.modified) {
      fixedAnnotation.start = result.start
      fixedAnnotation.end = result.end
    }
    return {
      annotation: fixedAnnotation,
      rule_applied: result.modified
    }
  }
}


export class AnnotationTextRule implements AnnotationRule {
  name: string
  text: string
  maxShift: number

  constructor(text: string,maxShift: number) {
    this.name = 'annotation_text_rule';
    this.text = text;
    this.maxShift = maxShift;
  }

  apply(annotation: Annotation) {
    let fixedAnnotation = annotation
    let applied_rule = false

    if (annotation.text) {
      //removes whitespace from text!
      const annotationText = annotation.text.trim()
      const result = shiftToAnnotationMetaDataText(
        this.text,
        annotationText,
        annotation.start,
        annotation.end,
        this.maxShift
      )
      if (result.modified) {
        applied_rule = true
        fixedAnnotation = JSON.parse(JSON.stringify(annotation)) as Annotation
        fixedAnnotation.start = result.start
        fixedAnnotation.end = result.end
      }
    }
    return {
      annotation: fixedAnnotation,
      rule_applied: applied_rule
    }
  }
}



/// These last two 'rules' do not modify annotations but flag and report annotations which look unreliable
/// these are used in an batch processing script

/**
 * Find and reports duplicate annotations in a given text.
 */
export class DuplicateRule implements AnnotationRule {
  name: string
  annotation_map: Map<number, Annotation[]>
  text: string
  textId: number

  /**
   * 
   * @param text The full text to tokenize.
   * @param annotations Aal current annotations to check for duplicates. 
   */
  constructor(textId:number, text:string, annotations: Annotation[]) {
    this.name = 'duplicate_rule'
    this.text = text
    this.textId = textId

    this.annotation_map = new Map();
    annotations.forEach((a) => {
      if(! this.annotation_map.has(a.start)){
        this.annotation_map.set(a.start,[]);
      }
      this.annotation_map.get(a.start)?.push(a);
    });
  }

  apply(annotation: Annotation): AnnotationRuleResult {
    const fixedAnnotation: Annotation = annotation as Annotation
    let duplicate = false;
    if(this.annotation_map.has(fixedAnnotation.start)){
      const otherAnnotations = this.annotation_map.get(fixedAnnotation.start)
      const thisMetaData = fixedAnnotation.metadata as AnnotationMetaData;
      otherAnnotations?.forEach((a) => {
        const otherMetaData = a.metadata as AnnotationMetaData;
        //meta data needs to be available
        if(thisMetaData &&   otherMetaData){
          //no self-match allowed
          if(thisMetaData.id != otherMetaData.id){
            //a duplicate if ends match
            //we already know starts mats
            //we do not know which one is the 'real' one
            duplicate = a.end == annotation.end
            console.log(this.textId, JSON.stringify([a, annotation]));
          }
        }
      })
    }
    return {
      annotation: fixedAnnotation,
      rule_applied: duplicate
    }
  }
}

// /**
//  * Find and reports annotations for which the text between the character index start and end is
//  * not the same as the associated 'annotation text' from filemaker.
//  */

// export class AnnotationTextUnreliableRule implements AnnotationRule {
//   name: string
//   text: string
//   textId: number
//   minWordSimilarity: number
//   minWordLength: number

//   /**
//    * 
//    * @param text The full annotated text.
//    * @param textId The identifier for the text for reporting. 
//    * @param minWordSimilarity The minimum similarity for two words to be seen as the same between 0 and 1
//    * @param minTexWordLength The minimum word length in characters. To skip very short words make this e.g. 3, 
//    * to skip no words make it zero.
//    */
//   constructor(textId:number, text:string, minWordSimilarity:number, minWordLength:number) {
//     this.name = 'annotation_text_unreliable_rule'
//     this.text = text
//     this.textId = textId
//     this.minWordLength = minWordLength
//     this.minWordSimilarity = minWordSimilarity
//   }

//   apply(annotation: Annotation): AnnotationRuleResult {
//     let annotationTextUnreliable = false;
//     if(annotation.metadata && annotation.metadata && (annotation.metadata as AnnotationMetaData).text){
//       const annotationMetaData = annotation.metadata as AnnotationMetaData
//       const annotationTextFromText = this.text.slice(annotation.start,annotation.end).trim()
//       const annotationTextFromMetadata = annotationMetaData.text.trim();
//       const textSimilarityScore = textSimilarity(annotationTextFromText,annotationTextFromMetadata)

//       let textIsLongEnough = (this.minWordLength === 0);
//       textIsLongEnough = (textIsLongEnough || Math.max(annotationTextFromMetadata.length,annotationTextFromText.length) > this.minWordLength)
//       annotationTextUnreliable = this.minWordSimilarity > textSimilarityScore
//       if(textIsLongEnough && annotationTextUnreliable){
//         console.log(this.textId,"'" + annotationTextFromText + "'" ,"'" + annotationTextFromMetadata + "'", Math.round(100 * textSimilarityScore))
//       }
//     }
//     return {
//       annotation: annotation,
//       rule_applied: annotationTextUnreliable
//     }
//   }
// } 





