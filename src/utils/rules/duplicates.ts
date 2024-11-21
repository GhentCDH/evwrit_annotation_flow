import type { RuleAnnotation } from "../../types/Annotation";

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
