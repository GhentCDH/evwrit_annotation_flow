import { forEach } from "lodash-es";
import type { AnnotationMetaData, RuleAnnotation } from "../../types/Annotation";
import type { AnnotationRule, AnnotationRuleResult } from "../annotation_utilities";

/**
 * Find and reports duplicate annotations in a given text.
 */
class DuplicateRuleOrig implements AnnotationRule {
  name: string;
  annotation_map: Map<number, RuleAnnotation[]>;
  text: string;

  /**
   *
   * @param text The full text to tokenize.
   * @param annotations Aal current annotations to check for duplicates.
   */
  constructor(text: string, annotations: RuleAnnotation[]) {
    this.name = "duplicate_rule";
    this.text = text;
    // this.textId = textId;

    this.annotation_map = new Map();
    annotations.forEach((a) => {
      if (!this.annotation_map.has(a.start)) {
        this.annotation_map.set(a.start, []);
      }
      this.annotation_map.get(a.start)?.push(a);
    });
  }

  apply(annotation: RuleAnnotation): AnnotationRuleResult {
    const fixedAnnotation: RuleAnnotation = annotation as RuleAnnotation;
    let duplicate = false;
    if (this.annotation_map.has(fixedAnnotation.start)) {
      const otherAnnotations = this.annotation_map.get(fixedAnnotation.start);
      const thisMetaData = fixedAnnotation.metadata as AnnotationMetaData;
      otherAnnotations?.forEach((a) => {
        const otherMetaData = a.metadata as AnnotationMetaData;
        //meta data needs to be available
        if (thisMetaData && otherMetaData) {
          //no self-match allowed
          if (thisMetaData.id != otherMetaData.id) {
            //a duplicate if ends match
            //we already know starts mats
            //we do not know which one is the 'real' one
            duplicate = a.end == annotation.end;
            // console.log(this.textId, JSON.stringify([a, annotation]));
          }
        }
      });
    }
    return {
      annotation: fixedAnnotation,
      rule_applied: duplicate,
    };
  }
}

const createDuplicateKey = (annotation: RuleAnnotation): string => {
  return `${annotation.type}-${annotation.start}-${annotation.end}`;
};

export class DuplicateRule {
  name: string = "Duplicate rule";
  // First value is a string of the value where a check is performed on
  private readonly duplicateRuleSet = new Map<string, RuleAnnotation[]>();
  // First value is id of the annotation with duplicates
  private readonly duplicates = new Map<string, { duplicates: string[]; duplicateKey: string }>();

  /**
   *
   * @param text The full text to tokenize.
   * @param annotations All current annotations to check for duplicates.
   */
  constructor(
    readonly text: string,
    readonly annotations: RuleAnnotation[],
  ) {
    this.mapAnnotations(annotations);
  }

  private addAnnotationToRules(annotation: RuleAnnotation) {
    const key = createDuplicateKey(annotation);
    const annotations = this.duplicateRuleSet.get(key) ?? [];
    annotations.push(annotation);

    this.duplicateRuleSet.set(key, annotations);

    return { key, annotations };
  }

  private updateDuplicates(key: string, annotations: RuleAnnotation[]) {
    if (annotations.length < 2) {
      annotations.forEach((annotation) => {
        this.duplicateRuleSet.delete(annotation.id);
        this.duplicates.set(annotation.id, { duplicateKey: key, duplicates: [] });
      });
      return;
    }

    const ids = annotations.map((annotation) => annotation.id);

    annotations.forEach((annotation) => {
      this.duplicates.set(annotation.id, { duplicateKey: key, duplicates: ids });
    });
  }

  private mapAnnotations(annotations: RuleAnnotation[]) {
    this.duplicateRuleSet.clear();
    this.duplicates.clear();

    annotations.forEach((annotation) => this.addAnnotationToRules(annotation));

    for (const [key, value] of this.duplicateRuleSet.entries()) {
      this.updateDuplicates(key, value);
    }
  }

  public removeAnnotation(annotation: RuleAnnotation): RuleAnnotation[] {
    const oldKey = this.duplicates.get(annotation.id)?.duplicateKey as string;
    const oldAnnotations = this.duplicateRuleSet.get(oldKey)?.filter((a) => a.id !== annotation.id) ?? [];

    this.duplicates.delete(annotation.id);

    if (oldKey) {
      this.duplicateRuleSet.set(oldKey, oldAnnotations);
      this.updateDuplicates(oldKey, oldAnnotations);
    }

    return oldAnnotations;
  }

  public updateAnnotation(annotation: RuleAnnotation) {
    const oldKey = this.duplicates.get(annotation.id)?.duplicateKey as string;
    const oldAnnotations = this.duplicateRuleSet.get(oldKey)?.filter((a) => a.id !== annotation.id) ?? [];

    this.duplicates.delete(annotation.id);

    if (oldKey) {
      this.duplicateRuleSet.set(oldKey, oldAnnotations);
      this.updateDuplicates(oldKey, oldAnnotations);
    }

    const { key: newKey, annotations: updatedAnnotations } = this.addAnnotationToRules(annotation);

    this.updateDuplicates(newKey, updatedAnnotations);

    return oldAnnotations;
  }

  public hasDuplicate(annotation: RuleAnnotation): string[] {
    return this.duplicates.get(annotation.id)?.duplicates ?? ([] as string[]);
  }
}
