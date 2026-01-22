import { ref } from "vue";
import type { AnnotationRuleResult } from "./annotation.rule";
import { TokenizeRule } from "../rules/tokenizeRule";
import {
  AnnotationRuleSet,
  SanitizeAnnotationRule,
} from "../annotation_utilities";
import type {
  ModifiedAnnotation,
  RuleAnnotation,
} from "../../types/Annotation";
import { normalizeAnnotation } from "../normalizeAnnotation.utils";
import { AnnotationTextRule } from "../rules/annotation-text.rule";
import type { AnnotationItem } from "@/types/annotation-response";

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

    this.languageRuleSet = new AnnotationRuleSet(
      "language",
      [sanitizeRule, tokenizeRule],
      true,
      true,
    );
    this.typographyRuleSet = new AnnotationRuleSet(
      "typography",
      [sanitizeRule, textRule, tokenizeRule],
      true,
      true,
    );
    this.orthographyRuleSet = new AnnotationRuleSet(
      "orthography",
      [sanitizeRule, tokenizeRule, textRule],
      true,
      true,
    );
    this.lexisRuleSet = new AnnotationRuleSet(
      "lexis",
      [sanitizeRule, tokenizeRule],
      true,
      true,
    );
    this.morphoSyntacticalRuleSet = new AnnotationRuleSet(
      "morpho_syntactical",
      [sanitizeRule, textRule, tokenizeRule],
      true,
      false,
    );
    this.handshiftRuleSet = new AnnotationRuleSet(
      "handshift",
      [sanitizeRule, tokenizeRule],
      true,
      true,
    );
    this.defaultRuleSet = new AnnotationRuleSet(
      "default",
      [sanitizeRule],
      true,
      false,
    );
  }

  private _applyRules(normalizedAnnotations: RuleAnnotation, debug = false) {
    let resultAnnotation: AnnotationRuleResult = {
      annotation: {} as RuleAnnotation,
      rule_applied: false,
      appliedRules: [],
    };
    if (normalizedAnnotations.hasOverride) {
      return resultAnnotation;
    }

    switch (normalizedAnnotations.type) {
      case "typography":
        resultAnnotation = this.typographyRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      case "orthography":
        resultAnnotation = this.orthographyRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      case "lexis":
        resultAnnotation = this.lexisRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      case "morpho_syntactical":
        resultAnnotation = this.morphoSyntacticalRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      case "handshift":
        resultAnnotation = this.handshiftRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      case "language":
        resultAnnotation = this.languageRuleSet.apply(
          normalizedAnnotations,
          debug,
        );
        break;
      default:
        console.warn("no default applied rule for", normalizedAnnotations.type);
        //resultAnnotation = defaultRuleSet.apply(normalizedAnnotations);
        break;
    }

    resultAnnotation.annotation.isModified = resultAnnotation.rule_applied;

    return resultAnnotation;
  }

  public applyRules(
    annotation: AnnotationItem,
  ): Promise<ModifiedAnnotation | null> {
    return new Promise((resolve) => {
      const normalizedAnnotations = normalizeAnnotation(annotation, this.text);

      if (!normalizedAnnotations) {
        resolve(null);
        return;
      }
      resolve(this.runRules(normalizedAnnotations));

      return;
    });
  }

  public runRules(
    normalizedAnnotations: RuleAnnotation,
    debug = false,
  ): ModifiedAnnotation | null {
    const resultAnnotation = this._applyRules(normalizedAnnotations, debug);

    const processedAnnotation = resultAnnotation.rule_applied
      ? resultAnnotation.annotation
      : normalizedAnnotations;

    // if (resultAnnotation.rule_applied)
    // processedAnnotation.color = annotationHighlightColors[processedAnnotation.type as AnnotationType];

    return {
      id: normalizedAnnotations.id,
      processed: processedAnnotation,
      original: normalizedAnnotations,
      isModified: resultAnnotation.rule_applied,
      // modified: resultAnnotation.rule_applied ? resultAnnotation.annotation : null,
      appliedRules: resultAnnotation.appliedRules,
      saving: ref(false),
      error: ref(false),
    } as ModifiedAnnotation;
  }
}
