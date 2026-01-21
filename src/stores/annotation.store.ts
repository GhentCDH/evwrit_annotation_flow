import { computed } from "vue";
import { cloneDeep } from "lodash-es";
import type { AnnotationId } from "@ghentcdh/annotated-text";
import { AnnotationRepository } from "../data-access/annotationRepository";
import type { ModifiedAnnotation, RuleAnnotation } from "../types/Annotation";
import { DuplicateRule } from "../utils/rules/duplicates";
import { AnnotationRuleSets } from "../utils/rules/annotation.rule.sets";
import type { AnnotationItem } from "@/types/annotation-response";

export type UpdateAnnotation = Pick<RuleAnnotation, "id" | "start" | "end">;

export type ConfirmAnnotationType = "original" | "modified" | null | undefined;

export class AnnotationStore {
  private readonly annotationRepository = new AnnotationRepository();

  //#region ruleset
  private annotationRuleSets!: AnnotationRuleSets;
  private duplicateRule!: DuplicateRule;
  //#endregion

  private id!: number | string;
  private text: string = "";
  // private readonly annotations = ref<Map<string, ModifiedAnnotation>>(new Map());
  private readonly annotations = new Map<AnnotationId, ModifiedAnnotation>();
  public readonly annotationValues = computed(() =>
    Array.from(this.annotations.values()),
  );

  async getAnnotation(id: string | number) {
    this.reset();
    try {
      const result = await this.annotationRepository.fetchAnnotation(id);
      const { text, flags, annotations } = result;
      this.id = id;
      this.createRulesSet(text);
      console.group("Load annotations for ", id);
      console.log(
        "Totaal aantal annotaties",
        annotations.length,
        "textlengte",
        text.length,
      );
      console.time(`process_${id}`);

      // TODO combine annotations original and modified from the backend!

      const annotationAppliedResults = (
        await Promise.all(
          annotations.map((annotation: any) => this.applyRules(annotation)),
        )
      ).filter((a) => !!a) as ModifiedAnnotation[];

      this.checkForDuplicates(annotationAppliedResults);

      console.timeEnd(`process_${id}`);
      console.groupEnd();
      return { text, id, flags };
    } catch (err) {
      console.error(err);
      throw new Error(err as unknown as string);
    }
  }

  public reset() {
    this.annotations.clear();
  }

  private checkForDuplicates(modifiedAnnotations: ModifiedAnnotation[]) {
    const annotations = modifiedAnnotations.map((a) => a.processed);
    this.duplicateRule = new DuplicateRule(this.text, annotations);

    modifiedAnnotations.forEach((modifiedAnnotation) => {
      modifiedAnnotation.duplicates = this.duplicateRule.hasDuplicate(
        modifiedAnnotation.processed,
      );
    });
  }

  private createRulesSet(text: string) {
    this.text = text;
    this.annotationRuleSets = new AnnotationRuleSets(text);
  }

  private async applyRules(annotation: AnnotationItem) {
    const annotationObj = await this.annotationRuleSets.applyRules(annotation);

    if (!annotationObj) return null;

    this.annotations.set(annotation.id as unknown as string, annotationObj);

    return annotationObj;
  }

  public async debugRule(annotationId: AnnotationId) {
    const annotation = this.annotations.get(annotationId)!;
    const annotationObj = this.annotationRuleSets.runRules(
      annotation.original,
      true,
    );

    if (!annotationObj) return null;

    return annotationObj;
  }

  private async confirmAnnotationLocal(
    id: AnnotationId,
    confirm: ConfirmAnnotationType,
  ) {
    const ann = this.annotations.get(id)!;
    const processed =
      confirm === "modified"
        ? cloneDeep(ann.processed!)
        : cloneDeep(ann.original);

    ann.saving.value = true;
    ann.error.value = false;
    await this.updateAnnotation(processed).catch((e) => {
      console.error(e);
      ann.saving.value = false;
      ann.error.value = true;

      throw Error(e);
    });

    ann.isModified = false;
    ann.hasOverride = true;
    ann.processed = processed;
    return ann;
  }

  public async confirmAnnotation(id: string, confirm: ConfirmAnnotationType) {
    const annotation = await this.confirmAnnotationLocal(id, confirm);

    const oldIds = this.duplicateRule.updateAnnotation(annotation.processed);

    oldIds.forEach((annotation) => this.updateDuplicates(annotation));
    this.updateDuplicates(annotation.processed);

    return annotation;
  }

  public async deleteAnnotation(id: string) {
    const annotation = this.annotations.get(id)!;
    annotation.saving.value = true;
    annotation.error.value = false;

    await this.updateAnnotation(annotation.processed, true).catch((e) => {
      console.error(e);
      annotation.saving.value = false;
      annotation.error.value = true;

      throw Error(e);
    });
    this.annotations.delete(id);

    const oldIds = this.duplicateRule.removeAnnotation(annotation.processed);
    oldIds.forEach((ann) => this.updateDuplicates(ann));

    return annotation;
  }

  private updateAnnotation(annotation: RuleAnnotation, is_deleted = false) {
    const { start, end, type, id } = annotation;
    return this.annotationRepository.patchAnnotation(id, type!, {
      selection_start: start,
      selection_end: end,
      selection_length: end - start,
      is_deleted,
    });
  }

  private updateDuplicates(annotation: RuleAnnotation) {
    const original = this.annotations.get(annotation.id);
    if (original)
      original.duplicates = this.duplicateRule.hasDuplicate(annotation);
  }

  public async confirmAnnotations(confirm: Map<string, ConfirmAnnotationType>) {
    const promises: Array<Promise<ModifiedAnnotation>> = [];

    confirm.forEach((value, key) =>
      promises.push(this.confirmAnnotationLocal(key, value)),
    );

    await Promise.all(promises);

    this.checkForDuplicates(Array.from(this.annotations.values()));
  }

  public reviewDone() {
    return this.annotationRepository.reviewDone(this.id);
  }

  public needsAttention() {
    return this.annotationRepository.needsAttention(this.id);
  }
}
