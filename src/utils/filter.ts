import { computed, type Ref } from "vue";
import type { AnnotationMap, RuleAnnotation } from "../types/Annotation";

export const filterTypes = [
  "language",
  "typography",
  "orthography",
  "lexis",
  "morpho_syntactical",
  "handshift",
  "ltsa",
  "gtsa",
  "gts",
  "lts",
] as const;
export type FilterValue = (typeof filterTypes)[number];

const isAnnotationTypeFiltered = (selectedFilters: FilterValue[], annotation: RuleAnnotation) => {
  const type = (annotation?.type ?? "") as FilterValue;
  return selectedFilters.includes(type);
};

const filterAnnotations = (selectedFilters: FilterValue[], annotations: RuleAnnotation[]) => {
  if (selectedFilters.length === 0) return annotations;

  return annotations.filter((annotation) => isAnnotationTypeFiltered(selectedFilters, annotation));
};

const filterAnnotationsIds = (annotations: RuleAnnotation[], selectedFilters: FilterValue[]): string[] => {
  return filterAnnotations(selectedFilters, annotations).map((annotation) => annotation.id);
};

const filterAnnotationsById = (annotations: AnnotationMap, filteredAnnotationIds: string[]): RuleAnnotation[] => {
  return filteredAnnotationIds.map((id) => annotations.get(id) as RuleAnnotation).filter((a) => !!a);
};

const filterAnnotationIdsById = (annotationsIds: string[], filteredAnnotationIds: string[]): string[] =>
  annotationsIds.filter((id) => filteredAnnotationIds.includes(id));

export class FilterAnnotations {
  public static filterTypes = filterTypes;
  private readonly originalAnnotations: Ref<AnnotationMap>;
  private readonly processedAnnotationsMap: Ref<AnnotationMap>;
  private readonly modifiedAnnotationsMap: Ref<AnnotationMap>;
  private readonly selectedFilters: Ref<FilterValue[]>;
  private readonly showModified: Ref<boolean>;

  private readonly originalAnnotationsArray = computed(() => Array.from(this.originalAnnotations.value.values()));

  private readonly modifiedAnnotationsId = computed(() => Array.from(this.modifiedAnnotationsMap.value.keys()));
  private readonly filteredAnnotationIds = computed(() =>
    filterAnnotationsIds(this.originalAnnotationsArray.value, this.selectedFilters.value),
  );
  private readonly filteredModdifiedAnnotationIds = computed(() =>
    filterAnnotationIdsById(this.modifiedAnnotationsId.value, this.filteredAnnotationIds.value),
  );
  private readonly useFilteredIds = computed(() =>
    this.showModified.value ? this.filteredModdifiedAnnotationIds.value : this.filteredAnnotationIds.value,
  );

  readonly filteredDataAnnotations: Ref<RuleAnnotation[]> = computed(() =>
    filterAnnotationsById(this.originalAnnotations.value, this.useFilteredIds.value),
  );
  readonly filteredProcessedAnnotations: Ref<RuleAnnotation[]> = computed(() =>
    filterAnnotationsById(this.processedAnnotationsMap.value, this.useFilteredIds.value),
  );
  readonly filteredModifiedAnnotations: Ref<RuleAnnotation[]> = computed(() =>
    filterAnnotationsById(this.modifiedAnnotationsMap.value, this.useFilteredIds.value),
  );

  constructor(props: {
    originalAnnotations: Ref<AnnotationMap>;
    processedAnnotationsMap: Ref<AnnotationMap>;
    modifiedAnnotationsMap: Ref<AnnotationMap>;
    selectedFilters: Ref<FilterValue[]>;
    showModified: Ref<boolean>;
  }) {
    this.originalAnnotations = props.originalAnnotations;
    this.processedAnnotationsMap = props.processedAnnotationsMap;
    this.modifiedAnnotationsMap = props.modifiedAnnotationsMap;
    this.selectedFilters = props.selectedFilters;
    this.showModified = props.showModified;
  }

  getOriginalAnnotation = (annotationId: string): RuleAnnotation => {
    return this.originalAnnotations.value.get(annotationId) as RuleAnnotation;
  };
}
