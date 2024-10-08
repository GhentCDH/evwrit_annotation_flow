import type { RuleAnnotation } from "src/types/Annotation";
import {
  ref,
  onMounted,
  computed,
  watch,
  type ComputedRef,
  type Ref,
} from "vue";

const hasTypeFiltered = (
  selectedFilters: string[],
  annotation: RuleAnnotation,
) => {
  const type = annotation?.type ?? "";
  return selectedFilters.includes(type);
};

export class FilterAnnotations {
  public originalAnnotations: Ref<RuleAnnotation[]>;
  public filteredDataAnnotations: Ref<RuleAnnotation[]>;
  public filteredProcessedAnnotations: Ref<RuleAnnotation[]>;
  public filteredModifiedAnnotations: Ref<RuleAnnotation[]>;

  constructor(
    private readonly originalAnnotationsMap: Ref<Map<string, RuleAnnotation>>,
    private readonly modifiedAnnotationsMap: Ref<Map<string, RuleAnnotation>>,
    selectedFilters: Ref<string[]>,
  ) {
    this.originalAnnotations = computed(() =>
      Array.from(originalAnnotationsMap.value.values()),
    );
    this.filteredDataAnnotations = computed(() =>
      this.filterAnnotations(
        this.originalAnnotations.value,
        selectedFilters.value,
      ),
    );
    this.filteredProcessedAnnotations = computed(() =>
      this.filterAnnotations(
        this.originalAnnotations.value,
        selectedFilters.value,
      ),
    );
    this.filteredModifiedAnnotations = computed(() =>
      this.filterAnnotations(
        this.originalAnnotations.value,
        selectedFilters.value,
      ),
    );
  }

  public filterAnnotations(
    annotations: RuleAnnotation[],
    selectedFilters: string[],
  ) {
    if (showModified.value) {
      const modifiedAnnotations = Array.from(annotations.values()).filter(
        (annotation) => this.hasModifiedAnnotation(annotation.id),
      );
      if (selectedFilters.length === 0) return modifiedAnnotations;

      return modifiedAnnotations.filter((annotation: RuleAnnotation) =>
        hasTypeFiltered(selectedFilters, annotation),
      );
    } else {
      if (selectedFilters.length === 0) return annotations;

      return annotations.filter((annotation: RuleAnnotation) =>
        hasTypeFiltered(selectedFilters, annotation),
      );
    }
  }

  public getOriginalAnnotation(annotationId: string) {
    return this.originalAnnotationsMap.value.get(
      annotationId,
    ) as RuleAnnotation;
  }
  public hasModifiedAnnotation(annotationId: string) {
    return this.modifiedAnnotationsMap.value.has(annotationId);
  }
}
