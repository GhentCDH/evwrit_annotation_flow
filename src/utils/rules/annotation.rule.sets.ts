import {
  type AnnotationRuleResult,
  AnnotationRuleSet,
  AnnotationTextRule,
  SanitizeAnnotationRule,
  TokenizeRule,
} from "@/utils/annotation_utilities";
import type { AnnotationType, ModifiedAnnotation, RuleAnnotation } from "@/types/Annotation";
import { normalizeAnnotation } from "@/utils";
import { annotationHighlightColors } from "@/styles/annotation-colors";

export class AnnotationRuleSets {
  //#region define ruleset
  private languageRuleSet!: AnnotationRuleSet;
  private typographyRuleSet!: AnnotationRuleSet;
  private orthographyRuleSet!: AnnotationRuleSet;
  private lexisRuleSet!: AnnotationRuleSet;
  private morphoSyntacticalRuleSet!: AnnotationRuleSet;
  private handshiftRuleSet!: AnnotationRuleSet;
  private defaultRuleSet!: AnnotationRuleSet;

  //#endregion

  constructor(private readonly text: string) {
    const tokenizeRule = new TokenizeRule(text, 3);
    const textRule = new AnnotationTextRule(text, 3);
    const sanitizeRule = new SanitizeAnnotationRule(text);

    this.languageRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
    this.typographyRuleSet = new AnnotationRuleSet([sanitizeRule, textRule], true, true);
    this.orthographyRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule, textRule], true, true);
    this.lexisRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
    this.morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, false);
    this.handshiftRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
    this.defaultRuleSet = new AnnotationRuleSet([sanitizeRule], true, false);
  }

  public applyRules(annotation: RuleAnnotation): ModifiedAnnotation {
    const normalizedAnnotations = normalizeAnnotation(annotation, this.text);
    let resultAnnotation: AnnotationRuleResult = {
      annotation: {} as RuleAnnotation,
      rule_applied: false,
    };
    switch (normalizedAnnotations.type) {
      case "typography":
        resultAnnotation = this.typographyRuleSet.apply(normalizedAnnotations);
        break;
      case "orthography":
        resultAnnotation = this.orthographyRuleSet.apply(normalizedAnnotations);
        break;
      case "lexis":
        resultAnnotation = this.lexisRuleSet.apply(normalizedAnnotations);
        break;
      case "morpho_syntactical":
        resultAnnotation = this.morphoSyntacticalRuleSet.apply(normalizedAnnotations);
        break;
      case "handshift":
        resultAnnotation = this.handshiftRuleSet.apply(normalizedAnnotations);
        break;
      case "language":
        resultAnnotation = this.languageRuleSet.apply(normalizedAnnotations);
        break;
      default:
        //resultAnnotation = defaultRuleSet.apply(normalizedAnnotations);
        break;
    }
    const processedAnnotion = resultAnnotation.rule_applied ? resultAnnotation.annotation : normalizedAnnotations;

    if (resultAnnotation.rule_applied)
      processedAnnotion.color = annotationHighlightColors[processedAnnotion.type as AnnotationType];

    return {
      id: normalizedAnnotations.id,
      processed: processedAnnotion,
      original: normalizedAnnotations,
      modified: resultAnnotation.rule_applied ? resultAnnotation.annotation : null,
    } as ModifiedAnnotation;
  }
}
