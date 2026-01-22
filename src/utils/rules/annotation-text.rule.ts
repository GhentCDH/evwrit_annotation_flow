import { cloneDeep } from "lodash-es";
import {
  type AnnotationRule,
  type AnnotationRuleResult,
} from "./annotation.rule";
import { type RuleAnnotation } from "../../types/Annotation";
import { type AnnotationFix, findAllIndexesOf } from "../../text_utilities";
import { EvwritConsts } from "../textConfig.ts";

/**
 * Tries to match the text associated with an annotation to the full text and modifies te char start and stop indexes.
 *
 * @param text The annotated text.
 * @param annotationText The text associated with the annotation.
 * @param annotationStartCharIndex The current, unfixed annotation start character index.
 * @param annotationStopCharIndex The current, unfixed annotation stop charactar index.
 * @returns An array in three parts: the fixed start and stop index and a boolean
 * representing if the annotation text has been found.
 *
 */
export function shiftToAnnotationMetaDataText(
  text: string,
  annotationText: string,
  annotationStartCharIndex: number,
  annotationStopCharIndex: number,
  maxShift: number,
): AnnotationFix {
  const annotationLength = annotationStopCharIndex - annotationStartCharIndex;

  if (annotationLength != annotationText.length) {
    console.warn(
      "Warning: annotation text length",
      annotationText.length,
      ": ",
      annotationText,
      " and annotation length do not match",
      annotationLength,
    );
  }

  //strict matching, no fuzzy search
  //let indexes = [...text.matchAll(new RegExp(annotationText, 'g'))].map(a => a.index);
  //finds only first
  const indexes = findAllIndexesOf(
    text,
    annotationText,
    EvwritConsts.textOffset,
  );

  //only keep indexes close to start
  const filteredIndexes = indexes.filter(
    (startIndex) => Math.abs(startIndex - annotationStartCharIndex) <= maxShift,
  );
  //console.log("Indexes",indexes,filteredIndexes);
  if (filteredIndexes.length == 1) {
    //use the annotation text to determine end char index
    //console.log("fixes",[filteredIndexes[0],filteredIndexes[0] + annotationText.length]);
    const newStart = filteredIndexes[0]!;
    const newEnd = newStart + annotationText.length;

    return {
      start: newStart,
      end: newEnd, // inclusieve end?
      modified:
        newStart !== annotationStartCharIndex ||
        newEnd !== annotationStopCharIndex,
    };
  }

  //no single clear acceptable result
  return {
    start: annotationStartCharIndex,
    end: annotationStopCharIndex,
    modified: false,
  };
}

export class AnnotationTextRule implements AnnotationRule {
  name: string;
  text: string;
  maxShift: number;

  constructor(text: string, maxShift: number) {
    this.name = "annotation_text_rule";
    this.text = text;
    this.maxShift = maxShift;
  }

  apply(annotation: RuleAnnotation) {
    let fixedAnnotation = annotation;
    let applied_rule = false;

    if (annotation.text) {
      //removes whitespace from text!
      const annotationText = annotation.text.trim();
      const result = shiftToAnnotationMetaDataText(
        this.text,
        annotationText,
        annotation.start,
        annotation.end,
        this.maxShift,
      );
      if (result.modified) {
        applied_rule = true;
        fixedAnnotation = cloneDeep(annotation) as RuleAnnotation;
        fixedAnnotation.start = result.start;
        fixedAnnotation.end = result.end;
      }
    }

    return {
      annotation: fixedAnnotation,
      rule_applied: applied_rule,
    } as AnnotationRuleResult;
  }
}
