import { computed, ref } from "vue";
import { cloneDeep } from "lodash-es";
import { AnnotationRepository } from "../data-access/annotationRepository";
import type { AnnotationType, ModifiedAnnotation, RuleAnnotation } from "../types/Annotation";
import { filterAnnotations } from "../utils/filter.utils";
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

  //#region define annotation computed
  public readonly text = ref<string>("");
  private readonly annotations = ref<Map<string, ModifiedAnnotation>>(new Map());

  private readonly showModified = ref(false);
  private readonly showOnlyDuplicates = ref(false);
  public readonly selectedFilters = ref([] as AnnotationType[]);

  private readonly annotationValues = computed(() => Array.from(this.annotations.value.values()));
  private readonly filteredAnnotations = computed(() =>
    filterAnnotations(
      this.selectedFilters.value,
      this.annotationValues.value,
      this.showModified.value,
      this.showOnlyDuplicates.value,
    ),
  );
  public readonly originalAnnotations = computed(() =>
    this.filteredAnnotations.value.map((annotation) => annotation.original),
  );
  public readonly processedAnnotations = computed(() =>
    this.filteredAnnotations.value.map((annotation) => annotation.processed),
  );
  public readonly modifiedAnnotations = computed(() =>
    this.filteredAnnotations.value.filter((annotation) => !!annotation.modified || annotation.duplicates.length > 1),
  );

  //#endregion

  public changeShowModified(value: boolean) {
    this.showModified.value = value;
  }

  public changeShowOnlyDuplicates(value: boolean) {
    this.showOnlyDuplicates.value = value;
  }

  async getAnnotation(id: string | number) {
    this.reset();
    try {
      const result = await this.annotationRepository.fetchAnnotation(id);
      const { text } = result;
      const annotations = result.annotations;

      this.createRulesSet(text);
      console.group("Load annotations for ", id);
      console.log("Totaal aantal annotaties", annotations.length, "textlengte", text.length);
      console.time(`process_${id}`);

      // TODO combine annotations original and modified from the backend!

      const annotationAppliedResults = annotations.map((annotation: any) => this.applyRules(annotation));

      this.checkForDuplicates(annotationAppliedResults);

      console.timeEnd(`process_${id}`);
      console.log("Total processed annotations", this.processedAnnotations.value.length);
      console.log("Total modified annotations", this.modifiedAnnotations.value.length);
      console.log("Total original annotations", this.originalAnnotations.value.length);
      console.groupEnd();
      return { text };
    } catch (err) {
      console.error(err);
      throw new Error(err as unknown as string);
    }
  }

  private reset() {
    this.text.value = "";
    this.annotations.value.clear();
  }

  private checkForDuplicates(modifiedAnnotations: ModifiedAnnotation[]) {
    const annotations = modifiedAnnotations.map((a) => a.processed);
    this.duplicateRule = new DuplicateRule(this.text.value, annotations);

    modifiedAnnotations.forEach((modifiedAnnotation) => {
      modifiedAnnotation.duplicates = this.duplicateRule.hasDuplicate(modifiedAnnotation.processed);
    });
  }

  private createRulesSet(text: string) {
    this.text.value = text;
    this.annotationRuleSets = new AnnotationRuleSets(text);
  }

  private applyRules(annotation: AnnotationItem) {
    const annotationObj = this.annotationRuleSets.applyRules(annotation);

    this.annotations.value.set(annotation.id as unknown as string, annotationObj);

    return annotationObj;
  }

  public processAnnotation({ end, start, id }: UpdateAnnotation) {
    const ann = this.annotations.value.get(id)!;
    const { processed } = ann;

    processed.end = end;
    processed.start = start;
  }

  public modifyAnnotation({ start, end, id }: UpdateAnnotation) {
    const ann = this.annotations.value.get(id)!;
    const { processed, modified } = ann;

    if (!modified) {
      ann.modified = cloneDeep(processed);
    }

    ann.modified!.end = end;
    ann.modified!.start = start;
  }

  private confirmAnnotationLocal(id: string, confirm: ConfirmAnnotationType) {
    const ann = this.annotations.value.get(id)!;

    if (confirm === "modified") {
      ann.processed = cloneDeep(ann.modified!);
    } else if (confirm === "original") {
      ann.processed = cloneDeep(ann.original);
    }

    ann.modified = null;
    ann.hasOverride = true;
    const oldIds = this.duplicateRule.updateAnnotation(ann.processed);

    oldIds.forEach((ann) => this.updateDuplicates(ann));
    this.updateDuplicates(ann.processed);
    return this.updateAnnotation(ann.processed);
  }

  public confirmAnnotation(id: string, confirm: ConfirmAnnotationType) {
    return this.confirmAnnotationLocal(id, confirm);
    //TODO create BACKEND request to confirm only one
  }

  public deleteAnnotation(id: string) {
    const original = this.annotations.value.get(id)!;
    this.annotations.value.delete(id);

    const oldIds = this.duplicateRule.removeAnnotation(original.processed);
    oldIds.forEach((ann) => this.updateDuplicates(ann));

    return this.updateAnnotation(original.processed, true);
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
    this.annotations.value.get(annotation.id)!.duplicates = this.duplicateRule.hasDuplicate(annotation);
  }

  public confirmAnnotations(confirm: Map<string, ConfirmAnnotationType>) {
    confirm.forEach((value, key) => {
      this.confirmAnnotationLocal(key, value);
    });

    //TODO create BACKEND request to confirm all
    console.groupEnd();
  }
}
