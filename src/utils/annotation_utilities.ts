import { cloneDeep, pick } from "lodash-es";
import type { AnnotationRule, AnnotationRuleResult } from "./rules/annotation.rule";
import { ShiftToWordBoundary } from "./rules/shiftToWordBoundary.ts";
import { type AnnotationType, type RuleAnnotation } from "../types/Annotation";

/**
 * Makes sure the indexes are valid:  0 >= index < text.length
 */
export class SanitizeAnnotationRule implements AnnotationRule {
  name: string;
  text: string;

  /**
   *
   * @param text The full text
   */
  constructor(text: string) {
    this.name = "sanitize_annotation_rule";
    this.text = text;
  }

  apply(annotation: RuleAnnotation): AnnotationRuleResult {
    const fixedAnnotation = cloneDeep(annotation) as RuleAnnotation;
    if (annotation.start < 0) {
      fixedAnnotation.start = 0;
    }
    if (annotation.end >= this.text.length) {
      fixedAnnotation.end = this.text.length;
    }
    const changed = annotation.start != fixedAnnotation.start || annotation.end != fixedAnnotation.end;

    return {
      annotation: fixedAnnotation,
      rule_applied: changed,
    };
  }
}

export class AnnotationRuleSet implements AnnotationRule {
  name: string;
  text: string;
  rules: AnnotationRule[];
  alwaysApplyFirstRule: boolean; // Eerste regel altijd toepassen
  stopWhenRuleApplied: boolean; // Stop bij de eerste succesvolle toepassing

  constructor(
    private readonly annotationType: AnnotationType | "default",
    rules: AnnotationRule[],
    alwaysApplyFirstRule: boolean = false,
    stopWhenRuleApplied: boolean = false,
  ) {
    this.name = "annotation_rule_set";
    this.rules = rules;
    this.text = rules[0]?.text || "";
    this.alwaysApplyFirstRule = alwaysApplyFirstRule;
    this.stopWhenRuleApplied = stopWhenRuleApplied;
  }

  apply(annotation: RuleAnnotation, debug = false): AnnotationRuleResult {
    const log = (...args: any[]) => {
      if (debug) console.log(...args);
    };
    log("apply ruleset", this.annotationType, this.rules);
    log(pick(this, "rules", "alwaysApplyFirstRule", "stopWhenRuleApplied"));
    let applied_rule = false;
    const appliedRules: string[] = [];

    const applyRule = (ruleIndex: number) => {
      const rule = this.rules[ruleIndex]!;
      const ruleResult = rule.apply(annotation);
      log("\t -- apply: ", rule.name, ruleResult.rule_applied);
      if (ruleResult.rule_applied) {
        appliedRules.push(rule.name);
        //console.log('rule applied', this.rules[i].name);
        annotation = ruleResult.annotation;
        applied_rule = ruleResult.rule_applied;

        // Stop als stopWhenRuleApplied true is
        if (this.stopWhenRuleApplied) {
          return { annotation: annotation, rule_applied: applied_rule, appliedRules };
        }
      }

      return null;
    };

    if (this.alwaysApplyFirstRule) {
      const rule = applyRule(0);
      if (rule) return rule;
    }
    for (let i = this.alwaysApplyFirstRule ? 1 : 0; i < this.rules.length; i++) {
      const rule = applyRule(i);
      if (rule) return rule;
    }
    return { annotation: annotation, rule_applied: applied_rule, appliedRules };
  }
}

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
    this.shiftToWordBoundary.setText(text);
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

/// These last two 'rules' do not modify annotations but flag and report annotations which look unreliable
/// these are used in an batch processing script

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
