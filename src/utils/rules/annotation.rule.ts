import type { RuleAnnotation } from "../../types/Annotation";

export interface AnnotationRuleResult {
  annotation: RuleAnnotation;
  rule_applied: boolean;
  appliedRules?: string[];
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
  name: string;

  /**
   * The full! text which contains the annotation.
   */
  text: string;

  /**
   * Apply the rule to a single annotation.
   * @param annotation The annotation to align.
   */
  apply(annotation: RuleAnnotation): AnnotationRuleResult;
}
