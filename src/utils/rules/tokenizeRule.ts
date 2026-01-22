import { cloneDeep } from "lodash-es";
import type {
  AnnotationRule,
  AnnotationRuleResult,
} from "./annotation.rule.ts";
import { ShiftToWordBoundary } from "./shiftToWordBoundary.ts";
import { EvwritConsts } from "../textConfig.ts";
import type { RuleAnnotation } from "@/types/Annotation.ts";

/**
 * Tokenize the text and find the closest token start and
 * to the given annotation start/stop.
 */
export class TokenizeRule implements AnnotationRule {
  name: string;
  text: string;
  max_shift: number;
  private shiftToWordBoundary = new ShiftToWordBoundary();

  /**
   *
   * @param text The full text to tokenize.
   * @param max_shift The maximum shift allowed to modify character indexes. If no token start of stop is found after moving indexes by max_shift positions the rule does not do anything.
   * If a negative value is given the max_shift becomes '2 + annotation.length /3'. To find a near boundry always, set to a high number like 10000.
   */
  constructor(text: string, max_shift: number) {
    this.name = "tokenize_rule";
    this.text = text;
    this.max_shift = max_shift;
    this.shiftToWordBoundary.setText(text, EvwritConsts.textOffset);
  }

  apply(annotation: RuleAnnotation): AnnotationRuleResult {
    const fixedAnnotation = cloneDeep(annotation) as RuleAnnotation;
    let max_shift = this.max_shift;
    if (max_shift < 0) {
      max_shift = 2 + Math.floor((annotation.end - annotation.start) / 3);
    }
    const result = this.shiftToWordBoundary.apply(annotation, max_shift);

    // const result = shiftToWordBoundary(this.text, annotation.start, annotation.end, max_shift);
    if (result) {
      fixedAnnotation.start = result.start;
      fixedAnnotation.end = result.end;
    }

    return {
      annotation: fixedAnnotation,
      rule_applied: !!result,
    };
  }
}
