import { AnnotationRepository } from "./annotationRepository";
import { normalizeAnnotation } from "../utils";
import type { RuleAnnotation } from "../types/Annotation";
import {
  type AnnotationRuleResult,
  AnnotationRuleSet,
  AnnotationTextRule,
  SanitizeAnnotationRule,
  TokenizeRule,
} from "../utils/annotation_utilities";
import { annotationHighlightColors } from "../styles/annotation-colors";
import type { FilterValue } from "../stores/FilterStore";

const applyRules = (nomalizedAnnotations: Map<string, RuleAnnotation>, text: string) => {
  const tokenizeRule = new TokenizeRule(text, 3);
  const textRule = new AnnotationTextRule(text, 3);
  const sanitizeRule = new SanitizeAnnotationRule(text);

  const languageRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const typographyRuleSet = new AnnotationRuleSet([sanitizeRule, textRule], true, true);
  const orthographyRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule, textRule], true, true);
  const lexisRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const morphoSyntacticalRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, false);
  const handshiftRuleSet = new AnnotationRuleSet([sanitizeRule, tokenizeRule], true, true);
  const defaultRuleSet = new AnnotationRuleSet([sanitizeRule], true, false);

  const processedAnnotationsMap = new Map<string, RuleAnnotation>();
  const modifiedAnnotationsMap = new Map<string, RuleAnnotation>();

  nomalizedAnnotations.forEach((normalizedAnnotations: RuleAnnotation) => {
    let resultAnnotation: AnnotationRuleResult = {
      annotation: {} as RuleAnnotation,
      rule_applied: false,
    };
    switch (normalizedAnnotations.type) {
      case "typography":
        resultAnnotation = typographyRuleSet.apply(normalizedAnnotations);
        break;
      case "orthography":
        resultAnnotation = orthographyRuleSet.apply(normalizedAnnotations);
        break;
      case "lexis":
        resultAnnotation = lexisRuleSet.apply(normalizedAnnotations);
        break;
      case "morpho_syntactical":
        resultAnnotation = morphoSyntacticalRuleSet.apply(normalizedAnnotations);
        break;
      case "handshift":
        resultAnnotation = handshiftRuleSet.apply(normalizedAnnotations);
        break;
      case "language":
        resultAnnotation = languageRuleSet.apply(normalizedAnnotations);
        break;
      default:
        //resultAnnotation = defaultRuleSet.apply(normalizedAnnotations);
        break;
    }
    const processedAnnotion = resultAnnotation.rule_applied ? resultAnnotation.annotation : normalizedAnnotations;
    if (resultAnnotation.rule_applied) {
      processedAnnotion.color = annotationHighlightColors[processedAnnotion.type as FilterValue];
      modifiedAnnotationsMap.set(normalizedAnnotations.id, processedAnnotion);
    }
    processedAnnotationsMap.set(normalizedAnnotations.id, processedAnnotion);
  });

  return { processedAnnotationsMap, modifiedAnnotationsMap };
};

export class AnnotationService {
  private annotationRepository = new AnnotationRepository();

  async getAnnotation(id: string) {
    const originalAnnotations = new Map<string, RuleAnnotation>();
    try {
      const { text, annotations } = await this.annotationRepository.fetchAnnotation(id);
      console.log("Totaal aantal annotaties", annotations.length, "textlengte", text.length);
      console.time(`process_${id}`);
      annotations.forEach((annotation: any) => {
        const normalizedAnnotation = normalizeAnnotation(annotation, text);
        originalAnnotations.set(annotation.id, normalizedAnnotation);
      });
      const { normalizedAnnotations, modifiedAnnotationsMap, processedAnnotationsMap } = applyRules(
        originalAnnotations,
        text,
      );

      console.timeEnd(`process_${id}`);
      return { text, normalizedAnnotations, processedAnnotationsMap, modifiedAnnotationsMap, originalAnnotations };
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
