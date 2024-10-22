import { cloneDeep } from "lodash-es";
import { type AnnotationRule, type AnnotationRuleResult } from "./annotation.rule";
import { type RuleAnnotation } from "../../types/Annotation";
import { shiftToAnnotationMetaDataText } from "../../text_utilities";

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
